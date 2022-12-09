"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.storage = exports.provider = exports.auth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBLmVhe7jVs9W2W3sWPUl5FCjy-CRdCTlg",
  authDomain: "mainereentrynetwork.firebaseapp.com",
  projectId: "mainereentrynetwork",
  storageBucket: "mainereentrynetwork.appspot.com",
  messagingSenderId: "390820952347",
  appId: "1:390820952347:web:fd93c9235c3cfdebeebbbe",
  measurementId: "G-VEDC1QVDR2"
}; // No need to change anything below this line

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var db = firebaseApp.firestore();
var auth = firebaseApp.auth();
exports.auth = auth;
var provider = new _firebase["default"].auth.GoogleAuthProvider();
exports.provider = provider;
var storage = firebaseApp.storage();
exports.storage = storage;
var _default = db;
exports["default"] = _default;