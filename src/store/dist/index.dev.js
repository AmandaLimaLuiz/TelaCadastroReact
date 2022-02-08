"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _usuarioReducer = _interopRequireDefault(require("./usuarioReducer"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'siteeventos',
  storage: _storage["default"]
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _usuarioReducer["default"]);
var store = (0, _redux.createStore)(persistedReducer);
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;