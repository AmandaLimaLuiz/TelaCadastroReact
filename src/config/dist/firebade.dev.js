"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyDoamsYQoFDyMKpsmD0M1Wia-pHa42QCrY",
  authDomain: "eventos-4bde6.firebaseapp.com",
  projectId: "eventos-4bde6",
  storageBucket: "eventos-4bde6.appspot.com",
  messagingSenderId: "897157392797",
  appId: "1:897157392797:web:8b7679bb4ee8ef05a4e774"
};

var _default = _firebase["default"].initializeApp(firebaseConfig);

exports["default"] = _default;