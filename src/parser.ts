const MGFOMS = 'МГФОМС'

const REPORT_IN_MGFOMS = 'Отчёт МО в МГФОМС'
const REPORT_IN_SMO = 'Отчёт МО в СМО'

/**
 * Данные параметры инициированы, как решение проблемы от 21.01.2021:
 * После переименования компании АО "Страховая группа "Спасские ворота-М" в
 * 2884 - МГФОМС (за АО "Страховая группа "Спасские ворота-М")
 * она не участвовала в переборе отчётов МО в СМО
 **/

const PASS_ALL_TO_SMO = true
const PASS_ALL_TO_MGFOMS = false

const ALLOWED_MESSAGE_TYPES = [REPORT_IN_MGFOMS, REPORT_IN_SMO]

const START_BUTTON_ID = 'parser-start-button'

const DATE_FORMAT = 'dd.mm.yyyy hh:ii'

const START_BUTTON_CONTAINER_ID_PATTERN = /^filter-panel-\d{4,}_header-title-textEl$/
const MESSAGE_TYPE_FIELD_ID_PATTERN = /^messageTypeCombo-\d{4,}-inputEl$/
const MESSAGE_TYPES_LIST_ID_PATTERN = /^messageTypeCombo-\d{4,}-picker-listEl$/
const MESSAGE_TYPE_LIST_TOGGLE_ID_PATTERN = /^messageTypeCombo-\d{4,}-trigger-picker$/
const INSURER_FIELD_ID_PATTERN = /^commonInsurersCombo-\d{4,}-inputEl$/
const INSURERS_LIST_ID_PATTERN = /^commonInsurersCombo-\d{4,}-picker-listEl$/
const INSURERS_LIST_TOGGLE_ID_PATTERN = /^commonInsurersCombo-\d{4,}-trigger-picker$/
const FILTERS_PANEL_ID_PATTERN = /^filter-panel-\d{4,}$/
const PARCELS_LIST_ID_PATTERN = /^parcelsList-\d{4,}-body$/

const FILE_LINK_CELL_INDEX = 5
const FILE_SEND_DATE_CELL_INDEX = 9

const FILTERS_CHANGE_INTERVAL = 2000
const PARCELS_LOAD_TIME = 5000

interface IFileData {
  sendDate: Date,
  url: string
}

const getElementByIdPattern = (parent: HTMLElement | Document, idPattern: RegExp, tagName: string = 'div'): Element => {
  const elements = parent.querySelectorAll(tagName)
  return Array.from(elements).find((element: Element): boolean => idPattern.test(element.id))
}

const stringToDateByFormat = (text: string, format: string): Date => {
  const normalized      = text.replace(/[^a-zA-Z0-9]/g, '-')
  const normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')
  const formatItems     = normalizedFormat.split('-')
  const dateItems       = normalized.split('-')

  const monthIndex  = formatItems.indexOf('mm')
  const dayIndex    = formatItems.indexOf('dd')
  const yearIndex   = formatItems.indexOf('yyyy')
  const hourIndex     = formatItems.indexOf('hh')
  const minutesIndex  = formatItems.indexOf('ii')
  const secondsIndex  = formatItems.indexOf('ss')

  const today = new Date()

  const year = yearIndex > -1 ? +dateItems[yearIndex] : today.getFullYear()
  const month = monthIndex > -1 ? +dateItems[monthIndex] : today.getMonth()
  const day = dayIndex > -1 ? +dateItems[dayIndex] : today.getDate()

  const hour = hourIndex > -1 ? +dateItems[hourIndex] : today.getHours()
  const minute = minutesIndex > -1 ? +dateItems[minutesIndex] : today.getMinutes()
  const second = secondsIndex > -1 ? +dateItems[secondsIndex] : today.getSeconds()

  return new Date(year, month, day, hour, minute, second)
}

class Parser {
  private timeoutIDs: any[] = []
  private isRunning: boolean = false

  constructor() {
    const intervalId = setInterval((): void => {
      const buttonContainer = getElementByIdPattern(document, START_BUTTON_CONTAINER_ID_PATTERN)

      if (buttonContainer) {
        this.addStartButton(buttonContainer)

        const insurersListToggle = getElementByIdPattern(document, INSURERS_LIST_TOGGLE_ID_PATTERN) as HTMLElement
        const messageTypeListToggle = getElementByIdPattern(document, MESSAGE_TYPE_LIST_TOGGLE_ID_PATTERN) as HTMLElement

        messageTypeListToggle.click()

        setTimeout((): void => {
          messageTypeListToggle.click()
          insurersListToggle.click()
          setTimeout((): void => { insurersListToggle.click() }, 500)
        }, 500)

        clearInterval(intervalId)
      }
    }, 500)


    this.log('Parser initialized!')
  }

  private log(...args: any): void {
    if (console && console.log) {
      console.log('Parser: ', ...args)
    }
  }

  private addStartButton(container: Element): void {
    const startText = 'Запустить сбор данных'
    const stopText = 'Остановить сбор данных'
    const button = document.createElement('button')

    button.innerHTML = startText
    button.id = START_BUTTON_ID
    button.style.marginLeft = '10px'
    button.style.cursor = 'pointer'
    button.onclick = (): void => {
      if (this.isRunning) {
        this.stopParser()
      } else {
        this.startParser()
      }

      button.innerHTML = this.isRunning ? stopText : startText
    }

    container.append(button)

    this.log('Added start button to container:', container)
  }

