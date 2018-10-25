webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/breadcrum.js":
/*!*********************************!*\
  !*** ./components/breadcrum.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Breadscrum =
/*#__PURE__*/
function (_Component) {
  _inherits(Breadscrum, _Component);

  function Breadscrum() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Breadscrum);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Breadscrum)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderHomeSubmenu", function () {
      var asPath = _this.props.router.asPath;

      switch (asPath) {
        case "/home/about":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/"
          }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "About"));

        case "/home/product":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/"
          }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "Product"));

        case "/home/contact":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/"
          }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "Contact"));

        default:
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item"
          }, "Home");
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderBreadcrumbItem", function () {
      var asPath = _this.props.router.asPath;

      switch (asPath) {
        case "/todo":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "Todo");

        case "/select":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "Select");

        default:
          return _this.renderHomeSubmenu();
      }
    });

    return _this;
  }

  _createClass(Breadscrum, [{
    key: "render",
    value: function render() {
      var asPath = this.props.router.asPath;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-836492518" + " " + "breadcrumb"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
        className: "breadcrum_nav"
      }, asPath && this.renderBreadcrumbItem()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "836492518",
        css: ".breadcrumb.jsx-836492518{margin-bottom:0 !important;padding:0;border:none;border-radius:0;}.breadcrum_nav.jsx-836492518 .breadcrumb.jsx-836492518{border:1px solid red;}.breadcrum_nav.jsx-836492518{background-color:red;}ol.breadcrumb.jsx-836492518{margin-inline-end:0 !important;margin-bottom:0 !important;background-color:red !important;}.breadcrumb_item.jsx-836492518{background-color:yellow !important;}.breadcrumb_item.jsx-836492518:hover{background-color:yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teW5nYW4vRGVza3RvcC90b2RvX25leHRqcy9jb21wb25lbnRzL2JyZWFkY3J1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRVcsQUFHMEMsQUFNTixBQUdBLEFBR1UsQUFLSSxBQUdYLHFCQWIxQixBQUdBLEdBV0EsR0FwQlksSUFZaUIsSUFLN0IsRUFoQmMsWUFDSSxTQVdnQixPQVZsQyx5QkFXQSIsImZpbGUiOiIvVXNlcnMvbXluZ2FuL0Rlc2t0b3AvdG9kb19uZXh0anMvY29tcG9uZW50cy9icmVhZGNydW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBCcmVhZHNjcnVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySG9tZVN1Ym1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhc1BhdGggfSA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgIHN3aXRjaCAoYXNQYXRoKSB7XG4gICAgICBjYXNlIFwiL2hvbWUvYWJvdXRcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCI+PExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPjwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCIgYWN0aXZlPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIi9ob21lL3Byb2R1Y3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCI+PExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPjwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCIgYWN0aXZlPlxuICAgICAgICAgICAgICBQcm9kdWN0XG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiL2hvbWUvY29udGFjdFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBjbGFzc05hbWU9XCJicmVhZGNydW1iX2l0ZW1cIj48TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+PC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBjbGFzc05hbWU9XCJicmVhZGNydW1iX2l0ZW1cIiBhY3RpdmU+XG4gICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCI+SG9tZTwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuICByZW5kZXJCcmVhZGNydW1iSXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFzUGF0aCB9ID0gdGhpcy5wcm9wcy5yb3V0ZXI7XG4gICAgc3dpdGNoIChhc1BhdGgpIHtcbiAgICAgIGNhc2UgXCIvdG9kb1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBjbGFzc05hbWU9XCJicmVhZGNydW1iX2l0ZW1cIiBhY3RpdmU+XG4gICAgICAgICAgICBUb2RvXG4gICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCIvc2VsZWN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiIGFjdGl2ZT5cbiAgICAgICAgICAgIFNlbGVjdFxuICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJIb21lU3VibWVudSgpO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXNQYXRoIH0gPSB0aGlzLnByb3BzLnJvdXRlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxCcmVhZGNydW1iIGNsYXNzTmFtZT1cImJyZWFkY3J1bV9uYXZcIj5cbiAgICAgICAgICB7YXNQYXRoICYmIHRoaXMucmVuZGVyQnJlYWRjcnVtYkl0ZW0oKX1cbiAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYnJlYWRjcnVtYiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJyZWFkY3J1bV9uYXYgLmJyZWFkY3J1bWIge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJlYWRjcnVtX25hdiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9sLmJyZWFkY3J1bWIge1xuICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJyZWFkY3J1bWJfaXRlbSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJyZWFkY3J1bWJfaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJyZWFkc2NydW0pO1xuIl19 */\n/*@ sourceURL=/Users/myngan/Desktop/todo_nextjs/components/breadcrum.js */"
      }));
    }
  }]);

  return Breadscrum;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Breadscrum));

/***/ })

})
//# sourceMappingURL=_app.js.5c0549b5e1a0d069cf8b.hot-update.js.map