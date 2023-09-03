/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./list.png */ "./src/list.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  font-family: "Barlow", sans-serif;
  font-family: "Dosis", sans-serif;
  font-family: "Lobster", cursive;
  font-family: "Montserrat", sans-serif;
  font-family: "Nunito", sans-serif;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

h1,
h3 > p {
  font-family: "Dancing Script", cursive;
  font-family: "Dosis", sans-serif;
  font-family: "Lobster", cursive;
  font-family: "Montserrat", sans-serif;
  font-family: "Nunito", sans-serif;
  font-family: "Roboto", sans-serif;
}

input {
  outline: 1px solid black;
  border: 1px solid black;
}

button:focus-visible {
  outline-style: solid;
  outline-color: black;
}

body {
  background-color: rgb(255, 74, 74);
  display: grid;
  grid-template-rows: 8vh 85vh 3rem;
}

.header {
  background-color: rgb(255, 74, 74);
  color: white;
  justify-self: stretch;
  text-align: center;
  font-size: 1.3rem;
  align-self: center;
}

.main {
  align-self: stretch;
  background-color: white;
  position: relative;
}

.todos {
  display: grid;
  grid-template-columns: 7fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: rgb(252, 122, 122);
  color: white;
  margin: 0.5rem;
  border-radius: 0.5rem;
  position: relative;
}

.todos input[type="text"] {
  font-size: 1em;
  background-color: rgb(255 156 156);
  border: none;
  color: white;
  outline: none;
  position: absolute;
  left: 0.5rem;
  grid-row: span 2;
  outline: none;
}

.list-div input[type="text"] {
  font-size: 1em;
  background-color: rgb(255, 100, 100);
  border: none;
  color: white;
  outline: none;
  position: absolute;
  left: 1.2rem;
  grid-row: span 2;
  outline: none;
  justify-self: center;
  font-weight: 700;
  width: 50%;
}

.main-modal input[type="time"] {
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
  outline: none;
  font-size: 1.5rem;
}

.name-prop {
  margin-left: 0.5rem;
  grid-row: span 2;
  align-self: center;
}

.date-prop {
  font-size: 1.3rem;
  align-self: center;
  position: relative;
  justify-self: end;
  margin-right: 0.2rem;
  font-weight: 900;
}

.date-prop:hover,
.name-prop:hover {
  background-color: rgb(255, 169, 169);
}

.notes-text:hover {
  background-color: rgb(255, 223, 223);
}

.priority-prop {
  font-size: 1rem;
  align-self: center;
  justify-self: end;
  color: rgb(0, 0, 0);
  padding: 0.1rem 0.25rem 0.1rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
}

.priority-prop:hover {
  background-color: rgb(250, 180, 180);
}

.todo-buttons {
  align-self: end;
  justify-self: end;
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  margin: 0.2rem;
}

.change-list,
.delete-todo,
.notes-button {
  margin: 0.1rem;
  width: 2rem;
  height: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  color: white;
  background-color: rgb(255, 74, 74);
  z-index: 2;
}

.notes-button {
  padding-bottom: 0.1rem;
}

.change-list:hover,
.delete-todo:hover,
.notes-button:hover {
  background-color: rgb(255, 221, 221);
}

.change-list:active,
.delete-todo:active,
.notes-button:active {
  background-color: rgb(255, 200, 200);
}

.notes-button {
  font-size: 1.2rem;
  justify-self: end;
}

.notes-text,
.notes-edit {
  width: 14rem;
  height: 6rem;
  font-size: 1rem;
  padding: 0.2rem;
  position: absolute;
  top: 2.2rem;
  right: 2rem;
  background-color: rgb(255, 155, 155);
  color: rgb(39, 39, 39);
  border: 0.01rem solid rgb(97, 97, 97);
  border-radius: 0.5rem;
  overflow: auto;
  z-index: 3;
}

.list {
  font-size: 2rem;
  color: rgb(46, 46, 46);
  margin: 0.5rem;
  padding: 4rem;
}

.footer {
  background-color: rgb(255, 74, 74);
}

.toDoButton {
  position: absolute;
  bottom: 3rem;
  right: 5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: rgb(255, 74, 74);
  color: white;
  font-size: 2rem;
  font-weight: 900;
}

.toDoButton:hover {
  background-color: rgb(255, 0, 0);
}

.toDoButton:active {
  background-color: rgb(255, 110, 110);
}

.new-list {
  position: absolute;
  bottom: 3rem;
  right: 1.8rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 2rem;
  font-weight: 900;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
  background-color: rgb(255, 74, 74);
}

.new-list:hover {
  background-color: rgb(255, 0, 0);
}

.new-list:active {
  background-color: rgb(255, 110, 110);
}

