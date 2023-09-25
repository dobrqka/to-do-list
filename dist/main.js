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
    newItem.list = listOfLists[0].name; /// added .name due to JSON error
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
            newItem.list = list.name; /// added .name due to JSON error
            showList(list.items);
            (0,_removeToDo__WEBPACK_IMPORTED_MODULE_2__.removeToDo)(list.items);
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
    if (e.key === "Enter") {
      if (newListInput.value == "") {
        alert("Please insert a list name.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFB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QTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3FCO0FBQzhCOztBQUV6RSx5REFBYTs7QUFFYjtBQUNBLEVBQUUsd0RBQVk7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWE7QUFDZixjQUFjLG9EQUFXO0FBQ3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLXN0dWZmLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC10b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdC1zdHVmZi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2xpc3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJCYXJsb3dcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaDEsXG5oMyA+IHAge1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gIG91dGxpbmUtY29sb3I6IGJsYWNrO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggODV2aCAzcmVtO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9kb3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDEyMiwgMTIyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b2RvcyBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE1NiAxNTYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwLjVyZW07XG4gIGdyaWQtcm93OiBzcGFuIDI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5saXN0LWRpdiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDAsIDEwMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEuMnJlbTtcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcbiAgb3V0bGluZTogbm9uZTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5tYWluLW1vZGFsIGlucHV0W3R5cGU9XCJ0aW1lXCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubmFtZS1wcm9wIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZGF0ZS1wcm9wIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5kYXRlLXByb3A6aG92ZXIsXG4ubmFtZS1wcm9wOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCAxNjkpO1xufVxuXG4ubm90ZXMtdGV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMywgMjIzKTtcbn1cblxuLnByaW9yaXR5LXByb3Age1xuICBmb250LXNpemU6IDFyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjI1cmVtIDAuMXJlbTtcbiAgbWFyZ2luOiAwLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5wcmlvcml0eS1wcm9wOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMTgwLCAxODApO1xufVxuXG4udG9kby1idXR0b25zIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAuMnJlbTtcbn1cblxuLmNoYW5nZS1saXN0LFxuLmRlbGV0ZS10b2RvLFxuLm5vdGVzLWJ1dHRvbiB7XG4gIG1hcmdpbjogMC4xcmVtO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5ub3Rlcy1idXR0b24ge1xuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xufVxuXG4uY2hhbmdlLWxpc3Q6aG92ZXIsXG4uZGVsZXRlLXRvZG86aG92ZXIsXG4ubm90ZXMtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIxLCAyMjEpO1xufVxuXG4uY2hhbmdlLWxpc3Q6YWN0aXZlLFxuLmRlbGV0ZS10b2RvOmFjdGl2ZSxcbi5ub3Rlcy1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAwLCAyMDApO1xufVxuXG4ubm90ZXMtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ubm90ZXMtdGV4dCxcbi5ub3Rlcy1lZGl0IHtcbiAgd2lkdGg6IDE0cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMi4ycmVtO1xuICByaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTU1LCAxNTUpO1xuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICB6LWluZGV4OiAzO1xufVxuXG4ubGlzdCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBhZGRpbmc6IDRyZW07XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xufVxuXG4udG9Eb0J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzcmVtO1xuICByaWdodDogNXJlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4udG9Eb0J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuXG4udG9Eb0J1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XG59XG5cbi5uZXctbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzcmVtO1xuICByaWdodDogMS44cmVtO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xufVxuXG4ubmV3LWxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cblxuLm5ldy1saXN0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExMCwgMTEwKTtcbn1cblxuaDMge1xuICBoZWlnaHQ6IDNyZW07XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgzID4gcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmdpdGh1YiB7XG59XG5cbi5naXRodWIgPiBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1haW4tbW9kYWwsXG4ubGlzdC1vcHRpb25zLFxuLm5ldy1saXN0LW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcmVtO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDMwdnc7XG4gIGhlaWdodDogMTV2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgcGFkZGluZzogMXJlbSAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTU2IDE1Nik7XG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLm5ldy1saXN0LW1vZGFsIGgyIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLm5ldy1saXN0LW1vZGFsIGlucHV0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cblxuLmxpc3Qtb3B0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIHdpZHRoOiBjYWxjKDQwdncgKyAycmVtKTtcbiAgaGVpZ2h0OiBjYWxjKDEwdmggKyAycmVtKTsgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcbn1cblxuLmxpc3Qtb3B0aW9ucyBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubWFpbi1tb2RhbCBidXR0b24sXG4ubGlzdC1vcHRpb25zIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG5cbi5tYWluLW1vZGFsIGJ1dHRvbjpob3Zlcixcbi5saXN0LW9wdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG5cbi5tYWluLW1vZGFsIGJ1dHRvbjphY3RpdmUsXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XG59XG5cbi5saXN0LW9wdGlvbnMgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmxpc3Qtb3B0aW9ucyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbi5saXN0LW9wdGlvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbi5tYWluLW1vZGFsIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5tYWluLW1vZGFsIHRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigzOSwgMzksIDM5KTtcbn1cblxuLm1haW4tbW9kYWwgPiBoMiB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiKDM3LCAzNywgMzcpO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5uYW1lLWlucHV0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbn1cblxuLm5vdGVzLWFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnJhZGlvcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLnJhZGlvcyA+IGlucHV0IHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjdyZW07XG4gIC8qIHJpZ2h0OiAwLjZyZW07ICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyMyk7XG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgei1pbmRleDogMztcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgxKSxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgxKTpob3Zlcixcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTkwLCAzKTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDEpOmFjdGl2ZSxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMSk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAyNTUsIDM3KTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDIpLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyLFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMCk7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgyKTphY3RpdmUsXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDIpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgNDgpO1xufVxuXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMyksXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDAgMCk7XG59XG5cbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgzKTpob3Zlcixcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAwLCAwKTtcbn1cblxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDMpOmFjdGl2ZSxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjksIDI5KTtcbn1cblxuLnNldC1wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdhcDogMC4ycmVtO1xufVxuXG4uc2V0LXByaW9yaXR5IGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNoYW5nZS1kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJyZW07XG4gIHJpZ2h0OiA4dnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTYxIDE2MSk7XG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgd2lkdGg6IDdyZW07XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jaGFuZ2UtZGF0ZSBpbnB1dCB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE2MSAxNjEpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNoYW5nZS1kYXRlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNsb2NrLWljb24ge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuXG4uYWxsLWxpc3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjYsIDE2Nik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFsbC1saXN0cyBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMC41cmVtO1xufVxuXG4uYWxsLWxpc3RzIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAwLCAxMDApO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luOiAwIDAuMnJlbTtcbn1cblxuLmxpc3QtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTAwLCAxMDApO1xuICBtYXJnaW46IDAuNXJlbSAwLjJyZW0gMCAwLjJyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4ubGlzdC1uYW1lIHtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5saXN0LWRpdiAuZWRpdC1saXN0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5rZWJhYi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5rZWJhYi1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ua2ViYWItaWNvbiB7XG4gIHdpZHRoOiAxcmVtO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ua2ViYWItbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyMyk7XG4gIGNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgLyogcGFkZGluZzogMC4ycmVtOyAqL1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ua2ViYWItbW9kYWwgLmRlbGV0ZS1saXN0LFxuLmtlYmFiLW1vZGFsIC5lZGl0LWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NCwgNzQpO1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5rZWJhYi1tb2RhbCAuZGVsZXRlLWxpc3Qge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbi5rZWJhYi1tb2RhbCAuZWRpdC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG4uY3VycmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxzQ0FBc0M7RUFDdEMsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQywyQkFBMkI7RUFDM0Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLG9DQUFvQztBQUN0Qzs7QUFFQTs7O0VBR0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9FQUE4QztFQUM5QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVjs4QkFDNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIkRvc2lzXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIGN1cnNpdmU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDEsXFxuaDMgPiBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGFuY2luZyBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEb3Npc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW5wdXQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcbiAgb3V0bGluZS1jb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCA4NXZoIDNyZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDEyMiwgMTIyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kb3MgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxNTYgMTU2KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwLjVyZW07XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtZGl2IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMCwgMTAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxLjJyZW07XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5tYWluLW1vZGFsIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5uYW1lLXByb3Age1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlLXByb3Age1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmRhdGUtcHJvcDpob3ZlcixcXG4ubmFtZS1wcm9wOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2OSwgMTY5KTtcXG59XFxuXFxuLm5vdGVzLXRleHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAyMjMpO1xcbn1cXG5cXG4ucHJpb3JpdHktcHJvcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBwYWRkaW5nOiAwLjFyZW0gMC4yNXJlbSAwLjFyZW07XFxuICBtYXJnaW46IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5wcmlvcml0eS1wcm9wOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDE4MCwgMTgwKTtcXG59XFxuXFxuLnRvZG8tYnV0dG9ucyB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMC4ycmVtO1xcbn1cXG5cXG4uY2hhbmdlLWxpc3QsXFxuLmRlbGV0ZS10b2RvLFxcbi5ub3Rlcy1idXR0b24ge1xcbiAgbWFyZ2luOiAwLjFyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5ub3Rlcy1idXR0b24ge1xcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcXG59XFxuXFxuLmNoYW5nZS1saXN0OmhvdmVyLFxcbi5kZWxldGUtdG9kbzpob3ZlcixcXG4ubm90ZXMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMSwgMjIxKTtcXG59XFxuXFxuLmNoYW5nZS1saXN0OmFjdGl2ZSxcXG4uZGVsZXRlLXRvZG86YWN0aXZlLFxcbi5ub3Rlcy1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMCwgMjAwKTtcXG59XFxuXFxuLm5vdGVzLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ubm90ZXMtdGV4dCxcXG4ubm90ZXMtZWRpdCB7XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDZyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIuMnJlbTtcXG4gIHJpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTU1LCAxNTUpO1xcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5saXN0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG59XFxuXFxuLnRvRG9CdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAzcmVtO1xcbiAgcmlnaHQ6IDVyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4udG9Eb0J1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLnRvRG9CdXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExMCwgMTEwKTtcXG59XFxuXFxuLm5ldy1saXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogM3JlbTtcXG4gIHJpZ2h0OiAxLjhyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vbGlzdC5wbmdcXFwiKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG59XFxuXFxuLm5ldy1saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4ubmV3LWxpc3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExMCwgMTEwKTtcXG59XFxuXFxuaDMge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDMgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5naXRodWIge1xcbn1cXG5cXG4uZ2l0aHViID4gaW1nIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm1haW4tbW9kYWwsXFxuLmxpc3Qtb3B0aW9ucyxcXG4ubmV3LWxpc3QtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHJlbTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTU2IDE1Nik7XFxuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLm5ldy1saXN0LW1vZGFsIGgyIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubmV3LWxpc3QtbW9kYWwgaW5wdXQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcblxcbi5saXN0LW9wdGlvbnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKiB3aWR0aDogY2FsYyg0MHZ3ICsgMnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoMTB2aCArIDJyZW0pOyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucyBoMiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1haW4tbW9kYWwgYnV0dG9uLFxcbi5saXN0LW9wdGlvbnMgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcblxcbi5tYWluLW1vZGFsIGJ1dHRvbjpob3ZlcixcXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLm1haW4tbW9kYWwgYnV0dG9uOmFjdGl2ZSxcXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluLW1vZGFsIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4tbW9kYWwgdGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigzOSwgMzksIDM5KTtcXG59XFxuXFxuLm1haW4tbW9kYWwgPiBoMiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogcmdiKDM3LCAzNywgMzcpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubmFtZS1pbnB1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcXG59XFxuXFxuLm5vdGVzLWFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucmFkaW9zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4ucmFkaW9zID4gaW5wdXQge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEuN3JlbTtcXG4gIC8qIHJpZ2h0OiAwLjZyZW07ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjMsIDIyMyk7XFxuICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcbiAgYm9yZGVyOiAwLjAxcmVtIHNvbGlkIHJnYig5NywgOTcsIDk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMSksXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgxKSB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDEpOmhvdmVyLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDE5MCwgMyk7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkgYnV0dG9uOm50aC1jaGlsZCgxKTphY3RpdmUsXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgxKTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAyNTUsIDM3KTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDIpLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIsXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgyKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDApO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMik6YWN0aXZlLFxcbi5zZXQtcHJpb3JpdHkgLnByaW9yaXR5LWJ1dHRvbjpudGgtY2hpbGQoMik6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgNDgpO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMyksXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAwIDApO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IGJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIsXFxuLnNldC1wcmlvcml0eSAucHJpb3JpdHktYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAwLCAwKTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSBidXR0b246bnRoLWNoaWxkKDMpOmFjdGl2ZSxcXG4uc2V0LXByaW9yaXR5IC5wcmlvcml0eS1idXR0b246bnRoLWNoaWxkKDMpOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyOSwgMjkpO1xcbn1cXG5cXG4uc2V0LXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5zZXQtcHJpb3JpdHkgYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc0LCA3NCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmNoYW5nZS1kYXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIHJpZ2h0OiA4dnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTYxIDE2MSk7XFxuICBib3JkZXI6IDAuMDFyZW0gc29saWQgcmdiKDk3LCA5NywgOTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgd2lkdGg6IDdyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2hhbmdlLWRhdGUgaW5wdXQge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDE2MSAxNjEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5jaGFuZ2UtZGF0ZSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICBtYXJnaW4tdG9wOiAwLjJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uY2xvY2staWNvbiB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmFsbC1saXN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjYsIDE2Nik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hbGwtbGlzdHMgaDIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uYWxsLWxpc3RzIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDAsIDEwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbWFyZ2luOiAwIDAuMnJlbTtcXG59XFxuXFxuLmxpc3QtZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwMCwgMTAwKTtcXG4gIG1hcmdpbjogMC41cmVtIDAuMnJlbSAwIDAuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1kaXYgLmVkaXQtbGlzdCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmtlYmFiLWxpc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5rZWJhYi1saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmtlYmFiLWljb24ge1xcbiAgd2lkdGg6IDFyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmtlYmFiLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjIzLCAyMjMpO1xcbiAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG4gIGJvcmRlcjogMC4wMXJlbSBzb2xpZCByZ2IoOTcsIDk3LCA5Nyk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAvKiBwYWRkaW5nOiAwLjJyZW07ICovXFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5rZWJhYi1tb2RhbCAuZGVsZXRlLWxpc3QsXFxuLmtlYmFiLW1vZGFsIC5lZGl0LWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzQsIDc0KTtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5rZWJhYi1tb2RhbCAuZGVsZXRlLWxpc3Qge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmtlYmFiLW1vZGFsIC5lZGl0LWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IHRvZG9Gb3JtID0gKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICBsZXQgbGlzdDtcbiAgcmV0dXJuIHsgbmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBsaXN0IH07XG59O1xuIiwiaW1wb3J0IHsgZWRpdFRvRG8gfSBmcm9tIFwiLi9lZGl0LXRvZG9cIjtcbmltcG9ydCB7IGFkZEl0ZW0sIGxpc3RPZkxpc3RzLCBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdC1zdHVmZlwiO1xuaW1wb3J0IHsgcmVtb3ZlVG9EbyB9IGZyb20gXCIuL3JlbW92ZVRvRG9cIjtcbmltcG9ydCB7IHRvZG9Gb3JtIH0gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vbGlzdC5wbmdcIjtcbmltcG9ydCBDaGlja2luIGZyb20gXCIuL2NoaWNraW4ucG5nXCI7XG5pbXBvcnQga2ViYWIgZnJvbSBcIi4va2ViYWIucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBkb21HZW5lcmF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVG9kby50ZXh0Q29udGVudCA9IFwiK1wiO1xuICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQnV0dG9uXCIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuXG4gIGNvbnN0IG5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBsaXN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBsaXN0SWNvbi5zcmMgPSBJY29uO1xuICBuZXdMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctbGlzdFwiKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdMaXN0QnV0dG9uKTtcbiAgY29uc3QgYWxsTGlzdERpdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhbGxMaXN0RGl2cy5jbGFzc0xpc3QuYWRkKFwiYWxsLWxpc3RzXCIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGFsbExpc3REaXZzKTtcblxuICBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9MaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHRvRG9MaXN0KTtcblxuICBjb25zdCBjaGlja2luSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjaGlja2luSWNvbi5zcmMgPSBDaGlja2luO1xuICBjb25zdCBnaXRIdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdpdGh1YlwiKTtcbiAgZ2l0SHViLmFwcGVuZENoaWxkKGNoaWNraW5JY29uKTtcblxuICBjaGlja2luSWNvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICBjaGlja2luSWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg0NWRlZylcIjtcbiAgfSk7XG5cbiAgY2hpY2tpbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBjaGlja2luSWNvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybVwiKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0xpc3QgPSAoYUxpc3QpID0+IHtcbiAgY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG4gIHdoaWxlICh0b0RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgdG9Eb0xpc3QucmVtb3ZlQ2hpbGQodG9Eb0xpc3QuZmlyc3RDaGlsZCk7XG4gIH1cbiAgdG9Eb0xpc3QudGV4dENvbnRlbnQgPSBcIlRvLWRvczogXCI7XG4gIGFMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBuZXdEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0RvbS5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcIm5hbWUtcHJvcFwiKTtcbiAgICBuYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0VG9EbyhuYW1lRGl2LCBpdGVtKTtcbiAgICB9KTtcbiAgICBuZXdEb20uYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlICsgXCJoXCI7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1wcm9wXCIpO1xuXG4gICAgZHVlRGF0ZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2UtZGF0ZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1kYXRlXCIpLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURhdGVQcm9tcHQuY2xhc3NMaXN0LmFkZChcImNoYW5nZS1kYXRlXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGltZVwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gXCIwOTowMFwiO1xuICAgICAgICBkdWVEYXRlUHJvbXB0LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkdWVEYXRlU2VsZWN0LnRleHRDb250ZW50ID0gXCJTZWxlY3RcIjtcbiAgICAgICAgZHVlRGF0ZVByb21wdC5hcHBlbmRDaGlsZChkdWVEYXRlU2VsZWN0KTtcbiAgICAgICAgZHVlRGF0ZURpdi5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGR1ZURhdGVQcm9tcHQpO1xuICAgICAgICBkdWVEYXRlSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICBkdWVEYXRlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICBpdGVtLmR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7IC8vLy8vLy8vLy8vICdkdWVEYXRlJyBmb3IgbmV3IFRvZG9cbiAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlICsgXCJoXCI7XG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbS5kdWVEYXRlKTtcbiAgICAgICAgICBkdWVEYXRlUHJvbXB0LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXdEb20uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaW1lXCI7XG4gICAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09IFwiTWlkXCIpIHtcbiAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgaXRlbS5wcmlvcml0eTtcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktcHJvcFwiKTtcbiAgICBwcmlvcml0eURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIHByaW9yaXR5RGl2LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvclwiKTtcbiAgICB9KTtcbiAgICBwcmlvcml0eURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpbWVcIjtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PSBcIk1pZFwiKSB7XG4gICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgcHJpb3JpdHlEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcmlvcml0eURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2UtcHJpb3JpdHlcIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2UtcHJpb3JpdHlcIikucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtcHJpb3JpdHlcIik7XG5cbiAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNaWRcIjtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICBjaGFuZ2VQcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGNoYW5nZVByaW9yaXR5KTtcblxuICAgICAgICBsb3dQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGl0ZW0ucHJpb3JpdHkgPSBcIkxvd1wiO1xuICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICAgICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGltZVwiO1xuICAgICAgICAgIGNoYW5nZVByaW9yaXR5LnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpdW1Qcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGl0ZW0ucHJpb3JpdHkgPSBcIk1pZFwiO1xuICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCIgKyBpdGVtLnByaW9yaXR5O1xuICAgICAgICAgIHByaW9yaXR5RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGl0ZW0ucHJpb3JpdHkgPSBcIkhpZ2hcIjtcbiAgICAgICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgaXRlbS5wcmlvcml0eTtcbiAgICAgICAgICBwcmlvcml0eURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIGNoYW5nZVByaW9yaXR5LnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXdEb20uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVzRGl2LmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1kaXZcIik7XG4gICAgY29uc3Qgbm90ZXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3Rlc1RleHQudGV4dENvbnRlbnQgPSBpdGVtLm5vdGVzO1xuICAgIG5vdGVzVGV4dC5jbGFzc0xpc3QuYWRkKFwibm90ZXMtdGV4dFwiKTtcbiAgICBub3Rlc1RleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG5vdGVzVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIGNvbnN0IGVkaXRQcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgZWRpdFByb3AuY2xhc3NMaXN0LmFkZChcIm5vdGVzLWVkaXRcIik7XG4gICAgICBlZGl0UHJvcC52YWx1ZSA9IG5vdGVzVGV4dC50ZXh0Q29udGVudDtcbiAgICAgIG5vdGVzVGV4dC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlZGl0UHJvcCwgbm90ZXNUZXh0Lm5leHRTaWJsaW5nKTtcbiAgICAgIGVkaXRQcm9wLmZvY3VzKCk7XG4gICAgICBlZGl0UHJvcC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbm90ZXNUZXh0LnRleHRDb250ZW50ID0gZWRpdFByb3AudmFsdWU7XG4gICAgICAgICAgbm90ZXNUZXh0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWRpdFByb3ApO1xuICAgICAgICAgIC8vIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBub3Rlc1RleHQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgIGl0ZW0ubm90ZXMgPSBub3Rlc1RleHQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgbm90ZXNUZXh0LnRleHRDb250ZW50ID0gaXRlbS5ub3RlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBuZXdEb20uYXBwZW5kQ2hpbGQobm90ZXNUZXh0KTtcbiAgICBjb25zdCBub3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbm90ZXNCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5vdGVzLWJ1dHRvblwiKTtcbiAgICBub3Rlc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiaVwiO1xuICAgIG5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgbm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90ZXNUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgZGVsQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgYUxpc3QuaW5kZXhPZihpdGVtKSk7XG4gICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdG9kb1wiKTtcblxuICAgIGNvbnN0IGNoYW5nZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNoYW5nZUxpc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkxpc3RcIjtcbiAgICBjaGFuZ2VMaXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtbGlzdFwiKTtcblxuICAgIGNoYW5nZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtb3B0aW9uc1wiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3Qtb3B0aW9uc1wiKS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICBpZiAobGlzdC5uYW1lID09IGl0ZW0ubGlzdCkge1xuICAgICAgICAgICAgbGlzdC5pdGVtcy5zcGxpY2UobGlzdC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpdGVtLmxpc3QuaXRlbXMuc3BsaWNlKGl0ZW0ubGlzdC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgbGlzdEdlbmVyYXRpb24obGlzdE9mTGlzdHMpO1xuICAgICAgICBjb25zdCBsaXN0T3B0aW9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1vcHRpb25zXCIpO1xuICAgICAgICBjb25zdCBsaXN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1vcHRpb25zIGJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgbGlzdFNlbGVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtbmFtZVwiKTtcbiAgICAgICAgbGlzdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSBsaXN0Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmxpc3QgPSBsaXN0O1xuICAgICAgICAgICAgICAgIGxpc3QuaXRlbXNbbGlzdC5pdGVtcy5sZW5ndGhdID0gaXRlbTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmxpc3QpO1xuICAgICAgICAgICAgICAgIGxpc3RPcHRpb25zRGl2LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlzdE9wdGlvbnNEaXYpO1xuICAgICAgICAgICAgICAgIGxpc3RTZWxlY3RCdXR0b25zLmZvckVhY2goKGxpc3RCdXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChsaXN0Lm5hbWUgPT0gbGlzdEJ1dHRvbi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBzaG93QWN0aXZlTGlzdChsaXN0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QoaXRlbS5saXN0Lml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVG9EbyhpdGVtLmxpc3QuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b0RvQ2FyZEJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0NhcmRCb3R0b20uY2xhc3NMaXN0LmFkZChcInRvZG8tYnV0dG9uc1wiKTtcbiAgICB0b0RvQ2FyZEJvdHRvbS5hcHBlbmRDaGlsZChub3Rlc0J1dHRvbik7XG4gICAgdG9Eb0NhcmRCb3R0b20uYXBwZW5kQ2hpbGQobm90ZXNUZXh0KTtcbiAgICB0b0RvQ2FyZEJvdHRvbS5hcHBlbmRDaGlsZChjaGFuZ2VMaXN0QnV0dG9uKTtcbiAgICB0b0RvQ2FyZEJvdHRvbS5hcHBlbmRDaGlsZChkZWxCdXR0b24pO1xuICAgIHRvRG9DYXJkQm90dG9tLmFwcGVuZENoaWxkKG5vdGVzRGl2KTtcbiAgICBuZXdEb20uYXBwZW5kQ2hpbGQodG9Eb0NhcmRCb3R0b20pO1xuICAgIHRvRG9MaXN0LmFwcGVuZENoaWxkKG5ld0RvbSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dBbGxMaXN0cyA9ICgpID0+IHtcbiAgY29uc3QgYWxsTGlzdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1saXN0c1wiKTtcbiAgd2hpbGUgKGFsbExpc3REaXZzLmZpcnN0Q2hpbGQpIHtcbiAgICBhbGxMaXN0RGl2cy5yZW1vdmVDaGlsZChhbGxMaXN0RGl2cy5maXJzdENoaWxkKTtcbiAgfVxuICBjb25zdCBhbGxMaXN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGFsbExpc3RzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiTGlzdHM6IFwiO1xuICBhbGxMaXN0RGl2cy5hcHBlbmRDaGlsZChhbGxMaXN0c0hlYWRpbmcpO1xuICBhbGxMaXN0RGl2cy5hcHBlbmRDaGlsZChhbGxMaXN0c0hlYWRpbmcpO1xuICBsaXN0T2ZMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdERpdi5jbGFzc0xpc3QuYWRkKFwibGlzdC1kaXZcIik7XG4gICAgY29uc3QgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpO1xuICAgIGxpc3RCdXR0b24udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgY29uc3QgZGVsZXRlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlTGlzdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWxpc3RcIik7XG4gICAgZGVsZXRlTGlzdC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgY29uc3QgcmVuYW1lTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVuYW1lTGlzdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1saXN0XCIpO1xuICAgIHJlbmFtZUxpc3QudGV4dENvbnRlbnQgPSBcIlJlbmFtZVwiO1xuXG4gICAgbGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIGlmIChsaXN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJyZWRcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsaXN0RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSA3MyA3MylcIjtcbiAgICAgIGxpc3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1IDczIDczKVwiO1xuICAgICAgbGlzdEtlYmFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSA3MyA3MylcIjtcbiAgICB9KTtcblxuICAgIGxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGlmIChsaXN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJyZWRcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsaXN0RGl2LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZENvbG9yXCIpO1xuICAgICAgbGlzdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmRDb2xvclwiKTtcbiAgICAgIGxpc3RLZWJhYi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmRDb2xvclwiKTtcbiAgICB9KTtcblxuICAgIGxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbFRoZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtbmFtZVwiKTtcbiAgICAgIGFsbFRoZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKFwic3R5bGVcIikpIHtcbiAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvclwiKTtcbiAgICAgICAgICBidXR0b24ubmV4dFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxpc3REaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIGxpc3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgIGxpc3RLZWJhYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgc2hvd0xpc3QobGlzdC5pdGVtcyk7XG4gICAgICByZW1vdmVUb0RvKGxpc3QuaXRlbXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdEtlYmFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsaXN0S2ViYWIuY2xhc3NMaXN0LmFkZChcImtlYmFiLWxpc3RcIik7XG4gICAgY29uc3QgbGlzdEtlYmFiSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxpc3RLZWJhYkltYWdlLnNyYyA9IGtlYmFiO1xuICAgIGxpc3RLZWJhYkltYWdlLmNsYXNzTGlzdC5hZGQoXCJrZWJhYi1pY29uXCIpO1xuICAgIGxpc3RLZWJhYi5hcHBlbmRDaGlsZChsaXN0S2ViYWJJbWFnZSk7XG5cbiAgICBsaXN0S2ViYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2ViYWItbW9kYWxcIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rZWJhYi1tb2RhbFwiKS5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtlYmFiTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBrZWJhYk1vZGFsLmNsYXNzTGlzdC5hZGQoXCJrZWJhYi1tb2RhbFwiKTtcbiAgICAgICAga2ViYWJNb2RhbC5hcHBlbmRDaGlsZChkZWxldGVMaXN0KTtcbiAgICAgICAga2ViYWJNb2RhbC5hcHBlbmRDaGlsZChyZW5hbWVMaXN0KTtcbiAgICAgICAgbGlzdEtlYmFiLmFwcGVuZENoaWxkKGtlYmFiTW9kYWwpO1xuXG4gICAgICAgIGRlbGV0ZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAobGlzdE9mTGlzdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBtdXN0IGFsd2F5cyBoYXZlIGF0IGxlYXN0IDEgbGlzdCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChsaXN0Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxpc3QuaXRlbXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaG93TGlzdChsaXN0Lml0ZW1zKTtcbiAgICAgICAgICBpZiAobGlzdE9mTGlzdHMuaW5kZXhPZihsaXN0KSA9PT0gMCkge1xuICAgICAgICAgICAgc2hvd0xpc3QobGlzdE9mTGlzdHNbbGlzdE9mTGlzdHMuaW5kZXhPZihsaXN0KSArIDFdLml0ZW1zKTtcbiAgICAgICAgICAgIGxpc3RPZkxpc3RzLnNwbGljZShsaXN0T2ZMaXN0cy5pbmRleE9mKGxpc3QpLCAxKTtcbiAgICAgICAgICAgIHNob3dBY3RpdmVMaXN0KGxpc3REaXYubmV4dFNpYmxpbmcuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93TGlzdChsaXN0T2ZMaXN0c1tsaXN0T2ZMaXN0cy5pbmRleE9mKGxpc3QpIC0gMV0uaXRlbXMpO1xuICAgICAgICAgICAgbGlzdE9mTGlzdHMuc3BsaWNlKGxpc3RPZkxpc3RzLmluZGV4T2YobGlzdCksIDEpO1xuICAgICAgICAgICAgc2hvd0FjdGl2ZUxpc3QobGlzdERpdi5wcmV2aW91c1NpYmxpbmcuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0RGl2LnJlbW92ZSgpO1xuICAgICAgICAgIGtlYmFiTW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2cobGlzdE9mTGlzdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZW5hbWVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9wXCIpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvcFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICAgICAgICAgIGNvbnN0IGVkaXRQcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGVkaXRQcm9wLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb3BcIik7XG4gICAgICAgICAgZWRpdFByb3Auc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgZWRpdFByb3AudmFsdWUgPSBsaXN0QnV0dG9uLnRleHRDb250ZW50O1xuICAgICAgICAgIGxpc3RCdXR0b24ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBlZGl0UHJvcCxcbiAgICAgICAgICAgIGxpc3RCdXR0b24ubmV4dFNpYmxpbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIGVkaXRQcm9wLnN0eWxlLmFsaWduU2VsZiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgZWRpdFByb3AuZm9jdXMoKTtcbiAgICAgICAgICBlZGl0UHJvcC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgbGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9IGVkaXRQcm9wLnZhbHVlO1xuICAgICAgICAgICAgICBlZGl0UHJvcC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgbGlzdEJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgIGxpc3QubmFtZSA9IGxpc3RCdXR0b24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgIHJlbmFtZUxpc3QucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdEtlYmFiKTtcbiAgICBsaXN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBhbGxMaXN0RGl2cy5hcHBlbmRDaGlsZChsaXN0RGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbGlzdEdlbmVyYXRpb24gPSAobGlzdE9mTGlzdHMpID0+IHtcbiAgY29uc3QgbGlzdE9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBsaXN0T3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwibGlzdC1vcHRpb25zXCIpO1xuICBsaXN0T3B0aW9uc0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gIGNvbnN0IGxpc3RPcHRpb25zSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbGlzdE9wdGlvbnNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBsaXN0OlwiO1xuICBsaXN0T3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChsaXN0T3B0aW9uc0hlYWRpbmcpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGxpc3RPcHRpb25zRGl2KTtcblxuICBsaXN0T2ZMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcblxuICAgIGxpc3RPcHRpb25zRGl2LmFwcGVuZENoaWxkKGxpc3RCdXR0b24pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ID0gKGxpc3RPZkxpc3RzLCBuZXdJdGVtKSA9PiB7XG4gIGxpc3RHZW5lcmF0aW9uKGxpc3RPZkxpc3RzKTtcblxuICBjb25zdCBsaXN0T3B0aW9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1vcHRpb25zXCIpO1xuICBjb25zdCBsaXN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1vcHRpb25zIGJ1dHRvblwiKTtcbiAgaWYgKGxpc3RPZkxpc3RzLmxlbmd0aCA9PSAxKSB7XG4gICAgYWRkSXRlbShuZXdJdGVtLCBsaXN0T2ZMaXN0c1swXSk7XG4gICAgbmV3SXRlbS5saXN0ID0gbGlzdE9mTGlzdHNbMF0ubmFtZTsgLy8vIGFkZGVkIC5uYW1lIGR1ZSB0byBKU09OIGVycm9yXG4gICAgc2hvd0xpc3QobGlzdE9mTGlzdHNbMF0uaXRlbXMpO1xuICAgIHJlbW92ZVRvRG8obGlzdE9mTGlzdHNbMF0uaXRlbXMpO1xuICAgIGxpc3RPcHRpb25zRGl2LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlzdE9wdGlvbnNEaXYpO1xuICB9IGVsc2Uge1xuICAgIGxpc3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxpc3RPZkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09IGxpc3QubmFtZSkge1xuICAgICAgICAgICAgYWRkSXRlbShuZXdJdGVtLCBsaXN0KTtcbiAgICAgICAgICAgIG5ld0l0ZW0ubGlzdCA9IGxpc3QubmFtZTsgLy8vIGFkZGVkIC5uYW1lIGR1ZSB0byBKU09OIGVycm9yXG4gICAgICAgICAgICBzaG93TGlzdChsaXN0Lml0ZW1zKTtcbiAgICAgICAgICAgIHJlbW92ZVRvRG8obGlzdC5pdGVtcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0Lml0ZW1zKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RTZWxlY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW5hbWVcIik7XG4gICAgICAgICAgICBsaXN0U2VsZWN0QnV0dG9ucy5mb3JFYWNoKChsaXN0QnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsaXN0Lm5hbWUgPT0gbGlzdEJ1dHRvbi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIHNob3dBY3RpdmVMaXN0KGxpc3RCdXR0b24pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgXCJsaXN0T2ZMaXN0c1wiLFxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobGlzdE9mTGlzdHMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdE9wdGlvbnNEaXYucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChsaXN0T3B0aW9uc0Rpdik7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RPZkxpc3RzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbmV3VG9Eb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1vZGFsXCIpKSB7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyRGl2Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBtYWluTW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluTW9kYWxEaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tbW9kYWxcIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBtYWluQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5Nb2RhbERpdik7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2hhdCdzIHRoZSB0YXNrP1wiO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmFtZS1pbnB1dFwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5hbWVcIik7XG4gIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBuYW1lSW5wdXQuZm9jdXMoKTtcbiAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobmFtZUlucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zZXJ0IGEgdGFzay5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1OYW1lID0gbmFtZUlucHV0LnZhbHVlOyAvLy8vLy8vLy8vLy8gJ25hbWUnIGZvciBuZXcgVG9Eb1xuICAgICAgICBuYW1lSW5wdXQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldoZW4gc2hvdWxkIHlvdSBkbyBpdD9cIjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZVByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZVByb21wdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGltZVwiKTtcbiAgICAgICAgZHVlRGF0ZVByb21wdC52YWx1ZSA9IFwiMDk6MDBcIjtcbiAgICAgICAgbWFpbk1vZGFsRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQcm9tcHQpO1xuICAgICAgICBkdWVEYXRlUHJvbXB0LmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkdWVEYXRlU2VsZWN0LnRleHRDb250ZW50ID0gXCJTZWxlY3RcIjtcbiAgICAgICAgbWFpbk1vZGFsRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVTZWxlY3QpO1xuXG4gICAgICAgIGR1ZURhdGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBkdWVEYXRlUHJvbXB0LnZhbHVlOyAvLy8vLy8vLy8vLyAnZHVlRGF0ZScgZm9yIG5ldyBUb2RvXG4gICAgICAgICAgZHVlRGF0ZVByb21wdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGR1ZURhdGVQcm9tcHQpO1xuICAgICAgICAgIGR1ZURhdGVTZWxlY3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkdWVEYXRlU2VsZWN0KTtcblxuICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkRvIHlvdSBoYXZlIGFueSBub3Rlcz9cIjtcbiAgICAgICAgICBjb25zdCBub3Rlc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgbm90ZXNBcmVhLmNsYXNzTGlzdC5hZGQoXCJub3Rlcy1hcmVhXCIpO1xuICAgICAgICAgIGNvbnN0IG5vdGVzU2VsZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBub3Rlc1NlbGVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcbiAgICAgICAgICBtYWluTW9kYWxEaXYuYXBwZW5kQ2hpbGQobm90ZXNBcmVhKTtcbiAgICAgICAgICBtYWluTW9kYWxEaXYuYXBwZW5kQ2hpbGQobm90ZXNTZWxlY3RCdXR0b24pO1xuICAgICAgICAgIG5vdGVzQXJlYS5mb2N1cygpO1xuICAgICAgICAgIG5vdGVzU2VsZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3Rlc1ZhbHVlID0gbm90ZXNBcmVhLnZhbHVlOyAvLy8vLy8vLy8vLy8vLy8vICdub3RlcycgZm9yIG5ldyBUb2RvXG4gICAgICAgICAgICBub3Rlc0FyZWEucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub3Rlc0FyZWEpO1xuICAgICAgICAgICAgbm90ZXNTZWxlY3RCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub3Rlc1NlbGVjdEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldoYXQncyB0aGUgcHJpb3JpdHk/XCI7XG5cbiAgICAgICAgICAgIGNvbnN0IHNldFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNldFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJzZXQtcHJpb3JpdHlcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgICBzZXRQcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNaWRcIjtcbiAgICAgICAgICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1idXR0b25cIik7XG4gICAgICAgICAgICBzZXRQcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktYnV0dG9uXCIpO1xuICAgICAgICAgICAgc2V0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICAgICAgICAgIG1haW5Nb2RhbERpdi5hcHBlbmRDaGlsZChzZXRQcmlvcml0eSk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPVxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ1dHRvblwiKTtcbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGJ1dHRvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gdG9kb0Zvcm0oXG4gICAgICAgICAgICAgICAgICBuZXdJdGVtTmFtZSxcbiAgICAgICAgICAgICAgICAgIGR1ZURhdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBub3Rlc1ZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGxpc3RPZkxpc3RzLCBuZXdJdGVtKTtcbiAgICAgICAgICAgICAgICBtYWluTW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgXCJsaXN0T2ZMaXN0c1wiLFxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobGlzdE9mTGlzdHMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBjb25zdCBuZXdMaXN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdMaXN0TW9kYWwuY2xhc3NMaXN0LmFkZChcIm5ldy1saXN0LW1vZGFsXCIpO1xuICBjb25zdCBuZXdMaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbmV3TGlzdEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxpc3QgbmFtZT9cIjtcbiAgbmV3TGlzdE1vZGFsLmFwcGVuZENoaWxkKG5ld0xpc3RIZWFkaW5nKTtcbiAgY29uc3QgbmV3TGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuZXdMaXN0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5ld0xpc3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmV3LWxpc3QtaW5wdXRcIik7XG4gIG5ld0xpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3LWxpc3QtbmFtZVwiKTtcbiAgbmV3TGlzdE1vZGFsLmFwcGVuZENoaWxkKG5ld0xpc3RJbnB1dCk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobmV3TGlzdE1vZGFsKTtcbiAgbmV3TGlzdElucHV0LmZvY3VzKCk7XG5cbiAgbmV3TGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGlmIChuZXdMaXN0SW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBpbnNlcnQgYSBsaXN0IG5hbWUuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdMaXN0TmFtZSA9IG5ld0xpc3RJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGNyZWF0ZUxpc3QobmV3TGlzdE5hbWUpO1xuICAgICAgICBuZXdMaXN0LmFkZExpc3QoKTtcbiAgICAgICAgc2hvd0FsbExpc3RzKCk7XG4gICAgICAgIG5ld0xpc3RNb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbGlzdFNlbGVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtbmFtZVwiKTtcbiAgICAgICAgbGlzdFNlbGVjdEJ1dHRvbnMuZm9yRWFjaCgobGlzdEJ1dHRvbikgPT4ge1xuICAgICAgICAgIGlmIChuZXdMaXN0Lm5hbWUgPT0gbGlzdEJ1dHRvbi50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgc2hvd0FjdGl2ZUxpc3QobGlzdEJ1dHRvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2hvd0xpc3QobGlzdE9mTGlzdHNbbGlzdE9mTGlzdHMubGVuZ3RoIC0gMV0uaXRlbXMpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0T2ZMaXN0c1wiLCBKU09OLnN0cmluZ2lmeShsaXN0T2ZMaXN0cykpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0FjdGl2ZUxpc3QgPSAodGhpc0xpc3RCdXR0b24pID0+IHtcbiAgY29uc3QgYWxsVGhlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1uYW1lXCIpO1xuICBhbGxUaGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKFwic3R5bGVcIikpIHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3JcIik7XG4gICAgICBidXR0b24ubmV4dFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgIH1cbiAgfSk7XG4gIHRoaXNMaXN0QnV0dG9uLnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgdGhpc0xpc3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgdGhpc0xpc3RCdXR0b24ubmV4dFNpYmxpbmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbn07XG4iLCJleHBvcnQgY29uc3QgZWRpdFRvRG8gPSAoZWxlbWVudCwgdG9Eb09iamVjdCkgPT4ge1xuICAvLyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICBjb25zdCBlZGl0UHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZWRpdFByb3Auc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGVkaXRQcm9wLnZhbHVlID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgZWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlZGl0UHJvcCwgZWxlbWVudC5uZXh0U2libGluZyk7XG4gIGVkaXRQcm9wLnN0eWxlLmFsaWduU2VsZiA9IFwiY2VudGVyXCI7XG4gIC8vIGVkaXRQcm9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGVkaXRQcm9wLmZvY3VzKCk7XG4gIGVkaXRQcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWRpdFByb3AudmFsdWU7XG4gICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWRpdFByb3ApO1xuICAgICAgLy8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYW1lLXByb3BcIikpIHtcbiAgICAgICAgdG9Eb09iamVjdC5uYW1lID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXRlLXByb3BcIikpIHtcbiAgICAgICAgdG9Eb09iamVjdC5kdWVEYXRlID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eS1wcm9wXCIpKSB7XG4gICAgICAgIHRvRG9PYmplY3QucHJpb3JpdHkgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdGVzLXByb3BcIikpIHtcbiAgICAgICAgdG9Eb09iamVjdC5ub3RlcyA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCIvLyBkZWZhdWx0IGxpc3QgYW5kIG5ldyBsaXN0IGNyZWF0aW9uXG5cbmV4cG9ydCBjb25zdCBuZXdMaXN0ID0gKG5hbWUpID0+IHtcbiAgbGV0IGl0ZW1zID0gW107XG4gIHJldHVybiB7IG5hbWUsIGl0ZW1zIH07XG59O1xuXG5jb25zdCBkZWZhdWx0TGlzdCA9IG5ld0xpc3QoXCJUYXNrc1wiKTtcblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAobmV3SXRlbSwgbGlzdCkgPT4ge1xuICBsaXN0Lml0ZW1zW2xpc3QuaXRlbXMubGVuZ3RoXSA9IG5ld0l0ZW07XG4gIHJldHVybiBsaXN0O1xufTtcblxuLy8gYXJyYXkgb2YgbGlzdHNcblxuZXhwb3J0IGxldCBsaXN0T2ZMaXN0cyA9IFtkZWZhdWx0TGlzdF07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVMaXN0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgYWRkTGlzdCA9ICgpID0+IHtcbiAgICBsaXN0T2ZMaXN0c1tsaXN0T2ZMaXN0cy5sZW5ndGhdID0gbmV3TGlzdChuYW1lKTtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBhZGRMaXN0IH07XG59O1xuIiwiY29uc3QgZGVsZXRlVG9EbyA9IChsaXN0LCBpbmRleCkgPT4ge1xuICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9EbyA9IChsaXN0KSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10b2RvXCIpO1xuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgICBkZWxldGVUb0RvKGxpc3QsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgbGlzdE9mTGlzdHMgfSBmcm9tIFwiLi9saXN0LXN0dWZmXCI7XG5pbXBvcnQgeyBkb21HZW5lcmF0aW9uLCBuZXdUb0RvTW9kYWwsIGNyZWF0ZU5ld0xpc3QgfSBmcm9tIFwiLi9kb20tc3R1ZmZcIjtcblxuZG9tR2VuZXJhdGlvbigpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvRG9CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3VG9Eb01vZGFsKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctbGlzdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVOZXdMaXN0KCk7XG4gIGNvbnNvbGUubG9nKGxpc3RPZkxpc3RzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9