  public startParser(): void {
    this.log('Parser started!')
    this.isRunning = true
    this.timeoutIDs = []

    const messageTypes = this.getMessageTypes()
    const insurers = this.getInsurers()

    this.log('Loaded filter values:', { messageTypes, insurers })
    this.log('Running a queue')

    let increment = 0

    messageTypes.forEach((messageType: string, messageTypeIndex: number): void => {
      this.log('Checking message type for MGFOMS', messageType === REPORT_IN_MGFOMS)

      const filteredInsurers = insurers.filter((insurer: string): boolean => {
        const isMGFOMSinsurer = insurer.toLocaleLowerCase().includes(MGFOMS.toLocaleLowerCase())
        return (messageType === REPORT_IN_MGFOMS) ? (PASS_ALL_TO_MGFOMS || isMGFOMSinsurer) : (PASS_ALL_TO_SMO || !isMGFOMSinsurer)
      })

      this.log('Filtered insurers according to message type', filteredInsurers)

      filteredInsurers.forEach((insurer: string, insurerIndex: number): void => {
        const timeoutA = setTimeout((): void => {
          this.log('Applying filter values:', {messageType, insurer})
          this.setMessageType(messageType)
          this.setInsurer(insurer)
          this.getFilterSubmitButton().click()

          const timeoutB = setTimeout((): void => {
            this.log('Getting files list')

            const filesList = this.getFilesList()

            if (filesList.length) {
              this.log(`Found ${filesList.length} files`)
              this.downloadFile(this.getFilesList().pop())
            } else {
              this.log(`No files for selected filters`)
            }

            const isLastMessageType = messageTypeIndex === messageTypes.length - 1
            const isLastInsurer = insurerIndex === filteredInsurers.length - 1

            if (isLastMessageType && isLastInsurer) {
              alert('Загрузка файлов завершена!')
            }
          }, PARCELS_LOAD_TIME)

          this.timeoutIDs.push(timeoutB)
        }, increment * (PARCELS_LOAD_TIME + FILTERS_CHANGE_INTERVAL))
        this.timeoutIDs.push(timeoutA)

        increment++
      })
    })

  }

  public stopParser(): void {
    this.timeoutIDs.forEach((timeoutID: number): void => { clearTimeout(timeoutID) })
    this.isRunning = false
  }

  private getMessageTypeSuggestions(): ChildNode[] {
    return Array.from(getElementByIdPattern(document, MESSAGE_TYPES_LIST_ID_PATTERN, 'ul').childNodes)
  }

  public getMessageTypes(): string[] {
    return this.getMessageTypeSuggestions()
      .map((element: Element): string => element.textContent)
      .filter((messageType: string): boolean => ALLOWED_MESSAGE_TYPES.includes(messageType))
  }

  public setMessageType(messageType: string): void {
    const suggestions = this.getMessageTypeSuggestions()
    const matchingSuggestion = suggestions.find((element: Element): boolean => element.textContent === messageType) as HTMLElement

    matchingSuggestion.click()

    this.log('Set message type filter to:', messageType)
  }

  private getInsurersSuggestions(): ChildNode[] {
    return Array.from(getElementByIdPattern(document, INSURERS_LIST_ID_PATTERN, 'ul').childNodes)
  }

  public getInsurers(): string[] {
    return this.getInsurersSuggestions()
      .map((element: Element): string => element.textContent)
  }

  public setInsurer(insurer: string): void {
    const suggestions = this.getInsurersSuggestions()
    const matchingSuggestion = suggestions.find((element: Element): boolean => element.textContent === insurer) as HTMLElement

    matchingSuggestion.click()
    this.log('Set insurer filter to:', insurer)
  }

  public getFilterSubmitButton(): HTMLElement | null {
    const filtersPanel = getElementByIdPattern(document, FILTERS_PANEL_ID_PATTERN) as HTMLElement
    const buttons = filtersPanel.querySelectorAll('a.x-btn')

    if (buttons.length) {
      return buttons[0] as HTMLElement
    } else {
      return null
    }
  }

  private getDateFromElement(node: Node): Date {
    if (node) {
      if (node.textContent) {
        return stringToDateByFormat(node.textContent, DATE_FORMAT)
      } else {
        this.log('Empty Date Cell Text!', node)
      }
    } else {
      this.log('Date node not found!', node)
    }

    return null
  }

  public getFilesList(): any[] {
    return Array.from(getElementByIdPattern(document, PARCELS_LIST_ID_PATTERN).querySelectorAll('table'))
      .map((tableElement: HTMLElement): IFileData => {
        const cells = tableElement.querySelectorAll('td')
        const urlCell = Array.from(cells).find((cell: HTMLElement) => cell.querySelector('a'))
        const dateCell = cells[FILE_SEND_DATE_CELL_INDEX]
        const link = urlCell ? urlCell.querySelector('a') : null

        const url = link ? link.href : null
        const sendDate = dateCell ? this.getDateFromElement(dateCell.firstChild) : new Date()

        return {
          url,
          sendDate
        }
      })
      .filter((file: IFileData): boolean => !!file.url)
      .sort((a: IFileData, b: IFileData): number => a.sendDate.getTime() - b.sendDate.getTime())
  }

  private downloadFile(file: IFileData): void {
    this.log('file download >>', file)
    if (file.url) {
      window.open(file.url, '_blank')
    }
  }
}

((window: any): void => {
  window.parser = new Parser()
  window.getElementByIdPattern = getElementByIdPattern
})(window)
