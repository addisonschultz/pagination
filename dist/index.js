(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"), require("react-flip-page"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react", "react-flip-page"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react"), require("react-flip-page")) : factory(root["Framer"], root["React"], root["react-flip-page"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_flip_page__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DepreciatedPagination.tsx": "./code/DepreciatedPagination.tsx",
	"./Pagination.tsx": "./code/Pagination.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/DepreciatedPagination.tsx":
/*!****************************************!*\
  !*** ./code/DepreciatedPagination.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwcmVjaWF0ZWRQYWdpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9EZXByZWNpYXRlZFBhZ2luYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFtRTtBQWtCbkUsTUFBYSxVQUFVOztBQUF2QixnQ0FNQztBQUxVLGVBQUksR0FBRyxNQUFNLENBQUE7QUFDYixvQkFBUyxHQUFHLFdBQVcsQ0FBQTtBQUN2QixlQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2IsZUFBSSxHQUFHLE1BQU0sQ0FBQTtBQUNiLGdCQUFLLEdBQUcsT0FBTyxDQUFBO0FBRzFCLE1BQU0scUJBQXNCLFNBQVEsS0FBSyxDQUFDLFNBQXVCO0lBQzdELFlBQVksS0FBSztRQUNiLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTs7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixDQUFDLEVBQUUsQ0FBQztTQUNQLENBQUE7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDbkQ7SUFpRUQsV0FBVzs7UUFDUCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2pELENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQ3RCLENBQUMsQ0FBQTtTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUNoRCxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7YUFDcEMsQ0FBQyxDQUFBO1NBQ0w7S0FDSjtJQUNELFlBQVk7O1FBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2pELENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQ3RCLENBQUMsQ0FBQTtTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxDQUFDO2FBQ1AsQ0FBQyxDQUFBO1NBQ0w7S0FDSjtJQUVELE1BQU07O1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3BDLE1BQU0sY0FBYyxHQUF3QjtZQUN4QyxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZUFBZSxFQUFFLHVCQUF1QjtZQUN4QyxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUNELE1BQU0saUJBQWlCLEdBQXdCO1lBQzNDLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixlQUFlLEVBQUUsdUJBQXVCO1lBQ3hDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFBO1FBQ0QsT0FBTyxDQUNIO1lBQ0ksb0JBQUMsYUFBSSxvQkFDRyxJQUFJLENBQUMsS0FBSyxJQUNkLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQ25CLE9BQU8sRUFBRSxDQUFDLEVBQ1YsVUFBVSxFQUFFLFNBQVMsRUFDckIsUUFBUSxFQUFFLEtBQUssRUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQjtZQUNQLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxJQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ25DLDZCQUNJLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDeEIsR0FBRyxFQUFDLHFCQUFxQixHQUMzQixDQUNMLENBQUMsQ0FBQyxDQUFDLENBQ0EsNkJBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSTtnQkFDdkIsOEJBQ0ksQ0FBQyxFQUFDLGdCQUFnQixFQUNsQixJQUFJLEVBQUMsYUFBYSxrQkFDTCxHQUFHLEVBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssb0JBQ1QsT0FBTyxxQkFDTixPQUFPLEdBQ3pCO2dCQUNGLDhCQUNJLENBQUMsRUFBQyxnQkFBZ0IsRUFDbEIsSUFBSSxFQUFDLGFBQWEsa0JBQ0wsR0FBRyxFQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG9CQUNULE9BQU8scUJBQ04sT0FBTyxHQUN6QjtnQkFDRiw4QkFDSSxDQUFDLEVBQUMsbUJBQW1CLEVBQ3JCLElBQUksRUFBQyxhQUFhLGtCQUNMLEdBQUcsRUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxvQkFDVCxPQUFPLHFCQUNOLE9BQU8sR0FDekIsQ0FDQSxDQUNULENBQ0c7WUFDUixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxJQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxJQUFJO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3BDLDZCQUNJLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDekIsR0FBRyxFQUFDLHFCQUFxQixHQUMzQixDQUNMLENBQUMsQ0FBQyxDQUFDLENBQ0EsNkJBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSTtnQkFDdkIsOEJBQ0ksQ0FBQyxFQUFDLHVCQUF1QixFQUN6QixJQUFJLEVBQUMsYUFBYSxrQkFDTCxHQUFHLEVBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssb0JBQ1QsT0FBTyxxQkFDTixPQUFPLEdBQ3pCO2dCQUNGLDhCQUNJLENBQUMsRUFBQyxtQkFBbUIsRUFDckIsSUFBSSxFQUFDLGFBQWEsa0JBQ0wsR0FBRyxFQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG9CQUNULE9BQU8scUJBQ04sT0FBTyxHQUN6QixDQUNBLENBQ1QsQ0FDRyxDQUNOLENBQ1QsQ0FBQTtLQUNKOztBQS9MTSxrQ0FBWSxtQ0FFWixjQUFLLENBQUMsWUFBWSxLQUNyQixLQUFLLEVBQUUsR0FBRyxFQUNWLE1BQU0sRUFBRSxHQUFHLEVBQ1gsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQ3JCLEtBQUssRUFBRSxNQUFNLEVBQ2IsUUFBUSxFQUFFLElBQUksRUFDZCxTQUFTLEVBQUUsSUFBSSxFQUNmLEdBQUcsRUFBRSxFQUFFLEVBQ1AsUUFBUSxFQUFFLFFBQVEsSUFDckI7QUFDTSxzQ0FBZ0IsR0FBcUI7SUFDeEMsZ0NBQWdDO0lBQ2hDLFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO1lBQ25DLEtBQUssRUFBRSxNQUFNO1NBQ2hCO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxRQUFRO1FBQ2YsT0FBTyxFQUFFO1lBQ0wsVUFBVSxDQUFDLElBQUk7WUFDZixVQUFVLENBQUMsU0FBUztZQUNwQixVQUFVLENBQUMsSUFBSTtZQUNmLFVBQVUsQ0FBQyxJQUFJO1lBQ2YsVUFBVSxDQUFDLEtBQUs7U0FDbkI7UUFDRCxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO0tBQ2hFO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsS0FBSztRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEdBQUc7UUFDUixJQUFJLEVBQUUsQ0FBQztLQUNWO0lBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsVUFBVTtRQUNqQixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1FBQzlCLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7S0FDdEM7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxhQUFhO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsV0FBVztRQUNsQixnQkFBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQztLQUM1QjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLENBQUM7S0FDNUI7Q0FDSixDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class PageEffect {
}
exports.PageEffect = PageEffect;
PageEffect.None = "none";
PageEffect.CoverFlow = "coverflow";
PageEffect.Cube = "cube";
PageEffect.Pile = "pile";
PageEffect.Wheel = "wheel";
class DepreciatedPagination extends React.Component {
    constructor(props) {
        super(props);
        window["__checkBudget__"]();
        this.state = {
            currentPageIndex: 0,
            i: 0,
        };
        this.tapForwards = this.tapForwards.bind(this);
        this.tapBackwards = this.tapBackwards.bind(this);
    }
    tapForwards() {
        window["__checkBudget__"]();
        if (this.state.i < this.props.children.length - 1) {
            this.setState({
                currentPageIndex: this.state.currentPageIndex + 1,
                i: this.state.i + 1,
            });
        }
        else {
            this.setState({
                currentPageIndex: this.props.children.length - 1,
                i: this.props.children.length - 1,
            });
        }
    }
    tapBackwards() {
        window["__checkBudget__"]();
        if (this.state.i > 0) {
            this.setState({
                currentPageIndex: this.state.currentPageIndex - 1,
                i: this.state.i - 1,
            });
        }
        else {
            this.setState({
                currentPageIndex: 0,
                i: 0,
            });
        }
    }
    render() {
        window["__checkBudget__"]();
        console.log(this.props);
        const { width, height } = this.props;
        const backFrameStyle = {
            width: 44,
            height: 44,
            position: "absolute",
            backgroundColor: " hsla(0, 0%, 100%, 0)",
            bottom: 20,
            left: 20,
        };
        const forwardFrameStyle = {
            width: 44,
            height: 44,
            position: "absolute",
            backgroundColor: " hsla(0, 0%, 100%, 0)",
            bottom: 20,
            right: 20,
        };
        return (React.createElement("div", null,
            React.createElement(framer_1.Page, Object.assign({}, this.props, { width: width, height: height, gap: this.props.gap, padding: 0, background: "#000000", momentum: false, overflow: this.props.overflow, defaultEffect: this.props.enum, currentPage: this.state.currentPageIndex }), this.props.children),
            React.createElement(framer_1.Frame, { style: backFrameStyle, onClick: this.tapBackwards }, this.props.leftIcon !== null &&
                this.props.leftIcon.includes(".svg") ? (React.createElement("img", { src: this.props.leftIcon, alt: "Image not Supported" })) : (React.createElement("svg", { width: "44", height: "44" },
                React.createElement("path", { d: "M 2 22 L 42 22", fill: "transparent", "stroke-width": "3", stroke: this.props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }),
                React.createElement("path", { d: "M 16 37 L 2 22", fill: "transparent", "stroke-width": "3", stroke: this.props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }),
                React.createElement("path", { d: "M 16 6.5 L 2 21.5", fill: "transparent", "stroke-width": "3", stroke: this.props.color, "stroke-linecap": "round", "stroke-linejoin": "round" })))),
            React.createElement(framer_1.Frame, { style: forwardFrameStyle, onClick: this.tapForwards }, this.props.rightIcon !== null &&
                this.props.rightIcon.includes(".svg") ? (React.createElement("img", { src: this.props.rightIcon, alt: "Image not Supported" })) : (React.createElement("svg", { width: "44", height: "44" },
                React.createElement("path", { d: "M 2 22 L 42 22 L 28 7", fill: "transparent", "stroke-width": "3", stroke: this.props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }),
                React.createElement("path", { d: "M 28 37.5 L 42 22", fill: "transparent", "stroke-width": "3", stroke: this.props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }))))));
    }
}
DepreciatedPagination.defaultProps = Object.assign(Object.assign({}, framer_1.Frame.defaultProps), { width: 375, height: 812, enum: PageEffect.None, color: "#fff", leftIcon: null, rightIcon: null, gap: 10, overflow: "hidden" });
DepreciatedPagination.propertyControls = {
    // Items shown in property panel
    children: {
        type: framer_1.ControlType.Array,
        title: "Content",
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
            title: "Page",
        },
    },
    enum: {
        type: framer_1.ControlType.Enum,
        title: "Effect",
        options: [
            PageEffect.None,
            PageEffect.CoverFlow,
            PageEffect.Cube,
            PageEffect.Pile,
            PageEffect.Wheel,
        ],
        optionTitles: ["None", "Cover Flow", "Cube", "Pile", "Wheel"],
    },
    gap: {
        type: framer_1.ControlType.Number,
        title: "Gap",
        defaultValue: 10,
        min: 0,
        max: 100,
        step: 1,
    },
    overflow: {
        type: framer_1.ControlType.Enum,
        title: "Overflow",
        options: ["hidden", "visible"],
        optionTitles: ["Hidden", "Visible"],
    },
    color: {
        type: framer_1.ControlType.Color,
        title: "Arrow Color",
    },
    leftIcon: {
        type: framer_1.ControlType.File,
        title: "Left Icon",
        allowedFileTypes: ["svg"],
    },
    rightIcon: {
        type: framer_1.ControlType.File,
        title: "Right Icon",
        allowedFileTypes: ["svg"],
    },
};
exports.__info__ = [];


/***/ }),