h3 {
  height: 3rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 > p {
  font-size: 1rem;
  font-weight: 500;
}

.github {
}

.github > img {
  width: 3rem;
  margin-bottom: 0;
}

.main-modal,
.list-options,
.new-list-modal {
  position: absolute;
  top: 10rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  height: 15vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 1rem 2.5rem;
  background-color: rgb(255 156 156);
  color: rgb(39, 39, 39);
  border: 0.01rem solid rgb(97, 97, 97);
  border-radius: 0.5rem;
}

.new-list-modal h2 {
  justify-self: center;
  font-size: 2rem;
}

.new-list-modal input {
  align-self: center;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.5rem;
  padding-left: 0.2rem;
}

.list-options {
  display: none;
  padding: 0;
  /* width: calc(40vw + 2rem);
  height: calc(10vh + 2rem); */
  grid-template-rows: 2fr 1fr 1fr;
}

.list-options h2 {
  color: white;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
}

.main-modal button,
.list-options button {
  border: none;
  background-color: rgb(255, 74, 74);
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.2rem;
}

.main-modal button:hover,
.list-options button:hover {
  background-color: rgb(255, 0, 0);
}

.main-modal button:active,
.list-options button:active {
  background-color: rgb(255, 110, 110);
}

.list-options button {
  border-radius: 0;
}

.list-options button:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.list-options button:last-child {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.main-modal textarea {
  padding: 0.2rem;
  border-radius: 0.5rem;
}

.main-modal textarea:focus {
  outline: 1px solid rgb(39, 39, 39);
}

.main-modal > h2 {
  justify-self: center;
  font-weight: 500;
  color: rgb(37, 37, 37);
  font-size: 2rem;
}

.name-input {
  font-size: 1.5rem;
  align-self: center;
  border-radius: 0.2rem;
  background-color: white;
  color: rgb(51, 51, 51);
}

.notes-area {
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.radios {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 0.2rem;
}

.radios > input {
  justify-self: start;
}

.change-priority {
  position: absolute;
  top: 1.7rem;
  /* right: 0.6rem; */
  display: grid;
  grid-template-rows: 1fr;
  background-color: rgb(255, 223, 223);
  color: rgb(39, 39, 39);
  border: 0.01rem solid rgb(97, 97, 97);
  border-radius: 0.5rem;
  z-index: 3;
}

.change-priority button {
  border: none;
  background-color: white;
  padding: 0.5rem;
}

.change-priority button:nth-child(1),
.set-priority .priority-button:nth-child(1) {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: lime;
}

.change-priority button:nth-child(1):hover,
.set-priority .priority-button:nth-child(1):hover {
  background-color: rgb(3, 190, 3);
}

.change-priority button:nth-child(1):active,
.set-priority .priority-button:nth-child(1):active {
  background-color: rgb(37, 255, 37);
}

.change-priority button:nth-child(2),
.set-priority .priority-button:nth-child(2) {
  background-color: yellow;
}

.change-priority button:nth-child(2):hover,
.set-priority .priority-button:nth-child(2):hover {
  background-color: rgb(194, 194, 0);
}

.change-priority button:nth-child(2):active,
.set-priority .priority-button:nth-child(2):active {
  background-color: rgb(255, 255, 48);
}

.change-priority button:nth-child(3),
.set-priority .priority-button:nth-child(3) {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: rgb(255 0 0);
}

.change-priority button:nth-child(3):hover,
.set-priority .priority-button:nth-child(3):hover {
  background-color: rgb(196, 0, 0);
}

.change-priority button:nth-child(3):active,
.set-priority .priority-button:nth-child(3):active {
  background-color: rgb(255, 29, 29);
}

.set-priority {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.2rem;
}

.set-priority button {
  align-self: center;
  justify-self: stretch;
  background-color: rgb(255, 74, 74);
  color: white;
  padding: 0.25rem;
  border-radius: 0.5rem;
  font-weight: 900;
}

.change-date {
  position: absolute;
  top: 2rem;
  right: 8vw;
  display: grid;
  z-index: 3;
  background-color: rgb(255 161 161);
  border: 0.01rem solid rgb(97, 97, 97);
  border-radius: 0.5rem;
  width: 7rem;
  outline: none;
}

.change-date input {
  justify-self: center;
  background-color: rgb(255 161 161);
  border: none;
  outline: none;
  color: white;
  font-weight: 900;
}

.change-date button {
  background-color: rgb(255, 74, 74);
  color: white;
  padding: 0.25rem;
  border-radius: 0.5rem;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border: none;
  justify-self: stretch;
  margin-top: 0.2rem;
  font-weight: 900;
}

.clock-icon {
  width: 4rem;
  height: 4rem;
}

.all-lists {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr;
  background-color: rgb(255, 166, 166);
  position: relative;
}

.all-lists h2 {
  position: absolute;
  left: 0.5rem;
}

.all-lists button {
  border: none;
  background-color: rgb(255, 100, 100);
  color: white;
  font-size: 1rem;
  font-weight: 900;
  margin: 0 0.2rem;
}

.list-div {
  background-color: rgb(255, 100, 100);
  margin: 0.5rem 0.2rem 0 0.2rem;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  font-size: 1rem;
  position: relative;
  border-radius: 0.2rem;
}

.list-name {
  justify-self: stretch;
  padding-left: 1rem;
}

.list-div .edit-list {
  font-size: 0.8rem;
}

.kebab-list {
  position: relative;
  border-radius: 50%;
  align-self: end;
  justify-self: end;
}

.kebab-list:hover {
  background-color: red;
}

.kebab-icon {
  width: 1rem;
  justify-self: center;
  align-self: center;
}

.kebab-modal {
  position: absolute;
  top: 1.2rem;
  background-color: rgb(255, 223, 223);
  color: rgb(39, 39, 39);
  border: 0.01rem solid rgb(97, 97, 97);
  border-radius: 0.5rem;
  /* padding: 0.2rem; */
  z-index: 3;
  display: grid;
  outline: none;
}

.kebab-modal .delete-list,
.kebab-modal .edit-list {
  background-color: rgb(255, 74, 74);
  justify-self: stretch;
  font-size: 1rem;
  padding: 0.2rem;
  margin: 0;
  outline: none;
}

.kebab-modal .delete-list {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.kebab-modal .edit-list {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.current {
  background-color: red;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,iCAAiC;EACjC,gCAAgC;EAChC,+BAA+B;EAC/B,qCAAqC;EACrC,iCAAiC;EACjC,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;;EAEE,sCAAsC;EACtC,gCAAgC;EAChC,+BAA+B;EAC/B,qCAAqC;EACrC,iCAAiC;EACjC,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,2BAA2B;EAC3B,oCAAoC;EACpC,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,oCAAoC;EACpC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,oBAAoB;EACpB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,cAAc;AAChB;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,cAAc;EACd,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,kCAAkC;EAClC,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC,sBAAsB;EACtB,qCAAqC;EACrC,qBAAqB;EACrB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,oEAA8C;EAC9C,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;AACA;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;;;EAGE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;EAC3B,oBAAoB;EACpB,kCAAkC;EAClC,sBAAsB;EACtB,qCAAqC;EACrC,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV;8BAC4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,oCAAoC;EACpC,sBAAsB;EACtB,qCAAqC;EACrC,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;;EAEE,8BAA8B;EAC9B,+BAA+B;EAC/B,sBAAsB;AACxB;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;;EAEE,iCAAiC;EACjC,kCAAkC;EAClC,8BAA8B;AAChC;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,kCAAkC;EAClC,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,aAAa;EACb,UAAU;EACV,kCAAkC;EAClC,qCAAqC;EACrC,qBAAqB;EACrB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,0BAA0B;EAC1B,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,oCAAoC;EACpC,sBAAsB;EACtB,qCAAqC;EACrC,qBAAqB;EACrB,qBAAqB;EACrB,UAAU;EACV,aAAa;EACb,aAAa;AACf;;AAEA;;EAEE,kCAAkC;EAClC,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,SAAS;EACT,aAAa;AACf;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Barlow\", sans-serif;\n  font-family: \"Dosis\", sans-serif;\n  font-family: \"Lobster\", cursive;\n  font-family: \"Montserrat\", sans-serif;\n  font-family: \"Nunito\", sans-serif;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n}\n\nh1,\nh3 > p {\n  font-family: \"Dancing Script\", cursive;\n  font-family: \"Dosis\", sans-serif;\n  font-family: \"Lobster\", cursive;\n  font-family: \"Montserrat\", sans-serif;\n  font-family: \"Nunito\", sans-serif;\n  font-family: \"Roboto\", sans-serif;\n}\n\ninput {\n  outline: 1px solid black;\n  border: 1px solid black;\n}\n\nbutton:focus-visible {\n  outline-style: solid;\n  outline-color: black;\n}\n\nbody {\n  background-color: rgb(255, 74, 74);\n  display: grid;\n  grid-template-rows: 8vh 85vh 3rem;\n}\n\n.header {\n  background-color: rgb(255, 74, 74);\n  color: white;\n  justify-self: stretch;\n  text-align: center;\n  font-size: 1.3rem;\n  align-self: center;\n}\n\n.main {\n  align-self: stretch;\n  background-color: white;\n  position: relative;\n}\n\n.todos {\n  display: grid;\n  grid-template-columns: 7fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  background-color: rgb(252, 122, 122);\n  color: white;\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  position: relative;\n}\n\n.todos input[type=\"text\"] {\n  font-size: 1em;\n  background-color: rgb(255 156 156);\n  border: none;\n  color: white;\n  outline: none;\n  position: absolute;\n  left: 0.5rem;\n  grid-row: span 2;\n  outline: none;\n}\n\n.list-div input[type=\"text\"] {\n  font-size: 1em;\n  background-color: rgb(255, 100, 100);\n  border: none;\n  color: white;\n  outline: none;\n  position: absolute;\n  left: 1.2rem;\n  grid-row: span 2;\n  outline: none;\n  justify-self: center;\n  font-weight: 700;\n  width: 50%;\n}\n\n.main-modal input[type=\"time\"] {\n  border-radius: 0.5rem;\n  margin-bottom: 0.2rem;\n  outline: none;\n  font-size: 1.5rem;\n}\n\n.name-prop {\n  margin-left: 0.5rem;\n  grid-row: span 2;\n  align-self: center;\n}\n\n.date-prop {\n  font-size: 1.3rem;\n  align-self: center;\n  position: relative;\n  justify-self: end;\n  margin-right: 0.2rem;\n  font-weight: 900;\n}\n\n.date-prop:hover,\n.name-prop:hover {\n  background-color: rgb(255, 169, 169);\n}\n\n.notes-text:hover {\n  background-color: rgb(255, 223, 223);\n}\n\n.priority-prop {\n  font-size: 1rem;\n  align-self: center;\n  justify-self: end;\n  color: rgb(0, 0, 0);\n  padding: 0.1rem 0.25rem 0.1rem;\n  margin: 0.25rem;\n  border-radius: 0.5rem;\n}\n\n.priority-prop:hover {\n  background-color: rgb(250, 180, 180);\n}\n\n.todo-buttons {\n  align-self: end;\n  justify-self: end;\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  position: relative;\n  margin: 0.2rem;\n}\n\n.change-list,\n.delete-todo,\n.notes-button {\n  margin: 0.1rem;\n  width: 2rem;\n  height: 1.2rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: white;\n  background-color: rgb(255, 74, 74);\n  z-index: 2;\n}\n\n.notes-button {\n  padding-bottom: 0.1rem;\n}\n\n.change-list:hover,\n.delete-todo:hover,\n.notes-button:hover {\n  background-color: rgb(255, 221, 221);\n}\n\n.change-list:active,\n.delete-todo:active,\n.notes-button:active {\n  background-color: rgb(255, 200, 200);\n}\n\n.notes-button {\n  font-size: 1.2rem;\n  justify-self: end;\n}\n\n.notes-text,\n.notes-edit {\n  width: 14rem;\n  height: 6rem;\n  font-size: 1rem;\n  padding: 0.2rem;\n  position: absolute;\n  top: 2.2rem;\n  right: 2rem;\n  background-color: rgb(255, 155, 155);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  overflow: auto;\n  z-index: 3;\n}\n\n.list {\n  font-size: 2rem;\n  color: rgb(46, 46, 46);\n  margin: 0.5rem;\n  padding: 4rem;\n}\n\n.footer {\n  background-color: rgb(255, 74, 74);\n}\n\n.toDoButton {\n  position: absolute;\n  bottom: 3rem;\n  right: 5rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(255, 74, 74);\n  color: white;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n.toDoButton:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.toDoButton:active {\n  background-color: rgb(255, 110, 110);\n}\n\n.new-list {\n  position: absolute;\n  bottom: 3rem;\n  right: 1.8rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-size: 2rem;\n  font-weight: 900;\n  background: url(\"./list.png\") no-repeat center;\n  background-color: rgb(255, 74, 74);\n}\n\n.new-list:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.new-list:active {\n  background-color: rgb(255, 110, 110);\n}\n\nh3 {\n  height: 3rem;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh3 > p {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.github {\n}\n\n.github > img {\n  width: 3rem;\n  margin-bottom: 0;\n}\n\n.main-modal,\n.list-options,\n.new-list-modal {\n  position: absolute;\n  top: 10rem;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 30vw;\n  height: 15vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  padding: 1rem 2.5rem;\n  background-color: rgb(255 156 156);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n}\n\n.new-list-modal h2 {\n  justify-self: center;\n  font-size: 2rem;\n}\n\n.new-list-modal input {\n  align-self: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  border-radius: 0.5rem;\n  padding-left: 0.2rem;\n}\n\n.list-options {\n  display: none;\n  padding: 0;\n  /* width: calc(40vw + 2rem);\n  height: calc(10vh + 2rem); */\n  grid-template-rows: 2fr 1fr 1fr;\n}\n\n.list-options h2 {\n  color: white;\n  justify-self: center;\n  align-self: center;\n  font-size: 2rem;\n}\n\n.main-modal button,\n.list-options button {\n  border: none;\n  background-color: rgb(255, 74, 74);\n  color: white;\n  font-weight: 500;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n\n.main-modal button:hover,\n.list-options button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.main-modal button:active,\n.list-options button:active {\n  background-color: rgb(255, 110, 110);\n}\n\n.list-options button {\n  border-radius: 0;\n}\n\n.list-options button:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.list-options button:last-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.main-modal textarea {\n  padding: 0.2rem;\n  border-radius: 0.5rem;\n}\n\n.main-modal textarea:focus {\n  outline: 1px solid rgb(39, 39, 39);\n}\n\n.main-modal > h2 {\n  justify-self: center;\n  font-weight: 500;\n  color: rgb(37, 37, 37);\n  font-size: 2rem;\n}\n\n.name-input {\n  font-size: 1.5rem;\n  align-self: center;\n  border-radius: 0.2rem;\n  background-color: white;\n  color: rgb(51, 51, 51);\n}\n\n.notes-area {\n  margin-bottom: 0.3rem;\n  font-size: 1rem;\n}\n\n.radios {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-bottom: 0.2rem;\n}\n\n.radios > input {\n  justify-self: start;\n}\n\n.change-priority {\n  position: absolute;\n  top: 1.7rem;\n  /* right: 0.6rem; */\n  display: grid;\n  grid-template-rows: 1fr;\n  background-color: rgb(255, 223, 223);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  z-index: 3;\n}\n\n.change-priority button {\n  border: none;\n  background-color: white;\n  padding: 0.5rem;\n}\n\n.change-priority button:nth-child(1),\n.set-priority .priority-button:nth-child(1) {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  background-color: lime;\n}\n\n.change-priority button:nth-child(1):hover,\n.set-priority .priority-button:nth-child(1):hover {\n  background-color: rgb(3, 190, 3);\n}\n\n.change-priority button:nth-child(1):active,\n.set-priority .priority-button:nth-child(1):active {\n  background-color: rgb(37, 255, 37);\n}\n\n.change-priority button:nth-child(2),\n.set-priority .priority-button:nth-child(2) {\n  background-color: yellow;\n}\n\n.change-priority button:nth-child(2):hover,\n.set-priority .priority-button:nth-child(2):hover {\n  background-color: rgb(194, 194, 0);\n}\n\n.change-priority button:nth-child(2):active,\n.set-priority .priority-button:nth-child(2):active {\n  background-color: rgb(255, 255, 48);\n}\n\n.change-priority button:nth-child(3),\n.set-priority .priority-button:nth-child(3) {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  background-color: rgb(255 0 0);\n}\n\n.change-priority button:nth-child(3):hover,\n.set-priority .priority-button:nth-child(3):hover {\n  background-color: rgb(196, 0, 0);\n}\n\n.change-priority button:nth-child(3):active,\n.set-priority .priority-button:nth-child(3):active {\n  background-color: rgb(255, 29, 29);\n}\n\n.set-priority {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.2rem;\n}\n\n.set-priority button {\n  align-self: center;\n  justify-self: stretch;\n  background-color: rgb(255, 74, 74);\n  color: white;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n  font-weight: 900;\n}\n\n.change-date {\n  position: absolute;\n  top: 2rem;\n  right: 8vw;\n  display: grid;\n  z-index: 3;\n  background-color: rgb(255 161 161);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  width: 7rem;\n  outline: none;\n}\n\n.change-date input {\n  justify-self: center;\n  background-color: rgb(255 161 161);\n  border: none;\n  outline: none;\n  color: white;\n  font-weight: 900;\n}\n\n.change-date button {\n  background-color: rgb(255, 74, 74);\n  color: white;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border: none;\n  justify-self: stretch;\n  margin-top: 0.2rem;\n  font-weight: 900;\n}\n\n.clock-icon {\n  width: 4rem;\n  height: 4rem;\n}\n\n.all-lists {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: 1fr;\n  background-color: rgb(255, 166, 166);\n  position: relative;\n}\n\n.all-lists h2 {\n  position: absolute;\n  left: 0.5rem;\n}\n\n.all-lists button {\n  border: none;\n  background-color: rgb(255, 100, 100);\n  color: white;\n  font-size: 1rem;\n  font-weight: 900;\n  margin: 0 0.2rem;\n}\n\n.list-div {\n  background-color: rgb(255, 100, 100);\n  margin: 0.5rem 0.2rem 0 0.2rem;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  font-size: 1rem;\n  position: relative;\n  border-radius: 0.2rem;\n}\n\n.list-name {\n  justify-self: stretch;\n  padding-left: 1rem;\n}\n\n.list-div .edit-list {\n  font-size: 0.8rem;\n}\n\n.kebab-list {\n  position: relative;\n  border-radius: 50%;\n  align-self: end;\n  justify-self: end;\n}\n\n.kebab-list:hover {\n  background-color: red;\n}\n\n.kebab-icon {\n  width: 1rem;\n  justify-self: center;\n  align-self: center;\n}\n\n.kebab-modal {\n  position: absolute;\n  top: 1.2rem;\n  background-color: rgb(255, 223, 223);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  /* padding: 0.2rem; */\n  z-index: 3;\n  display: grid;\n  outline: none;\n}\n\n.kebab-modal .delete-list,\n.kebab-modal .edit-list {\n  background-color: rgb(255, 74, 74);\n  justify-self: stretch;\n  font-size: 1rem;\n  padding: 0.2rem;\n  margin: 0;\n  outline: none;\n}\n\n.kebab-modal .delete-list {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.kebab-modal .edit-list {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.current {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoForm: () => (/* binding */ todoForm)
/* harmony export */ });
const todoForm = (name, dueDate, priority, notes) => {
  let list;
  return { name, dueDate, priority, notes, list };
};


/***/ }),

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewList: () => (/* binding */ createNewList),
/* harmony export */   domGeneration: () => (/* binding */ domGeneration),
/* harmony export */   listGeneration: () => (/* binding */ listGeneration),
/* harmony export */   newToDoModal: () => (/* binding */ newToDoModal),
/* harmony export */   setList: () => (/* binding */ setList),
/* harmony export */   showActiveList: () => (/* binding */ showActiveList),
/* harmony export */   showAllLists: () => (/* binding */ showAllLists),
/* harmony export */   showList: () => (/* binding */ showList)
/* harmony export */ });
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-todo */ "./src/edit-todo.js");
/* harmony import */ var _list_stuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-stuff */ "./src/list-stuff.js");
/* harmony import */ var _removeToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeToDo */ "./src/removeToDo.js");
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");
/* harmony import */ var _list_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.png */ "./src/list.png");
/* harmony import */ var _chickin_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chickin.png */ "./src/chickin.png");
/* harmony import */ var _kebab_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kebab.png */ "./src/kebab.png");








