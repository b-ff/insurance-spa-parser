const DATE_FORMAT = 'dd.mm.yyyy hh:ii'

const START_BUTTON_CONTAINER_ID_PATTERN = /^filter-panel-\d{4,}_header-title-textEl$/
const PARCELS_LIST_SELECTOR = '#parcelsList-1980'
const URL_COLUMN_SELECTOR = '.x-grid-cell-gridcolumn-1988'
const SEND_DATE_COLUMN_SELECTOR = '.x-grid-cell-datecolumn-1992'

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
  constructor() {
    this.log('Parser initialized!')
    this.addStartButton()
  }

  private log(...args: any): void {
    if (console && console.log) {
      console.log('Parser: ', ...args)
    }
  }

  private addStartButton(): void {
    const button = document.createElement('button')
    const buttonContainer = getElementByIdPattern(document, START_BUTTON_CONTAINER_ID_PATTERN)

    button.innerHTML = 'Запустить сбор данных'
    button.style.marginLeft = '10px'
    button.style.cursor = 'pointer'
    button.onclick = (): void => { this.startParser() }

    buttonContainer.append(button)

    this.log(buttonContainer)
  }

  public startParser(): void {
    this.log('Parser started!')

    this.downloadFile(this.getFilesList().pop())
  }

  public getMessageTypes(): string[] {
    return []
  }

  public setMessageType(): void {}

  public getInsurers(): string[] {
    return []
  }

  public setInsurer(): void {}

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

  private getFilesList(): any[] {
    return Array.from(document.querySelector(PARCELS_LIST_SELECTOR).querySelectorAll('table'))
      .map((tableElement: HTMLElement): IFileData => {
        const urlCell = tableElement.querySelector(URL_COLUMN_SELECTOR)
        const dateCell = tableElement.querySelector(SEND_DATE_COLUMN_SELECTOR)

        const url = urlCell ? urlCell.querySelector('a').href : null
        const sendDate = dateCell ? this.getDateFromElement(dateCell.firstChild) : new Date()

        return {
          url,
          sendDate
        }
      })
      .sort((a: IFileData, b: IFileData): number => a.sendDate.getTime() - b.sendDate.getTime())
  }

  private downloadFile(file: IFileData): void {
    this.log('file download >>', file)
    if (file.url) {
      window.open(file.url, '_blank')
    }
  }
}

(window as any).parser = new Parser()
