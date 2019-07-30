(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUGFnaW5hdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQWdGO0FBbUJoRixNQUFhLFVBQVU7O0FBQ1osZUFBSSxHQUFHLE1BQU0sQ0FBQTtBQUNiLG9CQUFTLEdBQUcsV0FBVyxDQUFBO0FBQ3ZCLGVBQUksR0FBRyxNQUFNLENBQUE7QUFDYixlQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2IsZ0JBQUssR0FBRyxPQUFPLENBQUE7QUFMMUIsZ0NBTUM7QUFFRCxTQUFnQixVQUFVLENBQUMsS0FBSzs7SUFDNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFL0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRS9DLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJOztRQUM1QixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEUsT0FBTTtTQUNUO1FBQ0QsSUFDSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDekIsT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdEM7WUFDRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDaEI7YUFBTTtZQUNILFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDMUI7S0FDSjtJQUVELFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJOztRQUM3QixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FB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

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
        React.createElement(framer_1.Frame, { size: "100%", onTap: tapForwards, style: props.tapArea
                ? cornerforwardFrameStyle
                : siderightFrameStyle }, props.icons === false ||
            props.tapArea === false ? null : props.rightIcon !== null &&
            props.rightIcon.includes(".svg") ? (React.createElement("img", { src: props.rightIcon, alt: "Image not Supported" })) : (React.createElement("svg", { width: "44", height: "44" },
            React.createElement("path", { d: "M 2 22 L 42 22 L 28 7", fill: "transparent", "stroke-width": "3", stroke: props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M 28 37.5 L 42 22", fill: "transparent", "stroke-width": "3", stroke: props.color, "stroke-linecap": "round", "stroke-linejoin": "round" }))))));
}
exports.Pagination = Pagination;
framer_1.addPropertyControls(Pagination, {
    // Items shown in property panel
    children: {
        type: framer_1.ControlType.Array,
        title: "Content",
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
            title: "Page",
        },
    },
    transition: {
        type: framer_1.ControlType.Boolean,
        title: "Transition",
        enabledTitle: "Default",
        disabledTitle: "Custom",
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
        hidden(props) {
            window["__checkBudget__"]();
            return props.transition === false;
        },
    },
    custom: {
        type: framer_1.ControlType.Enum,
        title: "Custom Effect",
        options: ["Custom1", "Custom2"],
        optionTitles: ["Shrink", "Rotate"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.transition === true;
        },
    },
    gap: {
        type: framer_1.ControlType.Number,
        title: "Gap",
        defaultValue: 10,
        min: 0,
        max: 200,
        step: 1,
    },
    overflow: {
        type: framer_1.ControlType.Enum,
        title: "Overflow",
        options: ["hidden", "visible"],
        optionTitles: ["Hidden", "Visible"],
    },
    dragEnabled: {
        type: framer_1.ControlType.Boolean,
        title: "Draggable",
        enabledTitle: "True",
        disabledTitle: "False",
    },
    tapArea: {
        type: framer_1.ControlType.Boolean,
        title: "Tap Area",
        enabledTitle: "Corners",
        disabledTitle: "Sides",
    },
    carousel: {
        type: framer_1.ControlType.Boolean,
        title: "Carousel",
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    icons: {
        type: framer_1.ControlType.Boolean,
        title: "Icons",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        hidden(props) {
            window["__checkBudget__"]();
            return props.tapArea === false;
        },
    },
    color: {
        type: framer_1.ControlType.Color,
        title: "Color",
        hidden(props) {
            window["__checkBudget__"]();
            return (props.icons === false ||
                props.tapArea === false ||
                (props.rightIcon.includes(".svg") &&
                    props.leftIcon.includes(".svg")));
        },
    },
    leftIcon: {
        type: framer_1.ControlType.File,
        title: "Left Icon",
        allowedFileTypes: ["svg"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.icons === false || props.tapArea === false;
        },
    },
    rightIcon: {
        type: framer_1.ControlType.File,
        title: "Right Icon",
        allowedFileTypes: ["svg"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.icons === false || props.tapArea === false;
        },
    },
});
Pagination.defaultProps = Object.assign({}, framer_1.Frame.defaultProps, { width: 375, height: 812, enum: PageEffect.None, color: "#fff", leftIcon: null, rightIcon: null, gap: 10, overflow: "hidden", icons: true, tapArea: true, carousel: true, dragEnabled: false, transition: true, custom: "Custom1" });
const sideleftFrameStyle = {
    width: 100,
    height: "100%",
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 0,
    left: 0,
};
const siderightFrameStyle = {
    width: 100,
    height: "100%",
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 0,
    right: 0,
};
const cornerbackFrameStyle = {
    width: 44,
    height: 44,
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 20,
    left: 20,
};
const cornerforwardFrameStyle = {
    textAlign: "center",
    width: 44,
    height: 44,
    position: "absolute",
    backgroundColor: " hsla(0, 0%, 100%, 0)",
    bottom: 20,
    right: 20,
};
function Custom1() {
    window["__checkBudget__"]();
    return {
        effect(info) {
            window["__checkBudget__"]();
            return {
                rotateY: info.normalizedOffset * -20,
                scale: 1 - Math.abs(info.normalizedOffset),
            };
        },
    };
}
function Custom2() {
    window["__checkBudget__"]();
    return {
        effect(info) {
            window["__checkBudget__"]();
            return {
                rotate: Math.abs(info.normalizedOffset) * 360,
            };
        },
    };
}
exports.__info__ = [{ name: "Pagination", children: true, type: "component" }];


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
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.4","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.11","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
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

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1","react":"^16.8"},"framer":{"id":"ee278683-0b1e-4aae-ae1f-715cf345b6a6","displayName":"Pagination"},"author":"Addison Schultz","dependencies":{"react":"^16.8.6"},"name":"@framer/addison.pagination","version":"1.12.0"};

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

/***/ })

/******/ });
});