const domGeneration = () => {
  const mainDiv = document.querySelector(".main");
  const addTodo = document.createElement("button");
  addTodo.textContent = "+";
  addTodo.classList.add("toDoButton");
  mainDiv.appendChild(addTodo);

  const newListButton = document.createElement("button");
  const listIcon = new Image();
  listIcon.src = _list_png__WEBPACK_IMPORTED_MODULE_4__;
  newListButton.classList.add("new-list");
  mainDiv.appendChild(newListButton);
  const allListDivs = document.createElement("div");
  allListDivs.classList.add("all-lists");
  mainDiv.appendChild(allListDivs);

  const toDoList = document.createElement("div");
  toDoList.classList.add("list");
  mainDiv.appendChild(toDoList);

  const chickinIcon = new Image();
  chickinIcon.src = _chickin_png__WEBPACK_IMPORTED_MODULE_5__;
  const gitHub = document.querySelector(".github");
  gitHub.appendChild(chickinIcon);

  chickinIcon.addEventListener("mouseover", () => {
    chickinIcon.style.transform = "rotate(45deg)";
  });

  chickinIcon.addEventListener("mouseout", () => {
    chickinIcon.removeAttribute("style", "transform");
  });
};

const showList = (aList) => {
  const toDoList = document.querySelector(".list");
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
  toDoList.textContent = "To-dos: ";
  aList.forEach((item) => {
    const newDom = document.createElement("div");
    newDom.classList.add("todos");

    const nameDiv = document.createElement("div");
    nameDiv.textContent = item.name;
    nameDiv.classList.add("name-prop");
    nameDiv.addEventListener("click", () => {
      (0,_edit_todo__WEBPACK_IMPORTED_MODULE_0__.editToDo)(nameDiv, item);
    });
    newDom.appendChild(nameDiv);

    const dueDateDiv = document.createElement("div");
    dueDateDiv.textContent = item.dueDate + "h";
    dueDateDiv.classList.add("date-prop");

    dueDateDiv.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (document.querySelector(".change-date")) {
        document.querySelector(".change-date").remove();
      } else {
        const dueDatePrompt = document.createElement("div");
        dueDatePrompt.classList.add("change-date");
        const dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("type", "time");
        dueDateInput.value = "09:00";
        dueDatePrompt.appendChild(dueDateInput);
        const dueDateSelect = document.createElement("button");
        dueDateSelect.textContent = "Select";
        dueDatePrompt.appendChild(dueDateSelect);
        dueDateDiv.parentElement.appendChild(dueDatePrompt);
        dueDateInput.focus();

        dueDateSelect.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.log(e.target);
          item.dueDate = dueDateInput.value; /////////// 'dueDate' for new Todo
          dueDateDiv.textContent = item.dueDate + "h";
          console.log(item.dueDate);
          dueDatePrompt.remove();
        });
      }
    });
    newDom.appendChild(dueDateDiv);

    const priorityDiv = document.createElement("div");
    if (item.priority == "Low") {
      priorityDiv.style.backgroundColor = "lime";
    } else if (item.priority == "Mid") {
      priorityDiv.style.backgroundColor = "yellow";
    } else if (item.priority == "High") {
      priorityDiv.style.backgroundColor = "red";
    }
    priorityDiv.textContent = "Priority: " + item.priority;
    priorityDiv.classList.add("priority-prop");
    priorityDiv.addEventListener("mouseover", () => {
      priorityDiv.removeAttribute("style", "background-color");
    });
    priorityDiv.addEventListener("mouseout", () => {
      if (item.priority == "Low") {
        priorityDiv.style.backgroundColor = "lime";
      } else if (item.priority == "Mid") {
        priorityDiv.style.backgroundColor = "yellow";
      } else if (item.priority == "High") {
        priorityDiv.style.backgroundColor = "red";
      }
    });
    priorityDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      if (document.querySelector(".change-priority")) {
        document.querySelector(".change-priority").remove();
      } else {
        const changePriority = document.createElement("div");
        changePriority.classList.add("change-priority");

        const lowPriority = document.createElement("button");
        lowPriority.textContent = "Low";
        changePriority.appendChild(lowPriority);

        const mediumPriority = document.createElement("button");
        mediumPriority.textContent = "Mid";
        changePriority.appendChild(mediumPriority);

        const highPriority = document.createElement("button");
        highPriority.textContent = "High";
        changePriority.appendChild(highPriority);

        priorityDiv.appendChild(changePriority);

        lowPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "Low";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "lime";
          changePriority.remove();
        });

        mediumPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "Mid";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "yellow";
          changePriority.remove();
        });

        highPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "High";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "red";
          changePriority.remove();
        });
      }
    });
    newDom.appendChild(priorityDiv);

    const notesDiv = document.createElement("div");
    notesDiv.classList.add("notes-div");
    const notesText = document.createElement("div");
    notesText.textContent = item.notes;
    notesText.classList.add("notes-text");
    notesText.addEventListener("click", () => {
      notesText.style.visibility = "hidden";
      const editProp = document.createElement("textarea");
      editProp.classList.add("notes-edit");
      editProp.value = notesText.textContent;
      notesText.parentElement.insertBefore(editProp, notesText.nextSibling);
      editProp.focus();
      editProp.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          notesText.textContent = editProp.value;
          notesText.parentElement.removeChild(editProp);
          // element.style.display = "block";
          notesText.style.visibility = "visible";
          item.notes = notesText.textContent;
          notesText.textContent = item.notes;
        }
      });
    });
    notesText.style.display = "none";
    newDom.appendChild(notesText);
    const notesButton = document.createElement("button");
    notesButton.classList.add("notes-button");
    notesButton.textContent = "i";
    notesButton.addEventListener("click", () => {
      if (notesText.style.display == "none") {
        notesText.style.display = "inline";
      } else {
        notesText.style.display = "none";
      }
    });

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.setAttribute("data-index", aList.indexOf(item));
    delButton.classList.add("delete-todo");

    const changeListButton = document.createElement("button");
    changeListButton.textContent = "List";
    changeListButton.classList.add("change-list");

    changeListButton.addEventListener("click", () => {
      if (document.querySelector(".list-options")) {
        document.querySelector(".list-options").remove();
      } else {
        item.list.items.splice(item.list.items.indexOf(item), 1);
        listGeneration(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists);
        const listOptionsDiv = document.querySelector(".list-options");
        const listButtons = document.querySelectorAll(".list-options button");
        const listSelectButtons = document.querySelectorAll(".list-name");
        listButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.forEach((list) => {
              if (button.textContent == list.name) {
                item.list = list;
                list.items[list.items.length] = item;
                console.log(item.list);
                listOptionsDiv.parentElement.removeChild(listOptionsDiv);
                listSelectButtons.forEach((listButton) => {
                  if (list.name == listButton.textContent) {
                    showActiveList(listButton);
                    showList(item.list.items);
                    (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(item.list.items);
                  }
                });
              }
            });
          });
        });
      }
    });

    const toDoCardBottom = document.createElement("div");
    toDoCardBottom.classList.add("todo-buttons");
    toDoCardBottom.appendChild(notesButton);
    toDoCardBottom.appendChild(notesText);
    toDoCardBottom.appendChild(changeListButton);
    toDoCardBottom.appendChild(delButton);
    toDoCardBottom.appendChild(notesDiv);
    newDom.appendChild(toDoCardBottom);
    toDoList.appendChild(newDom);
  });
};