/***/ "./code/Pagination.tsx":
/*!*****************************!*\
  !*** ./code/Pagination.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUGFnaW5hdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBTWdCO0FBQ2hCLHFEQUF1QztBQW9EdkMsTUFBYSxVQUFVOztBQUF2QixnQ0FNQztBQUxRLGVBQUksR0FBRyxNQUFNLENBQUM7QUFDZCxvQkFBUyxHQUFHLFdBQVcsQ0FBQztBQUN4QixlQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2QsZUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNkLGdCQUFLLEdBQUcsT0FBTyxDQUFDO0FBR3pCLFNBQWdCLFVBQVUsQ0FBQyxLQUFZOztJQUNyQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUVoQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEQsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUk7O1FBQzlCLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwRSxPQUFPO1NBQ1I7UUFDRCxJQUNFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDbkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN6QixPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQztZQUNBLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSTs7UUFDL0IsSUFBSSxLQUFLLENBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_flip_page_1 = __webpack_require__(/*! react-flip-page */ "react-flip-page");
class PageEffect {
}
exports.PageEffect = PageEffect;
PageEffect.None = "none";
PageEffect.CoverFlow = "coverflow";
PageEffect.Cube = "cube";
PageEffect.Pile = "pile";
PageEffect.Wheel = "wheel";
function Pagination(props) {
    window["__checkBudget__"]();
    const { width, height } = props;
    const [current, setCurrent] = React.useState(0);
    function tapForwards(event, info) {
        window["__checkBudget__"]();
        if (props.carousel === false && current >= props.children.length - 1) {
            return;
        }
        if (props.children.length !== undefined &&
            props.children.length > 0 &&
            current >= props.children.length - 1) {
            setCurrent(0);
        }
        else {
            setCurrent(current + 1);
        }
    }
    function tapBackwards(event, info) {
        window["__checkBudget__"]();
        if (props.carousel === false && current <= 0) {
            return;
        }
        if (current <= 0 &&
            props.children.length !== undefined &&
            props.children.length > 0) {
            setCurrent(props.children.length);
        }
        else {
            setCurrent(current - 1);
        }
    }
    let customTransition;
    if (props.custom === "Custom1") {
        customTransition = Object.assign({}, Custom1());
    }
    if (props.custom === "Custom2") {
        customTransition = Object.assign({}, Custom2());
    }
    if (props.custom === "Custom3") {
        customTransition = Object.assign({}, Custom3());
    }
    if (props.toggle) {
        return (React.createElement(react_flip_page_1.default, { height: props.responsive ? null : 812, width: props.responsive ? null : 375, orientation: props.orientation, uncutPages: props.uncutPages, animationDuration: props.animationDuration, treshold: props.treshold, maxAngle: props.maxAngle, maskOpacity: props.maskOpacity, perspective: `${props.perspective}em`, pageBackground: props.pageBackground, showHint: props.showHint, showSwipeHint: props.showSwipeHint, showTouchHint: props.showTouchHint, flipOnTouch: props.flipOnTouch, onPageChange: props.onPageChange, onStartSwiping: props.onStartSwiping, onStopSwiping: props.onStopSwiping, loopForever: props.loopForever, disableSwipe: props.disableSwipe, responsive: props.responsive, startAt: props.startAt }, props.children));
    }
    return (React.createElement("div", null,
        React.createElement(framer_1.Page, Object.assign({}, props, (props.transition !== true ? customTransition : null), { width: width, height: height, gap: props.gap, padding: 0, background: props.pageBackgroundColor, momentum: false, overflow: props.overflow, defaultEffect: props.enum, onChangePage: (current, previous, page) => {
                window["__checkBudget__"]();
                setCurrent(current);
            }, currentPage: current, dragEnabled: props.dragEnabled }), props.children),
        React.createElement(framer_1.Frame, { size: "100%", onTap: tapBackwards, style: props.tapArea ? cornerbackFrameStyle : sideleftFrameStyle }, props.icons === false ||
            props.tapArea === false ? null : props.leftIcon !== null &&
            props.leftIcon.includes(".svg") ? (React.createElement("img", { src: props.leftIcon, alt: "Image not Supported" })) : (React.createElement("svg", { width: "44", height: "44" },
            React.createElement("path", { d: "M 2 22 L 42 22", fill: "transparent", "stroke-width": "3", stroke: props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M 16 37 L 2 22", fill: "transparent", "stroke-width": "3", stroke: props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M 16 6.5 L 2 21.5", fill: "transparent", "stroke-width": "3", stroke: props.color, "stroke-linecap": "round", "stroke-linejoin": "round" })))),
        React.createElement(framer_1.Frame, { size: "100%", onTap: tapForwards, style: props.tapArea ? cornerforwardFrameStyle : siderightFrameStyle }, props.icons === false ||
            props.tapArea === false ? null : props.rightIcon !== null &&
            props.rightIcon.includes(".svg") ? (React.createElement("img", { src: props.rightIcon, alt: "Image not Supported" })) : (React.createElement("svg", { width: "44", height: "44" },
            React.createElement("path", { d: "M 2 22 L 42 22 L 28 7", fill: "transparent", "stroke-width": "3", stroke: props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M 28 37.5 L 42 22", fill: "transparent", "stroke-width": "3", stroke: props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }))))));
}
exports.Pagination = Pagination;
framer_1.addPropertyControls(Pagination, {
    // Pagination Property Controls
    children: {
        type: framer_1.ControlType.Array,
        title: "Pages",
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance
        }
    },
    toggle: {
        type: framer_1.ControlType.Boolean,
        title: "Page Type",
        enabledTitle: "Flip",
        disabledTitle: "Page"
    },
    /**
     * Native Page Property Controls
     */
    transition: {
        type: framer_1.ControlType.Boolean,
        title: "Transition",
        enabledTitle: "Default",
        disabledTitle: "Custom",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === true;
        }
    },
    enum: {
        type: framer_1.ControlType.Enum,
        title: "Effect",
        options: [
            PageEffect.None,
            PageEffect.CoverFlow,
            PageEffect.Cube,
            PageEffect.Pile,
            PageEffect.Wheel
        ],
        optionTitles: ["None", "Cover Flow", "Cube", "Pile", "Wheel"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.transition === false || props.toggle === true;
        }
    },
    custom: {
        type: framer_1.ControlType.Enum,
        title: "Custom Effect",
        options: ["Custom1", "Custom2", "Custom3"],
        optionTitles: ["Shrink", "Rotate", "Fade"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.transition === true;
        }
    },
    gap: {
        type: framer_1.ControlType.Number,
        title: "Gap",
        defaultValue: 10,
        min: 0,
        max: 200,
        step: 1,
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === true;
        }
    },
    overflow: {
        type: framer_1.ControlType.Enum,
        title: "Overflow",
        options: ["hidden", "visible"],
        optionTitles: ["Hidden", "Visible"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === true;
        }
    },
    pageBackgroundColor: {
        type: framer_1.ControlType.Color,
        title: "Background Color"
    },
    dragEnabled: {
        type: framer_1.ControlType.Boolean,
        title: "Draggable",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === true;
        }
    },
    tapArea: {
        type: framer_1.ControlType.Boolean,
        title: "Tap Area",
        enabledTitle: "Corners",
        disabledTitle: "Sides",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === true;
        }
    },
    carousel: {
        type: framer_1.ControlType.Boolean,
        title: "Carousel",
        enabledTitle: "On",
        disabledTitle: "Off",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === true;
        }
    },
    icons: {
        type: framer_1.ControlType.Boolean,
        title: "Icons",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        hidden(props) {
            window["__checkBudget__"]();
            return props.tapArea === false || props.toggle === true;
        }
    },
    color: {
        type: framer_1.ControlType.Color,
        title: "Color",
        hidden(props) {
            window["__checkBudget__"]();
            return (props.icons === false ||
                props.tapArea === false ||
                props.toggle === true ||
                (props.rightIcon.includes(".svg") && props.leftIcon.includes(".svg")));
        }
    },
    leftIcon: {
        type: framer_1.ControlType.File,
        title: "Left Icon",
        allowedFileTypes: ["svg"],
        hidden(props) {
            window["__checkBudget__"]();
            return (props.icons === false ||
                props.tapArea === false ||
                props.toggle === true);
        }
    },
    rightIcon: {
        type: framer_1.ControlType.File,
        title: "Right Icon",
        allowedFileTypes: ["svg"],
        hidden(props) {
            window["__checkBudget__"]();
            return (props.icons === false ||
                props.tapArea === false ||
                props.toggle === true);
        }
    },
    /**
     * FlipPage Property Controls
     */
    orientation: {
        type: framer_1.ControlType.Enum,
        title: "Orientation",
        options: ["vertical", "horizontal"],
        optionTitles: ["Vertical", "Horizontal"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    uncutPages: {
        type: framer_1.ControlType.Boolean,
        title: "Uncut Pages",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    animationDuration: {
        type: framer_1.ControlType.Number,
        title: "Animation Duration",
        min: 100,
        max: 1000,
        step: 1,
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    treshold: {
        type: framer_1.ControlType.Number,
        title: "Treshold",
        min: 5,
        max: 90,
        step: 1,
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    maxAngle: {
        type: framer_1.ControlType.Number,
        title: "Max Angle",
        min: 1,
        max: 90,
        step: 1,
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    maxOpacity: {
        type: framer_1.ControlType.Number,
        title: "Mask Opacity",
        min: 0.1,
        max: 1,
        step: 0.1,
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    perspective: {
        type: framer_1.ControlType.Number,
        title: "Perspective",
        min: 50,
        max: 500,
        step: 1,
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    pageBackground: {
        type: framer_1.ControlType.Color,
        title: "Background Color",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    showHint: {
        type: framer_1.ControlType.Boolean,
        title: "Direction Hint",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    showSwipeHint: {
        type: framer_1.ControlType.Boolean,
        title: "Swipe Hint",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    showTouchHint: {
        type: framer_1.ControlType.Boolean,
        title: "Touch Hint",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    flipOnTouch: {
        type: framer_1.ControlType.Boolean,
        title: "Flip on Touch",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    loopForever: {
        type: framer_1.ControlType.Boolean,
        title: "Loop",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    disableSwipe: {
        type: framer_1.ControlType.Boolean,
        title: "Disable Swipe",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    responsive: {
        type: framer_1.ControlType.Boolean,
        title: "Responsive",
        enabledTitle: "True",
        disabledTitle: "False",
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    },
    startAt: {
        type: framer_1.ControlType.Number,
        title: "Start Page",
        displayStepper: true,
        hidden(props) {
            window["__checkBudget__"]();
            return props.toggle === false;
        }
    }
});
Pagination.defaultProps = Object.assign(Object.assign({}, framer_1.Frame.defaultProps), { toggle: false, width: 375, height: 812, 
    /**
     * Native Page Default Props
     */
    enum: PageEffect.None, color: "#fff", leftIcon: null, rightIcon: null, gap: 10, overflow: "hidden", pageBackgroundColor: "#000000", icons: true, tapArea: true, carousel: true, dragEnabled: false, transition: true, custom: "Custom1", 
    /**
     * Flip Page Default Props
     */
    orientation: "horizontal", uncutPages: false, animationDuration: 200, treshold: 10, maxAngle: 45, maxOpacity: 0.4, perspective: 130, pageBackground: "#fff", showHint: false, showSwipeHint: false, showTouchHint: false, flipOnTouch: false, loopForever: true, disableSwipe: false, responsive: true, startAt: 0 });
const sideleftFrameStyle = {
    width: 100,
    height: "100%",
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 0,
    left: 0
};
const siderightFrameStyle = {
    width: 100,
    height: "100%",
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 0,
    right: 0
};
const cornerbackFrameStyle = {
    width: 44,
    height: 44,
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 20,
    left: 20
};
const cornerforwardFrameStyle = {
    textAlign: "center",
    width: 44,
    height: 44,
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 20,
    right: 20
};
function Custom1() {
    window["__checkBudget__"]();
    return {
        effect(info) {
            window["__checkBudget__"]();
            return {
                rotateY: info.normalizedOffset * -20,
                scale: 1 - Math.abs(info.normalizedOffset)
            };
        }
    };
}
function Custom2() {
    window["__checkBudget__"]();
    return {
        effect(info) {
            window["__checkBudget__"]();
            return {
                rotate: Math.abs(info.normalizedOffset) * 360
            };
        }
    };
}
function Custom3() {
    window["__checkBudget__"]();
    return {
        effect(info) {
            window["__checkBudget__"]();
            return {
                opacity: 1 - Math.abs(info.normalizedOffset),
                x: -info.offset
            };
        }
    };
}
exports.__info__ = [{ "name": "Pagination", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template


module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"ee278683-0b1e-4aae-ae1f-715cf345b6a6\",\"displayName\":\"Pagination\"},\"author\":\"Addison Schultz\",\"dependencies\":{\"react\":\"^16.8.6\",\"react-flip-page\":\"^1.5.7\"},\"name\":\"@framer/addison.pagination\",\"version\":\"1.15.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-flip-page":
/*!**********************************!*\
  !*** external "react-flip-page" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_flip_page__;

/***/ })

/******/ });
});