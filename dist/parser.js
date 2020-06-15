!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,u=i.length;s<u;s++,o++)r[o]=i[s];return r},r=["Отчёт МО в МГФОМС","Отчёт МО в СМО"],o=/^filter-panel-\d{4,}_header-title-textEl$/,i=/^messageTypeCombo-\d{4,}-picker-listEl$/,s=/^messageTypeCombo-\d{4,}-trigger-picker$/,u=/^commonInsurersCombo-\d{4,}-picker-listEl$/,l=/^commonInsurersCombo-\d{4,}-trigger-picker$/,a=/^filter-panel-\d{4,}$/,c=/^parcelsList-\d{4,}-body$/,f=function(e,t,n){void 0===n&&(n="div");var r=e.querySelectorAll(n);return Array.from(r).find((function(e){return t.test(e.id)}))},g=function(){function e(){var e=this;this.timeoutIDs=[],this.isRunning=!1;var t=setInterval((function(){var n=f(document,o);if(n){e.addStartButton(n);var r=f(document,l),i=f(document,s);i.click(),setTimeout((function(){i.click(),r.click(),setTimeout((function(){r.click()}),500)}),500),clearInterval(t)}}),500);this.log("Parser initialized!")}return e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console&&console.log&&console.log.apply(console,n(["Parser: "],e))},e.prototype.addStartButton=function(e){var t=this,n=document.createElement("button");n.innerHTML="Запустить сбор данных",n.id="parser-start-button",n.style.marginLeft="10px",n.style.cursor="pointer",n.onclick=function(){t.isRunning?t.stopParser():t.startParser(),n.innerHTML=t.isRunning?"Остановить сбор данных":"Запустить сбор данных"},e.append(n),this.log("Added start button to container:",e)},e.prototype.startParser=function(){var e=this;this.log("Parser started!"),this.isRunning=!0,this.timeoutIDs=[];var t=this.getMessageTypes(),n=this.getInsurers();this.log("Loaded filter values:",{messageTypes:t,insurers:n}),this.log("Running a queue");var r=0;t.forEach((function(o,i){e.setMessageType(o),e.log("Checking message type for MGFOMS","Отчёт МО в МГФОМС"===o);var s=n.filter((function(e){var t=e.toLocaleLowerCase().includes("МГФОМС".toLocaleLowerCase());return"Отчёт МО в МГФОМС"===o?t:!t}));e.log("Filtered insurers according to message type",s),s.forEach((function(s,u){var l=setTimeout((function(){e.log("Applying filter values:",{messageType:o,insurer:s}),e.setInsurer(s),e.getFilterSubmitButton().click();var r=setTimeout((function(){e.log("Getting files list");var r=e.getFilesList();r.length?(e.log("Found "+r.length+" files"),e.downloadFile(e.getFilesList().pop())):e.log("No files for selected filters");var o=i===t.length-1,s=u===n.length-1;o&&s&&alert("Загрузка файлов завершена!")}),5e3);e.timeoutIDs.push(r)}),7e3*r);e.timeoutIDs.push(l),r++}))}))},e.prototype.stopParser=function(){this.timeoutIDs.forEach((function(e){clearTimeout(e)})),this.isRunning=!1},e.prototype.getMessageTypeSuggestions=function(){return Array.from(f(document,i,"ul").childNodes)},e.prototype.getMessageTypes=function(){return this.getMessageTypeSuggestions().map((function(e){return e.textContent})).filter((function(e){return r.includes(e)}))},e.prototype.setMessageType=function(e){this.getMessageTypeSuggestions().find((function(t){return t.textContent===e})).click(),this.log("Set message type filter to:",e)},e.prototype.getInsurersSuggestions=function(){return Array.from(f(document,u,"ul").childNodes)},e.prototype.getInsurers=function(){return this.getInsurersSuggestions().map((function(e){return e.textContent}))},e.prototype.setInsurer=function(e){this.getInsurersSuggestions().find((function(t){return t.textContent===e})).click(),this.log("Set insurer filter to:",e)},e.prototype.getFilterSubmitButton=function(){var e=f(document,a).querySelectorAll("a.x-btn");return e.length?e[0]:null},e.prototype.getDateFromElement=function(e){if(e){if(e.textContent)return t=e.textContent,n="dd.mm.yyyy hh:ii",r=t.replace(/[^a-zA-Z0-9]/g,"-"),o=n.toLowerCase().replace(/[^a-zA-Z0-9]/g,"-").split("-"),i=r.split("-"),s=o.indexOf("mm"),u=o.indexOf("dd"),l=o.indexOf("yyyy"),a=o.indexOf("hh"),c=o.indexOf("ii"),f=o.indexOf("ss"),g=new Date,p=l>-1?+i[l]:g.getFullYear(),d=s>-1?+i[s]:g.getMonth(),y=u>-1?+i[u]:g.getDate(),m=a>-1?+i[a]:g.getHours(),h=c>-1?+i[c]:g.getMinutes(),v=f>-1?+i[f]:g.getSeconds(),new Date(p,d,y,m,h,v);this.log("Empty Date Cell Text!",e)}else this.log("Date node not found!",e);var t,n,r,o,i,s,u,l,a,c,f,g,p,d,y,m,h,v;return null},e.prototype.getFilesList=function(){var e=this;return Array.from(f(document,c).querySelectorAll("table")).map((function(t){var n=t.querySelectorAll("td"),r=n[5],o=n[9],i=r?r.querySelector("a"):null;return{url:i?i.href:null,sendDate:o?e.getDateFromElement(o.firstChild):new Date}})).filter((function(e){return!!e.url})).sort((function(e,t){return e.sendDate.getTime()-t.sendDate.getTime()}))},e.prototype.downloadFile=function(e){this.log("file download >>",e),e.url&&window.open(e.url,"_blank")},e}();!function(e){e.parser=new g,e.getElementByIdPattern=f}(window)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkFMTE9XRURfTUVTU0FHRV9UWVBFUyIsIlNUQVJUX0JVVFRPTl9DT05UQUlORVJfSURfUEFUVEVSTiIsIk1FU1NBR0VfVFlQRVNfTElTVF9JRF9QQVRURVJOIiwiTUVTU0FHRV9UWVBFX0xJU1RfVE9HR0xFX0lEX1BBVFRFUk4iLCJJTlNVUkVSU19MSVNUX0lEX1BBVFRFUk4iLCJJTlNVUkVSU19MSVNUX1RPR0dMRV9JRF9QQVRURVJOIiwiRklMVEVSU19QQU5FTF9JRF9QQVRURVJOIiwiUEFSQ0VMU19MSVNUX0lEX1BBVFRFUk4iLCJnZXRFbGVtZW50QnlJZFBhdHRlcm4iLCJwYXJlbnQiLCJpZFBhdHRlcm4iLCJ0YWdOYW1lIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZmluZCIsImVsZW1lbnQiLCJ0ZXN0IiwiaWQiLCJ0aW1lb3V0SURzIiwiaXNSdW5uaW5nIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiYnV0dG9uQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJhZGRTdGFydEJ1dHRvbiIsImNsaWNrIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ0aGlzIiwibG9nIiwiY29uc29sZSIsImFyZ3MiLCJjb250YWluZXIiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiY3Vyc29yIiwib25jbGljayIsInN0b3BQYXJzZXIiLCJzdGFydFBhcnNlciIsImFwcGVuZCIsIm1lc3NhZ2VUeXBlcyIsImdldE1lc3NhZ2VUeXBlcyIsImluc3VyZXJzIiwiZ2V0SW5zdXJlcnMiLCJpbmNyZW1lbnQiLCJmb3JFYWNoIiwibWVzc2FnZVR5cGUiLCJtZXNzYWdlVHlwZUluZGV4Iiwic2V0TWVzc2FnZVR5cGUiLCJmaWx0ZXJlZEluc3VyZXJzIiwiZmlsdGVyIiwiaW5zdXJlciIsImlzTUdGT01TaW5zdXJlciIsInRvTG9jYWxlTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJpbnN1cmVySW5kZXgiLCJ0aW1lb3V0QSIsInNldEluc3VyZXIiLCJnZXRGaWx0ZXJTdWJtaXRCdXR0b24iLCJ0aW1lb3V0QiIsImZpbGVzTGlzdCIsImdldEZpbGVzTGlzdCIsImxlbmd0aCIsImRvd25sb2FkRmlsZSIsInBvcCIsImlzTGFzdE1lc3NhZ2VUeXBlIiwiaXNMYXN0SW5zdXJlciIsImFsZXJ0IiwicHVzaCIsInRpbWVvdXRJRCIsImNsZWFyVGltZW91dCIsImdldE1lc3NhZ2VUeXBlU3VnZ2VzdGlvbnMiLCJjaGlsZE5vZGVzIiwibWFwIiwidGV4dENvbnRlbnQiLCJnZXRJbnN1cmVyc1N1Z2dlc3Rpb25zIiwiYnV0dG9ucyIsImdldERhdGVGcm9tRWxlbWVudCIsIm5vZGUiLCJ0ZXh0IiwiZm9ybWF0Iiwibm9ybWFsaXplZCIsInJlcGxhY2UiLCJmb3JtYXRJdGVtcyIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJkYXRlSXRlbXMiLCJtb250aEluZGV4IiwiaW5kZXhPZiIsImRheUluZGV4IiwieWVhckluZGV4IiwiaG91ckluZGV4IiwibWludXRlc0luZGV4Iiwic2Vjb25kc0luZGV4IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsInRhYmxlRWxlbWVudCIsImNlbGxzIiwidXJsQ2VsbCIsImRhdGVDZWxsIiwibGluayIsInF1ZXJ5U2VsZWN0b3IiLCJ1cmwiLCJocmVmIiwic2VuZERhdGUiLCJmaXJzdENoaWxkIiwiZmlsZSIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJ3aW5kb3ciLCJvcGVuIiwicGFyc2VyIiwiUGFyc2VyIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJ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QUFTTSxjQUc1RSxZQUFBM0QsYUFBUixTQUFxQnVELEdBQ25CN0YsS0FBS0MsSUFBSSxtQkFBb0I0RixHQUN6QkEsRUFBS0osS0FDUFMsT0FBT0MsS0FBS04sRUFBS0osSUFBSyxXQUc1QixFQXJOQSxJQXVOQSxTQUFFUyxHQUNBQSxFQUFPRSxPQUFTLElBQUlDLEVBQ3BCSCxFQUFPeEgsc0JBQXdCQSxFQUZqQyxDQUdHd0giLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgTUdGT01TID0gJ9Cc0JPQpNCe0JzQoSdcblxuY29uc3QgUkVQT1JUX0lOX01HRk9NUyA9ICfQntGC0YfRkdGCINCc0J4g0LIg0JzQk9Ck0J7QnNChJ1xuY29uc3QgUkVQT1JUX0lOX1NNTyA9ICfQntGC0YfRkdGCINCc0J4g0LIg0KHQnNCeJ1xuXG5jb25zdCBBTExPV0VEX01FU1NBR0VfVFlQRVMgPSBbUkVQT1JUX0lOX01HRk9NUywgUkVQT1JUX0lOX1NNT11cblxuY29uc3QgU1RBUlRfQlVUVE9OX0lEID0gJ3BhcnNlci1zdGFydC1idXR0b24nXG5cbmNvbnN0IERBVEVfRk9STUFUID0gJ2RkLm1tLnl5eXkgaGg6aWknXG5cbmNvbnN0IFNUQVJUX0JVVFRPTl9DT05UQUlORVJfSURfUEFUVEVSTiA9IC9eZmlsdGVyLXBhbmVsLVxcZHs0LH1faGVhZGVyLXRpdGxlLXRleHRFbCQvXG5jb25zdCBNRVNTQUdFX1RZUEVfRklFTERfSURfUEFUVEVSTiA9IC9ebWVzc2FnZVR5cGVDb21iby1cXGR7NCx9LWlucHV0RWwkL1xuY29uc3QgTUVTU0FHRV9UWVBFU19MSVNUX0lEX1BBVFRFUk4gPSAvXm1lc3NhZ2VUeXBlQ29tYm8tXFxkezQsfS1waWNrZXItbGlzdEVsJC9cbmNvbnN0IE1FU1NBR0VfVFlQRV9MSVNUX1RPR0dMRV9JRF9QQVRURVJOID0gL15tZXNzYWdlVHlwZUNvbWJvLVxcZHs0LH0tdHJpZ2dlci1waWNrZXIkL1xuY29uc3QgSU5TVVJFUl9GSUVMRF9JRF9QQVRURVJOID0gL15jb21tb25JbnN1cmVyc0NvbWJvLVxcZHs0LH0taW5wdXRFbCQvXG5jb25zdCBJTlNVUkVSU19MSVNUX0lEX1BBVFRFUk4gPSAvXmNvbW1vbkluc3VyZXJzQ29tYm8tXFxkezQsfS1waWNrZXItbGlzdEVsJC9cbmNvbnN0IElOU1VSRVJTX0xJU1RfVE9HR0xFX0lEX1BBVFRFUk4gPSAvXmNvbW1vbkluc3VyZXJzQ29tYm8tXFxkezQsfS10cmlnZ2VyLXBpY2tlciQvXG5jb25zdCBGSUxURVJTX1BBTkVMX0lEX1BBVFRFUk4gPSAvXmZpbHRlci1wYW5lbC1cXGR7NCx9JC9cbmNvbnN0IFBBUkNFTFNfTElTVF9JRF9QQVRURVJOID0gL15wYXJjZWxzTGlzdC1cXGR7NCx9LWJvZHkkL1xuXG5jb25zdCBGSUxFX0xJTktfQ0VMTF9JTkRFWCA9IDVcbmNvbnN0IEZJTEVfU0VORF9EQVRFX0NFTExfSU5ERVggPSA5XG5cbmNvbnN0IEZJTFRFUlNfQ0hBTkdFX0lOVEVSVkFMID0gMjAwMFxuY29uc3QgUEFSQ0VMU19MT0FEX1RJTUUgPSA1MDAwXG5cbmludGVyZmFjZSBJRmlsZURhdGEge1xuICBzZW5kRGF0ZTogRGF0ZSxcbiAgdXJsOiBzdHJpbmdcbn1cblxuY29uc3QgZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuID0gKHBhcmVudDogSFRNTEVsZW1lbnQgfCBEb2N1bWVudCwgaWRQYXR0ZXJuOiBSZWdFeHAsIHRhZ05hbWU6IHN0cmluZyA9ICdkaXYnKTogRWxlbWVudCA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFnTmFtZSlcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudHMpLmZpbmQoKGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGlkUGF0dGVybi50ZXN0KGVsZW1lbnQuaWQpKVxufVxuXG5jb25zdCBzdHJpbmdUb0RhdGVCeUZvcm1hdCA9ICh0ZXh0OiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogRGF0ZSA9PiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgICAgICA9IHRleHQucmVwbGFjZSgvW15hLXpBLVowLTldL2csICctJylcbiAgY29uc3Qgbm9ybWFsaXplZEZvcm1hdCA9IGZvcm1hdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnLScpXG4gIGNvbnN0IGZvcm1hdEl0ZW1zICAgICA9IG5vcm1hbGl6ZWRGb3JtYXQuc3BsaXQoJy0nKVxuICBjb25zdCBkYXRlSXRlbXMgICAgICAgPSBub3JtYWxpemVkLnNwbGl0KCctJylcblxuICBjb25zdCBtb250aEluZGV4ICA9IGZvcm1hdEl0ZW1zLmluZGV4T2YoJ21tJylcbiAgY29uc3QgZGF5SW5kZXggICAgPSBmb3JtYXRJdGVtcy5pbmRleE9mKCdkZCcpXG4gIGNvbnN0IHllYXJJbmRleCAgID0gZm9ybWF0SXRlbXMuaW5kZXhPZigneXl5eScpXG4gIGNvbnN0IGhvdXJJbmRleCAgICAgPSBmb3JtYXRJdGVtcy5pbmRleE9mKCdoaCcpXG4gIGNvbnN0IG1pbnV0ZXNJbmRleCAgPSBmb3JtYXRJdGVtcy5pbmRleE9mKCdpaScpXG4gIGNvbnN0IHNlY29uZHNJbmRleCAgPSBmb3JtYXRJdGVtcy5pbmRleE9mKCdzcycpXG5cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG5cbiAgY29uc3QgeWVhciA9IHllYXJJbmRleCA+IC0xID8gK2RhdGVJdGVtc1t5ZWFySW5kZXhdIDogdG9kYXkuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtb250aCA9IG1vbnRoSW5kZXggPiAtMSA/ICtkYXRlSXRlbXNbbW9udGhJbmRleF0gOiB0b2RheS5nZXRNb250aCgpXG4gIGNvbnN0IGRheSA9IGRheUluZGV4ID4gLTEgPyArZGF0ZUl0ZW1zW2RheUluZGV4XSA6IHRvZGF5LmdldERhdGUoKVxuXG4gIGNvbnN0IGhvdXIgPSBob3VySW5kZXggPiAtMSA/ICtkYXRlSXRlbXNbaG91ckluZGV4XSA6IHRvZGF5LmdldEhvdXJzKClcbiAgY29uc3QgbWludXRlID0gbWludXRlc0luZGV4ID4gLTEgPyArZGF0ZUl0ZW1zW21pbnV0ZXNJbmRleF0gOiB0b2RheS5nZXRNaW51dGVzKClcbiAgY29uc3Qgc2Vjb25kID0gc2Vjb25kc0luZGV4ID4gLTEgPyArZGF0ZUl0ZW1zW3NlY29uZHNJbmRleF0gOiB0b2RheS5nZXRTZWNvbmRzKClcblxuICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpXG59XG5cbmNsYXNzIFBhcnNlciB7XG4gIHByaXZhdGUgdGltZW91dElEczogYW55W10gPSBbXVxuICBwcml2YXRlIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgU1RBUlRfQlVUVE9OX0NPTlRBSU5FUl9JRF9QQVRURVJOKVxuXG4gICAgICBpZiAoYnV0dG9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuYWRkU3RhcnRCdXR0b24oYnV0dG9uQ29udGFpbmVyKVxuXG4gICAgICAgIGNvbnN0IGluc3VyZXJzTGlzdFRvZ2dsZSA9IGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgSU5TVVJFUlNfTElTVF9UT0dHTEVfSURfUEFUVEVSTikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgY29uc3QgbWVzc2FnZVR5cGVMaXN0VG9nZ2xlID0gZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuKGRvY3VtZW50LCBNRVNTQUdFX1RZUEVfTElTVF9UT0dHTEVfSURfUEFUVEVSTikgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICBtZXNzYWdlVHlwZUxpc3RUb2dnbGUuY2xpY2soKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgIG1lc3NhZ2VUeXBlTGlzdFRvZ2dsZS5jbGljaygpXG4gICAgICAgICAgaW5zdXJlcnNMaXN0VG9nZ2xlLmNsaWNrKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHsgaW5zdXJlcnNMaXN0VG9nZ2xlLmNsaWNrKCkgfSwgNTAwKVxuICAgICAgICB9LCA1MDApXG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuICAgICAgfVxuICAgIH0sIDUwMClcblxuXG4gICAgdGhpcy5sb2coJ1BhcnNlciBpbml0aWFsaXplZCEnKVxuICB9XG5cbiAgcHJpdmF0ZSBsb2coLi4uYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQYXJzZXI6ICcsIC4uLmFyZ3MpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdGFydEJ1dHRvbihjb250YWluZXI6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydFRleHQgPSAn0JfQsNC/0YPRgdGC0LjRgtGMINGB0LHQvtGAINC00LDQvdC90YvRhSdcbiAgICBjb25zdCBzdG9wVGV4dCA9ICfQntGB0YLQsNC90L7QstC40YLRjCDRgdCx0L7RgCDQtNCw0L3QvdGL0YUnXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBzdGFydFRleHRcbiAgICBidXR0b24uaWQgPSBTVEFSVF9CVVRUT05fSURcbiAgICBidXR0b24uc3R5bGUubWFyZ2luTGVmdCA9ICcxMHB4J1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICBidXR0b24ub25jbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xuICAgICAgICB0aGlzLnN0b3BQYXJzZXIoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGFydFBhcnNlcigpXG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmlzUnVubmluZyA/IHN0b3BUZXh0IDogc3RhcnRUZXh0XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZChidXR0b24pXG5cbiAgICB0aGlzLmxvZygnQWRkZWQgc3RhcnQgYnV0dG9uIHRvIGNvbnRhaW5lcjonLCBjb250YWluZXIpXG4gIH1cblxuICBwdWJsaWMgc3RhcnRQYXJzZXIoKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1BhcnNlciBzdGFydGVkIScpXG4gICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlXG4gICAgdGhpcy50aW1lb3V0SURzID0gW11cblxuICAgIGNvbnN0IG1lc3NhZ2VUeXBlcyA9IHRoaXMuZ2V0TWVzc2FnZVR5cGVzKClcbiAgICBjb25zdCBpbnN1cmVycyA9IHRoaXMuZ2V0SW5zdXJlcnMoKVxuXG4gICAgdGhpcy5sb2coJ0xvYWRlZCBmaWx0ZXIgdmFsdWVzOicsIHsgbWVzc2FnZVR5cGVzLCBpbnN1cmVycyB9KVxuICAgIHRoaXMubG9nKCdSdW5uaW5nIGEgcXVldWUnKVxuXG4gICAgbGV0IGluY3JlbWVudCA9IDBcblxuICAgIG1lc3NhZ2VUeXBlcy5mb3JFYWNoKChtZXNzYWdlVHlwZTogc3RyaW5nLCBtZXNzYWdlVHlwZUluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuc2V0TWVzc2FnZVR5cGUobWVzc2FnZVR5cGUpXG5cbiAgICAgIHRoaXMubG9nKCdDaGVja2luZyBtZXNzYWdlIHR5cGUgZm9yIE1HRk9NUycsIG1lc3NhZ2VUeXBlID09PSBSRVBPUlRfSU5fTUdGT01TKVxuXG4gICAgICBjb25zdCBmaWx0ZXJlZEluc3VyZXJzID0gaW5zdXJlcnMuZmlsdGVyKChpbnN1cmVyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3QgaXNNR0ZPTVNpbnN1cmVyID0gaW5zdXJlci50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKE1HRk9NUy50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICAgICAgICByZXR1cm4gKG1lc3NhZ2VUeXBlID09PSBSRVBPUlRfSU5fTUdGT01TKSA/IGlzTUdGT01TaW5zdXJlciA6ICFpc01HRk9NU2luc3VyZXJcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMubG9nKCdGaWx0ZXJlZCBpbnN1cmVycyBhY2NvcmRpbmcgdG8gbWVzc2FnZSB0eXBlJywgZmlsdGVyZWRJbnN1cmVycylcblxuICAgICAgZmlsdGVyZWRJbnN1cmVycy5mb3JFYWNoKChpbnN1cmVyOiBzdHJpbmcsIGluc3VyZXJJbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXRBID0gc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ0FwcGx5aW5nIGZpbHRlciB2YWx1ZXM6Jywge21lc3NhZ2VUeXBlLCBpbnN1cmVyfSlcbiAgICAgICAgICB0aGlzLnNldEluc3VyZXIoaW5zdXJlcilcbiAgICAgICAgICB0aGlzLmdldEZpbHRlclN1Ym1pdEJ1dHRvbigpLmNsaWNrKClcblxuICAgICAgICAgIGNvbnN0IHRpbWVvdXRCID0gc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZygnR2V0dGluZyBmaWxlcyBsaXN0JylcblxuICAgICAgICAgICAgY29uc3QgZmlsZXNMaXN0ID0gdGhpcy5nZXRGaWxlc0xpc3QoKVxuXG4gICAgICAgICAgICBpZiAoZmlsZXNMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICB0aGlzLmxvZyhgRm91bmQgJHtmaWxlc0xpc3QubGVuZ3RofSBmaWxlc2ApXG4gICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHRoaXMuZ2V0RmlsZXNMaXN0KCkucG9wKCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmxvZyhgTm8gZmlsZXMgZm9yIHNlbGVjdGVkIGZpbHRlcnNgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0xhc3RNZXNzYWdlVHlwZSA9IG1lc3NhZ2VUeXBlSW5kZXggPT09IG1lc3NhZ2VUeXBlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICBjb25zdCBpc0xhc3RJbnN1cmVyID0gaW5zdXJlckluZGV4ID09PSBpbnN1cmVycy5sZW5ndGggLSAxXG5cbiAgICAgICAgICAgIGlmIChpc0xhc3RNZXNzYWdlVHlwZSAmJiBpc0xhc3RJbnN1cmVyKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCfQl9Cw0LPRgNGD0LfQutCwINGE0LDQudC70L7QsiDQt9Cw0LLQtdGA0YjQtdC90LAhJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBQQVJDRUxTX0xPQURfVElNRSlcblxuICAgICAgICAgIHRoaXMudGltZW91dElEcy5wdXNoKHRpbWVvdXRCKVxuICAgICAgICB9LCBpbmNyZW1lbnQgKiAoUEFSQ0VMU19MT0FEX1RJTUUgKyBGSUxURVJTX0NIQU5HRV9JTlRFUlZBTCkpXG4gICAgICAgIHRoaXMudGltZW91dElEcy5wdXNoKHRpbWVvdXRBKVxuXG4gICAgICAgIGluY3JlbWVudCsrXG4gICAgICB9KVxuICAgIH0pXG5cbiAgfVxuXG4gIHB1YmxpYyBzdG9wUGFyc2VyKCk6IHZvaWQge1xuICAgIHRoaXMudGltZW91dElEcy5mb3JFYWNoKCh0aW1lb3V0SUQ6IG51bWJlcik6IHZvaWQgPT4geyBjbGVhclRpbWVvdXQodGltZW91dElEKSB9KVxuICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2VcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVzc2FnZVR5cGVTdWdnZXN0aW9ucygpOiBDaGlsZE5vZGVbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuKGRvY3VtZW50LCBNRVNTQUdFX1RZUEVTX0xJU1RfSURfUEFUVEVSTiwgJ3VsJykuY2hpbGROb2RlcylcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXNzYWdlVHlwZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlU3VnZ2VzdGlvbnMoKVxuICAgICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCk6IHN0cmluZyA9PiBlbGVtZW50LnRleHRDb250ZW50KVxuICAgICAgLmZpbHRlcigobWVzc2FnZVR5cGU6IHN0cmluZyk6IGJvb2xlYW4gPT4gQUxMT1dFRF9NRVNTQUdFX1RZUEVTLmluY2x1ZGVzKG1lc3NhZ2VUeXBlKSlcbiAgfVxuXG4gIHB1YmxpYyBzZXRNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldE1lc3NhZ2VUeXBlU3VnZ2VzdGlvbnMoKVxuICAgIGNvbnN0IG1hdGNoaW5nU3VnZ2VzdGlvbiA9IHN1Z2dlc3Rpb25zLmZpbmQoKGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGVsZW1lbnQudGV4dENvbnRlbnQgPT09IG1lc3NhZ2VUeXBlKSBhcyBIVE1MRWxlbWVudFxuXG4gICAgbWF0Y2hpbmdTdWdnZXN0aW9uLmNsaWNrKClcblxuICAgIHRoaXMubG9nKCdTZXQgbWVzc2FnZSB0eXBlIGZpbHRlciB0bzonLCBtZXNzYWdlVHlwZSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW5zdXJlcnNTdWdnZXN0aW9ucygpOiBDaGlsZE5vZGVbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuKGRvY3VtZW50LCBJTlNVUkVSU19MSVNUX0lEX1BBVFRFUk4sICd1bCcpLmNoaWxkTm9kZXMpXG4gIH1cblxuICBwdWJsaWMgZ2V0SW5zdXJlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmdldEluc3VyZXJzU3VnZ2VzdGlvbnMoKVxuICAgICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCk6IHN0cmluZyA9PiBlbGVtZW50LnRleHRDb250ZW50KVxuICB9XG5cbiAgcHVibGljIHNldEluc3VyZXIoaW5zdXJlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldEluc3VyZXJzU3VnZ2VzdGlvbnMoKVxuICAgIGNvbnN0IG1hdGNoaW5nU3VnZ2VzdGlvbiA9IHN1Z2dlc3Rpb25zLmZpbmQoKGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGVsZW1lbnQudGV4dENvbnRlbnQgPT09IGluc3VyZXIpIGFzIEhUTUxFbGVtZW50XG5cbiAgICBtYXRjaGluZ1N1Z2dlc3Rpb24uY2xpY2soKVxuICAgIHRoaXMubG9nKCdTZXQgaW5zdXJlciBmaWx0ZXIgdG86JywgaW5zdXJlcilcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWx0ZXJTdWJtaXRCdXR0b24oKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCBmaWx0ZXJzUGFuZWwgPSBnZXRFbGVtZW50QnlJZFBhdHRlcm4oZG9jdW1lbnQsIEZJTFRFUlNfUEFORUxfSURfUEFUVEVSTikgYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zdCBidXR0b25zID0gZmlsdGVyc1BhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EueC1idG4nKVxuXG4gICAgaWYgKGJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYnV0dG9uc1swXSBhcyBIVE1MRWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0ZUZyb21FbGVtZW50KG5vZGU6IE5vZGUpOiBEYXRlIHtcbiAgICBpZiAobm9kZSkge1xuICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvRGF0ZUJ5Rm9ybWF0KG5vZGUudGV4dENvbnRlbnQsIERBVEVfRk9STUFUKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2coJ0VtcHR5IERhdGUgQ2VsbCBUZXh0IScsIG5vZGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nKCdEYXRlIG5vZGUgbm90IGZvdW5kIScsIG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWxlc0xpc3QoKTogYW55W10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgUEFSQ0VMU19MSVNUX0lEX1BBVFRFUk4pLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlJykpXG4gICAgICAubWFwKCh0YWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSUZpbGVEYXRhID0+IHtcbiAgICAgICAgY29uc3QgY2VsbHMgPSB0YWJsZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKVxuICAgICAgICBjb25zdCB1cmxDZWxsID0gY2VsbHNbRklMRV9MSU5LX0NFTExfSU5ERVhdXG4gICAgICAgIGNvbnN0IGRhdGVDZWxsID0gY2VsbHNbRklMRV9TRU5EX0RBVEVfQ0VMTF9JTkRFWF1cbiAgICAgICAgY29uc3QgbGluayA9IHVybENlbGwgPyB1cmxDZWxsLnF1ZXJ5U2VsZWN0b3IoJ2EnKSA6IG51bGxcblxuICAgICAgICBjb25zdCB1cmwgPSBsaW5rID8gbGluay5ocmVmIDogbnVsbFxuICAgICAgICBjb25zdCBzZW5kRGF0ZSA9IGRhdGVDZWxsID8gdGhpcy5nZXREYXRlRnJvbUVsZW1lbnQoZGF0ZUNlbGwuZmlyc3RDaGlsZCkgOiBuZXcgRGF0ZSgpXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgc2VuZERhdGVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGZpbGU6IElGaWxlRGF0YSk6IGJvb2xlYW4gPT4gISFmaWxlLnVybClcbiAgICAgIC5zb3J0KChhOiBJRmlsZURhdGEsIGI6IElGaWxlRGF0YSk6IG51bWJlciA9PiBhLnNlbmREYXRlLmdldFRpbWUoKSAtIGIuc2VuZERhdGUuZ2V0VGltZSgpKVxuICB9XG5cbiAgcHJpdmF0ZSBkb3dubG9hZEZpbGUoZmlsZTogSUZpbGVEYXRhKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ2ZpbGUgZG93bmxvYWQgPj4nLCBmaWxlKVxuICAgIGlmIChmaWxlLnVybCkge1xuICAgICAgd2luZG93Lm9wZW4oZmlsZS51cmwsICdfYmxhbmsnKVxuICAgIH1cbiAgfVxufVxuXG4oKHdpbmRvdzogYW55KTogdm9pZCA9PiB7XG4gIHdpbmRvdy5wYXJzZXIgPSBuZXcgUGFyc2VyKClcbiAgd2luZG93LmdldEVsZW1lbnRCeUlkUGF0dGVybiA9IGdldEVsZW1lbnRCeUlkUGF0dGVyblxufSkod2luZG93KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==