const showAllLists = () => {
  const allListDivs = document.querySelector(".all-lists");
  while (allListDivs.firstChild) {
    allListDivs.removeChild(allListDivs.firstChild);
  }
  const allListsHeading = document.createElement("h2");
  allListsHeading.textContent = "Lists: ";
  allListDivs.appendChild(allListsHeading);
  allListDivs.appendChild(allListsHeading);
  _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.forEach((list) => {
    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");
    const listButton = document.createElement("button");
    listButton.classList.add("list-name");
    listButton.textContent = list.name;
    const deleteList = document.createElement("button");
    deleteList.classList.add("delete-list");
    deleteList.textContent = "Delete";
    const renameList = document.createElement("button");
    renameList.classList.add("edit-list");
    renameList.textContent = "Rename";

    listButton.addEventListener("mouseover", () => {
      if (listButton.style.backgroundColor === "red") {
        return;
      }
      listDiv.style.backgroundColor = "rgb(255 73 73)";
      listButton.style.backgroundColor = "rgb(255 73 73)";
      listKebab.style.backgroundColor = "rgb(255 73 73)";
    });

    listButton.addEventListener("mouseout", () => {
      if (listButton.style.backgroundColor === "red") {
        return;
      }
      listDiv.removeAttribute("style", "backgroundColor");
      listButton.removeAttribute("style", "backgroundColor");
      listKebab.removeAttribute("style", "backgroundColor");
    });

    listButton.addEventListener("click", () => {
      const allTheButtons = document.querySelectorAll(".list-name");
      allTheButtons.forEach((button) => {
        if (button.hasAttribute("style")) {
          button.removeAttribute("style", "background-color");
          button.parentElement.removeAttribute("style", "background-color");
          button.nextSibling.removeAttribute("style", "background-color");
        }
      });
      listDiv.style.backgroundColor = "red";
      listButton.style.backgroundColor = "red";
      listKebab.style.backgroundColor = "red";
      showList(list.items);
      (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(list.items);
    });

    const listKebab = document.createElement("button");
    listKebab.classList.add("kebab-list");
    const listKebabImage = document.createElement("img");
    listKebabImage.src = _kebab_png__WEBPACK_IMPORTED_MODULE_6__;
    listKebabImage.classList.add("kebab-icon");
    listKebab.appendChild(listKebabImage);

    listKebab.addEventListener("click", (e) => {
      e.stopPropagation();
      if (document.querySelector(".kebab-modal")) {
        document.querySelector(".kebab-modal").remove();
      } else {
        const kebabModal = document.createElement("div");
        kebabModal.classList.add("kebab-modal");
        kebabModal.appendChild(deleteList);
        kebabModal.appendChild(renameList);
        listKebab.appendChild(kebabModal);

        deleteList.addEventListener("click", () => {
          if (_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.length === 1) {
            alert("You must always have at least 1 list!");
            return;
          }
          while (list.items.length > 0) {
            list.items.splice(0, 1);
          }
          showList(list.items);
          if (_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.indexOf(list) === 0) {
            showList(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists[_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.indexOf(list) + 1].items);
            _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.splice(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.indexOf(list), 1);
            showActiveList(listDiv.nextSibling.children[0]);
          } else {
            showList(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists[_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.indexOf(list) - 1].items);
            _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.splice(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.indexOf(list), 1);
            showActiveList(listDiv.previousSibling.children[0]);
          }
          listDiv.remove();
          kebabModal.remove();
          console.log(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists);
        });

        renameList.addEventListener("click", () => {
          if (document.querySelector(".edit-prop")) {
            document.querySelector(".edit-prop").remove();
          }
          listButton.style.visibility = "hidden";

          const editProp = document.createElement("input");
          editProp.classList.add("edit-prop");
          editProp.setAttribute("type", "text");
          editProp.value = listButton.textContent;
          listButton.parentElement.insertBefore(
            editProp,
            listButton.nextSibling
          );
          editProp.style.alignSelf = "center";
          editProp.focus();
          editProp.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              listButton.textContent = editProp.value;
              editProp.remove();
              listButton.style.visibility = "visible";
              list.name = listButton.textContent;
              renameList.parentElement.remove();
            }
          });
        });
      }
    });

    listDiv.appendChild(listButton);
    listDiv.appendChild(listKebab);
    listDiv.style.display = "grid";
    allListDivs.appendChild(listDiv);
  });
};

const listGeneration = (listOfLists) => {
  const listOptionsDiv = document.createElement("div");
  const mainDiv = document.querySelector(".main");
  listOptionsDiv.classList.add("list-options");
  listOptionsDiv.style.display = "grid";
  const listOptionsHeading = document.createElement("h2");
  listOptionsHeading.textContent = "Choose a list:";
  listOptionsDiv.appendChild(listOptionsHeading);
  mainDiv.appendChild(listOptionsDiv);

  listOfLists.forEach((list) => {
    const listButton = document.createElement("button");
    listButton.textContent = list.name;

    listOptionsDiv.appendChild(listButton);
  });
};

const setList = (listOfLists, newItem) => {
  listGeneration(listOfLists);

  const listOptionsDiv = document.querySelector(".list-options");
  const listButtons = document.querySelectorAll(".list-options button");
  if (listOfLists.length == 1) {
    (0,_list_stuff__WEBPACK_IMPORTED_MODULE_1__.addItem)(newItem, listOfLists[0]);
    newItem.list = listOfLists[0];
    showList(listOfLists[0].items);
    (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(listOfLists[0].items);
    listOptionsDiv.parentElement.removeChild(listOptionsDiv);
  } else {
    listButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        listOfLists.forEach((list) => {
          if (button.textContent == list.name) {
            (0,_list_stuff__WEBPACK_IMPORTED_MODULE_1__.addItem)(newItem, list);
            newItem.list = list;
            showList(list.items);
            (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(list.items);
            console.log(list.items);
            const listSelectButtons = document.querySelectorAll(".list-name");
            listSelectButtons.forEach((listButton) => {
              if (list.name == listButton.textContent) {
                showActiveList(listButton);
              }
            });
          }
        });
        listOptionsDiv.parentElement.removeChild(listOptionsDiv);
        console.log(listOfLists);
      });
    });
  }
};

const newToDoModal = () => {
  const mainContainerDiv = document.querySelector(".main");
  if (document.querySelector(".main-modal")) {
    mainContainerDiv.removeChild(mainContainerDiv.lastChild);
  }

  const mainModalDiv = document.createElement("div");
  mainModalDiv.classList.add("main-modal");
  const heading = document.createElement("h2");
  mainModalDiv.appendChild(heading);

  mainContainerDiv.appendChild(mainModalDiv);

  heading.textContent = "What's the task?";
  const nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  mainModalDiv.appendChild(nameInput);
  nameInput.focus();
  nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newItemName = nameInput.value; //////////// 'name' for new ToDo
      nameInput.parentElement.removeChild(nameInput);

      heading.textContent = "When should you do it?";
      const dueDatePrompt = document.createElement("input");
      dueDatePrompt.setAttribute("type", "time");
      dueDatePrompt.value = "09:00";
      mainModalDiv.appendChild(dueDatePrompt);
      dueDatePrompt.focus();
      const dueDateSelect = document.createElement("button");
      dueDateSelect.textContent = "Select";
      mainModalDiv.appendChild(dueDateSelect);

      dueDateSelect.addEventListener("click", () => {
        const dueDateValue = dueDatePrompt.value; /////////// 'dueDate' for new Todo
        dueDatePrompt.parentElement.removeChild(dueDatePrompt);
        dueDateSelect.parentElement.removeChild(dueDateSelect);

        heading.textContent = "Do you have any notes?";
        const notesArea = document.createElement("textarea");
        notesArea.classList.add("notes-area");
        const notesSelectButton = document.createElement("button");
        notesSelectButton.textContent = "Continue";
        mainModalDiv.appendChild(notesArea);
        mainModalDiv.appendChild(notesSelectButton);
        notesArea.focus();
        notesSelectButton.addEventListener("click", () => {
          const notesValue = notesArea.value; //////////////// 'notes' for new Todo
          notesArea.parentElement.removeChild(notesArea);
          notesSelectButton.parentElement.removeChild(notesSelectButton);

          heading.textContent = "What's the priority?";

          const setPriority = document.createElement("div");
          setPriority.classList.add("set-priority");

          const lowPriority = document.createElement("button");
          lowPriority.textContent = "Low";
          lowPriority.classList.add("priority-button");
          setPriority.appendChild(lowPriority);

          const mediumPriority = document.createElement("button");
          mediumPriority.textContent = "Mid";
          mediumPriority.classList.add("priority-button");
          setPriority.appendChild(mediumPriority);

          const highPriority = document.createElement("button");
          highPriority.textContent = "High";
          highPriority.classList.add("priority-button");
          setPriority.appendChild(highPriority);
          mainModalDiv.appendChild(setPriority);
          const priorityButtons = document.querySelectorAll(".priority-button");
          priorityButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
              e.stopPropagation();
              const priorityValue = button.textContent;
              const newItem = (0,_addTodo__WEBPACK_IMPORTED_MODULE_3__.todoForm)(
                newItemName,
                dueDateValue,
                priorityValue,
                notesValue
              );
              setList(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists, newItem);
              mainModalDiv.style.display = "none";
            });
          });
        });
      });
    }
  });
};

const createNewList = () => {
  const mainDiv = document.querySelector(".main");
  const newListModal = document.createElement("div");
  newListModal.classList.add("new-list-modal");
  const newListHeading = document.createElement("h2");
  newListHeading.textContent = "List name?";
  newListModal.appendChild(newListHeading);
  const newListInput = document.createElement("input");
  newListInput.setAttribute("type", "text");
  newListInput.classList.add("new-list-input");
  newListInput.setAttribute("name", "new-list-name");
  newListModal.appendChild(newListInput);
  mainDiv.appendChild(newListModal);
  newListInput.focus();

  newListInput.addEventListener("keypress", (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      const newListName = newListInput.value;
      const newList = (0,_list_stuff__WEBPACK_IMPORTED_MODULE_1__.createList)(newListName);
      newList.addList();
      showAllLists();
      newListModal.remove();
      const listSelectButtons = document.querySelectorAll(".list-name");
      listSelectButtons.forEach((listButton) => {
        if (newList.name == listButton.textContent) {
          showActiveList(listButton);
        }
      });
      showList(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists[_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.length - 1].items);
    }
  });
};

const showActiveList = (thisListButton) => {
  const allTheButtons = document.querySelectorAll(".list-name");
  allTheButtons.forEach((button) => {
    if (button.hasAttribute("style")) {
      button.removeAttribute("style", "background-color");
      button.parentElement.removeAttribute("style", "background-color");
      button.nextSibling.removeAttribute("style", "background-color");
    }
  });
  thisListButton.parentElement.style.backgroundColor = "red";
  thisListButton.style.backgroundColor = "red";
  thisListButton.nextSibling.style.backgroundColor = "red";
};


/***/ }),

/***/ "./src/edit-todo.js":
/*!**************************!*\
  !*** ./src/edit-todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editToDo: () => (/* binding */ editToDo)
/* harmony export */ });
const editToDo = (element, toDoObject) => {
  // element.style.display = "none";
  element.style.visibility = "hidden";

  const editProp = document.createElement("input");
  editProp.setAttribute("type", "text");
  editProp.value = element.textContent;
  element.parentElement.insertBefore(editProp, element.nextSibling);
  editProp.style.alignSelf = "center";
  // editProp.style.display = "block";
  editProp.focus();
  editProp.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      element.textContent = editProp.value;
      element.parentElement.removeChild(editProp);
      // element.style.display = "block";
      element.style.visibility = "visible";
      if (element.classList.contains("name-prop")) {
        toDoObject.name = element.textContent;
      } else if (element.classList.contains("date-prop")) {
        toDoObject.dueDate = element.textContent;
      } else if (element.classList.contains("priority-prop")) {
        toDoObject.priority = element.textContent;
      } else if (element.classList.contains("notes-prop")) {
        toDoObject.notes = element.textContent;
      }
    }
  });
};


/***/ }),

/***/ "./src/list-stuff.js":
/*!***************************!*\
  !*** ./src/list-stuff.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItem: () => (/* binding */ addItem),
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   listOfLists: () => (/* binding */ listOfLists),
/* harmony export */   newList: () => (/* binding */ newList)
/* harmony export */ });
// default list and new list creation

const newList = (name) => {
  let items = [];
  return { name, items };
};

const defaultList = newList("Tasks");

const addItem = (newItem, list) => {
  list.items[list.items.length] = newItem;
  return list;
};

// array of lists

let listOfLists = [defaultList];

const createList = (name) => {
  const addList = () => {
    listOfLists[listOfLists.length] = newList(name);
  };
  return { name, addList };
};


/***/ }),

/***/ "./src/removeToDo.js":
/*!***************************!*\
  !*** ./src/removeToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeToDo: () => (/* binding */ removeToDo)
/* harmony export */ });
const deleteToDo = (list, index) => {
  list.splice(index, 1);
};

const removeToDo = (list) => {
  const deleteButtons = document.querySelectorAll(".delete-todo");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault;
      deleteToDo(list, e.target.getAttribute("data-index"));
      e.target.parentElement.parentElement.remove();
    });
  });
};


/***/ }),

/***/ "./src/chickin.png":
/*!*************************!*\
  !*** ./src/chickin.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed5f6395a2747a760e6f.png";

/***/ }),

/***/ "./src/kebab.png":
/*!***********************!*\
  !*** ./src/kebab.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c3aa69aa34bf2752f86.png";

/***/ }),

/***/ "./src/list.png":
/*!**********************!*\
  !*** ./src/list.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d78d214ff8b8628929a0.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _list_stuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-stuff */ "./src/list-stuff.js");
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-stuff */ "./src/dom-stuff.js");




(0,_dom_stuff__WEBPACK_IMPORTED_MODULE_2__.domGeneration)();

document.querySelector(".toDoButton").addEventListener("click", () => {
  (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_2__.newToDoModal)();
});

