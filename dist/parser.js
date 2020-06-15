!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,u=i.length;s<u;s++,o++)r[o]=i[s];return r},r=["Отчёт МО в МГФОМС","Отчёт МО в СМО"],o=/^filter-panel-\d{4,}_header-title-textEl$/,i=/^messageTypeCombo-\d{4,}-picker-listEl$/,s=/^messageTypeCombo-\d{4,}-trigger-picker$/,u=/^commonInsurersCombo-\d{4,}-picker-listEl$/,l=/^commonInsurersCombo-\d{4,}-trigger-picker$/,a=/^filter-panel-\d{4,}$/,c=/^parcelsList-\d{4,}-body$/,f=function(e,t,n){void 0===n&&(n="div");var r=e.querySelectorAll(n);return Array.from(r).find((function(e){return t.test(e.id)}))},g=function(){function e(){var e=this;this.timeoutIDs=[],this.isRunning=!1;var t=setInterval((function(){var n=f(document,o);if(n){e.addStartButton(n);var r=f(document,l),i=f(document,s);i.click(),setTimeout((function(){i.click(),r.click(),setTimeout((function(){r.click()}),500)}),500),clearInterval(t)}}),500);this.log("Parser initialized!")}return e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console&&console.log&&console.log.apply(console,n(["Parser: "],e))},e.prototype.addStartButton=function(e){var t=this,n=document.createElement("button");n.innerHTML="Запустить сбор данных",n.id="parser-start-button",n.style.marginLeft="10px",n.style.cursor="pointer",n.onclick=function(){t.isRunning?t.stopParser():t.startParser(),n.innerHTML=t.isRunning?"Остановить сбор данных":"Запустить сбор данных"},e.append(n),this.log("Added start button to container:",e)},e.prototype.startParser=function(){var e=this;this.log("Parser started!"),this.isRunning=!0,this.timeoutIDs=[];var t=this.getMessageTypes(),n=this.getInsurers();this.log("Loaded filter values:",{messageTypes:t,insurers:n}),this.log("Running a queue");var r=0;t.forEach((function(o,i){e.setMessageType(o),n.filter((function(t){var n=t.includes("МГФОМС");return"Отчёт МО в МГФОМС"===e.currentMessageType?n:!n})).forEach((function(s,u){var l=setTimeout((function(){e.log("Applying filter values:",{messageType:o,insurer:s}),e.setInsurer(s),e.getFilterSubmitButton().click();var r=setTimeout((function(){e.log("Getting files list");var r=e.getFilesList();r.length?(e.log("Found "+r.length+" files"),e.downloadFile(e.getFilesList().pop())):e.log("No files for selected filters");var o=i===t.length-1,s=u===n.length-1;o&&s&&alert("Загрузка файлов завершена!")}),5e3);e.timeoutIDs.push(r)}),7e3*r);e.timeoutIDs.push(l),r++}))}))},e.prototype.stopParser=function(){this.timeoutIDs.forEach((function(e){clearTimeout(e)})),this.isRunning=!1},e.prototype.getMessageTypeSuggestions=function(){return Array.from(f(document,i,"ul").childNodes)},e.prototype.getMessageTypes=function(){return this.getMessageTypeSuggestions().map((function(e){return e.textContent})).filter((function(e){return r.includes(e)}))},e.prototype.setMessageType=function(e){this.getMessageTypeSuggestions().find((function(t){return t.textContent===e})).click(),this.currentMessageType=e,this.log("Set message type filter to:",e)},e.prototype.getInsurersSuggestions=function(){return Array.from(f(document,u,"ul").childNodes)},e.prototype.getInsurers=function(){return this.getInsurersSuggestions().map((function(e){return e.textContent}))},e.prototype.setInsurer=function(e){this.getInsurersSuggestions().find((function(t){return t.textContent===e})).click(),this.log("Set insurer filter to:",e)},e.prototype.getFilterSubmitButton=function(){var e=f(document,a).querySelectorAll("a.x-btn");return e.length?e[0]:null},e.prototype.getDateFromElement=function(e){if(e){if(e.textContent)return t=e.textContent,n="dd.mm.yyyy hh:ii",r=t.replace(/[^a-zA-Z0-9]/g,"-"),o=n.toLowerCase().replace(/[^a-zA-Z0-9]/g,"-").split("-"),i=r.split("-"),s=o.indexOf("mm"),u=o.indexOf("dd"),l=o.indexOf("yyyy"),a=o.indexOf("hh"),c=o.indexOf("ii"),f=o.indexOf("ss"),g=new Date,p=l>-1?+i[l]:g.getFullYear(),d=s>-1?+i[s]:g.getMonth(),y=u>-1?+i[u]:g.getDate(),m=a>-1?+i[a]:g.getHours(),h=c>-1?+i[c]:g.getMinutes(),v=f>-1?+i[f]:g.getSeconds(),new Date(p,d,y,m,h,v);this.log("Empty Date Cell Text!",e)}else this.log("Date node not found!",e);var t,n,r,o,i,s,u,l,a,c,f,g,p,d,y,m,h,v;return null},e.prototype.getFilesList=function(){var e=this;return Array.from(f(document,c).querySelectorAll("table")).map((function(t){var n=t.querySelectorAll("td"),r=n[5],o=n[9],i=r?r.querySelector("a"):null;return{url:i?i.href:null,sendDate:o?e.getDateFromElement(o.firstChild):new Date}})).filter((function(e){return!!e.url})).sort((function(e,t){return e.sendDate.getTime()-t.sendDate.getTime()}))},e.prototype.downloadFile=function(e){this.log("file download >>",e),e.url&&window.open(e.url,"_blank")},e}();!function(e){e.parser=new g,e.getElementByIdPattern=f}(window)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkFMTE9XRURfTUVTU0FHRV9UWVBFUyIsIlNUQVJUX0JVVFRPTl9DT05UQUlORVJfSURfUEFUVEVSTiIsIk1FU1NBR0VfVFlQRVNfTElTVF9JRF9QQVRURVJOIiwiTUVTU0FHRV9UWVBFX0xJU1RfVE9HR0xFX0lEX1BBVFRFUk4iLCJJTlNVUkVSU19MSVNUX0lEX1BBVFRFUk4iLCJJTlNVUkVSU19MSVNUX1RPR0dMRV9JRF9QQVRURVJOIiwiRklMVEVSU19QQU5FTF9JRF9QQVRURVJOIiwiUEFSQ0VMU19MSVNUX0lEX1BBVFRFUk4iLCJnZXRFbGVtZW50QnlJZFBhdHRlcm4iLCJwYXJlbnQiLCJpZFBhdHRlcm4iLCJ0YWdOYW1lIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZmluZCIsImVsZW1lbnQiLCJ0ZXN0IiwiaWQiLCJ0aW1lb3V0SURzIiwiaXNSdW5uaW5nIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiYnV0dG9uQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJhZGRTdGFydEJ1dHRvbiIsImNsaWNrIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ0aGlzIiwibG9nIiwiY29uc29sZSIsImFyZ3MiLCJjb250YWluZXIiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiY3Vyc29yIiwib25jbGljayIsInN0b3BQYXJzZXIiLCJzdGFydFBhcnNlciIsImFwcGVuZCIsIm1lc3NhZ2VUeXBlcyIsImdldE1lc3NhZ2VUeXBlcyIsImluc3VyZXJzIiwiZ2V0SW5zdXJlcnMiLCJpbmNyZW1lbnQiLCJmb3JFYWNoIiwibWVzc2FnZVR5cGUiLCJtZXNzYWdlVHlwZUluZGV4Iiwic2V0TWVzc2FnZVR5cGUiLCJmaWx0ZXIiLCJpbnN1cmVyIiwiaXNNR0ZPTVNpbnN1cmVyIiwiaW5jbHVkZXMiLCJjdXJyZW50TWVzc2FnZVR5cGUiLCJpbnN1cmVySW5kZXgiLCJ0aW1lb3V0QSIsInNldEluc3VyZXIiLCJnZXRGaWx0ZXJTdWJtaXRCdXR0b24iLCJ0aW1lb3V0QiIsImZpbGVzTGlzdCIsImdldEZpbGVzTGlzdCIsImxlbmd0aCIsImRvd25sb2FkRmlsZSIsInBvcCIsImlzTGFzdE1lc3NhZ2VUeXBlIiwiaXNMYXN0SW5zdXJlciIsImFsZXJ0IiwicHVzaCIsInRpbWVvdXRJRCIsImNsZWFyVGltZW91dCIsImdldE1lc3NhZ2VUeXBlU3VnZ2VzdGlvbnMiLCJjaGlsZE5vZGVzIiwibWFwIiwidGV4dENvbnRlbnQiLCJnZXRJbnN1cmVyc1N1Z2dlc3Rpb25zIiwiYnV0dG9ucyIsImdldERhdGVGcm9tRWxlbWVudCIsIm5vZGUiLCJ0ZXh0IiwiZm9ybWF0Iiwibm9ybWFsaXplZCIsInJlcGxhY2UiLCJmb3JtYXRJdGVtcyIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJkYXRlSXRlbXMiLCJtb250aEluZGV4IiwiaW5kZXhPZiIsImRheUluZGV4IiwieWVhckluZGV4IiwiaG91ckluZGV4IiwibWludXRlc0luZGV4Iiwic2Vjb25kc0luZGV4IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsInRhYmxlRWxlbWVudCIsImNlbGxzIiwidXJsQ2VsbCIsImRhdGVDZWxsIiwibGluayIsInF1ZXJ5U2VsZWN0b3IiLCJ1cmwiLCJocmVmIiwic2VuZERhdGUiLCJmaXJzdENoaWxkIiwiZmlsZSIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJ3aW5kb3ciLCJvcGVuIiwicGFyc2VyIiwiUGFyc2VyIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0Jx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TixFQUFLSixJQUFLLFdBRzVCLEVBcE5BLElBc05BLFNBQUVTLEdBQ0FBLEVBQU9FLE9BQVMsSUFBSUMsRUFDcEJILEVBQU92SCxzQkFBd0JBLEVBRmpDLENBR0d1SCIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBNR0ZPTVMgPSAn0JzQk9Ck0J7QnNChJ1xuXG5jb25zdCBSRVBPUlRfSU5fTUdGT01TID0gJ9Ce0YLRh9GR0YIg0JzQniDQsiDQnNCT0KTQntCc0KEnXG5jb25zdCBSRVBPUlRfSU5fU01PID0gJ9Ce0YLRh9GR0YIg0JzQniDQsiDQodCc0J4nXG5cbmNvbnN0IEFMTE9XRURfTUVTU0FHRV9UWVBFUyA9IFtSRVBPUlRfSU5fTUdGT01TLCBSRVBPUlRfSU5fU01PXVxuXG5jb25zdCBTVEFSVF9CVVRUT05fSUQgPSAncGFyc2VyLXN0YXJ0LWJ1dHRvbidcblxuY29uc3QgREFURV9GT1JNQVQgPSAnZGQubW0ueXl5eSBoaDppaSdcblxuY29uc3QgU1RBUlRfQlVUVE9OX0NPTlRBSU5FUl9JRF9QQVRURVJOID0gL15maWx0ZXItcGFuZWwtXFxkezQsfV9oZWFkZXItdGl0bGUtdGV4dEVsJC9cbmNvbnN0IE1FU1NBR0VfVFlQRV9GSUVMRF9JRF9QQVRURVJOID0gL15tZXNzYWdlVHlwZUNvbWJvLVxcZHs0LH0taW5wdXRFbCQvXG5jb25zdCBNRVNTQUdFX1RZUEVTX0xJU1RfSURfUEFUVEVSTiA9IC9ebWVzc2FnZVR5cGVDb21iby1cXGR7NCx9LXBpY2tlci1saXN0RWwkL1xuY29uc3QgTUVTU0FHRV9UWVBFX0xJU1RfVE9HR0xFX0lEX1BBVFRFUk4gPSAvXm1lc3NhZ2VUeXBlQ29tYm8tXFxkezQsfS10cmlnZ2VyLXBpY2tlciQvXG5jb25zdCBJTlNVUkVSX0ZJRUxEX0lEX1BBVFRFUk4gPSAvXmNvbW1vbkluc3VyZXJzQ29tYm8tXFxkezQsfS1pbnB1dEVsJC9cbmNvbnN0IElOU1VSRVJTX0xJU1RfSURfUEFUVEVSTiA9IC9eY29tbW9uSW5zdXJlcnNDb21iby1cXGR7NCx9LXBpY2tlci1saXN0RWwkL1xuY29uc3QgSU5TVVJFUlNfTElTVF9UT0dHTEVfSURfUEFUVEVSTiA9IC9eY29tbW9uSW5zdXJlcnNDb21iby1cXGR7NCx9LXRyaWdnZXItcGlja2VyJC9cbmNvbnN0IEZJTFRFUlNfUEFORUxfSURfUEFUVEVSTiA9IC9eZmlsdGVyLXBhbmVsLVxcZHs0LH0kL1xuY29uc3QgUEFSQ0VMU19MSVNUX0lEX1BBVFRFUk4gPSAvXnBhcmNlbHNMaXN0LVxcZHs0LH0tYm9keSQvXG5cbmNvbnN0IEZJTEVfTElOS19DRUxMX0lOREVYID0gNVxuY29uc3QgRklMRV9TRU5EX0RBVEVfQ0VMTF9JTkRFWCA9IDlcblxuY29uc3QgRklMVEVSU19DSEFOR0VfSU5URVJWQUwgPSAyMDAwXG5jb25zdCBQQVJDRUxTX0xPQURfVElNRSA9IDUwMDBcblxuaW50ZXJmYWNlIElGaWxlRGF0YSB7XG4gIHNlbmREYXRlOiBEYXRlLFxuICB1cmw6IHN0cmluZ1xufVxuXG5jb25zdCBnZXRFbGVtZW50QnlJZFBhdHRlcm4gPSAocGFyZW50OiBIVE1MRWxlbWVudCB8IERvY3VtZW50LCBpZFBhdHRlcm46IFJlZ0V4cCwgdGFnTmFtZTogc3RyaW5nID0gJ2RpdicpOiBFbGVtZW50ID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKVxuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50cykuZmluZCgoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4gPT4gaWRQYXR0ZXJuLnRlc3QoZWxlbWVudC5pZCkpXG59XG5cbmNvbnN0IHN0cmluZ1RvRGF0ZUJ5Rm9ybWF0ID0gKHRleHQ6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBEYXRlID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZCAgICAgID0gdGV4dC5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJy0nKVxuICBjb25zdCBub3JtYWxpemVkRm9ybWF0ID0gZm9ybWF0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTldL2csICctJylcbiAgY29uc3QgZm9ybWF0SXRlbXMgICAgID0gbm9ybWFsaXplZEZvcm1hdC5zcGxpdCgnLScpXG4gIGNvbnN0IGRhdGVJdGVtcyAgICAgICA9IG5vcm1hbGl6ZWQuc3BsaXQoJy0nKVxuXG4gIGNvbnN0IG1vbnRoSW5kZXggID0gZm9ybWF0SXRlbXMuaW5kZXhPZignbW0nKVxuICBjb25zdCBkYXlJbmRleCAgICA9IGZvcm1hdEl0ZW1zLmluZGV4T2YoJ2RkJylcbiAgY29uc3QgeWVhckluZGV4ICAgPSBmb3JtYXRJdGVtcy5pbmRleE9mKCd5eXl5JylcbiAgY29uc3QgaG91ckluZGV4ICAgICA9IGZvcm1hdEl0ZW1zLmluZGV4T2YoJ2hoJylcbiAgY29uc3QgbWludXRlc0luZGV4ICA9IGZvcm1hdEl0ZW1zLmluZGV4T2YoJ2lpJylcbiAgY29uc3Qgc2Vjb25kc0luZGV4ICA9IGZvcm1hdEl0ZW1zLmluZGV4T2YoJ3NzJylcblxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcblxuICBjb25zdCB5ZWFyID0geWVhckluZGV4ID4gLTEgPyArZGF0ZUl0ZW1zW3llYXJJbmRleF0gOiB0b2RheS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG1vbnRoID0gbW9udGhJbmRleCA+IC0xID8gK2RhdGVJdGVtc1ttb250aEluZGV4XSA6IHRvZGF5LmdldE1vbnRoKClcbiAgY29uc3QgZGF5ID0gZGF5SW5kZXggPiAtMSA/ICtkYXRlSXRlbXNbZGF5SW5kZXhdIDogdG9kYXkuZ2V0RGF0ZSgpXG5cbiAgY29uc3QgaG91ciA9IGhvdXJJbmRleCA+IC0xID8gK2RhdGVJdGVtc1tob3VySW5kZXhdIDogdG9kYXkuZ2V0SG91cnMoKVxuICBjb25zdCBtaW51dGUgPSBtaW51dGVzSW5kZXggPiAtMSA/ICtkYXRlSXRlbXNbbWludXRlc0luZGV4XSA6IHRvZGF5LmdldE1pbnV0ZXMoKVxuICBjb25zdCBzZWNvbmQgPSBzZWNvbmRzSW5kZXggPiAtMSA/ICtkYXRlSXRlbXNbc2Vjb25kc0luZGV4XSA6IHRvZGF5LmdldFNlY29uZHMoKVxuXG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZClcbn1cblxuY2xhc3MgUGFyc2VyIHtcbiAgcHJpdmF0ZSB0aW1lb3V0SURzOiBhbnlbXSA9IFtdXG4gIHByaXZhdGUgaXNSdW5uaW5nOiBib29sZWFuID0gZmFsc2VcbiAgcHJpdmF0ZSBjdXJyZW50TWVzc2FnZVR5cGU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBnZXRFbGVtZW50QnlJZFBhdHRlcm4oZG9jdW1lbnQsIFNUQVJUX0JVVFRPTl9DT05UQUlORVJfSURfUEFUVEVSTilcblxuICAgICAgaWYgKGJ1dHRvbkNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmFkZFN0YXJ0QnV0dG9uKGJ1dHRvbkNvbnRhaW5lcilcblxuICAgICAgICBjb25zdCBpbnN1cmVyc0xpc3RUb2dnbGUgPSBnZXRFbGVtZW50QnlJZFBhdHRlcm4oZG9jdW1lbnQsIElOU1VSRVJTX0xJU1RfVE9HR0xFX0lEX1BBVFRFUk4pIGFzIEhUTUxFbGVtZW50XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VUeXBlTGlzdFRvZ2dsZSA9IGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgTUVTU0FHRV9UWVBFX0xJU1RfVE9HR0xFX0lEX1BBVFRFUk4pIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgbWVzc2FnZVR5cGVMaXN0VG9nZ2xlLmNsaWNrKClcblxuICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICBtZXNzYWdlVHlwZUxpc3RUb2dnbGUuY2xpY2soKVxuICAgICAgICAgIGluc3VyZXJzTGlzdFRvZ2dsZS5jbGljaygpXG4gICAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7IGluc3VyZXJzTGlzdFRvZ2dsZS5jbGljaygpIH0sIDUwMClcbiAgICAgICAgfSwgNTAwKVxuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgICAgIH1cbiAgICB9LCA1MDApXG5cblxuICAgIHRoaXMubG9nKCdQYXJzZXIgaW5pdGlhbGl6ZWQhJylcbiAgfVxuXG4gIHByaXZhdGUgbG9nKC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGFyc2VyOiAnLCAuLi5hcmdzKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU3RhcnRCdXR0b24oY29udGFpbmVyOiBFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRUZXh0ID0gJ9CX0LDQv9GD0YHRgtC40YLRjCDRgdCx0L7RgCDQtNCw0L3QvdGL0YUnXG4gICAgY29uc3Qgc3RvcFRleHQgPSAn0J7RgdGC0LDQvdC+0LLQuNGC0Ywg0YHQsdC+0YAg0LTQsNC90L3Ri9GFJ1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBidXR0b24uaW5uZXJIVE1MID0gc3RhcnRUZXh0XG4gICAgYnV0dG9uLmlkID0gU1RBUlRfQlVUVE9OX0lEXG4gICAgYnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTBweCdcbiAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wUGFyc2VyKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnRQYXJzZXIoKVxuICAgICAgfVxuXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gdGhpcy5pc1J1bm5pbmcgPyBzdG9wVGV4dCA6IHN0YXJ0VGV4dFxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKVxuXG4gICAgdGhpcy5sb2coJ0FkZGVkIHN0YXJ0IGJ1dHRvbiB0byBjb250YWluZXI6JywgY29udGFpbmVyKVxuICB9XG5cbiAgcHVibGljIHN0YXJ0UGFyc2VyKCk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdQYXJzZXIgc3RhcnRlZCEnKVxuICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZVxuICAgIHRoaXMudGltZW91dElEcyA9IFtdXG5cbiAgICBjb25zdCBtZXNzYWdlVHlwZXMgPSB0aGlzLmdldE1lc3NhZ2VUeXBlcygpXG4gICAgY29uc3QgaW5zdXJlcnMgPSB0aGlzLmdldEluc3VyZXJzKClcblxuICAgIHRoaXMubG9nKCdMb2FkZWQgZmlsdGVyIHZhbHVlczonLCB7IG1lc3NhZ2VUeXBlcywgaW5zdXJlcnMgfSlcbiAgICB0aGlzLmxvZygnUnVubmluZyBhIHF1ZXVlJylcblxuICAgIGxldCBpbmNyZW1lbnQgPSAwXG5cbiAgICBtZXNzYWdlVHlwZXMuZm9yRWFjaCgobWVzc2FnZVR5cGU6IHN0cmluZywgbWVzc2FnZVR5cGVJbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLnNldE1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKVxuXG4gICAgICBjb25zdCBmaWx0ZXJlZEluc3VyZXJzID0gaW5zdXJlcnMuZmlsdGVyKChpbnN1cmVyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3QgaXNNR0ZPTVNpbnN1cmVyID0gaW5zdXJlci5pbmNsdWRlcyhNR0ZPTVMpXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNZXNzYWdlVHlwZSA9PT0gUkVQT1JUX0lOX01HRk9NUyA/IGlzTUdGT01TaW5zdXJlciA6ICFpc01HRk9NU2luc3VyZXJcbiAgICAgIH0pXG5cbiAgICAgIGZpbHRlcmVkSW5zdXJlcnMuZm9yRWFjaCgoaW5zdXJlcjogc3RyaW5nLCBpbnN1cmVySW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCB0aW1lb3V0QSA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMubG9nKCdBcHBseWluZyBmaWx0ZXIgdmFsdWVzOicsIHttZXNzYWdlVHlwZSwgaW5zdXJlcn0pXG4gICAgICAgICAgdGhpcy5zZXRJbnN1cmVyKGluc3VyZXIpXG4gICAgICAgICAgdGhpcy5nZXRGaWx0ZXJTdWJtaXRCdXR0b24oKS5jbGljaygpXG5cbiAgICAgICAgICBjb25zdCB0aW1lb3V0QiA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2coJ0dldHRpbmcgZmlsZXMgbGlzdCcpXG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVzTGlzdCA9IHRoaXMuZ2V0RmlsZXNMaXN0KClcblxuICAgICAgICAgICAgaWYgKGZpbGVzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2coYEZvdW5kICR7ZmlsZXNMaXN0Lmxlbmd0aH0gZmlsZXNgKVxuICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSh0aGlzLmdldEZpbGVzTGlzdCgpLnBvcCgpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2coYE5vIGZpbGVzIGZvciBzZWxlY3RlZCBmaWx0ZXJzYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNMYXN0TWVzc2FnZVR5cGUgPSBtZXNzYWdlVHlwZUluZGV4ID09PSBtZXNzYWdlVHlwZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgY29uc3QgaXNMYXN0SW5zdXJlciA9IGluc3VyZXJJbmRleCA9PT0gaW5zdXJlcnMubGVuZ3RoIC0gMVxuXG4gICAgICAgICAgICBpZiAoaXNMYXN0TWVzc2FnZVR5cGUgJiYgaXNMYXN0SW5zdXJlcikge1xuICAgICAgICAgICAgICBhbGVydCgn0JfQsNCz0YDRg9C30LrQsCDRhNCw0LnQu9C+0LIg0LfQsNCy0LXRgNGI0LXQvdCwIScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgUEFSQ0VMU19MT0FEX1RJTUUpXG5cbiAgICAgICAgICB0aGlzLnRpbWVvdXRJRHMucHVzaCh0aW1lb3V0QilcbiAgICAgICAgfSwgaW5jcmVtZW50ICogKFBBUkNFTFNfTE9BRF9USU1FICsgRklMVEVSU19DSEFOR0VfSU5URVJWQUwpKVxuICAgICAgICB0aGlzLnRpbWVvdXRJRHMucHVzaCh0aW1lb3V0QSlcblxuICAgICAgICBpbmNyZW1lbnQrK1xuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cblxuICBwdWJsaWMgc3RvcFBhcnNlcigpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVvdXRJRHMuZm9yRWFjaCgodGltZW91dElEOiBudW1iZXIpOiB2b2lkID0+IHsgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCkgfSlcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlXG4gIH1cblxuICBwcml2YXRlIGdldE1lc3NhZ2VUeXBlU3VnZ2VzdGlvbnMoKTogQ2hpbGROb2RlW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgTUVTU0FHRV9UWVBFU19MSVNUX0lEX1BBVFRFUk4sICd1bCcpLmNoaWxkTm9kZXMpXG4gIH1cblxuICBwdWJsaWMgZ2V0TWVzc2FnZVR5cGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNZXNzYWdlVHlwZVN1Z2dlc3Rpb25zKClcbiAgICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQpOiBzdHJpbmcgPT4gZWxlbWVudC50ZXh0Q29udGVudClcbiAgICAgIC5maWx0ZXIoKG1lc3NhZ2VUeXBlOiBzdHJpbmcpOiBib29sZWFuID0+IEFMTE9XRURfTUVTU0FHRV9UWVBFUy5pbmNsdWRlcyhtZXNzYWdlVHlwZSkpXG4gIH1cblxuICBwdWJsaWMgc2V0TWVzc2FnZVR5cGUobWVzc2FnZVR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRNZXNzYWdlVHlwZVN1Z2dlc3Rpb25zKClcbiAgICBjb25zdCBtYXRjaGluZ1N1Z2dlc3Rpb24gPSBzdWdnZXN0aW9ucy5maW5kKChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiBlbGVtZW50LnRleHRDb250ZW50ID09PSBtZXNzYWdlVHlwZSkgYXMgSFRNTEVsZW1lbnRcblxuICAgIG1hdGNoaW5nU3VnZ2VzdGlvbi5jbGljaygpXG5cbiAgICB0aGlzLmN1cnJlbnRNZXNzYWdlVHlwZSA9IG1lc3NhZ2VUeXBlXG5cbiAgICB0aGlzLmxvZygnU2V0IG1lc3NhZ2UgdHlwZSBmaWx0ZXIgdG86JywgbWVzc2FnZVR5cGUpXG4gIH1cblxuICBwcml2YXRlIGdldEluc3VyZXJzU3VnZ2VzdGlvbnMoKTogQ2hpbGROb2RlW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgSU5TVVJFUlNfTElTVF9JRF9QQVRURVJOLCAndWwnKS5jaGlsZE5vZGVzKVxuICB9XG5cbiAgcHVibGljIGdldEluc3VyZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN1cmVyc1N1Z2dlc3Rpb25zKClcbiAgICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQpOiBzdHJpbmcgPT4gZWxlbWVudC50ZXh0Q29udGVudClcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnN1cmVyKGluc3VyZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRJbnN1cmVyc1N1Z2dlc3Rpb25zKClcbiAgICBjb25zdCBtYXRjaGluZ1N1Z2dlc3Rpb24gPSBzdWdnZXN0aW9ucy5maW5kKChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiBlbGVtZW50LnRleHRDb250ZW50ID09PSBpbnN1cmVyKSBhcyBIVE1MRWxlbWVudFxuXG4gICAgbWF0Y2hpbmdTdWdnZXN0aW9uLmNsaWNrKClcbiAgICB0aGlzLmxvZygnU2V0IGluc3VyZXIgZmlsdGVyIHRvOicsIGluc3VyZXIpXG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyU3VibWl0QnV0dG9uKCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgY29uc3QgZmlsdGVyc1BhbmVsID0gZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuKGRvY3VtZW50LCBGSUxURVJTX1BBTkVMX0lEX1BBVFRFUk4pIGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3QgYnV0dG9ucyA9IGZpbHRlcnNQYW5lbC5xdWVyeVNlbGVjdG9yQWxsKCdhLngtYnRuJylcblxuICAgIGlmIChidXR0b25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGJ1dHRvbnNbMF0gYXMgSFRNTEVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldERhdGVGcm9tRWxlbWVudChub2RlOiBOb2RlKTogRGF0ZSB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0RhdGVCeUZvcm1hdChub2RlLnRleHRDb250ZW50LCBEQVRFX0ZPUk1BVClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nKCdFbXB0eSBEYXRlIENlbGwgVGV4dCEnLCBub2RlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZygnRGF0ZSBub2RlIG5vdCBmb3VuZCEnLCBub2RlKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsZXNMaXN0KCk6IGFueVtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShnZXRFbGVtZW50QnlJZFBhdHRlcm4oZG9jdW1lbnQsIFBBUkNFTFNfTElTVF9JRF9QQVRURVJOKS5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZScpKVxuICAgICAgLm1hcCgodGFibGVFbGVtZW50OiBIVE1MRWxlbWVudCk6IElGaWxlRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGFibGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylcbiAgICAgICAgY29uc3QgdXJsQ2VsbCA9IGNlbGxzW0ZJTEVfTElOS19DRUxMX0lOREVYXVxuICAgICAgICBjb25zdCBkYXRlQ2VsbCA9IGNlbGxzW0ZJTEVfU0VORF9EQVRFX0NFTExfSU5ERVhdXG4gICAgICAgIGNvbnN0IGxpbmsgPSB1cmxDZWxsID8gdXJsQ2VsbC5xdWVyeVNlbGVjdG9yKCdhJykgOiBudWxsXG5cbiAgICAgICAgY29uc3QgdXJsID0gbGluayA/IGxpbmsuaHJlZiA6IG51bGxcbiAgICAgICAgY29uc3Qgc2VuZERhdGUgPSBkYXRlQ2VsbCA/IHRoaXMuZ2V0RGF0ZUZyb21FbGVtZW50KGRhdGVDZWxsLmZpcnN0Q2hpbGQpIDogbmV3IERhdGUoKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHNlbmREYXRlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChmaWxlOiBJRmlsZURhdGEpOiBib29sZWFuID0+ICEhZmlsZS51cmwpXG4gICAgICAuc29ydCgoYTogSUZpbGVEYXRhLCBiOiBJRmlsZURhdGEpOiBudW1iZXIgPT4gYS5zZW5kRGF0ZS5nZXRUaW1lKCkgLSBiLnNlbmREYXRlLmdldFRpbWUoKSlcbiAgfVxuXG4gIHByaXZhdGUgZG93bmxvYWRGaWxlKGZpbGU6IElGaWxlRGF0YSk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdmaWxlIGRvd25sb2FkID4+JywgZmlsZSlcbiAgICBpZiAoZmlsZS51cmwpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGZpbGUudXJsLCAnX2JsYW5rJylcbiAgICB9XG4gIH1cbn1cblxuKCh3aW5kb3c6IGFueSk6IHZvaWQgPT4ge1xuICB3aW5kb3cucGFyc2VyID0gbmV3IFBhcnNlcigpXG4gIHdpbmRvdy5nZXRFbGVtZW50QnlJZFBhdHRlcm4gPSBnZXRFbGVtZW50QnlJZFBhdHRlcm5cbn0pKHdpbmRvdylcbiJdLCJzb3VyY2VSb290IjoiIn0=