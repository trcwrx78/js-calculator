(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_torrencecole_builds_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);function Math(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_Users_torrencecole_builds_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),lastNum=_useState2[0],setLastNum=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState4=Object(_Users_torrencecole_builds_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),calculation=_useState4[0],setCalculation=_useState4[1],nums=[7,8,9,4,5,6,1,2,3,0],numNames=["seven","eight","nine","four","five","six","one","two","three","zero"],signs=["/","*","+","-"],signNames=["divide","multiply","add","subtract"],numButtons=nums.map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{key:e,id:numNames[t],className:"btn",onClick:handleClick},e)})),opButtons=signs.map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{key:e,id:signNames[t],className:"btn btn-ops",onClick:handleClick},e)}));function handleClick(e){var innerText=e.target.innerText;switch(innerText){case"AC":setCalculation("0");break;case"=":var doCalc=eval(calculation);setCalculation(doCalc);break;case".":var re=calculation.split(/[+\-*/]/),last=re.slice(-1)[0];last.includes(".")||setCalculation((function(e){return e+"."}));break;default:var _e=void 0;if(signs.includes(innerText))if(signs.includes(lastNum)&&"-"!==innerText){var _last=calculation.split("").reverse().findIndex((function(e){return nums.includes(+e)}));_e=calculation.slice(0,_last+2)+" ".concat(innerText," ")}else _e="".concat(calculation," ").concat(innerText," ");else _e="0"===calculation?innerText:calculation+innerText;setCalculation(_e),setLastNum(innerText)}}return{numButtons:numButtons,opButtons:opButtons,calculation:calculation,handleClick:handleClick}}__webpack_exports__.a=Math},function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var _=a(0),n=a.n(_),l=a(3),c=a.n(l),s=a(4);a(10);var r=function(){var e=Object(s.a)(),t=e.numButtons,a=e.opButtons,_=e.calculation,l=e.handleClick;return n.a.createElement("div",{className:"calculator"},n.a.createElement("h1",null,"fcc calculator"),n.a.createElement("div",{id:"display"},n.a.createElement("p",null,_)),n.a.createElement("div",{className:"container"},n.a.createElement("button",{id:"clear",className:"btn btn-clear",onClick:l},"AC"),t,a,n.a.createElement("button",{id:"decimal",className:"btn",onClick:l},"."),n.a.createElement("button",{id:"equals",className:"btn btn-equals",onClick:l},"=")))};c.a.render(n.a.createElement(r,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f1e08806.chunk.js.map