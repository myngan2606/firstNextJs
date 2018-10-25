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
      var pathname = _this.props.router.pathname;

      switch (pathname) {
        case "/about":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "About");

        case "/product":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "Product");

        case "/contact":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item",
            active: true
          }, "Contact");

        default:
          return;
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

        case "/home/:page":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
            className: "breadcrumb_item"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/"
          }, "Home")), _this.renderHomeSubmenu());

        default:
          // return this.renderHomeSubmenu();
          return;
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
        css: ".breadcrumb.jsx-836492518{margin-bottom:0 !important;padding:0;border:none;border-radius:0;}.breadcrum_nav.jsx-836492518 .breadcrumb.jsx-836492518{border:1px solid red;}.breadcrum_nav.jsx-836492518{background-color:red;}ol.breadcrumb.jsx-836492518{margin-inline-end:0 !important;margin-bottom:0 !important;background-color:red !important;}.breadcrumb_item.jsx-836492518{background-color:yellow !important;}.breadcrumb_item.jsx-836492518:hover{background-color:yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teW5nYW4vRGVza3RvcC90b2RvX25leHRqcy9jb21wb25lbnRzL2JyZWFkY3J1bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRVcsQUFHMEMsQUFNTixBQUdBLEFBR1UsQUFLSSxBQUdYLHFCQWIxQixBQUdBLEdBV0EsR0FwQlksSUFZaUIsSUFLN0IsRUFoQmMsWUFDSSxTQVdnQixPQVZsQyx5QkFXQSIsImZpbGUiOiIvVXNlcnMvbXluZ2FuL0Rlc2t0b3AvdG9kb19uZXh0anMvY29tcG9uZW50cy9icmVhZGNydW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNsYXNzIEJyZWFkc2NydW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJIb21lU3VibWVudSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlcjtcbiAgICBzd2l0Y2ggKHBhdGhuYW1lKSB7XG4gICAgICBjYXNlIFwiL2Fib3V0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiIGFjdGl2ZT5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcIi9wcm9kdWN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiIGFjdGl2ZT5cbiAgICAgICAgICAgIFByb2R1Y3RcbiAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIi9jb250YWN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiIGFjdGl2ZT5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxuICAgICAgICApO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuICByZW5kZXJCcmVhZGNydW1iSXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFzUGF0aCB9ID0gdGhpcy5wcm9wcy5yb3V0ZXI7XG4gICAgc3dpdGNoIChhc1BhdGgpIHtcbiAgICAgIGNhc2UgXCIvdG9kb1wiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBjbGFzc05hbWU9XCJicmVhZGNydW1iX2l0ZW1cIiBhY3RpdmU+XG4gICAgICAgICAgICBUb2RvXG4gICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCIvc2VsZWN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJyZWFkY3J1bWJJdGVtIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfaXRlbVwiIGFjdGl2ZT5cbiAgICAgICAgICAgIFNlbGVjdFxuICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiL2hvbWUvOnBhZ2VcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJIb21lU3VibWVudSgpfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyByZXR1cm4gdGhpcy5yZW5kZXJIb21lU3VibWVudSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhc1BhdGggfSA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPEJyZWFkY3J1bWIgY2xhc3NOYW1lPVwiYnJlYWRjcnVtX25hdlwiPlxuICAgICAgICAgIHthc1BhdGggJiYgdGhpcy5yZW5kZXJCcmVhZGNydW1iSXRlbSgpfVxuICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5icmVhZGNydW1iIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJlYWRjcnVtX25hdiAuYnJlYWRjcnVtYiB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5icmVhZGNydW1fbmF2IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2wuYnJlYWRjcnVtYiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJlYWRjcnVtYl9pdGVtIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJlYWRjcnVtYl9pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQnJlYWRzY3J1bSk7XG4iXX0= */\n/*@ sourceURL=/Users/myngan/Desktop/todo_nextjs/components/breadcrum.js */"
      }));
    }
  }]);

  return Breadscrum;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Breadscrum));

/***/ })

})
//# sourceMappingURL=_app.js.3e8d65cd5e846fa58c96.hot-update.js.map