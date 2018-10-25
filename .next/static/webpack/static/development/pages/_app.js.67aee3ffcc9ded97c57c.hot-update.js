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
      var _this$props$router = _this.props.router,
          asPath = _this$props$router.asPath,
          pathname = _this$props$router.pathname;

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
        css: ".breadcrumb.jsx-836492518{margin-bottom:0 !important;padding:0;border:none;border-radius:0;}.breadcrum_nav.jsx-836492518 .breadcrumb.jsx-836492518{border:1px solid red;}.breadcrum_nav.jsx-836492518{background-color:red;}ol.breadcrumb.jsx-836492518{margin-inline-end:0 !important;margin-bottom:0 !important;background-color:red !important;}.breadcrumb_item.jsx-836492518{background-color:yellow !important;}.breadcrumb_item.jsx-836492518:hover{background-color:yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teW5nYW4vRGVza3RvcC90b2RvX25leHRqcy9jb21wb25lbnRzL2JyZWFkY3J1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRVcsQUFHMEMsQUFNTixBQUdBLEFBR1UsQUFLSSxBQUdYLHFCQWIxQixBQUdBLEdBV0EsR0FwQlksSUFZaUIsSUFLN0IsRUFoQmMsWUFDSSxTQVdnQixPQVZsQyx5QkFXQSIsImZpbGUiOiIvVXNlcnMvbXluZ2FuL0Rlc2t0b3AvdG9kb19uZXh0anMvY29tcG9uZW50cy9icmVhZGNydW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBCcmVhZHNjcnVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySG9tZVN1Ym1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhc1BhdGgsIHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlcjtcbiAgICBzd2l0Y2ggKGFzUGF0aCkge1xuICAgICAgY2FzZSBcIi9ob21lL2Fib3V0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiPjxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz48L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiIGFjdGl2ZT5cbiAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCIvaG9tZS9wcm9kdWN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiPjxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz48L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiIGFjdGl2ZT5cbiAgICAgICAgICAgICAgUHJvZHVjdFxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIi9ob21lL2NvbnRhY3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCI+PExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPjwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCIgYWN0aXZlPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiPkhvbWU8L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyQnJlYWRjcnVtYkl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhc1BhdGggfSA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgIHN3aXRjaCAoYXNQYXRoKSB7XG4gICAgICBjYXNlIFwiL3RvZG9cIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCIgYWN0aXZlPlxuICAgICAgICAgICAgVG9kb1xuICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiL3NlbGVjdFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBjbGFzc05hbWU9XCJicmVhZGNydW1iX2l0ZW1cIiBhY3RpdmU+XG4gICAgICAgICAgICBTZWxlY3RcbiAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySG9tZVN1Ym1lbnUoKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFzUGF0aCB9ID0gdGhpcy5wcm9wcy5yb3V0ZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8QnJlYWRjcnVtYiBjbGFzc05hbWU9XCJicmVhZGNydW1fbmF2XCI+XG4gICAgICAgICAge2FzUGF0aCAmJiB0aGlzLnJlbmRlckJyZWFkY3J1bWJJdGVtKCl9XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmJyZWFkY3J1bWIge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5icmVhZGNydW1fbmF2IC5icmVhZGNydW1iIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJyZWFkY3J1bV9uYXYge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbC5icmVhZGNydW1iIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5icmVhZGNydW1iX2l0ZW0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5icmVhZGNydW1iX2l0ZW06aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCcmVhZHNjcnVtKTtcbiJdfQ== */\n/*@ sourceURL=/Users/myngan/Desktop/todo_nextjs/components/breadcrum.js */"
      }));
    }
  }]);

  return Breadscrum;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Breadscrum));

/***/ })

})
//# sourceMappingURL=_app.js.67aee3ffcc9ded97c57c.hot-update.js.map