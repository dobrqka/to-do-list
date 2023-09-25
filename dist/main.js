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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Barlow\", sans-serif;\n  font-family: \"Dosis\", sans-serif;\n  font-family: \"Lobster\", cursive;\n  font-family: \"Montserrat\", sans-serif;\n  font-family: \"Nunito\", sans-serif;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500;\n}\n\nh1,\nh3 > p {\n  font-family: \"Dancing Script\", cursive;\n  font-family: \"Dosis\", sans-serif;\n  font-family: \"Lobster\", cursive;\n  font-family: \"Montserrat\", sans-serif;\n  font-family: \"Nunito\", sans-serif;\n  font-family: \"Roboto\", sans-serif;\n}\n\ninput {\n  outline: 1px solid black;\n  border: 1px solid black;\n}\n\nbutton:focus-visible {\n  outline-style: solid;\n  outline-color: black;\n}\n\nbody {\n  background-color: rgb(255, 74, 74);\n  display: grid;\n  grid-template-rows: 8vh 85vh 3rem;\n}\n\n.header {\n  background-color: rgb(255, 74, 74);\n  color: white;\n  justify-self: stretch;\n  text-align: center;\n  font-size: 1.3rem;\n  align-self: center;\n}\n\n.main {\n  align-self: stretch;\n  background-color: white;\n  position: relative;\n}\n\n.todos {\n  display: grid;\n  grid-template-columns: 7fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  background-color: rgb(252, 122, 122);\n  color: white;\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  position: relative;\n}\n\n.todos input[type=\"text\"] {\n  font-size: 1em;\n  background-color: rgb(255 156 156);\n  border: none;\n  color: white;\n  outline: none;\n  position: absolute;\n  left: 0.5rem;\n  grid-row: span 2;\n  outline: none;\n}\n\n.list-div input[type=\"text\"] {\n  font-size: 1em;\n  background-color: rgb(255, 100, 100);\n  border: none;\n  color: white;\n  outline: none;\n  position: absolute;\n  left: 1.2rem;\n  grid-row: span 2;\n  outline: none;\n  justify-self: center;\n  font-weight: 700;\n  width: 50%;\n}\n\n.main-modal input[type=\"time\"] {\n  border-radius: 0.5rem;\n  margin-bottom: 0.2rem;\n  outline: none;\n  font-size: 1.5rem;\n}\n\n.name-prop {\n  margin-left: 0.5rem;\n  grid-row: span 2;\n  align-self: center;\n}\n\n.date-prop {\n  font-size: 1.3rem;\n  align-self: center;\n  position: relative;\n  justify-self: end;\n  margin-right: 0.2rem;\n  font-weight: 900;\n}\n\n.date-prop:hover,\n.name-prop:hover {\n  background-color: rgb(255, 169, 169);\n}\n\n.notes-text:hover {\n  background-color: rgb(255, 223, 223);\n}\n\n.priority-prop {\n  font-size: 1rem;\n  align-self: center;\n  justify-self: end;\n  color: rgb(0, 0, 0);\n  padding: 0.1rem 0.25rem 0.1rem;\n  margin: 0.25rem;\n  border-radius: 0.5rem;\n}\n\n.priority-prop:hover {\n  background-color: rgb(250, 180, 180);\n}\n\n.todo-buttons {\n  align-self: end;\n  justify-self: end;\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  position: relative;\n  margin: 0.2rem;\n}\n\n.change-list,\n.delete-todo,\n.notes-button {\n  margin: 0.1rem;\n  width: 2rem;\n  height: 1.2rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: white;\n  background-color: rgb(255, 74, 74);\n  z-index: 2;\n}\n\n.notes-button {\n  padding-bottom: 0.1rem;\n}\n\n.change-list:hover,\n.delete-todo:hover,\n.notes-button:hover {\n  background-color: rgb(255, 221, 221);\n}\n\n.change-list:active,\n.delete-todo:active,\n.notes-button:active {\n  background-color: rgb(255, 200, 200);\n}\n\n.notes-button {\n  font-size: 1.2rem;\n  justify-self: end;\n}\n\n.notes-text,\n.notes-edit {\n  width: 14rem;\n  height: 6rem;\n  font-size: 1rem;\n  padding: 0.2rem;\n  position: absolute;\n  top: 2.2rem;\n  right: 2rem;\n  background-color: rgb(255, 155, 155);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  overflow: auto;\n  z-index: 3;\n}\n\n.list {\n  font-size: 2rem;\n  color: rgb(46, 46, 46);\n  margin: 0.5rem;\n  padding: 4rem;\n}\n\n.footer {\n  background-color: rgb(255, 74, 74);\n}\n\n.toDoButton {\n  position: absolute;\n  bottom: 3rem;\n  right: 5rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(255, 74, 74);\n  color: white;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n.toDoButton:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.toDoButton:active {\n  background-color: rgb(255, 110, 110);\n}\n\n.new-list {\n  position: absolute;\n  bottom: 3rem;\n  right: 1.8rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-size: 2rem;\n  font-weight: 900;\n  background: url(\"./list.png\") no-repeat center;\n  background-color: rgb(255, 74, 74);\n}\n\n.new-list:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.new-list:active {\n  background-color: rgb(255, 110, 110);\n}\n\nh3 {\n  height: 3rem;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh3 > p {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.github {\n}\n\n.github > img {\n  width: 3rem;\n  margin-bottom: 0;\n}\n\n.main-modal,\n.list-options,\n.new-list-modal {\n  position: absolute;\n  top: 10rem;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 30vw;\n  height: 15vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  padding: 1rem 2.5rem;\n  background-color: rgb(255 156 156);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n}\n\n.new-list-modal h2 {\n  justify-self: center;\n  font-size: 2rem;\n}\n\n.new-list-modal input {\n  align-self: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  border-radius: 0.5rem;\n  padding-left: 0.2rem;\n}\n\n.list-options {\n  display: none;\n  padding: 0;\n  /* width: calc(40vw + 2rem);\n  height: calc(10vh + 2rem); */\n  grid-template-rows: 2fr 1fr 1fr;\n}\n\n.list-options h2 {\n  color: white;\n  justify-self: center;\n  align-self: center;\n  font-size: 2rem;\n}\n\n.main-modal button,\n.list-options button {\n  border: none;\n  background-color: rgb(255, 74, 74);\n  color: white;\n  font-weight: 500;\n  font-size: 1.5rem;\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n\n.main-modal button:hover,\n.list-options button:hover {\n  background-color: rgb(255, 0, 0);\n}\n\n.main-modal button:active,\n.list-options button:active {\n  background-color: rgb(255, 110, 110);\n}\n\n.list-options button {\n  border-radius: 0;\n}\n\n.list-options button:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.list-options button:last-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.main-modal textarea {\n  padding: 0.2rem;\n  border-radius: 0.5rem;\n}\n\n.main-modal textarea:focus {\n  outline: 1px solid rgb(39, 39, 39);\n}\n\n.main-modal > h2 {\n  justify-self: center;\n  font-weight: 500;\n  color: rgb(37, 37, 37);\n  font-size: 2rem;\n}\n\n.name-input {\n  font-size: 1.5rem;\n  align-self: center;\n  border-radius: 0.2rem;\n  background-color: white;\n  color: rgb(51, 51, 51);\n}\n\n.notes-area {\n  margin-bottom: 0.3rem;\n  font-size: 1rem;\n}\n\n.radios {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-bottom: 0.2rem;\n}\n\n.radios > input {\n  justify-self: start;\n}\n\n.change-priority {\n  position: absolute;\n  top: 1.7rem;\n  /* right: 0.6rem; */\n  display: grid;\n  grid-template-rows: 1fr;\n  background-color: rgb(255, 223, 223);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  z-index: 3;\n}\n\n.change-priority button {\n  border: none;\n  background-color: white;\n  padding: 0.5rem;\n}\n\n.change-priority button:nth-child(1),\n.set-priority .priority-button:nth-child(1) {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  background-color: lime;\n}\n\n.change-priority button:nth-child(1):hover,\n.set-priority .priority-button:nth-child(1):hover {\n  background-color: rgb(3, 190, 3);\n}\n\n.change-priority button:nth-child(1):active,\n.set-priority .priority-button:nth-child(1):active {\n  background-color: rgb(37, 255, 37);\n}\n\n.change-priority button:nth-child(2),\n.set-priority .priority-button:nth-child(2) {\n  background-color: yellow;\n}\n\n.change-priority button:nth-child(2):hover,\n.set-priority .priority-button:nth-child(2):hover {\n  background-color: rgb(194, 194, 0);\n}\n\n.change-priority button:nth-child(2):active,\n.set-priority .priority-button:nth-child(2):active {\n  background-color: rgb(255, 255, 48);\n}\n\n.change-priority button:nth-child(3),\n.set-priority .priority-button:nth-child(3) {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  background-color: rgb(255 0 0);\n}\n\n.change-priority button:nth-child(3):hover,\n.set-priority .priority-button:nth-child(3):hover {\n  background-color: rgb(196, 0, 0);\n}\n\n.change-priority button:nth-child(3):active,\n.set-priority .priority-button:nth-child(3):active {\n  background-color: rgb(255, 29, 29);\n}\n\n.set-priority {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.2rem;\n}\n\n.set-priority button {\n  align-self: center;\n  justify-self: stretch;\n  background-color: rgb(255, 74, 74);\n  color: white;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n  font-weight: 900;\n}\n\n.change-date {\n  position: absolute;\n  top: 2rem;\n  right: 8vw;\n  display: grid;\n  z-index: 3;\n  background-color: rgb(255 161 161);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  width: 7rem;\n  outline: none;\n}\n\n.change-date input {\n  justify-self: center;\n  background-color: rgb(255 161 161);\n  border: none;\n  outline: none;\n  color: white;\n  font-weight: 900;\n}\n\n.change-date button {\n  background-color: rgb(255, 74, 74);\n  color: white;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border: none;\n  justify-self: stretch;\n  margin-top: 0.2rem;\n  font-weight: 900;\n}\n\n.clock-icon {\n  width: 4rem;\n  height: 4rem;\n}\n\n.all-lists {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: 1fr;\n  background-color: rgb(255, 166, 166);\n  position: relative;\n}\n\n.all-lists h2 {\n  position: absolute;\n  left: 0.5rem;\n}\n\n.all-lists button {\n  border: none;\n  background-color: rgb(255, 100, 100);\n  color: white;\n  font-size: 1rem;\n  font-weight: 900;\n  margin: 0 0.2rem;\n}\n\n.list-div {\n  background-color: rgb(255, 100, 100);\n  margin: 0.5rem 0.2rem 0 0.2rem;\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  font-size: 1rem;\n  position: relative;\n  border-radius: 0.2rem;\n}\n\n.list-name {\n  justify-self: stretch;\n  padding-left: 1rem;\n}\n\n.list-div .edit-list {\n  font-size: 0.8rem;\n}\n\n.kebab-list {\n  position: relative;\n  border-radius: 50%;\n  align-self: end;\n  justify-self: end;\n}\n\n.kebab-list:hover {\n  background-color: red;\n}\n\n.kebab-icon {\n  width: 1rem;\n  justify-self: center;\n  align-self: center;\n}\n\n.kebab-modal {\n  position: absolute;\n  top: 1.2rem;\n  background-color: rgb(255, 223, 223);\n  color: rgb(39, 39, 39);\n  border: 0.01rem solid rgb(97, 97, 97);\n  border-radius: 0.5rem;\n  /* padding: 0.2rem; */\n  z-index: 3;\n  display: grid;\n  outline: none;\n}\n\n.kebab-modal .delete-list,\n.kebab-modal .edit-list {\n  background-color: rgb(255, 74, 74);\n  justify-self: stretch;\n  font-size: 1rem;\n  padding: 0.2rem;\n  margin: 0;\n  outline: none;\n}\n\n.kebab-modal .delete-list {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.kebab-modal .edit-list {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.current {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   setLocal: () => (/* binding */ setLocal),
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








