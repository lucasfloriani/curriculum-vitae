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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _ui = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\nvar _storage = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\nvar App = exports.App = function (UIController, LanguageInfo) {\n  var removeSelectorActive = function removeSelectorActive(languageType) {\n    var UISelectors = UIController.getSelectors();\n    var selectionItems = document.querySelectorAll(UISelectors.selectionItems + '[data-type=\"' + languageType + '\"]');\n    selectionItems.forEach(function (item) {\n      item.classList.add('active');\n    });\n  };\n\n  var showSelectorInfo = function showSelectorInfo(e) {\n    e.preventDefault();\n    var language = e.target.getAttribute('data-language');\n    var languageType = e.target.getAttribute('data-type');\n    var selectionContent = e.target.parentNode.parentNode.parentNode.children[0];\n    var selectionTitle = selectionContent.children[0];\n    var selectionText = selectionContent.children[1];\n\n    selectionContent.classList.remove('active');\n    selectionTitle.classList.remove('active');\n    selectionText.classList.remove('active');\n    removeSelectorActive(languageType);\n    setTimeout(function () {\n      e.target.classList.remove('active');\n\n      selectionTitle.innerHTML = LanguageInfo[language].title;\n      selectionText.innerHTML = LanguageInfo[language].description;\n\n      selectionContent.classList.add('active');\n      selectionTitle.classList.add('active');\n      selectionText.classList.add('active');\n    }, 800);\n  };\n\n  var loadEventListeners = function loadEventListeners() {\n    var UISelectors = UIController.getSelectors();\n\n    document.querySelectorAll(UISelectors.selectionItems).forEach(function (item) {\n      item.addEventListener('click', showSelectorInfo);\n    });\n  };\n\n  return {\n    init: function init() {\n      loadEventListeners();\n    }\n  };\n}(_ui.UICtrl, _storage.languages);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./../scss/main.scss */ \"./src/scss/main.scss\");\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n_app.App.init();\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar languages = exports.languages = {\n  html5: {\n    title: 'HTML5',\n    description: 'Conhecimento de 95% da linguagem de marca????o, conhecendo tanto o b??sico como o avan??ado como SEO, Acessibilidade e LocalStorage/SessionStorage. Conhecimento b??sico sobre as APIs de canvas, video e audio, sendo os restantes para o entendimento completo da linguagem.'\n  },\n  css3: {\n    title: 'CSS3',\n    description: 'Conhecimento de 90% da linguagem, utiliza????o das novas funcionalidades do CSS3 bem s??lidas como Anima????es, Flexbox, etc, faltando somente propriedades mais especificas e pouco utilizadas.'\n  },\n  sass: {\n    title: 'Sass',\n    description: 'Conhecimento de 90% do pr?? processador, codifica????o seguindo padr??es de styleguide presentes em https://sass-guidelin.es .'\n  },\n  javascript: {\n    title: 'Javascript',\n    description: 'Conhecimentos s??lidos da linguagem at?? o ES6 com algumas funcionalidades do ES7/ES8. Utiliza????o de padr??es de projeto e organiza????o de c??digo utilizando o Webpack e afins.'\n  },\n  framework_css: {\n    title: 'Frameworks CSS',\n    description: 'Conhecimento sobre os frameworks CSS mais famosos do mercado como Bootstrap, Materialize e Bulma'\n  },\n  spa: {\n    title: 'Single Page Application',\n    description: 'Conhecimento b??sico sobre os demais SPAs do mercado atual como Angular, Vue e React. Entendimento da funcionalidade de suas bibliotecas externas e qual problemas elas resolvem (Vuex/Redux, Next/Nuxt, etc). Dentre eles o mais conhecido sendo o Angular por iniciar a codifica????o da estrutura de uma rede social.'\n  },\n  php: {\n    title: 'PHP',\n    description: 'Linguagem trabalhada durante 2 anos para cria????o de sites institucionais e e-commerces (Wordpress/Magento), conhecimento solido das funcionalidades e configura????es da mesma.'\n  },\n  go: {\n    title: 'Go',\n    description: 'Linguagem em estudo e utilizada no atual trabalho, conhecimento atual solido para cria????o de sistemas SaaS.'\n  },\n  wordpress: {\n    title: 'Wordpress',\n    description: 'Trabalhado durante 1 ano com este framework, conhecendo assim suas peculiariedades e sistema de codifica????o.'\n  },\n  magento: {\n    title: 'Magento',\n    description: 'Framework completo para cria????o de sistemas de e-commerce complexos, conhecimentos para altera????es de temas e cria????o de pequenos m??dulos para integrar ao sistema.'\n  },\n  git: {\n    title: 'Git',\n    description: 'Conhecimento b??sico sobre as funcionalidades mais utilizadas durante o dia a dia.'\n  },\n  rest: {\n    title: 'REST',\n    description: 'Conhecimento s??lido sobre utiliza????o e cria????o de APIs REST.'\n  }\n};\n\n//# sourceURL=webpack:///./src/js/storage.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar UICtrl = exports.UICtrl = function () {\n  var UISelectors = {\n    selectionItems: '.selection__list__item'\n  };\n\n  return {\n    getSelectors: function getSelectors() {\n      return UISelectors;\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });