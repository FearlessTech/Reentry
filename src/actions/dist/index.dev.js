"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInAPI = signInAPI;
exports.getUserAuth = getUserAuth;
exports.signOutAPI = signOutAPI;
exports.postArticleAPI = postArticleAPI;
exports.getArticlesAPI = getArticlesAPI;
exports.getArticles = exports.setLoading = exports.setUser = void 0;

var _firebase = _interopRequireWildcard(require("../firebase"));

var _actionType = require("./actionType");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var setUser = function setUser(payload) {
  return {
    type: _actionType.SET_USER,
    user: payload
  };
};

exports.setUser = setUser;

var setLoading = function setLoading(status) {
  return {
    type: _actionType.SET_LOADING_STATUS,
    status: status
  };
};

exports.setLoading = setLoading;

var getArticles = function getArticles(payload) {
  return {
    type: _actionType.GET_ARTICLES,
    payload: payload
  };
};

exports.getArticles = getArticles;

function signInAPI() {
  return function (dispatch) {
    _firebase.auth.signInWithPopup(_firebase.provider).then(function (payload) {
      dispatch(setUser(payload.user));
    })["catch"](function (error) {
      return alert(error.message);
    });
  };
}

function getUserAuth() {
  return function (dispatch) {
    _firebase.auth.onAuthStateChanged(function _callee(user) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (user) {
                dispatch(setUser(user));
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  };
}

function signOutAPI() {
  return function (dispatch) {
    _firebase.auth.signOut().then(function () {
      dispatch(setUser(null));
    })["catch"](function (error) {
      console.log(error.message);
    });
  };
}

function postArticleAPI(payload) {
  return function (dispatch) {
    dispatch(setLoading(true));

    if (payload.image != '') {
      var upload = _firebase.storage.ref("images/".concat(payload.image.name)).put(payload.image);

      upload.on('state-changed', function (snapshot) {
        var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log("Progress: ".concat(progress, "%"));

        if (snapshot.state === 'RUNNING') {
          console.log("Progress: ".concat(progress, "%"));
        }
      }, function (error) {
        return console.log(error.code);
      }, function _callee2() {
        var downloadURL;
        return regeneratorRuntime.async(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return regeneratorRuntime.awrap(upload.snapshot.ref.getDownloadURL());

              case 2:
                downloadURL = _context2.sent;

                _firebase["default"].collection("articles").add({
                  actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL
                  },
                  video: payload.video,
                  sharedImg: downloadURL,
                  comments: 0,
                  description: payload.description
                });

                dispatch(setLoading(false));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        });
      });
    } else if (payload.video) {
      _firebase["default"].collection('articles').add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL
        },
        video: payload.video,
        sharedImg: '',
        comments: 0,
        description: payload.description
      });

      dispatch(setLoading(false));
    }
  };
}

function getArticlesAPI() {
  return function (dispatch) {
    var payload;

    _firebase["default"].collection('articles').orderBy("actor.date", "desc").onSnapshot(function (snapshot) {
      payload = snapshot.docs.map(function (doc) {
        return doc.data();
      });
      dispatch(getArticles(payload));
    });
  };
}