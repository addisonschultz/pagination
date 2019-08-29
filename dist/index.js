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
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwcmVjaWF0ZWRQYWdpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9EZXByZWNpYXRlZFBhZ2luYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFtRTtBQWtCbkUsTUFBYSxVQUFVOztBQUNaLGVBQUksR0FBRyxNQUFNLENBQUE7QUFDYixvQkFBUyxHQUFHLFdBQVcsQ0FBQTtBQUN2QixlQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2IsZUFBSSxHQUFHLE1BQU0sQ0FBQTtBQUNiLGdCQUFLLEdBQUcsT0FBTyxDQUFBO0FBTDFCLGdDQU1DO0FBRUQsTUFBTSxxQkFBc0IsU0FBUSxLQUFLLENBQUMsU0FBdUI7SUFDN0QsWUFBWSxLQUFLO1FBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBOztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLENBQUMsRUFBRSxDQUFDO1NBQ1AsQ0FBQTtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNuRDtJQWlFRCxXQUFXOztRQUNQLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDakQsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDdEIsQ0FBQyxDQUFBO1NBQ0w7YUFBTTtZQUNILElBQUks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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class PageEffect {
}
PageEffect.None = "none";
PageEffect.CoverFlow = "coverflow";
PageEffect.Cube = "cube";
PageEffect.Pile = "pile";
PageEffect.Wheel = "wheel";
exports.PageEffect = PageEffect;
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
DepreciatedPagination.defaultProps = Object.assign({}, framer_1.Frame.defaultProps, { width: 375, height: 812, enum: PageEffect.None, color: "#fff", leftIcon: null, rightIcon: null, gap: 10, overflow: "hidden" });
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUGFnaW5hdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBTWdCO0FBQ2hCLHFEQUF1QztBQW1EdkMsTUFBYSxVQUFVOztBQUNkLGVBQUksR0FBRyxNQUFNLENBQUM7QUFDZCxvQkFBUyxHQUFHLFdBQVcsQ0FBQztBQUN4QixlQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2QsZUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNkLGdCQUFLLEdBQUcsT0FBTyxDQUFDO0FBTHpCLGdDQU1DO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEtBQVk7O0lBQ3JDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRWhDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoRCxTQUFTLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSTs7UUFDOUIsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BFLE9BQU87U0FDUjtRQUNELElBQ0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssU0FBUztZQUNuQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BDO1lBQ0EsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7S0FDRjtJQUVELFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJOztRQUMvQixJQUFJLEtBQUssQ0FBQyxR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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_flip_page_1 = __webpack_require__(/*! react-flip-page */ "react-flip-page");
class PageEffect {
}
PageEffect.None = "none";
PageEffect.CoverFlow = "coverflow";
PageEffect.Cube = "cube";
PageEffect.Pile = "pile";
PageEffect.Wheel = "wheel";
exports.PageEffect = PageEffect;
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
        React.createElement(framer_1.Page, Object.assign({}, props, (props.transition !== true ? customTransition : null), { width: width, height: height, gap: props.gap, padding: 0, background: "#000000", momentum: false, overflow: props.overflow, defaultEffect: props.enum, onChangePage: (current, previous, page) => {
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
Pagination.defaultProps = Object.assign({}, framer_1.Frame.defaultProps, { toggle: false, width: 375, height: 812, 
    /**
     * Native Page Default Props
     */
    enum: PageEffect.None, color: "#fff", leftIcon: null, rightIcon: null, gap: 10, overflow: "hidden", icons: true, tapArea: true, carousel: true, dragEnabled: false, transition: true, custom: "Custom1", 
    /**
     * Flip Page Default Props
     */
    orientation: "horizontal", uncutPages: false, animationDuration: 200, treshold: 10, maxAngle: 45, maxOpacity: 0.4, perspective: 130, pageBackground: "#fff", showHint: false, showSwipeHint: false, showTouchHint: false, flipOnTouch: false, loopForever: true, disableSwipe: false, responsive: false, startAt: 0 });
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

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.1.0","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.0","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"useOpenURL","type":"action"},{"name":"useLog","type":"action"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"ee278683-0b1e-4aae-ae1f-715cf345b6a6\",\"displayName\":\"Pagination\"},\"author\":\"Addison Schultz\",\"dependencies\":{\"react\":\"^16.8.6\",\"react-flip-page\":\"^1.5.7\"},\"name\":\"@framer/addison.pagination\",\"version\":\"1.13.0\"}");

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