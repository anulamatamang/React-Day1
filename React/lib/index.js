"use strict";

var _client = _interopRequireDefault(require("react-dom/client"));

var _react = _interopRequireDefault(require("react"));

var _App = _interopRequireDefault(require("./components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Button from './components/Button';
// class HelloMessage extends React.Component {
//   render() {
//     return;
//     <>
//       <div>Hello {this.props.name}</div>;
//       <Button />
//     </>;
//   }
// }
var root = _client["default"].createRoot(document.getElementById('root'));

root.render( /*#__PURE__*/_react["default"].createElement(_App["default"], null)); // ReactDOM.render(
//   <HelloMessage name='Anu' />,
//   document.getElementById('hello-example')
// );
// root.render(<HelloMessage name='Anu' />);