const setLocal = () => {
  localStorage.clear();
  localStorage.setItem("listOfLists", JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists));
};

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
    localStorage.clear();
    localStorage.setItem("listOfLists", JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists));
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
          setLocal();
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
          setLocal();
        });

        mediumPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "Mid";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "yellow";
          changePriority.remove();
          setLocal();
        });

        highPriority.addEventListener("click", (e) => {
          e.stopPropagation();
          item.priority = "High";
          priorityDiv.textContent = "Priority: " + item.priority;
          priorityDiv.style.backgroundColor = "red";
          changePriority.remove();
          setLocal();
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
          setLocal();
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
        _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.forEach((list) => {
          if (list.name == item.list) {
            list.items.splice(list.items.indexOf(item), 1);
          }
        });
        // item.list.items.splice(item.list.items.indexOf(item), 1);
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
                item.list = list.name;
                list.items.push(item);
                console.log(list.items);
                listOptionsDiv.remove();
                listSelectButtons.forEach((listButton) => {
                  if (list.name == listButton.textContent) {
                    showActiveList(listButton);
                    if (item.list == list.name) {
                      showList(list.items);
                      (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(list.items);
                      localStorage.clear();
                      localStorage.setItem(
                        "listOfLists",
                        JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists)
                      );
                    }
                    // showList(item.list.items);
                    // removeToDo(item.list.items);
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
      localStorage.clear();
      localStorage.setItem("listOfLists", JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists));
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
          localStorage.clear();
          localStorage.setItem("listOfLists", JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists));
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
              setLocal();
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
    newItem.list = listOfLists[0].name; /// added .name due to JSON error
    showList(listOfLists[0].items);
    (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(listOfLists[0].items);
    localStorage.clear();
    localStorage.setItem("listOfLists", JSON.stringify(listOfLists));
    listOptionsDiv.parentElement.removeChild(listOptionsDiv);
  } else {
    listButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        listOfLists.forEach((list) => {
          if (button.textContent == list.name) {
            (0,_list_stuff__WEBPACK_IMPORTED_MODULE_1__.addItem)(newItem, list);
            newItem.list = list.name; /// added .name due to JSON error
            showList(list.items);
            (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(list.items);
            localStorage.clear();
            localStorage.setItem("listOfLists", JSON.stringify(listOfLists));
            console.log(list.items);
            const listSelectButtons = document.querySelectorAll(".list-name");
            listSelectButtons.forEach((listButton) => {
              if (list.name == listButton.textContent) {
                showActiveList(listButton);
                localStorage.clear();
                localStorage.setItem(
                  "listOfLists",
                  JSON.stringify(listOfLists)
                );
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
      if (nameInput.value == "") {
        alert("Please insert a task.");
        return;
      } else {
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
            const priorityButtons =
              document.querySelectorAll(".priority-button");
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
                localStorage.clear();
                localStorage.setItem(
                  "listOfLists",
                  JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists)
                );
              });
            });
          });
        });
      }
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
    let nameIsTaken = false;
    _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.forEach((list) => {
      if (newListInput.value == list.name) {
        nameIsTaken = true;
        return;
      }
    });
    if (e.key === "Enter") {
      if (newListInput.value == "") {
        alert("Please insert a list name.");
        return;
      } else if (nameIsTaken) {
        alert("There's already a list by that name. Please pick another.");
        return;
      } else {
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
        localStorage.clear();
        localStorage.setItem("listOfLists", JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists));
        return;
      }
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

const biggestList = () => {
  let theBiggest = _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists[0];
  _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.forEach((list) => {
    if (list.items.length > theBiggest.items.length) {
      theBiggest = list;
    }
  });
  console.log(theBiggest.name);
  return theBiggest.name;
};

const parseListOfLists = (async () => {
  if (localStorage.getItem("listOfLists") !== null) {
    const fetchJson = localStorage.getItem("listOfLists");
    let parsedArray = await JSON.parse(fetchJson);
    console.log(parsedArray);
    _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.pop();
    parsedArray.forEach((item) => {
      _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.push(item);
      _list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists.forEach((list) => {
        const currentList = biggestList();
        if (list.name == currentList) {
          showList(list.items);
          (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(list.items);
        }
      });
      // showList(listOfLists[0].items);
      showAllLists();

      const listButtons = document.querySelectorAll(".list-name");
      listButtons.forEach((button) => {
        const currentButton = biggestList();
        if (button.textContent == currentButton) {
          showActiveList(button);
        }
      });
    });
    // listOfLists = parsedArray.slice();
    console.log(_list_stuff__WEBPACK_IMPORTED_MODULE_1__.listOfLists);
  } else {
    return;
  }
})();


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
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-stuff */ "./src/dom-stuff.js");


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
        (0,_dom_stuff__WEBPACK_IMPORTED_MODULE_0__.setLocal)();
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
/* harmony import */ var _list_stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-stuff */ "./src/list-stuff.js");


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
      localStorage.clear();
      localStorage.setItem("listOfLists", JSON.stringify(_list_stuff__WEBPACK_IMPORTED_MODULE_0__.listOfLists));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFB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bEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUSxvREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1QkFBdUIsb0RBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxvREFBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFVO0FBQ2hCO0FBQ0EseURBQXlELG9EQUFXO0FBQ3BFLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVDQUFLO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsb0RBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFXO0FBQ3pCLHFCQUFxQixvREFBVyxDQUFDLG9EQUFXO0FBQzVDLFlBQVksb0RBQVcsUUFBUSxvREFBVztBQUMxQztBQUNBLFlBQVk7QUFDWixxQkFBcUIsb0RBQVcsQ0FBQyxvREFBVztBQUM1QyxZQUFZLG9EQUFXLFFBQVEsb0RBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxvREFBVztBQUN4RSxzQkFBc0Isb0RBQVc7QUFDakMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1gsd0NBQXdDO0FBQ3hDO0FBQ0EsSUFBSSx1REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFPO0FBQ25CLHNDQUFzQztBQUN0QztBQUNBLFlBQVksdURBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvREFBVztBQUM1QztBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSx3QkFBd0IsdURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxpQkFBaUIsb0RBQVcsQ0FBQyxvREFBVztBQUN4QztBQUNBLDJEQUEyRCxvREFBVztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvREFBVztBQUM5QixFQUFFLG9EQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmO0FBQ0EsTUFBTSxvREFBVztBQUNqQixNQUFNLG9EQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsdURBQVU7QUFDcEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCLG9EQUFXO0FBQzNCLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlyQnNDOztBQUVoQztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTs7QUFFTztBQUNQO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkIyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsb0RBQVc7QUFDcEUsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNxQjtBQUM4Qjs7QUFFekUseURBQWE7O0FBRWI7QUFDQSxFQUFFLHdEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFhO0FBQ2YsY0FBYyxvREFBVztBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1zdHVmZi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXQtdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xpc3Qtc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW1vdmVUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9saXN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgxLFxuaDMgPiBwIHtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQge1xuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICBvdXRsaW5lLWNvbG9yOiBibGFjaztcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDg1dmggM3JlbTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZG9zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxMjIsIDEyMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9kb3MgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBmb250LXNpemU6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNTYgMTU2KTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMC41cmVtO1xuICBncmlkLXJvdzogc3BhbiAyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubGlzdC1kaXYgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBmb250LXNpemU6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAwLCAxMDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxLjJyZW07XG4gIGdyaWQtcm93OiBzcGFuIDI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWFpbi1tb2RhbCBpbnB1dFt0eXBlPVwidGltZVwiXSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm5hbWUtcHJvcCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGdyaWQtcm93OiBzcGFuIDI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmRhdGUtcHJvcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uZGF0ZS1wcm9wOmhvdmVyLFxuLm5hbWUtcHJvcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2OSwgMTY5KTtcbn1cblxuLm5vdGVzLXRleHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyMyk7XG59XG5cbi5wcmlvcml0eS1wcm9wIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICBwYWRkaW5nOiAwLjFyZW0gMC4yNXJlbSAwLjFyZW07XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4ucHJpb3JpdHktcHJvcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDE4MCwgMTgwKTtcbn1cblxuLnRvZG8tYnV0dG9ucyB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwLjJyZW07XG59XG5cbi5jaGFuZ2UtbGlzdCxcbi5kZWxldGUtdG9kbyxcbi5ub3Rlcy1idXR0b24ge1xuICBtYXJnaW46IDAuMXJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMS4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubm90ZXMtYnV0dG9uIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcbn1cblxuLmNoYW5nZS1saXN0OmhvdmVyLFxuLmRlbGV0ZS10b2RvOmhvdmVyLFxuLm5vdGVzLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMSwgMjIxKTtcbn1cblxuLmNoYW5nZS1saXN0OmFjdGl2ZSxcbi5kZWxldGUtdG9kbzphY3RpdmUsXG4ubm90ZXMtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMCwgMjAwKTtcbn1cblxuLm5vdGVzLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLm5vdGVzLXRleHQsXG4ubm90ZXMtZWRpdCB7XG4gIHdpZHRoOiAxNHJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIuMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1NSwgMTU1KTtcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogMztcbn1cblxuLmxpc3Qge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XG4gIG1hcmdpbjogMC41cmVtO1xuICBwYWRkaW5nOiA0cmVtO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbn1cblxuLnRvRG9CdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3JlbTtcbiAgcmlnaHQ6IDVyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnRvRG9CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cblxuLnRvRG9CdXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xufVxuXG4ubmV3LWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogM3JlbTtcbiAgcmlnaHQ6IDEuOHJlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbn1cblxuLm5ldy1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG5cbi5uZXctbGlzdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XG59XG5cbmgzIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMyA+IHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5naXRodWIge1xufVxuXG4uZ2l0aHViID4gaW1nIHtcbiAgd2lkdGg6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYWluLW1vZGFsLFxuLmxpc3Qtb3B0aW9ucyxcbi5uZXctbGlzdC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHJlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMHZ3O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE1NiAxNTYpO1xuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5uZXctbGlzdC1tb2RhbCBoMiB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5uZXctbGlzdC1tb2RhbCBpbnB1dCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG5cbi5saXN0LW9wdGlvbnMge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAvKiB3aWR0aDogY2FsYyg0MHZ3ICsgMnJlbSk7XG4gIGhlaWdodDogY2FsYygxMHZoICsgMnJlbSk7ICovXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XG59XG5cbi5saXN0LW9wdGlvbnMgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm1haW4tbW9kYWwgYnV0dG9uLFxuLmxpc3Qtb3B0aW9ucyBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuXG4ubWFpbi1tb2RhbCBidXR0b246aG92ZXIsXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuXG4ubWFpbi1tb2RhbCBidXR0b246YWN0aXZlLFxuLmxpc3Qtb3B0aW9ucyBidXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xufVxuXG4ubGlzdC1vcHRpb25zIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5saXN0LW9wdGlvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG4ubWFpbi1tb2RhbCB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4ubWFpbi1tb2RhbCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMzksIDM5LCAzOSk7XG59XG5cbi5tYWluLW1vZGFsID4gaDIge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubmFtZS1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG59XG5cbi5ub3Rlcy1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5yYWRpb3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59XG5cbi5yYWRpb3MgPiBpbnB1dCB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS43cmVtO1xuICAvKiByaWdodDogMC42cmVtOyAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAyMjMpO1xuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHotaW5kZXg6IDM7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMSksXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIsXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDEpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDE5MCwgMyk7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgxKTphY3RpdmUsXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDEpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMjU1LCAzNyk7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgyKSxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgyKTpob3Zlcixcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDApO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMik6YWN0aXZlLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgyKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDQ4KTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDMpLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgzKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAwIDApO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIsXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDMpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMCwgMCk7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgzKTphY3RpdmUsXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDMpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI5LCAyOSk7XG59XG5cbi5zZXQtcHJpb3JpdHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLnNldC1wcmlvcml0eSBidXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jaGFuZ2UtZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycmVtO1xuICByaWdodDogOHZ3O1xuICBkaXNwbGF5OiBncmlkO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE2MSAxNjEpO1xuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiA3cmVtO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2hhbmdlLWRhdGUgaW5wdXQge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNjEgMTYxKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jaGFuZ2UtZGF0ZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jbG9jay1pY29uIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbn1cblxuLmFsbC1saXN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY2LCAxNjYpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbGwtbGlzdHMgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuNXJlbTtcbn1cblxuLmFsbC1saXN0cyBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMCwgMTAwKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbjogMCAwLjJyZW07XG59XG5cbi5saXN0LWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMCwgMTAwKTtcbiAgbWFyZ2luOiAwLjVyZW0gMC4ycmVtIDAgMC4ycmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuLmxpc3QtbmFtZSB7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG4ubGlzdC1kaXYgLmVkaXQtbGlzdCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ua2ViYWItbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ua2ViYWItbGlzdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmtlYmFiLWljb24ge1xuICB3aWR0aDogMXJlbTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmtlYmFiLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAyMjMpO1xuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIC8qIHBhZGRpbmc6IDAuMnJlbTsgKi9cbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmtlYmFiLW1vZGFsIC5kZWxldGUtbGlzdCxcbi5rZWJhYi1tb2RhbCAuZWRpdC1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ua2ViYWItbW9kYWwgLmRlbGV0ZS1saXN0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG4ua2ViYWItbW9kYWwgLmVkaXQtbGlzdCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsc0NBQXNDO0VBQ3RDLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IscUNBQXFDO0VBQ3JDLGlDQUFpQztFQUNqQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxvQ0FBb0M7QUFDdEM7O0FBRUE7OztFQUdFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvRUFBOEM7RUFDOUMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Y7OEJBQzRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEb3Npc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgxLFxcbmgzID4gcCB7XFxuICBmb250LWZhbWlseTogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRG9zaXNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmlucHV0IHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gIG91dGxpbmUtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggODV2aCAzcmVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxMjIsIDEyMik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG9zIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTU2IDE1Nik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMC41cmVtO1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5saXN0LWRpdiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDAsIDEwMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMS4ycmVtO1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubmFtZS1wcm9wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZS1wcm9wIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5kYXRlLXByb3A6aG92ZXIsXFxuLm5hbWUtcHJvcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjksIDE2OSk7XFxufVxcblxcbi5ub3Rlcy10ZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMjIzKTtcXG59XFxuXFxuLnByaW9yaXR5LXByb3Age1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuMjVyZW0gMC4xcmVtO1xcbiAgbWFyZ2luOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktcHJvcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxODAsIDE4MCk7XFxufVxcblxcbi50b2RvLWJ1dHRvbnMge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAuMnJlbTtcXG59XFxuXFxuLmNoYW5nZS1saXN0LFxcbi5kZWxldGUtdG9kbyxcXG4ubm90ZXMtYnV0dG9uIHtcXG4gIG1hcmdpbjogMC4xcmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubm90ZXMtYnV0dG9uIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XFxufVxcblxcbi5jaGFuZ2UtbGlzdDpob3ZlcixcXG4uZGVsZXRlLXRvZG86aG92ZXIsXFxuLm5vdGVzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjEsIDIyMSk7XFxufVxcblxcbi5jaGFuZ2UtbGlzdDphY3RpdmUsXFxuLmRlbGV0ZS10b2RvOmFjdGl2ZSxcXG4ubm90ZXMtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDAsIDIwMCk7XFxufVxcblxcbi5ub3Rlcy1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm5vdGVzLXRleHQsXFxuLm5vdGVzLWVkaXQge1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyLjJyZW07XFxuICByaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1NSwgMTU1KTtcXG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XFxuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBwYWRkaW5nOiA0cmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxufVxcblxcbi50b0RvQnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogM3JlbTtcXG4gIHJpZ2h0OiA1cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnRvRG9CdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi50b0RvQnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XFxufVxcblxcbi5uZXctbGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDNyZW07XFxuICByaWdodDogMS44cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2xpc3QucG5nXFxcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxufVxcblxcbi5uZXctbGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLm5ldy1saXN0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XFxufVxcblxcbmgzIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgzID4gcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG59XFxuXFxuLmdpdGh1YiA+IGltZyB7XFxuICB3aWR0aDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5tYWluLW1vZGFsLFxcbi5saXN0LW9wdGlvbnMsXFxuLm5ldy1saXN0LW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTByZW07XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgcGFkZGluZzogMXJlbSAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE1NiAxNTYpO1xcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5uZXctbGlzdC1tb2RhbCBoMiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm5ldy1saXN0LW1vZGFsIGlucHV0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogd2lkdGg6IGNhbGMoNDB2dyArIDJyZW0pO1xcbiAgaGVpZ2h0OiBjYWxjKDEwdmggKyAycmVtKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XFxufVxcblxcbi5saXN0LW9wdGlvbnMgaDIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tYWluLW1vZGFsIGJ1dHRvbixcXG4ubGlzdC1vcHRpb25zIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCBidXR0b246aG92ZXIsXFxuLmxpc3Qtb3B0aW9ucyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5tYWluLW1vZGFsIGJ1dHRvbjphY3RpdmUsXFxuLmxpc3Qtb3B0aW9ucyBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExMCwgMTEwKTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucyBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucyBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucyBidXR0b246bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubWFpbi1tb2RhbCB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluLW1vZGFsIHRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMzksIDM5LCAzOSk7XFxufVxcblxcbi5tYWluLW1vZGFsID4gaDIge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm5hbWUtaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XFxufVxcblxcbi5ub3Rlcy1hcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnJhZGlvcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG59XFxuXFxuLnJhZGlvcyA+IGlucHV0IHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjdyZW07XFxuICAvKiByaWdodDogMC42cmVtOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAyMjMpO1xcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDEpLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMSkge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlcixcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDEpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxOTAsIDMpO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMSk6YWN0aXZlLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMSk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNywgMjU1LCAzNyk7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgyKSxcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAwKTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDIpOmFjdGl2ZSxcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDIpOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDQ4KTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDMpLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMykge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMCAwKTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMCwgMCk7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgzKTphY3RpdmUsXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgzKTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjksIDI5KTtcXG59XFxuXFxuLnNldC1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uc2V0LXByaW9yaXR5IGJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5jaGFuZ2UtZGF0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICByaWdodDogOHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE2MSAxNjEpO1xcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNoYW5nZS1kYXRlIGlucHV0IHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNjEgMTYxKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uY2hhbmdlLWRhdGUgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmNsb2NrLWljb24ge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5hbGwtbGlzdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY2LCAxNjYpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWxsLWxpc3RzIGgyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmFsbC1saXN0cyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAwLCAxMDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbjogMCAwLjJyZW07XFxufVxcblxcbi5saXN0LWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDAsIDEwMCk7XFxuICBtYXJnaW46IDAuNXJlbSAwLjJyZW0gMCAwLjJyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4ubGlzdC1uYW1lIHtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLmxpc3QtZGl2IC5lZGl0LWxpc3Qge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5rZWJhYi1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ua2ViYWItbGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5rZWJhYi1pY29uIHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5rZWJhYi1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMjIzKTtcXG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XFxuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgLyogcGFkZGluZzogMC4ycmVtOyAqL1xcbiAgei1pbmRleDogMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ua2ViYWItbW9kYWwgLmRlbGV0ZS1saXN0LFxcbi5rZWJhYi1tb2RhbCAuZWRpdC1saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBtYXJnaW46IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ua2ViYWItbW9kYWwgLmRlbGV0ZS1saXN0IHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5rZWJhYi1tb2RhbCAuZWRpdC1saXN0IHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5jdXJyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCB0b2RvRm9ybSA9IChuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgbGV0IGxpc3Q7XG4gIHJldHVybiB7IG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgbGlzdCB9O1xufTtcbiIsImltcG9ydCB7IGVkaXRUb0RvIH0gZnJvbSBcIi4vZWRpdC10b2RvXCI7XG5pbXBvcnQgeyBhZGRJdGVtLCBsaXN0T2ZMaXN0cywgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpc3Qtc3R1ZmZcIjtcbmltcG9ydCB7IHJlbW92ZVRvRG8gfSBmcm9tIFwiLi9yZW1vdmVUb0RvXCI7XG5pbXBvcnQgeyB0b2RvRm9ybSB9IGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL2xpc3QucG5nXCI7XG5pbXBvcnQgQ2hpY2tpbiBmcm9tIFwiLi9jaGlja2luLnBuZ1wiO1xuaW1wb3J0IGtlYmFiIGZyb20gXCIuL2tlYmFiLnBuZ1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWwgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RPZkxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RPZkxpc3RzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZG9tR2VuZXJhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRvZG8udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKFwidG9Eb0J1dHRvblwiKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChhZGRUb2RvKTtcblxuICBjb25zdCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbGlzdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbGlzdEljb24uc3JjID0gSWNvbjtcbiAgbmV3TGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LWxpc3RcIik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobmV3TGlzdEJ1dHRvbik7XG4gIGNvbnN0IGFsbExpc3REaXZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWxsTGlzdERpdnMuY2xhc3NMaXN0LmFkZChcImFsbC1saXN0c1wiKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChhbGxMaXN0RGl2cyk7XG5cbiAgY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvTGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0b0RvTGlzdCk7XG5cbiAgY29uc3QgY2hpY2tpbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY2hpY2tpbkljb24uc3JjID0gQ2hpY2tpbjtcbiAgY29uc3QgZ2l0SHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naXRodWJcIik7XG4gIGdpdEh1Yi5hcHBlbmRDaGlsZChjaGlja2luSWNvbik7XG5cbiAgY2hpY2tpbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgY2hpY2tpbkljb24uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoNDVkZWcpXCI7XG4gIH0pO1xuXG4gIGNoaWNraW5JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgY2hpY2tpbkljb24ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm1cIik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dMaXN0ID0gKGFMaXN0KSA9PiB7XG4gIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpO1xuICB3aGlsZSAodG9Eb0xpc3QuZmlyc3RDaGlsZCkge1xuICAgIHRvRG9MaXN0LnJlbW92ZUNoaWxkKHRvRG9MaXN0LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHRvRG9MaXN0LnRleHRDb250ZW50ID0gXCJUby1kb3M6IFwiO1xuICBhTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmV3RG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEb20uY2xhc3NMaXN0LmFkZChcInRvZG9zXCIpO1xuXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJuYW1lLXByb3BcIik7XG4gICAgbmFtZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZWRpdFRvRG8obmFtZURpdiwgaXRlbSk7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0T2ZMaXN0c1wiLCBKU09OLnN0cmluZ2lmeShsaXN0T2ZMaXN0cykpO1xuICAgIG5ld0RvbS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGUgKyBcImhcIjtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXRlLXByb3BcIik7XG5cbiAgICBkdWVEYXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1kYXRlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlLWRhdGVcIikucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkdWVEYXRlUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHVlRGF0ZVByb21wdC5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLWRhdGVcIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIjA5OjAwXCI7XG4gICAgICAgIGR1ZURhdGVQcm9tcHQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGR1ZURhdGVTZWxlY3QudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICAgICAgICBkdWVEYXRlUHJvbXB0LmFwcGVuZENoaWxkKGR1ZURhdGVTZWxlY3QpO1xuICAgICAgICBkdWVEYXRlRGl2LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVByb21wdCk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5mb2N1cygpO1xuXG4gICAgICAgIGR1ZURhdGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICAgIGl0ZW0uZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTsgLy8vLy8vLy8vLy8gJ2R1ZURhdGUnIGZvciBuZXcgVG9kb1xuICAgICAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGUgKyBcImhcIjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmR1ZURhdGUpO1xuICAgICAgICAgIGR1ZURhdGVQcm9tcHQucmVtb3ZlKCk7XG4gICAgICAgICAgc2V0TG9jYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV3RG9tLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmIChpdGVtLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGltZVwiO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PSBcIk1pZFwiKSB7XG4gICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIGl0ZW0ucHJpb3JpdHk7XG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXByb3BcIik7XG4gICAgcHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBwcmlvcml0eURpdi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgfSk7XG4gICAgcHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaW1lXCI7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gXCJNaWRcIikge1xuICAgICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlLXByaW9yaXR5XCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlLXByaW9yaXR5XCIpLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGFuZ2VQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLXByaW9yaXR5XCIpO1xuXG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgICAgICBjaGFuZ2VQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTWlkXCI7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcblxuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvcml0eSk7XG5cbiAgICAgICAgbG93UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBpdGVtLnByaW9yaXR5ID0gXCJMb3dcIjtcbiAgICAgICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgaXRlbS5wcmlvcml0eTtcbiAgICAgICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpbWVcIjtcbiAgICAgICAgICBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKTtcbiAgICAgICAgICBzZXRMb2NhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGl0ZW0ucHJpb3JpdHkgPSBcIk1pZFwiO1xuICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICAgICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICAgICAgc2V0TG9jYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGlnaFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgaXRlbS5wcmlvcml0eSA9IFwiSGlnaFwiO1xuICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICAgICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICAgICAgc2V0TG9jYWwoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbmV3RG9tLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgIGNvbnN0IG5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibm90ZXMtZGl2XCIpO1xuICAgIGNvbnN0IG5vdGVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZXNUZXh0LnRleHRDb250ZW50ID0gaXRlbS5ub3RlcztcbiAgICBub3Rlc1RleHQuY2xhc3NMaXN0LmFkZChcIm5vdGVzLXRleHRcIik7XG4gICAgbm90ZXNUZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBub3Rlc1RleHQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICBjb25zdCBlZGl0UHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgIGVkaXRQcm9wLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1lZGl0XCIpO1xuICAgICAgZWRpdFByb3AudmFsdWUgPSBub3Rlc1RleHQudGV4dENvbnRlbnQ7XG4gICAgICBub3Rlc1RleHQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWRpdFByb3AsIG5vdGVzVGV4dC5uZXh0U2libGluZyk7XG4gICAgICBlZGl0UHJvcC5mb2N1cygpO1xuICAgICAgZWRpdFByb3AuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG5vdGVzVGV4dC50ZXh0Q29udGVudCA9IGVkaXRQcm9wLnZhbHVlO1xuICAgICAgICAgIG5vdGVzVGV4dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVkaXRQcm9wKTtcbiAgICAgICAgICAvLyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgbm90ZXNUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICBpdGVtLm5vdGVzID0gbm90ZXNUZXh0LnRleHRDb250ZW50O1xuICAgICAgICAgIG5vdGVzVGV4dC50ZXh0Q29udGVudCA9IGl0ZW0ubm90ZXM7XG4gICAgICAgICAgc2V0TG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBuZXdEb20uYXBwZW5kQ2hpbGQobm90ZXNUZXh0KTtcbiAgICBjb25zdCBub3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbm90ZXNCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5vdGVzLWJ1dHRvblwiKTtcbiAgICBub3Rlc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiaVwiO1xuICAgIG5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgbm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgZGVsQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgYUxpc3QuaW5kZXhPZihpdGVtKSk7XG4gICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdG9kb1wiKTtcblxuICAgIGNvbnN0IGNoYW5nZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNoYW5nZUxpc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkxpc3RcIjtcbiAgICBjaGFuZ2VMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtbGlzdFwiKTtcblxuICAgIGNoYW5nZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtb3B0aW9uc1wiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtb3B0aW9uc1wiKS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICBpZiAobGlzdC5uYW1lID09IGl0ZW0ubGlzdCkge1xuICAgICAgICAgICAgbGlzdC5pdGVtcy5zcGxpY2UobGlzdC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpdGVtLmxpc3QuaXRlbXMuc3BsaWNlKGl0ZW0ubGlzdC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgbGlzdEdlbmVyYXRpb24obGlzdE9mTGlzdHMpO1xuICAgICAgICBjb25zdCBsaXN0T3B0aW9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1vcHRpb25zXCIpO1xuICAgICAgICBjb25zdCBsaXN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1vcHRpb25zIGJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgbGlzdFNlbGVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtbmFtZVwiKTtcbiAgICAgICAgbGlzdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSBsaXN0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmxpc3QgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGlzdC5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QuaXRlbXMpO1xuICAgICAgICAgICAgICAgIGxpc3RPcHRpb25zRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGxpc3RTZWxlY3RCdXR0b25zLmZvckVhY2goKGxpc3RCdXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChsaXN0Lm5hbWUgPT0gbGlzdEJ1dHRvbi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBzaG93QWN0aXZlTGlzdChsaXN0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGlzdCA9PSBsaXN0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0Lml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmVUb0RvKGxpc3QuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0T2ZMaXN0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobGlzdE9mTGlzdHMpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBzaG93TGlzdChpdGVtLmxpc3QuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmVUb0RvKGl0ZW0ubGlzdC5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRvRG9DYXJkQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvQ2FyZEJvdHRvbS5jbGFzc0xpc3QuYWRkKFwidG9kby1idXR0b25zXCIpO1xuICAgIHRvRG9DYXJkQm90dG9tLmFwcGVuZENoaWxkKG5vdGVzQnV0dG9uKTtcbiAgICB0b0RvQ2FyZEJvdHRvbS5hcHBlbmRDaGlsZChub3Rlc1RleHQpO1xuICAgIHRvRG9DYXJkQm90dG9tLmFwcGVuZENoaWxkKGNoYW5nZUxpc3RCdXR0b24pO1xuICAgIHRvRG9DYXJkQm90dG9tLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XG4gICAgdG9Eb0NhcmRCb3R0b20uYXBwZW5kQ2hpbGQobm90ZXNEaXYpO1xuICAgIG5ld0RvbS5hcHBlbmRDaGlsZCh0b0RvQ2FyZEJvdHRvbSk7XG4gICAgdG9Eb0xpc3QuYXBwZW5kQ2hpbGQobmV3RG9tKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsbExpc3RzID0gKCkgPT4ge1xuICBjb25zdCBhbGxMaXN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLWxpc3RzXCIpO1xuICB3aGlsZSAoYWxsTGlzdERpdnMuZmlyc3RDaGlsZCkge1xuICAgIGFsbExpc3REaXZzLnJlbW92ZUNoaWxkKGFsbExpc3REaXZzLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGNvbnN0IGFsbExpc3RzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYWxsTGlzdHNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJMaXN0czogXCI7XG4gIGFsbExpc3REaXZzLmFwcGVuZENoaWxkKGFsbExpc3RzSGVhZGluZyk7XG4gIGFsbExpc3REaXZzLmFwcGVuZENoaWxkKGFsbExpc3RzSGVhZGluZyk7XG4gIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWRpdlwiKTtcbiAgICBjb25zdCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0LW5hbWVcIik7XG4gICAgbGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICBjb25zdCBkZWxldGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVMaXN0LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtbGlzdFwiKTtcbiAgICBkZWxldGVMaXN0LnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBjb25zdCByZW5hbWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW5hbWVMaXN0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWxpc3RcIik7XG4gICAgcmVuYW1lTGlzdC50ZXh0Q29udGVudCA9IFwiUmVuYW1lXCI7XG5cbiAgICBsaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgaWYgKGxpc3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxpc3REaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1IDczIDczKVwiO1xuICAgICAgbGlzdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUgNzMgNzMpXCI7XG4gICAgICBsaXN0S2ViYWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1IDczIDczKVwiO1xuICAgIH0pO1xuXG4gICAgbGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKGxpc3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxpc3REaXYucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIik7XG4gICAgICBsaXN0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZENvbG9yXCIpO1xuICAgICAgbGlzdEtlYmFiLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZENvbG9yXCIpO1xuICAgIH0pO1xuXG4gICAgbGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsVGhlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1uYW1lXCIpO1xuICAgICAgYWxsVGhlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoXCJzdHlsZVwiKSkge1xuICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgICAgICAgIGJ1dHRvbi5uZXh0U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGlzdERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgbGlzdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgbGlzdEtlYmFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICBzaG93TGlzdChsaXN0Lml0ZW1zKTtcbiAgICAgIHJlbW92ZVRvRG8obGlzdC5pdGVtcyk7XG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE9mTGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkobGlzdE9mTGlzdHMpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RLZWJhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGlzdEtlYmFiLmNsYXNzTGlzdC5hZGQoXCJrZWJhYi1saXN0XCIpO1xuICAgIGNvbnN0IGxpc3RLZWJhYkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsaXN0S2ViYWJJbWFnZS5zcmMgPSBrZWJhYjtcbiAgICBsaXN0S2ViYWJJbWFnZS5jbGFzc0xpc3QuYWRkKFwia2ViYWItaWNvblwiKTtcbiAgICBsaXN0S2ViYWIuYXBwZW5kQ2hpbGQobGlzdEtlYmFiSW1hZ2UpO1xuXG4gICAgbGlzdEtlYmFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtlYmFiLW1vZGFsXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2ViYWItbW9kYWxcIikucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBrZWJhYk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAga2ViYWJNb2RhbC5jbGFzc0xpc3QuYWRkKFwia2ViYWItbW9kYWxcIik7XG4gICAgICAgIGtlYmFiTW9kYWwuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdCk7XG4gICAgICAgIGtlYmFiTW9kYWwuYXBwZW5kQ2hpbGQocmVuYW1lTGlzdCk7XG4gICAgICAgIGxpc3RLZWJhYi5hcHBlbmRDaGlsZChrZWJhYk1vZGFsKTtcblxuICAgICAgICBkZWxldGVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGxpc3RPZkxpc3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCBhbHdheXMgaGF2ZSBhdCBsZWFzdCAxIGxpc3QhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAobGlzdC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsaXN0Lml0ZW1zLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvd0xpc3QobGlzdC5pdGVtcyk7XG4gICAgICAgICAgaWYgKGxpc3RPZkxpc3RzLmluZGV4T2YobGlzdCkgPT09IDApIHtcbiAgICAgICAgICAgIHNob3dMaXN0KGxpc3RPZkxpc3RzW2xpc3RPZkxpc3RzLmluZGV4T2YobGlzdCkgKyAxXS5pdGVtcyk7XG4gICAgICAgICAgICBsaXN0T2ZMaXN0cy5zcGxpY2UobGlzdE9mTGlzdHMuaW5kZXhPZihsaXN0KSwgMSk7XG4gICAgICAgICAgICBzaG93QWN0aXZlTGlzdChsaXN0RGl2Lm5leHRTaWJsaW5nLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd0xpc3QobGlzdE9mTGlzdHNbbGlzdE9mTGlzdHMuaW5kZXhPZihsaXN0KSAtIDFdLml0ZW1zKTtcbiAgICAgICAgICAgIGxpc3RPZkxpc3RzLnNwbGljZShsaXN0T2ZMaXN0cy5pbmRleE9mKGxpc3QpLCAxKTtcbiAgICAgICAgICAgIHNob3dBY3RpdmVMaXN0KGxpc3REaXYucHJldmlvdXNTaWJsaW5nLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdERpdi5yZW1vdmUoKTtcbiAgICAgICAgICBrZWJhYk1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE9mTGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkobGlzdE9mTGlzdHMpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0T2ZMaXN0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlbmFtZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb3BcIikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9wXCIpLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gICAgICAgICAgY29uc3QgZWRpdFByb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgZWRpdFByb3AuY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvcFwiKTtcbiAgICAgICAgICBlZGl0UHJvcC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgICBlZGl0UHJvcC52YWx1ZSA9IGxpc3RCdXR0b24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgbGlzdEJ1dHRvbi5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGVkaXRQcm9wLFxuICAgICAgICAgICAgbGlzdEJ1dHRvbi5uZXh0U2libGluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZWRpdFByb3Auc3R5bGUuYWxpZ25TZWxmID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICBlZGl0UHJvcC5mb2N1cygpO1xuICAgICAgICAgIGVkaXRQcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICBsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gZWRpdFByb3AudmFsdWU7XG4gICAgICAgICAgICAgIGVkaXRQcm9wLnJlbW92ZSgpO1xuICAgICAgICAgICAgICBsaXN0QnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgbGlzdC5uYW1lID0gbGlzdEJ1dHRvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgc2V0TG9jYWwoKTtcbiAgICAgICAgICAgICAgcmVuYW1lTGlzdC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0S2ViYWIpO1xuICAgIGxpc3REaXYuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGFsbExpc3REaXZzLmFwcGVuZENoaWxkKGxpc3REaXYpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0R2VuZXJhdGlvbiA9IChsaXN0T2ZMaXN0cykgPT4ge1xuICBjb25zdCBsaXN0T3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGxpc3RPcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LW9wdGlvbnNcIik7XG4gIGxpc3RPcHRpb25zRGl2LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgY29uc3QgbGlzdE9wdGlvbnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsaXN0T3B0aW9uc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNob29zZSBhIGxpc3Q6XCI7XG4gIGxpc3RPcHRpb25zRGl2LmFwcGVuZENoaWxkKGxpc3RPcHRpb25zSGVhZGluZyk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbnNEaXYpO1xuXG4gIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBsaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsaXN0QnV0dG9uLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuXG4gICAgbGlzdE9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQobGlzdEJ1dHRvbik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldExpc3QgPSAobGlzdE9mTGlzdHMsIG5ld0l0ZW0pID0+IHtcbiAgbGlzdEdlbmVyYXRpb24obGlzdE9mTGlzdHMpO1xuXG4gIGNvbnN0IGxpc3RPcHRpb25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LW9wdGlvbnNcIik7XG4gIGNvbnN0IGxpc3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW9wdGlvbnMgYnV0dG9uXCIpO1xuICBpZiAobGlzdE9mTGlzdHMubGVuZ3RoID09IDEpIHtcbiAgICBhZGRJdGVtKG5ld0l0ZW0sIGxpc3RPZkxpc3RzWzBdKTtcbiAgICBuZXdJdGVtLmxpc3QgPSBsaXN0T2ZMaXN0c1swXS5uYW1lOyAvLy8gYWRkZWQgLm5hbWUgZHVlIHRvIEpTT04gZXJyb3JcbiAgICBzaG93TGlzdChsaXN0T2ZMaXN0c1swXS5pdGVtcyk7XG4gICAgcmVtb3ZlVG9EbyhsaXN0T2ZMaXN0c1swXS5pdGVtcyk7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0T2ZMaXN0c1wiLCBKU09OLnN0cmluZ2lmeShsaXN0T2ZMaXN0cykpO1xuICAgIGxpc3RPcHRpb25zRGl2LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlzdE9wdGlvbnNEaXYpO1xuICB9IGVsc2Uge1xuICAgIGxpc3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09IGxpc3QubmFtZSkge1xuICAgICAgICAgICAgYWRkSXRlbShuZXdJdGVtLCBsaXN0KTtcbiAgICAgICAgICAgIG5ld0l0ZW0ubGlzdCA9IGxpc3QubmFtZTsgLy8vIGFkZGVkIC5uYW1lIGR1ZSB0byBKU09OIGVycm9yXG4gICAgICAgICAgICBzaG93TGlzdChsaXN0Lml0ZW1zKTtcbiAgICAgICAgICAgIHJlbW92ZVRvRG8obGlzdC5pdGVtcyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdE9mTGlzdHNcIiwgSlNPTi5zdHJpbmdpZnkobGlzdE9mTGlzdHMpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QuaXRlbXMpO1xuICAgICAgICAgICAgY29uc3QgbGlzdFNlbGVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtbmFtZVwiKTtcbiAgICAgICAgICAgIGxpc3RTZWxlY3RCdXR0b25zLmZvckVhY2goKGxpc3RCdXR0b24pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxpc3QubmFtZSA9PSBsaXN0QnV0dG9uLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgc2hvd0FjdGl2ZUxpc3QobGlzdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICBcImxpc3RPZkxpc3RzXCIsXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShsaXN0T2ZMaXN0cylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0T3B0aW9uc0Rpdi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpc3RPcHRpb25zRGl2KTtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdE9mTGlzdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBuZXdUb0RvTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbW9kYWxcIikpIHtcbiAgICBtYWluQ29udGFpbmVyRGl2LnJlbW92ZUNoaWxkKG1haW5Db250YWluZXJEaXYubGFzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IG1haW5Nb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Nb2RhbERpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1tb2RhbFwiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbWFpbk1vZGFsRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQobWFpbk1vZGFsRGl2KTtcblxuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJXaGF0J3MgdGhlIHRhc2s/XCI7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJuYW1lLWlucHV0XCIpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgbWFpbk1vZGFsRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gIG5hbWVJbnB1dC5mb2N1cygpO1xuICBuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChuYW1lSW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBpbnNlcnQgYSB0YXNrLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbU5hbWUgPSBuYW1lSW5wdXQudmFsdWU7IC8vLy8vLy8vLy8vLyAnbmFtZScgZm9yIG5ldyBUb0RvXG4gICAgICAgIG5hbWVJbnB1dC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2hlbiBzaG91bGQgeW91IGRvIGl0P1wiO1xuICAgICAgICBjb25zdCBkdWVEYXRlUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkdWVEYXRlUHJvbXB0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICAgICAgICBkdWVEYXRlUHJvbXB0LnZhbHVlID0gXCIwOTowMFwiO1xuICAgICAgICBtYWluTW9kYWxEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVByb21wdCk7XG4gICAgICAgIGR1ZURhdGVQcm9tcHQuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGR1ZURhdGVTZWxlY3QudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICAgICAgICBtYWluTW9kYWxEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNlbGVjdCk7XG5cbiAgICAgICAgZHVlRGF0ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGR1ZURhdGVWYWx1ZSA9IGR1ZURhdGVQcm9tcHQudmFsdWU7IC8vLy8vLy8vLy8vICdkdWVEYXRlJyBmb3IgbmV3IFRvZG9cbiAgICAgICAgICBkdWVEYXRlUHJvbXB0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZHVlRGF0ZVByb21wdCk7XG4gICAgICAgICAgZHVlRGF0ZVNlbGVjdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGR1ZURhdGVTZWxlY3QpO1xuXG4gICAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiRG8geW91IGhhdmUgYW55IG5vdGVzP1wiO1xuICAgICAgICAgIGNvbnN0IG5vdGVzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICBub3Rlc0FyZWEuY2xhc3NMaXN0LmFkZChcIm5vdGVzLWFyZWFcIik7XG4gICAgICAgICAgY29uc3Qgbm90ZXNTZWxlY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIG5vdGVzU2VsZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250aW51ZVwiO1xuICAgICAgICAgIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChub3Rlc0FyZWEpO1xuICAgICAgICAgIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChub3Rlc1NlbGVjdEJ1dHRvbik7XG4gICAgICAgICAgbm90ZXNBcmVhLmZvY3VzKCk7XG4gICAgICAgICAgbm90ZXNTZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVzVmFsdWUgPSBub3Rlc0FyZWEudmFsdWU7IC8vLy8vLy8vLy8vLy8vLy8gJ25vdGVzJyBmb3IgbmV3IFRvZG9cbiAgICAgICAgICAgIG5vdGVzQXJlYS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vdGVzQXJlYSk7XG4gICAgICAgICAgICBub3Rlc1NlbGVjdEJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vdGVzU2VsZWN0QnV0dG9uKTtcblxuICAgICAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2hhdCdzIHRoZSBwcmlvcml0eT9cIjtcblxuICAgICAgICAgICAgY29uc3Qgc2V0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2V0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInNldC1wcmlvcml0eVwiKTtcblxuICAgICAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgICAgICAgICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIHNldFByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1pZFwiO1xuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIHNldFByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcblxuICAgICAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICAgICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgICBzZXRQcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICAgICAgICAgICAgbWFpbk1vZGFsRGl2LmFwcGVuZENoaWxkKHNldFByaW9yaXR5KTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHktYnV0dG9uXCIpO1xuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gYnV0dG9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB0b2RvRm9ybShcbiAgICAgICAgICAgICAgICAgIG5ld0l0ZW1OYW1lLFxuICAgICAgICAgICAgICAgICAgZHVlRGF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIG5vdGVzVmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNldExpc3QobGlzdE9mTGlzdHMsIG5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgIG1haW5Nb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICBcImxpc3RPZkxpc3RzXCIsXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShsaXN0T2ZMaXN0cylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGNvbnN0IG5ld0xpc3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0xpc3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwibmV3LWxpc3QtbW9kYWxcIik7XG4gIGNvbnN0IG5ld0xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBuZXdMaXN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiTGlzdCBuYW1lP1wiO1xuICBuZXdMaXN0TW9kYWwuYXBwZW5kQ2hpbGQobmV3TGlzdEhlYWRpbmcpO1xuICBjb25zdCBuZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5ld0xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmV3TGlzdElucHV0LmNsYXNzTGlzdC5hZGQoXCJuZXctbGlzdC1pbnB1dFwiKTtcbiAgbmV3TGlzdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctbGlzdC1uYW1lXCIpO1xuICBuZXdMaXN0TW9kYWwuYXBwZW5kQ2hpbGQobmV3TGlzdElucHV0KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdMaXN0TW9kYWwpO1xuICBuZXdMaXN0SW5wdXQuZm9jdXMoKTtcblxuICBuZXdMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgbmFtZUlzVGFrZW4gPSBmYWxzZTtcbiAgICBsaXN0T2ZMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBpZiAobmV3TGlzdElucHV0LnZhbHVlID09IGxpc3QubmFtZSkge1xuICAgICAgICBuYW1lSXNUYWtlbiA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaWYgKG5ld0xpc3RJbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc2VydCBhIGxpc3QgbmFtZS5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZUlzVGFrZW4pIHtcbiAgICAgICAgYWxlcnQoXCJUaGVyZSdzIGFscmVhZHkgYSBsaXN0IGJ5IHRoYXQgbmFtZS4gUGxlYXNlIHBpY2sgYW5vdGhlci5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3ROYW1lID0gbmV3TGlzdElucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gY3JlYXRlTGlzdChuZXdMaXN0TmFtZSk7XG4gICAgICAgIG5ld0xpc3QuYWRkTGlzdCgpO1xuICAgICAgICBzaG93QWxsTGlzdHMoKTtcbiAgICAgICAgbmV3TGlzdE1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBsaXN0U2VsZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1uYW1lXCIpO1xuICAgICAgICBsaXN0U2VsZWN0QnV0dG9ucy5mb3JFYWNoKChsaXN0QnV0dG9uKSA9PiB7XG4gICAgICAgICAgaWYgKG5ld0xpc3QubmFtZSA9PSBsaXN0QnV0dG9uLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBzaG93QWN0aXZlTGlzdChsaXN0QnV0dG9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzaG93TGlzdChsaXN0T2ZMaXN0c1tsaXN0T2ZMaXN0cy5sZW5ndGggLSAxXS5pdGVtcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RPZkxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RPZkxpc3RzKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dBY3RpdmVMaXN0ID0gKHRoaXNMaXN0QnV0dG9uKSA9PiB7XG4gIGNvbnN0IGFsbFRoZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtbmFtZVwiKTtcbiAgYWxsVGhlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZShcInN0eWxlXCIpKSB7XG4gICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgICAgYnV0dG9uLm5leHRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvclwiKTtcbiAgICB9XG4gIH0pO1xuICB0aGlzTGlzdEJ1dHRvbi5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gIHRoaXNMaXN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gIHRoaXNMaXN0QnV0dG9uLm5leHRTaWJsaW5nLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG59O1xuXG5jb25zdCBiaWdnZXN0TGlzdCA9ICgpID0+IHtcbiAgbGV0IHRoZUJpZ2dlc3QgPSBsaXN0T2ZMaXN0c1swXTtcbiAgbGlzdE9mTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGlmIChsaXN0Lml0ZW1zLmxlbmd0aCA+IHRoZUJpZ2dlc3QuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGVCaWdnZXN0ID0gbGlzdDtcbiAgICB9XG4gIH0pO1xuICBjb25zb2xlLmxvZyh0aGVCaWdnZXN0Lm5hbWUpO1xuICByZXR1cm4gdGhlQmlnZ2VzdC5uYW1lO1xufTtcblxuY29uc3QgcGFyc2VMaXN0T2ZMaXN0cyA9IChhc3luYyAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RPZkxpc3RzXCIpICE9PSBudWxsKSB7XG4gICAgY29uc3QgZmV0Y2hKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0T2ZMaXN0c1wiKTtcbiAgICBsZXQgcGFyc2VkQXJyYXkgPSBhd2FpdCBKU09OLnBhcnNlKGZldGNoSnNvbik7XG4gICAgY29uc29sZS5sb2cocGFyc2VkQXJyYXkpO1xuICAgIGxpc3RPZkxpc3RzLnBvcCgpO1xuICAgIHBhcnNlZEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGxpc3RPZkxpc3RzLnB1c2goaXRlbSk7XG4gICAgICBsaXN0T2ZMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gYmlnZ2VzdExpc3QoKTtcbiAgICAgICAgaWYgKGxpc3QubmFtZSA9PSBjdXJyZW50TGlzdCkge1xuICAgICAgICAgIHNob3dMaXN0KGxpc3QuaXRlbXMpO1xuICAgICAgICAgIHJlbW92ZVRvRG8obGlzdC5pdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gc2hvd0xpc3QobGlzdE9mTGlzdHNbMF0uaXRlbXMpO1xuICAgICAgc2hvd0FsbExpc3RzKCk7XG5cbiAgICAgIGNvbnN0IGxpc3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW5hbWVcIik7XG4gICAgICBsaXN0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGJpZ2dlc3RMaXN0KCk7XG4gICAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gY3VycmVudEJ1dHRvbikge1xuICAgICAgICAgIHNob3dBY3RpdmVMaXN0KGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGxpc3RPZkxpc3RzID0gcGFyc2VkQXJyYXkuc2xpY2UoKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0T2ZMaXN0cyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG59KSgpO1xuIiwiaW1wb3J0IHsgc2V0TG9jYWwgfSBmcm9tIFwiLi9kb20tc3R1ZmZcIjtcblxuZXhwb3J0IGNvbnN0IGVkaXRUb0RvID0gKGVsZW1lbnQsIHRvRG9PYmplY3QpID0+IHtcbiAgLy8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgY29uc3QgZWRpdFByb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVkaXRQcm9wLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBlZGl0UHJvcC52YWx1ZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIGVsZW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZWRpdFByb3AsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICBlZGl0UHJvcC5zdHlsZS5hbGlnblNlbGYgPSBcImNlbnRlclwiO1xuICAvLyBlZGl0UHJvcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBlZGl0UHJvcC5mb2N1cygpO1xuICBlZGl0UHJvcC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGVkaXRQcm9wLnZhbHVlO1xuICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVkaXRQcm9wKTtcbiAgICAgIC8vIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmFtZS1wcm9wXCIpKSB7XG4gICAgICAgIHRvRG9PYmplY3QubmFtZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIHNldExvY2FsKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0ZS1wcm9wXCIpKSB7XG4gICAgICAgIHRvRG9PYmplY3QuZHVlRGF0ZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHktcHJvcFwiKSkge1xuICAgICAgICB0b0RvT2JqZWN0LnByaW9yaXR5ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJub3Rlcy1wcm9wXCIpKSB7XG4gICAgICAgIHRvRG9PYmplY3Qubm90ZXMgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuIiwiLy8gZGVmYXVsdCBsaXN0IGFuZCBuZXcgbGlzdCBjcmVhdGlvblxuXG5leHBvcnQgY29uc3QgbmV3TGlzdCA9IChuYW1lKSA9PiB7XG4gIGxldCBpdGVtcyA9IFtdO1xuICByZXR1cm4geyBuYW1lLCBpdGVtcyB9O1xufTtcblxuY29uc3QgZGVmYXVsdExpc3QgPSBuZXdMaXN0KFwiVGFza3NcIik7XG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gKG5ld0l0ZW0sIGxpc3QpID0+IHtcbiAgbGlzdC5pdGVtc1tsaXN0Lml0ZW1zLmxlbmd0aF0gPSBuZXdJdGVtO1xuICByZXR1cm4gbGlzdDtcbn07XG5cbi8vIGFycmF5IG9mIGxpc3RzXG5cbmV4cG9ydCBsZXQgbGlzdE9mTGlzdHMgPSBbZGVmYXVsdExpc3RdO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTGlzdCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGFkZExpc3QgPSAoKSA9PiB7XG4gICAgbGlzdE9mTGlzdHNbbGlzdE9mTGlzdHMubGVuZ3RoXSA9IG5ld0xpc3QobmFtZSk7XG4gIH07XG4gIHJldHVybiB7IG5hbWUsIGFkZExpc3QgfTtcbn07XG4iLCJpbXBvcnQgeyBsaXN0T2ZMaXN0cyB9IGZyb20gXCIuL2xpc3Qtc3R1ZmZcIjtcblxuY29uc3QgZGVsZXRlVG9EbyA9IChsaXN0LCBpbmRleCkgPT4ge1xuICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9EbyA9IChsaXN0KSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10b2RvXCIpO1xuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgICBkZWxldGVUb0RvKGxpc3QsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RPZkxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RPZkxpc3RzKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBsaXN0T2ZMaXN0cyB9IGZyb20gXCIuL2xpc3Qtc3R1ZmZcIjtcbmltcG9ydCB7IGRvbUdlbmVyYXRpb24sIG5ld1RvRG9Nb2RhbCwgY3JlYXRlTmV3TGlzdCB9IGZyb20gXCIuL2RvbS1zdHVmZlwiO1xuXG5kb21HZW5lcmF0aW9uKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9Eb0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBuZXdUb0RvTW9kYWwoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1saXN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZU5ld0xpc3QoKTtcbiAgY29uc29sZS5sb2cobGlzdE9mTGlzdHMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=