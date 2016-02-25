/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Linkage = __webpack_require__(1);
	
	var _Linkage2 = _interopRequireDefault(_Linkage);
	
	var _WordCount = __webpack_require__(4);
	
	var _WordCount2 = _interopRequireDefault(_WordCount);
	
	var _Jellybean = __webpack_require__(11);
	
	var _Jellybean2 = _interopRequireDefault(_Jellybean);
	
	var _Select = __webpack_require__(14);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueComponent = {
		linkage: _Linkage2.default,
		wordcount: _WordCount2.default,
		jellybean: _Jellybean2.default,
		select2: _Select2.default
	};
	
	window.VueComponent = VueComponent;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\src\\Linkage.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\project\\regbuzzDemo\\components\\src\\Linkage.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="row row--no-padding">
	// 		<div class="col-md-6">
	// 			<select class='form-control' v-model='initSelect'>
	// 				<option v-for='linkage in linkageData' v-bind:value='linkage.firstData' v-text='linkage.firstData'></option>
	// 			</select>
	// 		</div>
	// 		<div class="col-md-6">
	// 			<select class='form-control'>
	// 				<option v-for='secondSy in selection' v-bind:value='secondSy.text' v-text='secondSy.text'></option>
	// 			</select>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			initSelect: {
				type: String,
				default: 'Please select...'
			},
			linkageData: {
				type: Array,
				require: true
			}
		},
		computed: {
	
			// 两级联动
	
			selection: function selection() {
				if (this.linkageData.length) {
					for (var i = 0; i < this.linkageData.length; i++) {
						if (this.linkageData[i].firstData === this.initSelect) {
							return this.linkageData[i].secondData;
						}
					}
				}
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row row--no-padding\">\n\t<div class=\"col-md-6\">\n\t\t<select class='form-control' v-model='initSelect'>\n\t\t\t<option v-for='linkage in linkageData' v-bind:value='linkage.firstData' v-text='linkage.firstData'></option>\n\t\t</select>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<select class='form-control'>\n\t\t\t<option v-for='secondSy in selection' v-bind:value='secondSy.text' v-text='secondSy.text'></option>\n\t\t</select>\n\t</div>\n</div>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(5)
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\src\\WordCount.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\project\\regbuzzDemo\\components\\src\\WordCount.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./WordCount.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./WordCount.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".words-count {\n  position: relative; }\n  .words-count .word-input {\n    left: 0;\n    top: 0; }\n  .words-count .words-count-area {\n    position: absolute;\n    z-index: 100;\n    right: 20px;\n    bottom: 10px;\n    color: #808080;\n    color: rgba(128, 128, 128, 0.8);\n    font-style: italic;\n    font-weight: 600; }\n  .words-count .current-words.overmax {\n    color: rgba(219, 40, 40, 0.8); }\n", "", {"version":3,"sources":["/./components/src/WordCount.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB,EAAE;EACrB;IACE,QAAQ;IACR,OAAO,EAAE;EACX;IACE,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,eAAe;IACf,gCAAgC;IAChC,mBAAmB;IACnB,iBAAiB,EAAE;EACrB;IACE,8BAA8B,EAAE","file":"WordCount.vue","sourcesContent":[".words-count {\n  position: relative; }\n  .words-count .word-input {\n    left: 0;\n    top: 0; }\n  .words-count .words-count-area {\n    position: absolute;\n    z-index: 100;\n    right: 20px;\n    bottom: 10px;\n    color: #808080;\n    color: rgba(128, 128, 128, 0.8);\n    font-style: italic;\n    font-weight: 600; }\n  .words-count .current-words.overmax {\n    color: rgba(219, 40, 40, 0.8); }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class='words-count'>
	// 		<textarea class='form-control words-input' :rows="rowsNum" v-model='inputText'></textarea>
	// 		<div class='words-count-area'>
	// 			<span class='current-words' :class="{'overmax':isOverMax}" v-text='currentCount'></span> / <span class='total-words' v-text='totalCount'></span>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			totalCount: {
				type: Number,
				default: 20
			},
			inputText: {
				type: String,
				default: ''
			},
			rowsNum: {
				type: Number,
				default: 5
			}
	
		},
		data: function data() {
			return {
				isOverMax: false
			};
		},
	
		computed: {
			currentCount: function currentCount() {
				return this.inputText.length;
			},
			isOverMax: function isOverMax() {
				return this.currentCount > this.totalCount ? true : false;
			}
		}
	};
	// </script>
	//
	// <style lang='sass'>
	// .words-count{
	//
	// 	position: relative;
	//
	// 	.word-input{
	// 		left: 0;
	// 		top: 0;
	// 	}
	//
	// 	.words-count-area{
	// 		position: absolute;
	// 		z-index: 100;
	// 		right: 20px;
	// 		bottom: 10px;
	// 		color:#808080;
	// 		color:rgba(#808080,0.8);
	// 		font-style: italic;
	// 		font-weight: 600;
	// 	}
	//
	// 	.current-words.overmax{
	// 		color:rgba(#db2828,0.8);
	// 	}
	// }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n<div class='words-count'>\n\t<textarea class='form-control words-input' :rows=\"rowsNum\" v-model='inputText'></textarea>\n\t<div class='words-count-area'>\n\t\t<span class='current-words' :class=\"{'overmax':isOverMax}\" v-text='currentCount'></span> / <span class='total-words' v-text='totalCount'></span>\n\t</div>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\src\\Jellybean.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\project\\regbuzzDemo\\components\\src\\Jellybean.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="jellybean" :class="{'error':isError}">
	// 		<ul class='jellybean-container clearfix'>
	// 			<li class="jellybean-container-item" v-for='item in jellybeanList' track-by="$index">
	// 				<span class="jellybean-suggest-show">
	// 					<span class="value" v-text='item'></span>
	// 					<button type="button" class="remove" @click='remove($index)'>×</button>
	// 				</span>
	// 			</li>
	// 			<li class="jellybean-container-item">
	// 				<span class="jellybean-suggest-input">
	// 					<input type="text" class="jellybean-input" :placeholder="placeholder" v-model='searchText' @keyup='search | debounce 500'>
	// 					<ul class='jellybean-result' :class="{'show':isShow}">
	// 						<li v-for='item in searchResult | filterBy searchText'>
	// 							<a href="javascript:;" class="jellybean-result-link" v-html='item.show | capitalize' @click='addInjellybeanList(item.origin)'></a>
	// 						</li>
	// 						<li v-if='promptMessage'>
	// 							<a href='javascript:;' class='jellybean-result-link text-center' v-text='msgCustom'>
	// 							</a>
	// 						</li>
	// 					</ul>
	// 				</span>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>
	//
	// <script>
	exports.default = {
		props: {
			jellybeanData: {
				type: Array,
				require: true
			},
			jellybeanMax: {
				type: Number
			},
			placeholder: {
				type: String
			},
			msgCustom: {
				type: String
			}
		},
		data: function data() {
			return {
				// 数据提示
				searchText: '',
				searchResult: [],
				jellybeanList: [],
				isShow: false,
				promptMessage: false,
				isError: false
			};
		},
	
		ready: function ready() {
			console.log(this.msgCustom);
			var self = this;
	
			// 标准浏览器		 
			window.addEventListener('click', function (event) {
				if (self.isShow) {
					self.isShow = false;
					self.searchText = '';
				}
			}, false);
		},
		methods: {
	
			// 数据提示 也可引入ajax
			search: function search() {
	
				var size = this.jellybeanList.length;
	
				if (this.jellybeanMax) {
	
					if (size >= this.jellybeanMax) {
						if (this.searchText.trim() !== '') {
							this.isError = true;
						} else {
							this.isError = false;
						}
						return false;
					} else {
						this.isError = false;
					}
				}
	
				this.searchResult = [];
	
				var self = this,
				    text = this.searchText.trim().toLowerCase();
	
				if (text) {
					this.isShow = true;
					this.jellybeanData.forEach(function (element, index) {
						var str = element.toLowerCase();
	
						if (str.indexOf(text) !== -1) {
							var newStr = str.replace(new RegExp('(' + text + ')', 'gi'), '<strong>$1</strong>');
							self.searchResult.push({
								origin: element,
								show: newStr
							});
						}
					});
					this.promptMessage = this.searchResult.length > 0 ? false : true;
				} else {
					this.isShow = false;
				}
			},
			addInjellybeanList: function addInjellybeanList(data) {
				var size = this.jellybeanList.length;
	
				if (this.jellybeanMax) {
					if (size == this.jellybeanMax) {
						return false;
					}
				}
	
				this.jellybeanList.push(data);
	
				// ajax，需要考虑的是，如何处理data,再返回相应的值？
	
				this.searchText = '';
				this.isShow = false;
			},
			remove: function remove(index) {
				this.jellybeanList.splice(index, 1);
				this.searchText = '';
				var size = this.jellybeanList.length;
	
				if (this.jellybeanMax) {
					if (size <= this.jellybeanMax) {
						this.isError = false;
					}
				}
			}
		}
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"jellybean\" :class=\"{'error':isError}\">\n\t<ul class='jellybean-container clearfix'>\n\t\t<li class=\"jellybean-container-item\" v-for='item in jellybeanList' track-by=\"$index\">\n\t\t\t<span class=\"jellybean-suggest-show\">\n\t\t\t\t<span class=\"value\" v-text='item'></span>\n\t\t\t\t<button type=\"button\" class=\"remove\" @click='remove($index)'>×</button>\n\t\t\t</span>\n\t\t</li>\n\t\t<li class=\"jellybean-container-item\">\n\t\t\t<span class=\"jellybean-suggest-input\">\n\t\t\t\t<input type=\"text\" class=\"jellybean-input\" :placeholder=\"placeholder\" v-model='searchText' @keyup='search | debounce 500'>\n\t\t\t\t<ul class='jellybean-result' :class=\"{'show':isShow}\">\n\t\t\t\t\t<li v-for='item in searchResult | filterBy searchText'>\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"jellybean-result-link\" v-html='item.show | capitalize' @click='addInjellybeanList(item.origin)'></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li v-if='promptMessage'>\n\t\t\t\t\t\t<a href='javascript:;' class='jellybean-result-link text-center' v-text='msgCustom'>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</span>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\src\\Select2.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\project\\regbuzzDemo\\components\\src\\Select2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(16);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div id="select2">
	// 		<div class="select2">
	// 			<a href="javascript:;" title="select" class='select2-choice' @click.stop='select2IsHide = !select2IsHide'>
	// 				Any Location
	// 				<i class="fa" :class="{'fa-angle-down':select2IsHide,'fa-angle-up':!select2IsHide}"></i>
	// 			</a>
	// 			<div class='select2-drop' :class="{'select2-drop-hide':select2IsHide , 'select2-drop-show':!select2IsHide}" v-cloak>
	// 				<div class='select2-search'>
	// 					<input type="text" name="" value="" placeholder="" class='form-control' v-model='select2SearchText' @click.stop>
	// 				</div>
	// 				<ul class='select2-content'>
	// 					<li v-for='country in select2SearchResult' track-by="$index">
	// 						<a href="javascript:;" :title="country.text" v-html='country.text | highlight select2SearchText' @click='Add2Select2List(country.text)'>
	// 						</a>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 		</div>
	// 		<ul class='checkbox-list'>		
	// 			<li class="checkbox" v-for='item in select2List' v-cloak>
	// 	        	<label class="c-input c-checkbox" data-toggle="tooltip" data-placement="right" title="{{item.text}}" for="{{item.short}}" @mouseup='remove2SelectList($index)'>
	// 				  <input type="checkbox" id='{{item.short}}' value='{{item.text}}' v-model='select2CheckedNames'>
	// 				  <span class="c-indicator"></span>
	// 				  <span v-text='item.text'></span>
	// 				</label>
	// 			</li>
	// 		</ul>
	// 	</div> 								
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    originData: {
	      type: Array,
	      require: true
	    }
	  },
	  data: function data() {
	    return {
	      select2IsHide: true,
	      select2SearchText: '',
	      resultData: [],
	      select2List: [],
	      select2SearchResult: [],
	      select2CheckedNames: []
	    };
	  },
	
	  created: function created() {
	
	    var newArr = [];
	    this.originData.forEach(function (element) {
	      newArr.push((0, _assign2.default)({}, element, { isForbid: false }));
	    });
	
	    this.resultData = newArr;
	  },
	
	  ready: function ready() {
	    var self = this;
	
	    $(window).on('click', function (event) {
	      event.stopPropagation();
	      if (!self.select2IsHide) {
	        self.select2IsHide = true;
	      }
	    });
	  },
	  computed: {
	    select2SearchResult: function select2SearchResult() {
	      var self = this,
	          newArr = [],
	          text = this.select2SearchText.trim().toLowerCase();
	
	      if (this.resultData.length !== 0) {
	        this.resultData.forEach(function (element, index) {
	
	          if (!element.isForbid) {
	            if (text) {
	              var str = element['text'].toLowerCase();
	              if (str.indexOf(text) !== -1) {
	                newArr.push(element);
	              }
	            } else {
	              newArr.push(element);
	            }
	          }
	        });
	      }
	
	      return newArr;
	    }
	  },
	  methods: {
	    Add2Select2List: function Add2Select2List(str) {
	      var self = this,
	          newArr = [];
	
	      this.resultData.forEach(function (element, index) {
	        newArr.push(element.text);
	      });
	
	      var isIndex = $.inArray(str, newArr);
	
	      if (isIndex !== -1) {
	        this.select2CheckedNames.push(self.resultData[isIndex].text);
	        this.select2List.push({
	          text: self.resultData[isIndex].text,
	          short: self.resultData[isIndex].short,
	          index: isIndex
	        });
	
	        this.resultData[isIndex].isForbid = true;
	      }
	
	      this.select2SearchText = '';
	    },
	    remove2SelectList: function remove2SelectList(index) {
	      var originIndex = this.select2List[index].index;
	      this.resultData[originIndex].isForbid = false;
	      this.select2List.splice(index, 1);
	    }
	  },
	  filters: {
	    highlight: function highlight(value, phrase) {
	      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	module.exports = __webpack_require__(21).Object.assign;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(19);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(24)});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 20 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(25)
	  , toObject = __webpack_require__(26)
	  , IObject  = __webpack_require__(28);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(30)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 25 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(29);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"select2\">\n\t<div class=\"select2\">\n\t\t<a href=\"javascript:;\" title=\"select\" class='select2-choice' @click.stop='select2IsHide = !select2IsHide'>\n\t\t\tAny Location\n\t\t\t<i class=\"fa\" :class=\"{'fa-angle-down':select2IsHide,'fa-angle-up':!select2IsHide}\"></i>\n\t\t</a>\n\t\t<div class='select2-drop' :class=\"{'select2-drop-hide':select2IsHide , 'select2-drop-show':!select2IsHide}\" v-cloak>\n\t\t\t<div class='select2-search'>\n\t\t\t\t<input type=\"text\" name=\"\" value=\"\" placeholder=\"\" class='form-control' v-model='select2SearchText' @click.stop>\n\t\t\t</div>\n\t\t\t<ul class='select2-content'>\n\t\t\t\t<li v-for='country in select2SearchResult' track-by=\"$index\">\n\t\t\t\t\t<a href=\"javascript:;\" :title=\"country.text\" v-html='country.text | highlight select2SearchText' @click='Add2Select2List(country.text)'>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<ul class='checkbox-list'>\t\t\n\t\t<li class=\"checkbox\" v-for='item in select2List' v-cloak>\n        \t<label class=\"c-input c-checkbox\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"{{item.text}}\" for=\"{{item.short}}\" @mouseup='remove2SelectList($index)'>\n\t\t\t  <input type=\"checkbox\" id='{{item.short}}' value='{{item.text}}' v-model='select2CheckedNames'>\n\t\t\t  <span class=\"c-indicator\"></span>\n\t\t\t  <span v-text='item.text'></span>\n\t\t\t</label>\n\t\t</li>\n\t</ul>\n</div> \t\t\t\t\t\t\t\t\n";

/***/ }
/******/ ]);
//# sourceMappingURL=vue-component.js.map