document.querySelector(".new-list").addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_2__.createNewList)();
  console.log(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLHVCQUF1QixvREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JB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Q0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDcUI7QUFDOEI7O0FBRXpFLHlEQUFhOztBQUViO0FBQ0EsRUFBRSx3REFBWTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5REFBYTtBQUNmLGNBQWMsb0RBQVc7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9saXN0LXN0dWZmLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbGlzdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkJhcmxvd1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMSxcbmgzID4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0IHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZS1jb2xvcjogYmxhY2s7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCA4NXZoIDNyZW07XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b2RvcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMTIyLCAxMjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZG9zIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTU2IDE1Nik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuNXJlbTtcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxpc3QtZGl2IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMCwgMTAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS4ycmVtO1xuICBncmlkLXJvdzogc3BhbiAyO1xuICBvdXRsaW5lOiBub25lO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1haW4tbW9kYWwgaW5wdXRbdHlwZT1cInRpbWVcIl0ge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5uYW1lLXByb3Age1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBncmlkLXJvdzogc3BhbiAyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kYXRlLXByb3Age1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmRhdGUtcHJvcDpob3Zlcixcbi5uYW1lLXByb3A6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjksIDE2OSk7XG59XG5cbi5ub3Rlcy10ZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAyMjMpO1xufVxuXG4ucHJpb3JpdHktcHJvcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgcGFkZGluZzogMC4xcmVtIDAuMjVyZW0gMC4xcmVtO1xuICBtYXJnaW46IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnByaW9yaXR5LXByb3A6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxODAsIDE4MCk7XG59XG5cbi50b2RvLWJ1dHRvbnMge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC4ycmVtO1xufVxuXG4uY2hhbmdlLWxpc3QsXG4uZGVsZXRlLXRvZG8sXG4ubm90ZXMtYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjFyZW07XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgei1pbmRleDogMjtcbn1cblxuLm5vdGVzLWJ1dHRvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG59XG5cbi5jaGFuZ2UtbGlzdDpob3Zlcixcbi5kZWxldGUtdG9kbzpob3Zlcixcbi5ub3Rlcy1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjEsIDIyMSk7XG59XG5cbi5jaGFuZ2UtbGlzdDphY3RpdmUsXG4uZGVsZXRlLXRvZG86YWN0aXZlLFxuLm5vdGVzLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDAsIDIwMCk7XG59XG5cbi5ub3Rlcy1idXR0b24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5ub3Rlcy10ZXh0LFxuLm5vdGVzLWVkaXQge1xuICB3aWR0aDogMTRyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyLjJyZW07XG4gIHJpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTUsIDE1NSk7XG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHotaW5kZXg6IDM7XG59XG5cbi5saXN0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgcGFkZGluZzogNHJlbTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG59XG5cbi50b0RvQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiA1cmVtO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi50b0RvQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG5cbi50b0RvQnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExMCwgMTEwKTtcbn1cblxuLm5ldy1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiAxLjhyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG59XG5cbi5uZXctbGlzdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuXG4ubmV3LWxpc3Q6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xufVxuXG5oMyB7XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDMgPiBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZ2l0aHViIHtcbn1cblxuLmdpdGh1YiA+IGltZyB7XG4gIHdpZHRoOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWFpbi1tb2RhbCxcbi5saXN0LW9wdGlvbnMsXG4ubmV3LWxpc3QtbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTByZW07XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzB2dztcbiAgaGVpZ2h0OiAxNXZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNTYgMTU2KTtcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4ubmV3LWxpc3QtbW9kYWwgaDIge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubmV3LWxpc3QtbW9kYWwgaW5wdXQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuXG4ubGlzdC1vcHRpb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogd2lkdGg6IGNhbGMoNDB2dyArIDJyZW0pO1xuICBoZWlnaHQ6IGNhbGMoMTB2aCArIDJyZW0pOyAqL1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xufVxuXG4ubGlzdC1vcHRpb25zIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5tYWluLW1vZGFsIGJ1dHRvbixcbi5saXN0LW9wdGlvbnMgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuLm1haW4tbW9kYWwgYnV0dG9uOmhvdmVyLFxuLmxpc3Qtb3B0aW9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cblxuLm1haW4tbW9kYWwgYnV0dG9uOmFjdGl2ZSxcbi5saXN0LW9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExMCwgMTEwKTtcbn1cblxuLmxpc3Qtb3B0aW9ucyBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmxpc3Qtb3B0aW9ucyBidXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLm1haW4tbW9kYWwgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLm1haW4tbW9kYWwgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDM5LCAzOSwgMzkpO1xufVxuXG4ubWFpbi1tb2RhbCA+IGgyIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm5hbWUtaW5wdXQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xufVxuXG4ubm90ZXMtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucmFkaW9zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ucmFkaW9zID4gaW5wdXQge1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuN3JlbTtcbiAgLyogcmlnaHQ6IDAuNnJlbTsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMjIzKTtcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB6LWluZGV4OiAzO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDEpLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDEpOmhvdmVyLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxOTAsIDMpO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMSk6YWN0aXZlLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgxKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDI1NSwgMzcpO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMiksXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIsXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAwKTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDIpOmFjdGl2ZSxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMik6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCA0OCk7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgzKSxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMCAwKTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDAsIDApO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMyk6YWN0aXZlLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgzKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyOSwgMjkpO1xufVxuXG4uc2V0LXByaW9yaXR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAwLjJyZW07XG59XG5cbi5zZXQtcHJpb3JpdHkgYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uY2hhbmdlLWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnJlbTtcbiAgcmlnaHQ6IDh2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNjEgMTYxKTtcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB3aWR0aDogN3JlbTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNoYW5nZS1kYXRlIGlucHV0IHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTYxIDE2MSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uY2hhbmdlLWRhdGUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uY2xvY2staWNvbiB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbi5hbGwtbGlzdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2NiwgMTY2KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWxsLWxpc3RzIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwLjVyZW07XG59XG5cbi5hbGwtbGlzdHMgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDAsIDEwMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW46IDAgMC4ycmVtO1xufVxuXG4ubGlzdC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDAsIDEwMCk7XG4gIG1hcmdpbjogMC41cmVtIDAuMnJlbSAwIDAuMnJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbi5saXN0LW5hbWUge1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLmxpc3QtZGl2IC5lZGl0LWxpc3Qge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmtlYmFiLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmtlYmFiLWxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5rZWJhYi1pY29uIHtcbiAgd2lkdGg6IDFyZW07XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5rZWJhYi1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMjIzKTtcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAvKiBwYWRkaW5nOiAwLjJyZW07ICovXG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5rZWJhYi1tb2RhbCAuZGVsZXRlLWxpc3QsXG4ua2ViYWItbW9kYWwgLmVkaXQtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmtlYmFiLW1vZGFsIC5kZWxldGUtbGlzdCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmtlYmFiLW1vZGFsIC5lZGl0LWxpc3Qge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbi5jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IscUNBQXFDO0VBQ3JDLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHNDQUFzQztFQUN0QyxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZ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LFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRG9zaXNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMSxcXG5oMyA+IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEYW5jaW5nIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxuICBmb250LWZhbWlseTogXFxcIkRvc2lzXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIGN1cnNpdmU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxuICBvdXRsaW5lLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDg1dmggM3JlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMTIyLCAxMjIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvcyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE1NiAxNTYpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNXJlbTtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGlzdC1kaXYgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAwLCAxMDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMnJlbTtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLm1haW4tbW9kYWwgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm5hbWUtcHJvcCB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUtcHJvcCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uZGF0ZS1wcm9wOmhvdmVyLFxcbi5uYW1lLXByb3A6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCAxNjkpO1xcbn1cXG5cXG4ubm90ZXMtdGV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyMyk7XFxufVxcblxcbi5wcmlvcml0eS1wcm9wIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjI1cmVtIDAuMXJlbTtcXG4gIG1hcmdpbjogMC4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LXByb3A6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMTgwLCAxODApO1xcbn1cXG5cXG4udG9kby1idXR0b25zIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwLjJyZW07XFxufVxcblxcbi5jaGFuZ2UtbGlzdCxcXG4uZGVsZXRlLXRvZG8sXFxuLm5vdGVzLWJ1dHRvbiB7XFxuICBtYXJnaW46IDAuMXJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLm5vdGVzLWJ1dHRvbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xcbn1cXG5cXG4uY2hhbmdlLWxpc3Q6aG92ZXIsXFxuLmRlbGV0ZS10b2RvOmhvdmVyLFxcbi5ub3Rlcy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIxLCAyMjEpO1xcbn1cXG5cXG4uY2hhbmdlLWxpc3Q6YWN0aXZlLFxcbi5kZWxldGUtdG9kbzphY3RpdmUsXFxuLm5vdGVzLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAwLCAyMDApO1xcbn1cXG5cXG4ubm90ZXMtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5ub3Rlcy10ZXh0LFxcbi5ub3Rlcy1lZGl0IHtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMi4ycmVtO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTUsIDE1NSk7XFxuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmxpc3Qge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgcGFkZGluZzogNHJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbn1cXG5cXG4udG9Eb0J1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDNyZW07XFxuICByaWdodDogNXJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi50b0RvQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4udG9Eb0J1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xcbn1cXG5cXG4ubmV3LWxpc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAzcmVtO1xcbiAgcmlnaHQ6IDEuOHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9saXN0LnBuZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbn1cXG5cXG4ubmV3LWxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5uZXctbGlzdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xcbn1cXG5cXG5oMyB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMyA+IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmdpdGh1YiB7XFxufVxcblxcbi5naXRodWIgPiBpbWcge1xcbiAgd2lkdGg6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCxcXG4ubGlzdC1vcHRpb25zLFxcbi5uZXctbGlzdC1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcmVtO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTV2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNTYgMTU2KTtcXG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XFxuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubmV3LWxpc3QtbW9kYWwgaDIge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5uZXctbGlzdC1tb2RhbCBpbnB1dCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIHdpZHRoOiBjYWxjKDQwdncgKyAycmVtKTtcXG4gIGhlaWdodDogY2FsYygxMHZoICsgMnJlbSk7ICovXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIGgyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCBidXR0b24sXFxuLmxpc3Qtb3B0aW9ucyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuXFxuLm1haW4tbW9kYWwgYnV0dG9uOmhvdmVyLFxcbi5saXN0LW9wdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCBidXR0b246YWN0aXZlLFxcbi5saXN0LW9wdGlvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XFxufVxcblxcbi5saXN0LW9wdGlvbnMgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5saXN0LW9wdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5saXN0LW9wdGlvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4tbW9kYWwgdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDM5LCAzOSwgMzkpO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCA+IGgyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5uYW1lLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcbn1cXG5cXG4ubm90ZXMtYXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5yYWRpb3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi5yYWRpb3MgPiBpbnB1dCB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS43cmVtO1xcbiAgLyogcmlnaHQ6IDAuNnJlbTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMjIzKTtcXG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XFxuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgxKSxcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDEpIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIsXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTkwLCAzKTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDEpOmFjdGl2ZSxcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDEpOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDI1NSwgMzcpO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMiksXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlcixcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMCk7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgyKTphY3RpdmUsXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgyKTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCA0OCk7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgzKSxcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDMpIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDAgMCk7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlcixcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDMpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDAsIDApO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMyk6YWN0aXZlLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMyk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI5LCAyOSk7XFxufVxcblxcbi5zZXQtcHJpb3JpdHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnNldC1wcmlvcml0eSBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uY2hhbmdlLWRhdGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgcmlnaHQ6IDh2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNjEgMTYxKTtcXG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB3aWR0aDogN3JlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jaGFuZ2UtZGF0ZSBpbnB1dCB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTYxIDE2MSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmNoYW5nZS1kYXRlIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5jbG9jay1pY29uIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uYWxsLWxpc3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2NiwgMTY2KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFsbC1saXN0cyBoMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwLjVyZW07XFxufVxcblxcbi5hbGwtbGlzdHMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMCwgMTAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW46IDAgMC4ycmVtO1xcbn1cXG5cXG4ubGlzdC1kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAwLCAxMDApO1xcbiAgbWFyZ2luOiAwLjVyZW0gMC4ycmVtIDAgMC4ycmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuLmxpc3QtbmFtZSB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5saXN0LWRpdiAuZWRpdC1saXN0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ua2ViYWItbGlzdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmtlYmFiLWxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ua2ViYWItaWNvbiB7XFxuICB3aWR0aDogMXJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ua2ViYWItbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyMyk7XFxuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIC8qIHBhZGRpbmc6IDAuMnJlbTsgKi9cXG4gIHotaW5kZXg6IDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmtlYmFiLW1vZGFsIC5kZWxldGUtbGlzdCxcXG4ua2ViYWItbW9kYWwgLmVkaXQtbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmtlYmFiLW1vZGFsIC5kZWxldGUtbGlzdCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ua2ViYWItbW9kYWwgLmVkaXQtbGlzdCB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uY3VycmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgdG9kb0Zvcm0gPSAobmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIGxldCBsaXN0O1xuICByZXR1cm4geyBuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxpc3QgfTtcbn07XG4iLCJpbXBvcnQgeyBlZGl0VG9EbyB9IGZyb20gXCIuL2VkaXQtdG9kb1wiO1xuaW1wb3J0IHsgYWRkSXRlbSwgbGlzdE9mTGlzdHMsIGNyZWF0ZUxpc3QgfSBmcm9tIFwiLi9saXN0LXN0dWZmXCI7XG5pbXBvcnQgeyByZW1vdmVUb0RvIH0gZnJvbSBcIi4vcmVtb3ZlVG9Eb1wiO1xuaW1wb3J0IHsgdG9kb0Zvcm0gfSBmcm9tIFwiLi9hZGRUb2RvXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9saXN0LnBuZ1wiO1xuaW1wb3J0IENoaWNraW4gZnJvbSBcIi4vY2hpY2tpbi5wbmdcIjtcbmltcG9ydCBrZWJhYiBmcm9tIFwiLi9rZWJhYi5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IGRvbUdlbmVyYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUb2RvLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIGFkZFRvZG8uY2xhc3NMaXN0LmFkZChcInRvRG9CdXR0b25cIik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoYWRkVG9kbyk7XG5cbiAgY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGxpc3RJY29uID0gbmV3IEltYWdlKCk7XG4gIGxpc3RJY29uLnNyYyA9IEljb247XG4gIG5ld0xpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5ldy1saXN0XCIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKG5ld0xpc3RCdXR0b24pO1xuICBjb25zdCBhbGxMaXN0RGl2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFsbExpc3REaXZzLmNsYXNzTGlzdC5hZGQoXCJhbGwtbGlzdHNcIik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoYWxsTGlzdERpdnMpO1xuXG4gIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0xpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQodG9Eb0xpc3QpO1xuXG4gIGNvbnN0IGNoaWNraW5JY29uID0gbmV3IEltYWdlKCk7XG4gIGNoaWNraW5JY29uLnNyYyA9IENoaWNraW47XG4gIGNvbnN0IGdpdEh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2l0aHViXCIpO1xuICBnaXRIdWIuYXBwZW5kQ2hpbGQoY2hpY2tpbkljb24pO1xuXG4gIGNoaWNraW5JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGNoaWNraW5JY29uLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDQ1ZGVnKVwiO1xuICB9KTtcblxuICBjaGlja2luSWNvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGNoaWNraW5JY29uLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtXCIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93TGlzdCA9IChhTGlzdCkgPT4ge1xuICBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbiAgd2hpbGUgKHRvRG9MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICB0b0RvTGlzdC5yZW1vdmVDaGlsZCh0b0RvTGlzdC5maXJzdENoaWxkKTtcbiAgfVxuICB0b0RvTGlzdC50ZXh0Q29udGVudCA9IFwiVG8tZG9zOiBcIjtcbiAgYUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5ld0RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3RG9tLmNsYXNzTGlzdC5hZGQoXCJ0b2Rvc1wiKTtcblxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwibmFtZS1wcm9wXCIpO1xuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRUb0RvKG5hbWVEaXYsIGl0ZW0pO1xuICAgIH0pO1xuICAgIG5ld0RvbS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGUgKyBcImhcIjtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXRlLXByb3BcIik7XG5cbiAgICBkdWVEYXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1kYXRlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlLWRhdGVcIikucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkdWVEYXRlUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGF0ZVByb21wdC5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLWRhdGVcIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIjA5OjAwXCI7XG4gICAgICAgIGR1ZURhdGVQcm9tcHQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGR1ZURhdGVTZWxlY3QudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICAgICAgICBkdWVEYXRlUHJvbXB0LmFwcGVuZENoaWxkKGR1ZURhdGVTZWxlY3QpO1xuICAgICAgICBkdWVEYXRlRGl2LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVByb21wdCk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIGR1ZURhdGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICAgIGl0ZW0uZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTsgLy8vLy8vLy8vLy8gJ2R1ZURhdGUnIGZvciBuZXcgVG9kb1xuICAgICAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGUgKyBcImhcIjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmR1ZURhdGUpO1xuICAgICAgICAgIGR1ZURhdGVQcm9tcHQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG5ld0RvbS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAoaXRlbS5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpbWVcIjtcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gXCJNaWRcIikge1xuICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcbiAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1wcm9wXCIpO1xuICAgIHByaW9yaXR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgcHJpb3JpdHlEaXYucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgIH0pO1xuICAgIHByaW9yaXR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGltZVwiO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09IFwiTWlkXCIpIHtcbiAgICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByaW9yaXR5RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1wcmlvcml0eVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1wcmlvcml0eVwiKS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImNoYW5nZS1wcmlvcml0eVwiKTtcblxuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1pZFwiO1xuICAgICAgICBjaGFuZ2VQcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG5cbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb3JpdHkpO1xuXG4gICAgICAgIGxvd1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgaXRlbS5wcmlvcml0eSA9IFwiTG93XCI7XG4gICAgICAgICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaW1lXCI7XG4gICAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGl1bVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgaXRlbS5wcmlvcml0eSA9IFwiTWlkXCI7XG4gICAgICAgICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIGl0ZW0ucHJpb3JpdHk7XG4gICAgICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGlnaFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgaXRlbS5wcmlvcml0eSA9IFwiSGlnaFwiO1xuICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICAgICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG5ld0RvbS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgICBjb25zdCBub3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcIm5vdGVzLWRpdlwiKTtcbiAgICBjb25zdCBub3Rlc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzVGV4dC50ZXh0Q29udGVudCA9IGl0ZW0ubm90ZXM7XG4gICAgbm90ZXNUZXh0LmNsYXNzTGlzdC5hZGQoXCJub3Rlcy10ZXh0XCIpO1xuICAgIG5vdGVzVGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbm90ZXNUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgY29uc3QgZWRpdFByb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICBlZGl0UHJvcC5jbGFzc0xpc3QuYWRkKFwibm90ZXMtZWRpdFwiKTtcbiAgICAgIGVkaXRQcm9wLnZhbHVlID0gbm90ZXNUZXh0LnRleHRDb250ZW50O1xuICAgICAgbm90ZXNUZXh0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVkaXRQcm9wLCBub3Rlc1RleHQubmV4dFNpYmxpbmcpO1xuICAgICAgZWRpdFByb3AuZm9jdXMoKTtcbiAgICAgIGVkaXRQcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBub3Rlc1RleHQudGV4dENvbnRlbnQgPSBlZGl0UHJvcC52YWx1ZTtcbiAgICAgICAgICBub3Rlc1RleHQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlZGl0UHJvcCk7XG4gICAgICAgICAgLy8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIG5vdGVzVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgaXRlbS5ub3RlcyA9IG5vdGVzVGV4dC50ZXh0Q29udGVudDtcbiAgICAgICAgICBub3Rlc1RleHQudGV4dENvbnRlbnQgPSBpdGVtLm5vdGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBub3Rlc1RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG5ld0RvbS5hcHBlbmRDaGlsZChub3Rlc1RleHQpO1xuICAgIGNvbnN0IG5vdGVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBub3Rlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibm90ZXMtYnV0dG9uXCIpO1xuICAgIG5vdGVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJpXCI7XG4gICAgbm90ZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChub3Rlc1RleHQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICBub3Rlc1RleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3Rlc1RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBkZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBhTGlzdC5pbmRleE9mKGl0ZW0pKTtcbiAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10b2RvXCIpO1xuXG4gICAgY29uc3QgY2hhbmdlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2hhbmdlTGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTGlzdFwiO1xuICAgIGNoYW5nZUxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5nZS1saXN0XCIpO1xuXG4gICAgY2hhbmdlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1vcHRpb25zXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1vcHRpb25zXCIpLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5saXN0Lml0ZW1zLnNwbGljZShpdGVtLmxpc3QuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgIGxpc3RHZW5lcmF0aW9uKGxpc3RPZkxpc3RzKTtcbiAgICAgICAgY29uc3QgbGlzdE9wdGlvbnNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtb3B0aW9uc1wiKTtcbiAgICAgICAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3Qtb3B0aW9ucyBidXR0b25cIik7XG4gICAgICAgIGNvbnN0IGxpc3RTZWxlY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW5hbWVcIik7XG4gICAgICAgIGxpc3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsaXN0T2ZMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gbGlzdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5saXN0ID0gbGlzdDtcbiAgICAgICAgICAgICAgICBsaXN0Lml0ZW1zW2xpc3QuaXRlbXMubGVuZ3RoXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5saXN0KTtcbiAgICAgICAgICAgICAgICBsaXN0T3B0aW9uc0Rpdi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpc3RPcHRpb25zRGl2KTtcbiAgICAgICAgICAgICAgICBsaXN0U2VsZWN0QnV0dG9ucy5mb3JFYWNoKChsaXN0QnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAobGlzdC5uYW1lID09IGxpc3RCdXR0b24udGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FjdGl2ZUxpc3QobGlzdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGl0ZW0ubGlzdC5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRvRG8oaXRlbS5saXN0Lml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9Eb0NhcmRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9DYXJkQm90dG9tLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ1dHRvbnNcIik7XG4gICAgdG9Eb0NhcmRCb3R0b20uYXBwZW5kQ2hpbGQobm90ZXNCdXR0b24pO1xuICAgIHRvRG9DYXJkQm90dG9tLmFwcGVuZENoaWxkKG5vdGVzVGV4dCk7XG4gICAgdG9Eb0NhcmRCb3R0b20uYXBwZW5kQ2hpbGQoY2hhbmdlTGlzdEJ1dHRvbik7XG4gICAgdG9Eb0NhcmRCb3R0b20uYXBwZW5kQ2hpbGQoZGVsQnV0dG9uKTtcbiAgICB0b0RvQ2FyZEJvdHRvbS5hcHBlbmRDaGlsZChub3Rlc0Rpdik7XG4gICAgbmV3RG9tLmFwcGVuZENoaWxkKHRvRG9DYXJkQm90dG9tKTtcbiAgICB0b0RvTGlzdC5hcHBlbmRDaGlsZChuZXdEb20pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93QWxsTGlzdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbExpc3REaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtbGlzdHNcIik7XG4gIHdoaWxlIChhbGxMaXN0RGl2cy5maXJzdENoaWxkKSB7XG4gICAgYWxsTGlzdERpdnMucmVtb3ZlQ2hpbGQoYWxsTGlzdERpdnMuZmlyc3RDaGlsZCk7XG4gIH1cbiAgY29uc3QgYWxsTGlzdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBhbGxMaXN0c0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxpc3RzOiBcIjtcbiAgYWxsTGlzdERpdnMuYXBwZW5kQ2hpbGQoYWxsTGlzdHNIZWFkaW5nKTtcbiAgYWxsTGlzdERpdnMuYXBwZW5kQ2hpbGQoYWxsTGlzdHNIZWFkaW5nKTtcbiAgbGlzdE9mTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3REaXYuY2xhc3NMaXN0LmFkZChcImxpc3QtZGl2XCIpO1xuICAgIGNvbnN0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxpc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3QtbmFtZVwiKTtcbiAgICBsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgIGNvbnN0IGRlbGV0ZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUxpc3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1saXN0XCIpO1xuICAgIGRlbGV0ZUxpc3QudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGNvbnN0IHJlbmFtZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbmFtZUxpc3QuY2xhc3NMaXN0LmFkZChcImVkaXQtbGlzdFwiKTtcbiAgICByZW5hbWVMaXN0LnRleHRDb250ZW50ID0gXCJSZW5hbWVcIjtcblxuICAgIGxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBpZiAobGlzdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwicmVkXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGlzdERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUgNzMgNzMpXCI7XG4gICAgICBsaXN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSA3MyA3MylcIjtcbiAgICAgIGxpc3RLZWJhYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUgNzMgNzMpXCI7XG4gICAgfSk7XG5cbiAgICBsaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBpZiAobGlzdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwicmVkXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGlzdERpdi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmRDb2xvclwiKTtcbiAgICAgIGxpc3RCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIik7XG4gICAgICBsaXN0S2ViYWIucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIik7XG4gICAgfSk7XG5cbiAgICBsaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxUaGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW5hbWVcIik7XG4gICAgICBhbGxUaGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZShcInN0eWxlXCIpKSB7XG4gICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvclwiKTtcbiAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgICAgICAgYnV0dG9uLm5leHRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvclwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsaXN0RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICBsaXN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICBsaXN0S2ViYWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIHNob3dMaXN0KGxpc3QuaXRlbXMpO1xuICAgICAgcmVtb3ZlVG9EbyhsaXN0Lml0ZW1zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RLZWJhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGlzdEtlYmFiLmNsYXNzTGlzdC5hZGQoXCJrZWJhYi1saXN0XCIpO1xuICAgIGNvbnN0IGxpc3RLZWJhYkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsaXN0S2ViYWJJbWFnZS5zcmMgPSBrZWJhYjtcbiAgICBsaXN0S2ViYWJJbWFnZS5jbGFzc0xpc3QuYWRkKFwia2ViYWItaWNvblwiKTtcbiAgICBsaXN0S2ViYWIuYXBwZW5kQ2hpbGQobGlzdEtlYmFiSW1hZ2UpO1xuXG4gICAgbGlzdEtlYmFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtlYmFiLW1vZGFsXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2ViYWItbW9kYWxcIikucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBrZWJhYk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAga2ViYWJNb2RhbC5jbGFzc0xpc3QuYWRkKFwia2ViYWItbW9kYWxcIik7XG4gICAgICAgIGtlYmFiTW9kYWwuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdCk7XG4gICAgICAgIGtlYmFiTW9kYWwuYXBwZW5kQ2hpbGQocmVuYW1lTGlzdCk7XG4gICAgICAgIGxpc3RLZWJhYi5hcHBlbmRDaGlsZChrZWJhYk1vZGFsKTtcblxuICAgICAgICBkZWxldGVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGxpc3RPZkxpc3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBhbHdheXMgaGF2ZSBhdCBsZWFzdCAxIGxpc3QhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAobGlzdC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsaXN0Lml0ZW1zLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvd0xpc3QobGlzdC5pdGVtcyk7XG4gICAgICAgICAgaWYgKGxpc3RPZkxpc3RzLmluZGV4T2YobGlzdCkgPT09IDApIHtcbiAgICAgICAgICAgIHNob3dMaXN0KGxpc3RPZkxpc3RzW2xpc3RPZkxpc3RzLmluZGV4T2YobGlzdCkgKyAxXS5pdGVtcyk7XG4gICAgICAgICAgICBsaXN0T2ZMaXN0cy5zcGxpY2UobGlzdE9mTGlzdHMuaW5kZXhPZihsaXN0KSwgMSk7XG4gICAgICAgICAgICBzaG93QWN0aXZlTGlzdChsaXN0RGl2Lm5leHRTaWJsaW5nLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd0xpc3QobGlzdE9mTGlzdHNbbGlzdE9mTGlzdHMuaW5kZXhPZihsaXN0KSAtIDFdLml0ZW1zKTtcbiAgICAgICAgICAgIGxpc3RPZkxpc3RzLnNwbGljZShsaXN0T2ZMaXN0cy5pbmRleE9mKGxpc3QpLCAxKTtcbiAgICAgICAgICAgIHNob3dBY3RpdmVMaXN0KGxpc3REaXYucHJldmlvdXNTaWJsaW5nLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdERpdi5yZW1vdmUoKTtcbiAgICAgICAgICBrZWJhYk1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RPZkxpc3RzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVuYW1lTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvcFwiKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb3BcIikucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgICAgICAgICBjb25zdCBlZGl0UHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICBlZGl0UHJvcC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1wcm9wXCIpO1xuICAgICAgICAgIGVkaXRQcm9wLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgIGVkaXRQcm9wLnZhbHVlID0gbGlzdEJ1dHRvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICBsaXN0QnV0dG9uLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgZWRpdFByb3AsXG4gICAgICAgICAgICBsaXN0QnV0dG9uLm5leHRTaWJsaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlZGl0UHJvcC5zdHlsZS5hbGlnblNlbGYgPSBcImNlbnRlclwiO1xuICAgICAgICAgIGVkaXRQcm9wLmZvY3VzKCk7XG4gICAgICAgICAgZWRpdFByb3AuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIGxpc3RCdXR0b24udGV4dENvbnRlbnQgPSBlZGl0UHJvcC52YWx1ZTtcbiAgICAgICAgICAgICAgZWRpdFByb3AucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIGxpc3RCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICBsaXN0Lm5hbWUgPSBsaXN0QnV0dG9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICByZW5hbWVMaXN0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3RLZWJhYik7XG4gICAgbGlzdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgYWxsTGlzdERpdnMuYXBwZW5kQ2hpbGQobGlzdERpdik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RHZW5lcmF0aW9uID0gKGxpc3RPZkxpc3RzKSA9PiB7XG4gIGNvbnN0IGxpc3RPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgbGlzdE9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcImxpc3Qtb3B0aW9uc1wiKTtcbiAgbGlzdE9wdGlvbnNEaXYuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICBjb25zdCBsaXN0T3B0aW9uc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxpc3RPcHRpb25zSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgbGlzdDpcIjtcbiAgbGlzdE9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbnNIZWFkaW5nKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChsaXN0T3B0aW9uc0Rpdik7XG5cbiAgbGlzdE9mTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxpc3RCdXR0b24udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG5cbiAgICBsaXN0T3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChsaXN0QnV0dG9uKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdCA9IChsaXN0T2ZMaXN0cywgbmV3SXRlbSkgPT4ge1xuICBsaXN0R2VuZXJhdGlvbihsaXN0T2ZMaXN0cyk7XG5cbiAgY29uc3QgbGlzdE9wdGlvbnNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtb3B0aW9uc1wiKTtcbiAgY29uc3QgbGlzdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3Qtb3B0aW9ucyBidXR0b25cIik7XG4gIGlmIChsaXN0T2ZMaXN0cy5sZW5ndGggPT0gMSkge1xuICAgIGFkZEl0ZW0obmV3SXRlbSwgbGlzdE9mTGlzdHNbMF0pO1xuICAgIG5ld0l0ZW0ubGlzdCA9IGxpc3RPZkxpc3RzWzBdO1xuICAgIHNob3dMaXN0KGxpc3RPZkxpc3RzWzBdLml0ZW1zKTtcbiAgICByZW1vdmVUb0RvKGxpc3RPZkxpc3RzWzBdLml0ZW1zKTtcbiAgICBsaXN0T3B0aW9uc0Rpdi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpc3RPcHRpb25zRGl2KTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsaXN0T2ZMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSBsaXN0Lm5hbWUpIHtcbiAgICAgICAgICAgIGFkZEl0ZW0obmV3SXRlbSwgbGlzdCk7XG4gICAgICAgICAgICBuZXdJdGVtLmxpc3QgPSBsaXN0O1xuICAgICAgICAgICAgc2hvd0xpc3QobGlzdC5pdGVtcyk7XG4gICAgICAgICAgICByZW1vdmVUb0RvKGxpc3QuaXRlbXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdC5pdGVtcyk7XG4gICAgICAgICAgICBjb25zdCBsaXN0U2VsZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1uYW1lXCIpO1xuICAgICAgICAgICAgbGlzdFNlbGVjdEJ1dHRvbnMuZm9yRWFjaCgobGlzdEJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICBpZiAobGlzdC5uYW1lID09IGxpc3RCdXR0b24udGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBzaG93QWN0aXZlTGlzdChsaXN0QnV0dG9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdE9wdGlvbnNEaXYucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChsaXN0T3B0aW9uc0Rpdik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RPZkxpc3RzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbmV3VG9Eb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1vZGFsXCIpKSB7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyRGl2Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBtYWluTW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluTW9kYWxEaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tbW9kYWxcIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBtYWluQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5Nb2RhbERpdik7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2hhdCdzIHRoZSB0YXNrP1wiO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZS1pbnB1dFwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XG4gIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBuYW1lSW5wdXQuZm9jdXMoKTtcbiAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdJdGVtTmFtZSA9IG5hbWVJbnB1dC52YWx1ZTsgLy8vLy8vLy8vLy8vICduYW1lJyBmb3IgbmV3IFRvRG9cbiAgICAgIG5hbWVJbnB1dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldoZW4gc2hvdWxkIHlvdSBkbyBpdD9cIjtcbiAgICAgIGNvbnN0IGR1ZURhdGVQcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBkdWVEYXRlUHJvbXB0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICAgICAgZHVlRGF0ZVByb21wdC52YWx1ZSA9IFwiMDk6MDBcIjtcbiAgICAgIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChkdWVEYXRlUHJvbXB0KTtcbiAgICAgIGR1ZURhdGVQcm9tcHQuZm9jdXMoKTtcbiAgICAgIGNvbnN0IGR1ZURhdGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZHVlRGF0ZVNlbGVjdC50ZXh0Q29udGVudCA9IFwiU2VsZWN0XCI7XG4gICAgICBtYWluTW9kYWxEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNlbGVjdCk7XG5cbiAgICAgIGR1ZURhdGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVZhbHVlID0gZHVlRGF0ZVByb21wdC52YWx1ZTsgLy8vLy8vLy8vLy8gJ2R1ZURhdGUnIGZvciBuZXcgVG9kb1xuICAgICAgICBkdWVEYXRlUHJvbXB0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZHVlRGF0ZVByb21wdCk7XG4gICAgICAgIGR1ZURhdGVTZWxlY3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkdWVEYXRlU2VsZWN0KTtcblxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJEbyB5b3UgaGF2ZSBhbnkgbm90ZXM/XCI7XG4gICAgICAgIGNvbnN0IG5vdGVzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgbm90ZXNBcmVhLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1hcmVhXCIpO1xuICAgICAgICBjb25zdCBub3Rlc1NlbGVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5vdGVzU2VsZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250aW51ZVwiO1xuICAgICAgICBtYWluTW9kYWxEaXYuYXBwZW5kQ2hpbGQobm90ZXNBcmVhKTtcbiAgICAgICAgbWFpbk1vZGFsRGl2LmFwcGVuZENoaWxkKG5vdGVzU2VsZWN0QnV0dG9uKTtcbiAgICAgICAgbm90ZXNBcmVhLmZvY3VzKCk7XG4gICAgICAgIG5vdGVzU2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm90ZXNWYWx1ZSA9IG5vdGVzQXJlYS52YWx1ZTsgLy8vLy8vLy8vLy8vLy8vLyAnbm90ZXMnIGZvciBuZXcgVG9kb1xuICAgICAgICAgIG5vdGVzQXJlYS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vdGVzQXJlYSk7XG4gICAgICAgICAgbm90ZXNTZWxlY3RCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub3Rlc1NlbGVjdEJ1dHRvbik7XG5cbiAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJXaGF0J3MgdGhlIHByaW9yaXR5P1wiO1xuXG4gICAgICAgICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHNldFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJzZXQtcHJpb3JpdHlcIik7XG5cbiAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgc2V0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNaWRcIjtcbiAgICAgICAgICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktYnV0dG9uXCIpO1xuICAgICAgICAgIHNldFByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgc2V0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICAgICAgICBtYWluTW9kYWxEaXYuYXBwZW5kQ2hpbGQoc2V0UHJpb3JpdHkpO1xuICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHktYnV0dG9uXCIpO1xuICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGJ1dHRvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHRvZG9Gb3JtKFxuICAgICAgICAgICAgICAgIG5ld0l0ZW1OYW1lLFxuICAgICAgICAgICAgICAgIGR1ZURhdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlLFxuICAgICAgICAgICAgICAgIG5vdGVzVmFsdWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc2V0TGlzdChsaXN0T2ZMaXN0cywgbmV3SXRlbSk7XG4gICAgICAgICAgICAgIG1haW5Nb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGNvbnN0IG5ld0xpc3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0xpc3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwibmV3LWxpc3QtbW9kYWxcIik7XG4gIGNvbnN0IG5ld0xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBuZXdMaXN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiTGlzdCBuYW1lP1wiO1xuICBuZXdMaXN0TW9kYWwuYXBwZW5kQ2hpbGQobmV3TGlzdEhlYWRpbmcpO1xuICBjb25zdCBuZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5ld0xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmV3TGlzdElucHV0LmNsYXNzTGlzdC5hZGQoXCJuZXctbGlzdC1pbnB1dFwiKTtcbiAgbmV3TGlzdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdC1uYW1lXCIpO1xuICBuZXdMaXN0TW9kYWwuYXBwZW5kQ2hpbGQobmV3TGlzdElucHV0KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdMaXN0TW9kYWwpO1xuICBuZXdMaXN0SW5wdXQuZm9jdXMoKTtcblxuICBuZXdMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgY29uc3QgbmV3TGlzdE5hbWUgPSBuZXdMaXN0SW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gY3JlYXRlTGlzdChuZXdMaXN0TmFtZSk7XG4gICAgICBuZXdMaXN0LmFkZExpc3QoKTtcbiAgICAgIHNob3dBbGxMaXN0cygpO1xuICAgICAgbmV3TGlzdE1vZGFsLnJlbW92ZSgpO1xuICAgICAgY29uc3QgbGlzdFNlbGVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtbmFtZVwiKTtcbiAgICAgIGxpc3RTZWxlY3RCdXR0b25zLmZvckVhY2goKGxpc3RCdXR0b24pID0+IHtcbiAgICAgICAgaWYgKG5ld0xpc3QubmFtZSA9PSBsaXN0QnV0dG9uLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgc2hvd0FjdGl2ZUxpc3QobGlzdEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2hvd0xpc3QobGlzdE9mTGlzdHNbbGlzdE9mTGlzdHMubGVuZ3RoIC0gMV0uaXRlbXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0FjdGl2ZUxpc3QgPSAodGhpc0xpc3RCdXR0b24pID0+IHtcbiAgY29uc3QgYWxsVGhlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1uYW1lXCIpO1xuICBhbGxUaGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKFwic3R5bGVcIikpIHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgICBidXR0b24ubmV4dFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgIH1cbiAgfSk7XG4gIHRoaXNMaXN0QnV0dG9uLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgdGhpc0xpc3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgdGhpc0xpc3RCdXR0b24ubmV4dFNpYmxpbmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbn07XG4iLCJleHBvcnQgY29uc3QgZWRpdFRvRG8gPSAoZWxlbWVudCwgdG9Eb09iamVjdCkgPT4ge1xuICAvLyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICBjb25zdCBlZGl0UHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZWRpdFByb3Auc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGVkaXRQcm9wLnZhbHVlID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgZWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlZGl0UHJvcCwgZWxlbWVudC5uZXh0U2libGluZyk7XG4gIGVkaXRQcm9wLnN0eWxlLmFsaWduU2VsZiA9IFwiY2VudGVyXCI7XG4gIC8vIGVkaXRQcm9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGVkaXRQcm9wLmZvY3VzKCk7XG4gIGVkaXRQcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWRpdFByb3AudmFsdWU7XG4gICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWRpdFByb3ApO1xuICAgICAgLy8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYW1lLXByb3BcIikpIHtcbiAgICAgICAgdG9Eb09iamVjdC5uYW1lID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXRlLXByb3BcIikpIHtcbiAgICAgICAgdG9Eb09iamVjdC5kdWVEYXRlID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eS1wcm9wXCIpKSB7XG4gICAgICAgIHRvRG9PYmplY3QucHJpb3JpdHkgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGVzLXByb3BcIikpIHtcbiAgICAgICAgdG9Eb09iamVjdC5ub3RlcyA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCIvLyBkZWZhdWx0IGxpc3QgYW5kIG5ldyBsaXN0IGNyZWF0aW9uXG5cbmV4cG9ydCBjb25zdCBuZXdMaXN0ID0gKG5hbWUpID0+IHtcbiAgbGV0IGl0ZW1zID0gW107XG4gIHJldHVybiB7IG5hbWUsIGl0ZW1zIH07XG59O1xuXG5jb25zdCBkZWZhdWx0TGlzdCA9IG5ld0xpc3QoXCJUYXNrc1wiKTtcblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAobmV3SXRlbSwgbGlzdCkgPT4ge1xuICBsaXN0Lml0ZW1zW2xpc3QuaXRlbXMubGVuZ3RoXSA9IG5ld0l0ZW07XG4gIHJldHVybiBsaXN0O1xufTtcblxuLy8gYXJyYXkgb2YgbGlzdHNcblxuZXhwb3J0IGxldCBsaXN0T2ZMaXN0cyA9IFtkZWZhdWx0TGlzdF07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVMaXN0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgYWRkTGlzdCA9ICgpID0+IHtcbiAgICBsaXN0T2ZMaXN0c1tsaXN0T2ZMaXN0cy5sZW5ndGhdID0gbmV3TGlzdChuYW1lKTtcbiAgfTtcbiAgcmV0dXJuIHsgbmFtZSwgYWRkTGlzdCB9O1xufTtcbiIsImNvbnN0IGRlbGV0ZVRvRG8gPSAobGlzdCwgaW5kZXgpID0+IHtcbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRvRG8gPSAobGlzdCkgPT4ge1xuICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdG9kb1wiKTtcbiAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgICAgZGVsZXRlVG9EbyhsaXN0LCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGxpc3RPZkxpc3RzIH0gZnJvbSBcIi4vbGlzdC1zdHVmZlwiO1xuaW1wb3J0IHsgZG9tR2VuZXJhdGlvbiwgbmV3VG9Eb01vZGFsLCBjcmVhdGVOZXdMaXN0IH0gZnJvbSBcIi4vZG9tLXN0dWZmXCI7XG5cbmRvbUdlbmVyYXRpb24oKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b0RvQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld1RvRG9Nb2RhbCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWxpc3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlTmV3TGlzdCgpO1xuICBjb25zb2xlLmxvZyhsaXN0T2ZMaXN0cyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==