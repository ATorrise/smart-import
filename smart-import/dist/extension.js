(()=>{"use strict";var e={265:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,i)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.activate=function(e){const t=s.commands.registerCommand("extension.autoImport",(async e=>{const t=s.window.activeTextEditor;if(!t||!e)return void s.window.showErrorMessage("No active editor or file selected");const r=a.relative(a.dirname(t.document.uri.fsPath),e.fsPath),o=`import something from "${r.replace(/\\/g,"/")}";\n`;await t.edit((e=>{e.insert(new s.Position(0,0),o)})),s.window.showInformationMessage(`Imported ${r}`)}));e.subscriptions.push(t)},t.deactivate=function(){};const s=n(r(398)),a=n(r(928))},398:e=>{e.exports=require("vscode")},928:e=>{e.exports=require("path")}},t={},r=function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(265);module.exports=r})();