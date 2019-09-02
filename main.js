/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about-tab.js":
/*!**************************!*\
  !*** ./src/about-tab.js ***!
  \**************************/
/*! exports provided: createAbout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAbout\", function() { return createAbout; });\nconst createAbout = () => {\n    const container = document.querySelector('#content');\n\n    const aboutDiv = document.createElement('div');\n    const aboutHeadline = document.createElement('h2');\n    const aboutParagraph = document.createElement('p');\n\n    aboutHeadline.textContent = 'About us, and our amazing, beautiful bread.';\n    aboutParagraph.textContent = 'Our bread was inspired by the wonders of wonderful bread that we ate. The bread was good, and we\\\n    were all like, whoa, we should make our own delicious bread, so then we did and now here we are today, making tons of tasty bread for you.';\n\n    aboutDiv.appendChild(aboutHeadline);\n    aboutDiv.appendChild(aboutParagraph);\n\n    container.appendChild(aboutDiv);\n}\n\n\n\n//# sourceURL=webpack:///./src/about-tab.js?");

/***/ }),

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/*! exports provided: createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContact\", function() { return createContact; });\nconst createContact = () => {\n    const container = document.querySelector('#content');\n\n    const contactDiv = document.createElement('div');\n    const contactHeader = document.createElement('h2');\n    const bulkParagraph = document.createElement('p');\n    const helpParagraph = document.createElement('p');\n    const formHeader = document.createElement('h3');\n    const contactForm = document.createElement('form');\n\n    contactHeader.textContent = 'CONTACT INFORMATION';\n    bulkParagraph.textContent = 'For bulk order inqueries, please call (555) 867-5309, or email us at fakeemail@fake.com';\n    helpParagraph.textContent = 'Have questions about baking your own bread? Looking for some help with your yeast starter? Stop by and we\\'ll be happy to help.';\n    formHeader.textContent = 'Other questions/feedback?';\n\n    contactDiv.appendChild(contactHeader);\n    contactDiv.appendChild(bulkParagraph);\n    contactDiv.appendChild(helpParagraph);\n    contactDiv.appendChild(formHeader);\n    contactDiv.appendChild(contactForm);\n\n    container.appendChild(contactDiv);\n};\n\n\n\n//# sourceURL=webpack:///./src/contact-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-html.js */ \"./src/load-html.js\");\n/* harmony import */ var _contact_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-tab.js */ \"./src/contact-tab.js\");\n/* harmony import */ var _about_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-tab.js */ \"./src/about-tab.js\");\n/* harmony import */ var _menu_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-tab.js */ \"./src/menu-tab.js\");\n\n\n\n\n\nconst container = document.querySelector('#content');\nconst tabs = Object(_load_html_js__WEBPACK_IMPORTED_MODULE_0__[\"makeTabSelector\"])();\ntabs.forEach(tab => tab.addEventListener('click', (e) => {\n    while (container.firstChild) {\n        container.removeChild(container.firstChild);\n    }\n    console.log(e.target.attributes['data-trigger']);\n}))\nObject(_load_html_js__WEBPACK_IMPORTED_MODULE_0__[\"loadPage\"])();\n// createContact();\n// createAbout();\n// createMenu();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/load-html.js":
/*!**************************!*\
  !*** ./src/load-html.js ***!
  \**************************/
/*! exports provided: loadPage, makeTabSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPage\", function() { return loadPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeTabSelector\", function() { return makeTabSelector; });\n\nconst loadPage = () => {\n    const container = document.querySelector('#content');\n\n    const headline = document.createElement('h1');\n    const breadPhoto = document.createElement('img');\n    const shopBio = document.createElement('p');\n\n    headline.textContent = 'Welcome to the Bakery';\n    breadPhoto.setAttribute('src', 'https://www.homemadefoodjunkie.com/wp-content/uploads/2017/11/IMG_1354-735x490.jpg');\n    breadPhoto.setAttribute('alt', 'A picture of fresh sourdough bread');\n    shopBio.textContent = 'Each day, we bake fresh, high-quality, hand-crafted artisan bread';\n\n    container.appendChild(headline);\n    container.appendChild(breadPhoto);\n    container.appendChild(shopBio);\n}\n\nconst makeTabSelector = () => {\n    const container = document.querySelector('#content');\n    const main = document.querySelector('main');\n    const tabContainer = document.createElement('div');\n    tabContainer.id = 'tab-container';\n\n    const tabHome = document.createElement('div');\n    tabHome.classList.add('tab');\n    tabHome.textContent = 'Home';\n    tabHome.setAttribute('data-trigger', 'loadPage');\n\n    const tabAbout = document.createElement('div');\n    tabAbout.classList.add('tab');\n    tabAbout.textContent = 'About Us';\n    tabAbout.setAttribute('data-trigger', 'createAbout');\n\n    const tabMenu = document.createElement('div');\n    tabMenu.classList.add('tab');\n    tabMenu.textContent = 'Menu';\n    tabMenu.setAttribute('data-trigger', 'createMenu');\n\n    const tabContact = document.createElement('div');\n    tabContact.classList.add('tab');\n    tabContact.textContent = 'Contact Us';\n    tabContact.setAttribute('data-trigger', 'createContact');\n\n    tabContainer.appendChild(tabHome);\n    tabContainer.appendChild(tabAbout);\n    tabContainer.appendChild(tabMenu);\n    tabContainer.appendChild(tabContact);\n\n    main.insertBefore(tabContainer, main.firstChild);\n    return [ tabHome, tabAbout, tabMenu, tabContact ];\n}\n\n\n\n//# sourceURL=webpack:///./src/load-html.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/*! exports provided: createMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMenu\", function() { return createMenu; });\nconst createMenu = () => {\n    const container = document.querySelector('#content');\n\n    const menuDiv = document.createElement('div');\n    const menuHeadline = document.createElement('h2');\n    const menuList = document.createElement('ul');\n    const itemOne = document.createElement('li');\n\n    menuHeadline.textContent = 'Check out all our bread!!!';\n    itemOne.textContent = 'This list will have more items.'\n\n\n    menuList.appendChild(itemOne);\n\n    menuDiv.appendChild(menuHeadline);\n    menuDiv.appendChild(menuList);\n\n    container.appendChild(menuDiv);\n}\n\n\n\n//# sourceURL=webpack:///./src/menu-tab.js?");

/***/ })

/******/ });