!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,s=i.length;u<s;u++,o++)r[o]=i[u];return r},r=["Отчёт МО в МГФОМС","Отчёт МО в СМО"],o=/^filter-panel-\d{4,}_header-title-textEl$/,i=/^messageTypeCombo-\d{4,}-picker-listEl$/,u=/^messageTypeCombo-\d{4,}-trigger-picker$/,s=/^commonInsurersCombo-\d{4,}-picker-listEl$/,l=/^commonInsurersCombo-\d{4,}-trigger-picker$/,a=/^filter-panel-\d{4,}$/,c=/^parcelsList-\d{4,}-body$/,f=function(e,t,n){void 0===n&&(n="div");var r=e.querySelectorAll(n);return Array.from(r).find((function(e){return t.test(e.id)}))},g=function(){function e(){var e=this,t=setInterval((function(){var n=f(document,o);if(n){e.addStartButton(n);var r=f(document,l),i=f(document,u);i.click(),setTimeout((function(){i.click(),r.click(),setTimeout((function(){r.click()}),500)}),500),clearInterval(t)}}),500);this.log("Parser initialized!")}return e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console&&console.log&&console.log.apply(console,n(["Parser: "],e))},e.prototype.addStartButton=function(e){var t=this,n=document.createElement("button");n.innerHTML="Запустить сбор данных",n.id="parser-start-button",n.style.marginLeft="10px",n.style.cursor="pointer",n.onclick=function(){t.startParser()},e.append(n),this.log("Added start button to container:",e)},e.prototype.startParser=function(){var e=this;this.log("Parser started!");var t=this.getMessageTypes(),n=this.getInsurers();this.log("Loaded filter values:",{messageTypes:t,insurers:n}),this.log("Running a queue");var r=0;t.forEach((function(o,i){n.forEach((function(u,s){e.runnerTimeoutA=setTimeout((function(){e.log("Applying filter values:",{messageType:o,insurer:u}),e.setMessageType(o),e.setInsurer(u),e.getFilterSubmitButton().click(),e.runnerTimeoutB=setTimeout((function(){e.log("Getting files list");var r=e.getFilesList();r.length?(e.log("Found "+r.length+" files"),e.downloadFile(e.getFilesList().pop())):e.log("No files for selected filters");var o=i===t.length-1,u=s===n.length-1;o&&u&&alert("Загрузка файлов завершена!")}),5e3)}),7e3*r),r++}))}))},e.prototype.stopParser=function(){clearTimeout(this.runnerTimeoutA),clearTimeout(this.runnerTimeoutB)},e.prototype.getMessageTypeSuggestions=function(){return Array.from(f(document,i,"ul").childNodes)},e.prototype.getMessageTypes=function(){return this.getMessageTypeSuggestions().map((function(e){return e.textContent})).filter((function(e){return r.includes(e)}))},e.prototype.setMessageType=function(e){this.getInsurersSuggestions().find((function(t){return t.textContent===e})).click(),this.log("Set message type filter to:",e)},e.prototype.getInsurersSuggestions=function(){return Array.from(f(document,s,"ul").childNodes)},e.prototype.getInsurers=function(){return this.getInsurersSuggestions().map((function(e){return e.textContent}))},e.prototype.setInsurer=function(e){this.getInsurersSuggestions().find((function(t){return t.textContent===e})).click(),this.log("Set insurer filter to:",e)},e.prototype.getFilterSubmitButton=function(){var e=f(document,a).querySelectorAll("a.x-btn");return e.length?e[0]:null},e.prototype.getDateFromElement=function(e){if(e){if(e.textContent)return t=e.textContent,n="dd.mm.yyyy hh:ii",r=t.replace(/[^a-zA-Z0-9]/g,"-"),o=n.toLowerCase().replace(/[^a-zA-Z0-9]/g,"-").split("-"),i=r.split("-"),u=o.indexOf("mm"),s=o.indexOf("dd"),l=o.indexOf("yyyy"),a=o.indexOf("hh"),c=o.indexOf("ii"),f=o.indexOf("ss"),g=new Date,d=l>-1?+i[l]:g.getFullYear(),p=u>-1?+i[u]:g.getMonth(),y=s>-1?+i[s]:g.getDate(),m=a>-1?+i[a]:g.getHours(),h=c>-1?+i[c]:g.getMinutes(),v=f>-1?+i[f]:g.getSeconds(),new Date(d,p,y,m,h,v);this.log("Empty Date Cell Text!",e)}else this.log("Date node not found!",e);var t,n,r,o,i,u,s,l,a,c,f,g,d,p,y,m,h,v;return null},e.prototype.getFilesList=function(){var e=this;return Array.from(f(document,c).querySelectorAll("table")).map((function(t){var n=t.querySelectorAll("td"),r=n[5],o=n[9],i=r?r.querySelector("a"):null;return{url:i?i.href:null,sendDate:o?e.getDateFromElement(o.firstChild):new Date}})).filter((function(e){return!!e.url})).sort((function(e,t){return e.sendDate.getTime()-t.sendDate.getTime()}))},e.prototype.downloadFile=function(e){this.log("file download >>",e),e.url&&window.open(e.url,"_blank")},e}();!function(e){e.parser=new g,e.getElementByIdPattern=f}(window)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkFMTE9XRURfTUVTU0FHRV9UWVBFUyIsIlNUQVJUX0JVVFRPTl9DT05UQUlORVJfSURfUEFUVEVSTiIsIk1FU1NBR0VfVFlQRVNfTElTVF9JRF9QQVRURVJOIiwiTUVTU0FHRV9UWVBFX0xJU1RfVE9HR0xFX0lEX1BBVFRFUk4iLCJJTlNVUkVSU19MSVNUX0lEX1BBVFRFUk4iLCJJTlNVUkVSU19MSVNUX1RPR0dMRV9JRF9QQVRURVJOIiwiRklMVEVSU19QQU5FTF9JRF9QQVRURVJOIiwiUEFSQ0VMU19MSVNUX0lEX1BBVFRFUk4iLCJnZXRFbGVtZW50QnlJZFBhdHRlcm4iLCJwYXJlbnQiLCJpZFBhdHRlcm4iLCJ0YWdOYW1lIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZmluZCIsImVsZW1lbnQiLCJ0ZXN0IiwiaWQiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJidXR0b25Db250YWluZXIiLCJkb2N1bWVudCIsImFkZFN0YXJ0QnV0dG9uIiwiY2xpY2siLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsInRoaXMiLCJsb2ciLCJjb25zb2xlIiwiYXJncyIsImNvbnRhaW5lciIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJjdXJzb3IiLCJvbmNsaWNrIiwic3RhcnRQYXJzZXIiLCJhcHBlbmQiLCJtZXNzYWdlVHlwZXMiLCJnZXRNZXNzYWdlVHlwZXMiLCJpbnN1cmVycyIsImdldEluc3VyZXJzIiwiaW5jcmVtZW50IiwiZm9yRWFjaCIsIm1lc3NhZ2VUeXBlIiwibWVzc2FnZVR5cGVJbmRleCIsImluc3VyZXIiLCJpbnN1cmVySW5kZXgiLCJydW5uZXJUaW1lb3V0QSIsInNldE1lc3NhZ2VUeXBlIiwic2V0SW5zdXJlciIsImdldEZpbHRlclN1Ym1pdEJ1dHRvbiIsInJ1bm5lclRpbWVvdXRCIiwiZmlsZXNMaXN0IiwiZ2V0RmlsZXNMaXN0IiwibGVuZ3RoIiwiZG93bmxvYWRGaWxlIiwicG9wIiwiaXNMYXN0TWVzc2FnZVR5cGUiLCJpc0xhc3RJbnN1cmVyIiwiYWxlcnQiLCJzdG9wUGFyc2VyIiwiY2xlYXJUaW1lb3V0IiwiZ2V0TWVzc2FnZVR5cGVTdWdnZXN0aW9ucyIsImNoaWxkTm9kZXMiLCJtYXAiLCJ0ZXh0Q29udGVudCIsImZpbHRlciIsImluY2x1ZGVzIiwiZ2V0SW5zdXJlcnNTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJnZXREYXRlRnJvbUVsZW1lbnQiLCJub2RlIiwidGV4dCIsImZvcm1hdCIsIm5vcm1hbGl6ZWQiLCJyZXBsYWNlIiwiZm9ybWF0SXRlbXMiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZGF0ZUl0ZW1zIiwibW9udGhJbmRleCIsImluZGV4T2YiLCJkYXlJbmRleCIsInllYXJJbmRleCIsImhvdXJJbmRleCIsIm1pbnV0ZXNJbmRleCIsInNlY29uZHNJbmRleCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJ0YWJsZUVsZW1lbnQiLCJjZWxscyIsInVybENlbGwiLCJkYXRlQ2VsbCIsImxpbmsiLCJxdWVyeVNlbGVjdG9yIiwidXJsIiwiaHJlZiIsInNlbmREYXRlIiwiZmlyc3RDaGlsZCIsImZpbGUiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwid2luZG93Iiwib3BlbiIsInBhcnNlciIsIlBhcnNlciJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFB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RSxFQUNBRSxFQWtLSixPQUFPLE1BR0YsWUFBQTlDLGFBQVAsc0JBQ0UsT0FBTzVDLE1BQU1DLEtBQUtQLEVBQXNCZSxTQUFVaEIsR0FBeUJNLGlCQUFpQixVQUN6RndELEtBQUksU0FBQ3FDLEdBQ0osSUFBTUMsRUFBUUQsRUFBYTdGLGlCQUFpQixNQUN0QytGLEVBQVVELEVBOU1LLEdBK01mRSxFQUFXRixFQTlNUyxHQStNcEJHLEVBQU9GLEVBQVVBLEVBQVFHLGNBQWMsS0FBTyxLQUtwRCxNQUFPLENBQ0xDLElBSlVGLEVBQU9BLEVBQUtHLEtBQU8sS0FLN0JDLFNBSmVMLEVBQVcsRUFBS2xDLG1CQUFtQmtDLEVBQVNNLFlBQWMsSUFBSXRCLFNBT2hGdEIsUUFBTyxTQUFDNkMsR0FBNkIsUUFBRUEsRUFBS0osT0FDNUNLLE1BQUssU0FBQ0MsRUFBY0MsR0FBeUIsT0FBQUQsRUFBRUosU0FBU00sVUFBWUQsRUFBRUwsU0FBU00sY0FHNUUsWUFBQTVELGFBQVIsU0FBcUJ3RCxHQUNuQnhGLEtBQUtDLElBQUksbUJBQW9CdUYsR0FDekJBLEVBQUtKLEtBQ1BTLE9BQU9DLEtBQUtOLEVBQUtKLElBQUssV0FHNUIsRUExTEEsSUE0TEEsU0FBRVMsR0FDQUEsRUFBT0UsT0FBUyxJQUFJQyxFQUNwQkgsRUFBT2pILHNCQUF3QkEsRUFGakMsQ0FHR2lIIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IFJFUE9SVF9JTl9NR0ZPTVMgPSAn0J7RgtGH0ZHRgiDQnNCeINCyINCc0JPQpNCe0JzQoSdcbmNvbnN0IFJFUE9SVF9JTl9TTU8gPSAn0J7RgtGH0ZHRgiDQnNCeINCyINCh0JzQnidcblxuY29uc3QgQUxMT1dFRF9NRVNTQUdFX1RZUEVTID0gW1JFUE9SVF9JTl9NR0ZPTVMsIFJFUE9SVF9JTl9TTU9dXG5cbmNvbnN0IFNUQVJUX0JVVFRPTl9JRCA9ICdwYXJzZXItc3RhcnQtYnV0dG9uJ1xuXG5jb25zdCBEQVRFX0ZPUk1BVCA9ICdkZC5tbS55eXl5IGhoOmlpJ1xuXG5jb25zdCBTVEFSVF9CVVRUT05fQ09OVEFJTkVSX0lEX1BBVFRFUk4gPSAvXmZpbHRlci1wYW5lbC1cXGR7NCx9X2hlYWRlci10aXRsZS10ZXh0RWwkL1xuY29uc3QgTUVTU0FHRV9UWVBFX0ZJRUxEX0lEX1BBVFRFUk4gPSAvXm1lc3NhZ2VUeXBlQ29tYm8tXFxkezQsfS1pbnB1dEVsJC9cbmNvbnN0IE1FU1NBR0VfVFlQRVNfTElTVF9JRF9QQVRURVJOID0gL15tZXNzYWdlVHlwZUNvbWJvLVxcZHs0LH0tcGlja2VyLWxpc3RFbCQvXG5jb25zdCBNRVNTQUdFX1RZUEVfTElTVF9UT0dHTEVfSURfUEFUVEVSTiA9IC9ebWVzc2FnZVR5cGVDb21iby1cXGR7NCx9LXRyaWdnZXItcGlja2VyJC9cbmNvbnN0IElOU1VSRVJfRklFTERfSURfUEFUVEVSTiA9IC9eY29tbW9uSW5zdXJlcnNDb21iby1cXGR7NCx9LWlucHV0RWwkL1xuY29uc3QgSU5TVVJFUlNfTElTVF9JRF9QQVRURVJOID0gL15jb21tb25JbnN1cmVyc0NvbWJvLVxcZHs0LH0tcGlja2VyLWxpc3RFbCQvXG5jb25zdCBJTlNVUkVSU19MSVNUX1RPR0dMRV9JRF9QQVRURVJOID0gL15jb21tb25JbnN1cmVyc0NvbWJvLVxcZHs0LH0tdHJpZ2dlci1waWNrZXIkL1xuY29uc3QgRklMVEVSU19QQU5FTF9JRF9QQVRURVJOID0gL15maWx0ZXItcGFuZWwtXFxkezQsfSQvXG5jb25zdCBQQVJDRUxTX0xJU1RfSURfUEFUVEVSTiA9IC9ecGFyY2Vsc0xpc3QtXFxkezQsfS1ib2R5JC9cblxuY29uc3QgRklMRV9MSU5LX0NFTExfSU5ERVggPSA1XG5jb25zdCBGSUxFX1NFTkRfREFURV9DRUxMX0lOREVYID0gOVxuXG5jb25zdCBGSUxURVJTX0NIQU5HRV9JTlRFUlZBTCA9IDIwMDBcbmNvbnN0IFBBUkNFTFNfTE9BRF9USU1FID0gNTAwMFxuXG5pbnRlcmZhY2UgSUZpbGVEYXRhIHtcbiAgc2VuZERhdGU6IERhdGUsXG4gIHVybDogc3RyaW5nXG59XG5cbmNvbnN0IGdldEVsZW1lbnRCeUlkUGF0dGVybiA9IChwYXJlbnQ6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQsIGlkUGF0dGVybjogUmVnRXhwLCB0YWdOYW1lOiBzdHJpbmcgPSAnZGl2Jyk6IEVsZW1lbnQgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpXG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnRzKS5maW5kKChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiBpZFBhdHRlcm4udGVzdChlbGVtZW50LmlkKSlcbn1cblxuY29uc3Qgc3RyaW5nVG9EYXRlQnlGb3JtYXQgPSAodGV4dDogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IERhdGUgPT4ge1xuICBjb25zdCBub3JtYWxpemVkICAgICAgPSB0ZXh0LnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnLScpXG4gIGNvbnN0IG5vcm1hbGl6ZWRGb3JtYXQgPSBmb3JtYXQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJy0nKVxuICBjb25zdCBmb3JtYXRJdGVtcyAgICAgPSBub3JtYWxpemVkRm9ybWF0LnNwbGl0KCctJylcbiAgY29uc3QgZGF0ZUl0ZW1zICAgICAgID0gbm9ybWFsaXplZC5zcGxpdCgnLScpXG5cbiAgY29uc3QgbW9udGhJbmRleCAgPSBmb3JtYXRJdGVtcy5pbmRleE9mKCdtbScpXG4gIGNvbnN0IGRheUluZGV4ICAgID0gZm9ybWF0SXRlbXMuaW5kZXhPZignZGQnKVxuICBjb25zdCB5ZWFySW5kZXggICA9IGZvcm1hdEl0ZW1zLmluZGV4T2YoJ3l5eXknKVxuICBjb25zdCBob3VySW5kZXggICAgID0gZm9ybWF0SXRlbXMuaW5kZXhPZignaGgnKVxuICBjb25zdCBtaW51dGVzSW5kZXggID0gZm9ybWF0SXRlbXMuaW5kZXhPZignaWknKVxuICBjb25zdCBzZWNvbmRzSW5kZXggID0gZm9ybWF0SXRlbXMuaW5kZXhPZignc3MnKVxuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuXG4gIGNvbnN0IHllYXIgPSB5ZWFySW5kZXggPiAtMSA/ICtkYXRlSXRlbXNbeWVhckluZGV4XSA6IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBtb250aEluZGV4ID4gLTEgPyArZGF0ZUl0ZW1zW21vbnRoSW5kZXhdIDogdG9kYXkuZ2V0TW9udGgoKVxuICBjb25zdCBkYXkgPSBkYXlJbmRleCA+IC0xID8gK2RhdGVJdGVtc1tkYXlJbmRleF0gOiB0b2RheS5nZXREYXRlKClcblxuICBjb25zdCBob3VyID0gaG91ckluZGV4ID4gLTEgPyArZGF0ZUl0ZW1zW2hvdXJJbmRleF0gOiB0b2RheS5nZXRIb3VycygpXG4gIGNvbnN0IG1pbnV0ZSA9IG1pbnV0ZXNJbmRleCA+IC0xID8gK2RhdGVJdGVtc1ttaW51dGVzSW5kZXhdIDogdG9kYXkuZ2V0TWludXRlcygpXG4gIGNvbnN0IHNlY29uZCA9IHNlY29uZHNJbmRleCA+IC0xID8gK2RhdGVJdGVtc1tzZWNvbmRzSW5kZXhdIDogdG9kYXkuZ2V0U2Vjb25kcygpXG5cbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kKVxufVxuXG5jbGFzcyBQYXJzZXIge1xuICBwcml2YXRlIHJ1bm5lclRpbWVvdXRBOiBhbnlcbiAgcHJpdmF0ZSBydW5uZXJUaW1lb3V0QjogYW55XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgU1RBUlRfQlVUVE9OX0NPTlRBSU5FUl9JRF9QQVRURVJOKVxuXG4gICAgICBpZiAoYnV0dG9uQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuYWRkU3RhcnRCdXR0b24oYnV0dG9uQ29udGFpbmVyKVxuXG4gICAgICAgIGNvbnN0IGluc3VyZXJzTGlzdFRvZ2dsZSA9IGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgSU5TVVJFUlNfTElTVF9UT0dHTEVfSURfUEFUVEVSTikgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgY29uc3QgbWVzc2FnZVR5cGVMaXN0VG9nZ2xlID0gZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuKGRvY3VtZW50LCBNRVNTQUdFX1RZUEVfTElTVF9UT0dHTEVfSURfUEFUVEVSTikgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICBtZXNzYWdlVHlwZUxpc3RUb2dnbGUuY2xpY2soKVxuICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcbiAgICAgICAgICBtZXNzYWdlVHlwZUxpc3RUb2dnbGUuY2xpY2soKVxuICAgICAgICAgIGluc3VyZXJzTGlzdFRvZ2dsZS5jbGljaygpXG4gICAgICAgICAgc2V0VGltZW91dCgoKTogdm9pZCA9PiB7IGluc3VyZXJzTGlzdFRvZ2dsZS5jbGljaygpIH0sIDUwMClcbiAgICAgICAgfSwgNTAwKVxuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgICAgIH1cbiAgICB9LCA1MDApXG5cblxuICAgIHRoaXMubG9nKCdQYXJzZXIgaW5pdGlhbGl6ZWQhJylcbiAgfVxuXG4gIHByaXZhdGUgbG9nKC4uLmFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGFyc2VyOiAnLCAuLi5hcmdzKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU3RhcnRCdXR0b24oY29udGFpbmVyOiBFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAn0JfQsNC/0YPRgdGC0LjRgtGMINGB0LHQvtGAINC00LDQvdC90YvRhSdcbiAgICBidXR0b24uaWQgPSBTVEFSVF9CVVRUT05fSURcbiAgICBidXR0b24uc3R5bGUubWFyZ2luTGVmdCA9ICcxMHB4J1xuICAgIGJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICBidXR0b24ub25jbGljayA9ICgpOiB2b2lkID0+IHsgdGhpcy5zdGFydFBhcnNlcigpIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKVxuXG4gICAgdGhpcy5sb2coJ0FkZGVkIHN0YXJ0IGJ1dHRvbiB0byBjb250YWluZXI6JywgY29udGFpbmVyKVxuICB9XG5cbiAgcHVibGljIHN0YXJ0UGFyc2VyKCk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdQYXJzZXIgc3RhcnRlZCEnKVxuXG4gICAgY29uc3QgbWVzc2FnZVR5cGVzID0gdGhpcy5nZXRNZXNzYWdlVHlwZXMoKVxuICAgIGNvbnN0IGluc3VyZXJzID0gdGhpcy5nZXRJbnN1cmVycygpXG5cbiAgICB0aGlzLmxvZygnTG9hZGVkIGZpbHRlciB2YWx1ZXM6JywgeyBtZXNzYWdlVHlwZXMsIGluc3VyZXJzIH0pXG4gICAgdGhpcy5sb2coJ1J1bm5pbmcgYSBxdWV1ZScpXG5cbiAgICBsZXQgaW5jcmVtZW50ID0gMFxuXG4gICAgbWVzc2FnZVR5cGVzLmZvckVhY2goKG1lc3NhZ2VUeXBlOiBzdHJpbmcsIG1lc3NhZ2VUeXBlSW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgaW5zdXJlcnMuZm9yRWFjaCgoaW5zdXJlcjogc3RyaW5nLCBpbnN1cmVySW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnJ1bm5lclRpbWVvdXRBID0gc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5sb2coJ0FwcGx5aW5nIGZpbHRlciB2YWx1ZXM6Jywge21lc3NhZ2VUeXBlLCBpbnN1cmVyfSlcbiAgICAgICAgICB0aGlzLnNldE1lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKVxuICAgICAgICAgIHRoaXMuc2V0SW5zdXJlcihpbnN1cmVyKVxuICAgICAgICAgIHRoaXMuZ2V0RmlsdGVyU3VibWl0QnV0dG9uKCkuY2xpY2soKVxuXG4gICAgICAgICAgdGhpcy5ydW5uZXJUaW1lb3V0QiA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2coJ0dldHRpbmcgZmlsZXMgbGlzdCcpXG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVzTGlzdCA9IHRoaXMuZ2V0RmlsZXNMaXN0KClcblxuICAgICAgICAgICAgaWYgKGZpbGVzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2coYEZvdW5kICR7ZmlsZXNMaXN0Lmxlbmd0aH0gZmlsZXNgKVxuICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSh0aGlzLmdldEZpbGVzTGlzdCgpLnBvcCgpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2coYE5vIGZpbGVzIGZvciBzZWxlY3RlZCBmaWx0ZXJzYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNMYXN0TWVzc2FnZVR5cGUgPSBtZXNzYWdlVHlwZUluZGV4ID09PSBtZXNzYWdlVHlwZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgY29uc3QgaXNMYXN0SW5zdXJlciA9IGluc3VyZXJJbmRleCA9PT0gaW5zdXJlcnMubGVuZ3RoIC0gMVxuXG4gICAgICAgICAgICBpZiAoaXNMYXN0TWVzc2FnZVR5cGUgJiYgaXNMYXN0SW5zdXJlcikge1xuICAgICAgICAgICAgICBhbGVydCgn0JfQsNCz0YDRg9C30LrQsCDRhNCw0LnQu9C+0LIg0LfQsNCy0LXRgNGI0LXQvdCwIScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgUEFSQ0VMU19MT0FEX1RJTUUpXG4gICAgICAgIH0sIGluY3JlbWVudCAqIChQQVJDRUxTX0xPQURfVElNRSArIEZJTFRFUlNfQ0hBTkdFX0lOVEVSVkFMKSlcblxuICAgICAgICBpbmNyZW1lbnQrK1xuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cblxuICBwdWJsaWMgc3RvcFBhcnNlcigpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5ydW5uZXJUaW1lb3V0QSlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5ydW5uZXJUaW1lb3V0QilcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVzc2FnZVR5cGVTdWdnZXN0aW9ucygpOiBDaGlsZE5vZGVbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuKGRvY3VtZW50LCBNRVNTQUdFX1RZUEVTX0xJU1RfSURfUEFUVEVSTiwgJ3VsJykuY2hpbGROb2RlcylcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXNzYWdlVHlwZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlU3VnZ2VzdGlvbnMoKVxuICAgICAgLm1hcCgoZWxlbWVudDogRWxlbWVudCk6IHN0cmluZyA9PiBlbGVtZW50LnRleHRDb250ZW50KVxuICAgICAgLmZpbHRlcigobWVzc2FnZVR5cGU6IHN0cmluZyk6IGJvb2xlYW4gPT4gQUxMT1dFRF9NRVNTQUdFX1RZUEVTLmluY2x1ZGVzKG1lc3NhZ2VUeXBlKSlcbiAgfVxuXG4gIHB1YmxpYyBzZXRNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldEluc3VyZXJzU3VnZ2VzdGlvbnMoKVxuICAgIGNvbnN0IG1hdGNoaW5nU3VnZ2VzdGlvbiA9IHN1Z2dlc3Rpb25zLmZpbmQoKGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuID0+IGVsZW1lbnQudGV4dENvbnRlbnQgPT09IG1lc3NhZ2VUeXBlKSBhcyBIVE1MRWxlbWVudFxuXG4gICAgbWF0Y2hpbmdTdWdnZXN0aW9uLmNsaWNrKClcbiAgICB0aGlzLmxvZygnU2V0IG1lc3NhZ2UgdHlwZSBmaWx0ZXIgdG86JywgbWVzc2FnZVR5cGUpXG4gIH1cblxuICBwcml2YXRlIGdldEluc3VyZXJzU3VnZ2VzdGlvbnMoKTogQ2hpbGROb2RlW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGdldEVsZW1lbnRCeUlkUGF0dGVybihkb2N1bWVudCwgSU5TVVJFUlNfTElTVF9JRF9QQVRURVJOLCAndWwnKS5jaGlsZE5vZGVzKVxuICB9XG5cbiAgcHVibGljIGdldEluc3VyZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN1cmVyc1N1Z2dlc3Rpb25zKClcbiAgICAgIC5tYXAoKGVsZW1lbnQ6IEVsZW1lbnQpOiBzdHJpbmcgPT4gZWxlbWVudC50ZXh0Q29udGVudClcbiAgfVxuXG4gIHB1YmxpYyBzZXRJbnN1cmVyKGluc3VyZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRJbnN1cmVyc1N1Z2dlc3Rpb25zKClcbiAgICBjb25zdCBtYXRjaGluZ1N1Z2dlc3Rpb24gPSBzdWdnZXN0aW9ucy5maW5kKChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiBlbGVtZW50LnRleHRDb250ZW50ID09PSBpbnN1cmVyKSBhcyBIVE1MRWxlbWVudFxuXG4gICAgbWF0Y2hpbmdTdWdnZXN0aW9uLmNsaWNrKClcbiAgICB0aGlzLmxvZygnU2V0IGluc3VyZXIgZmlsdGVyIHRvOicsIGluc3VyZXIpXG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsdGVyU3VibWl0QnV0dG9uKCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgY29uc3QgZmlsdGVyc1BhbmVsID0gZ2V0RWxlbWVudEJ5SWRQYXR0ZXJuKGRvY3VtZW50LCBGSUxURVJTX1BBTkVMX0lEX1BBVFRFUk4pIGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3QgYnV0dG9ucyA9IGZpbHRlcnNQYW5lbC5xdWVyeVNlbGVjdG9yQWxsKCdhLngtYnRuJylcblxuICAgIGlmIChidXR0b25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGJ1dHRvbnNbMF0gYXMgSFRNTEVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldERhdGVGcm9tRWxlbWVudChub2RlOiBOb2RlKTogRGF0ZSB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0RhdGVCeUZvcm1hdChub2RlLnRleHRDb250ZW50LCBEQVRFX0ZPUk1BVClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nKCdFbXB0eSBEYXRlIENlbGwgVGV4dCEnLCBub2RlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZygnRGF0ZSBub2RlIG5vdCBmb3VuZCEnLCBub2RlKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwdWJsaWMgZ2V0RmlsZXNMaXN0KCk6IGFueVtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShnZXRFbGVtZW50QnlJZFBhdHRlcm4oZG9jdW1lbnQsIFBBUkNFTFNfTElTVF9JRF9QQVRURVJOKS5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZScpKVxuICAgICAgLm1hcCgodGFibGVFbGVtZW50OiBIVE1MRWxlbWVudCk6IElGaWxlRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGFibGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylcbiAgICAgICAgY29uc3QgdXJsQ2VsbCA9IGNlbGxzW0ZJTEVfTElOS19DRUxMX0lOREVYXVxuICAgICAgICBjb25zdCBkYXRlQ2VsbCA9IGNlbGxzW0ZJTEVfU0VORF9EQVRFX0NFTExfSU5ERVhdXG4gICAgICAgIGNvbnN0IGxpbmsgPSB1cmxDZWxsID8gdXJsQ2VsbC5xdWVyeVNlbGVjdG9yKCdhJykgOiBudWxsXG5cbiAgICAgICAgY29uc3QgdXJsID0gbGluayA/IGxpbmsuaHJlZiA6IG51bGxcbiAgICAgICAgY29uc3Qgc2VuZERhdGUgPSBkYXRlQ2VsbCA/IHRoaXMuZ2V0RGF0ZUZyb21FbGVtZW50KGRhdGVDZWxsLmZpcnN0Q2hpbGQpIDogbmV3IERhdGUoKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHNlbmREYXRlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChmaWxlOiBJRmlsZURhdGEpOiBib29sZWFuID0+ICEhZmlsZS51cmwpXG4gICAgICAuc29ydCgoYTogSUZpbGVEYXRhLCBiOiBJRmlsZURhdGEpOiBudW1iZXIgPT4gYS5zZW5kRGF0ZS5nZXRUaW1lKCkgLSBiLnNlbmREYXRlLmdldFRpbWUoKSlcbiAgfVxuXG4gIHByaXZhdGUgZG93bmxvYWRGaWxlKGZpbGU6IElGaWxlRGF0YSk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdmaWxlIGRvd25sb2FkID4+JywgZmlsZSlcbiAgICBpZiAoZmlsZS51cmwpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGZpbGUudXJsLCAnX2JsYW5rJylcbiAgICB9XG4gIH1cbn1cblxuKCh3aW5kb3c6IGFueSk6IHZvaWQgPT4ge1xuICB3aW5kb3cucGFyc2VyID0gbmV3IFBhcnNlcigpXG4gIHdpbmRvdy5nZXRFbGVtZW50QnlJZFBhdHRlcm4gPSBnZXRFbGVtZW50QnlJZFBhdHRlcm5cbn0pKHdpbmRvdylcbiJdLCJzb3VyY2VSb290IjoiIn0=