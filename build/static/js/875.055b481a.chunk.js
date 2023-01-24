"use strict";
(self.webpackChunkreentry_resources =
  self.webpackChunkreentry_resources || []).push([
  [875],
  {
    6150: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = r(4165),
        s = r(5861),
        a = r(5063);
      function i() {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, s.Z)(
          (0, t.Z)().mark(function e() {
            var n;
            return (0, t.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = new Promise(function (e, n) {
                        var r = a.I8.currentUser,
                          t = a.I8.onAuthStateChanged(function (n) {
                            n && (r = n), t(), e(r);
                          });
                      })),
                      (e.next = 3),
                      n
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    4875: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return z;
          },
        });
      var t,
        s = r(4165),
        a = r(5861),
        i = r(885),
        c = r(2791),
        o = r(2734),
        u = r(184),
        l = function (e) {
          var n,
            r = e.flag,
            t = e.results,
            s = e.search,
            a = crypto.randomUUID(),
            i = r
              ? ""
                  .concat(t.length, " results for ")
                  .concat(
                    null === (n = s.current) || void 0 === n ? void 0 : n.value
                  )
              : "People you may know";
          return (0, u.jsx)("h1", { children: i }, a);
        },
        p = function (e) {
          var n = e.users;
          return (0, u.jsx)("div", {
            className: "results",
            children: n
              ? n.map(function (e) {
                  return (0,
                  u.jsxs)("div", { className: "single-user", children: [(0, u.jsx)("div", { className: "pictute-wrapper", children: (0, u.jsx)(o.s, { source: e.photoURL }) }), (0, u.jsxs)("div", { className: "text-content", children: [(0, u.jsx)("div", { className: "name-wrapper", children: (0, u.jsx)("span", { className: "name", children: e.name }) }), (0, u.jsx)("div", { className: "bio-wrapper", children: (0, u.jsx)("span", { className: "bio", children: e.bio ? e.bio : "Hi There!" }) })] })] }, crypto.randomUUID());
                })
              : (0, u.jsx)("div", { children: "loading..." }),
          });
        },
        d = r(168),
        f = r(6444).ZP.div(
          t ||
            (t = (0, d.Z)([
              '\n  padding-top: calc(3rem - 5px);\n  border: 1px solid green;\n  background-color: #c1c1c1;\n  overflow: scroll;\n  .navbar {\n    * ::selection {\n      background-color: #ebebeb;\n      color: #077a7a;\n    }\n  }\n  &,\n  * {\n    box-sizing: border-box;\n    transition: 120ms ease-in-out;\n    font-family: "Inter", sans-serif !important;\n  }\n  * ::selection {\n    background-color: #077a7a;\n    color: #ffffff;\n  }\n  .wrapper {\n    width: 100%;\n    min-height: calc(100vh - 3rem + 3px);\n    max-width: 1300px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    .left-box {\n      flex: 1 2 300px;\n      padding: 0.6rem;\n      margin: 0 auto;\n      max-width: 300px;\n      .left-content {\n        box-shadow: 1px 1px 15px #046b6b28;\n        background-color: #ebebeb;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        .header-container {\n          & ::selection {\n            background-color: #ebebeb;\n            color: #077a7a;\n          }\n          &::before {\n            content: "";\n            position: absolute;\n            width: 20px;\n            height: 20px;\n            background-color: #077a7a;\n            bottom: -10px;\n            left: 0;\n            transform: rotateY("45deg");\n            clip-path: polygon(56% 0, 55% 100%, 3% 51%, 4% 0);\n          }\n          background-color: #077a7a;\n          width: calc(100% + 10px);\n          right: 0;\n          padding: 0.8rem 1rem;\n          display: flex;\n          transform: translateX(-10px);\n          justify-content: flex-start;\n          h1 {\n            font-weight: 500;\n            font-size: 1.8rem;\n            color: #ededed;\n            margin-left: 1rem;\n          }\n        }\n        .search-container {\n          display: flex;\n          padding: 1rem;\n          column-gap: 0.2rem;\n          .outline {\n            flex: 1 1 1;\n            width: 100%;\n            input {\n              width: 100%;\n              text-indent: 1rem;\n              font-size: 18px;\n              font-weight: 300;\n              &::placeholder {\n                font-size: 18px;\n                font-weight: 300;\n                color: #2e2e2e95;\n              }\n              height: 40px;\n              border: 2px solid #0087875d;\n              &:focus,\n              &:focus-visible,\n              &:focus-within {\n                outline: none;\n                transform: scale(1.01);\n              }\n            }\n          }\n          .search-btn {\n            width: 40px;\n            height: 40px;\n            flex: 0 0 40px;\n            background-color: #009999;\n            border: none;\n            &:hover {\n              background-color: #008484;\n            }\n            &:active {\n              background-color: #009b9b;\n              transform: scale(0.95);\n            }\n            .icon {\n              border: none;\n            }\n          }\n        }\n        .sections {\n          box-shadow: 0 0 5px #00000036;\n          position: relative;\n          max-height: 430px;\n          overflow-y: scroll;\n          .section {\n            width: 100%;\n            min-height: 100px;\n            display: flex;\n            flex-direction: column;\n            row-gap: 1rem;\n            margin-bottom: 2rem;\n            .sections-header-container {\n              background-color: #077a7a9e;\n              padding: 0.5rem;\n              & ::selection {\n                background-color: #ebebeb;\n                color: #077a7a;\n              }\n              h1 {\n                margin-left: 1rem;\n                color: #ffffff;\n                letter-spacing: 1.5px;\n                font-weight: 400;\n              }\n            }\n            .request-container {\n              background-color: #d2d2d2;\n              display: flex;\n              column-gap: 1rem;\n              justify-content: space-between;\n              align-items: center;\n              padding: 0 1rem;\n              .img-wrapper {\n                width: 40px;\n                img {\n                  transform: scale(1.2) translateY(2px);\n                  border: 2px solid #18939386;\n                  width: 100%;\n                  &:hover {\n                    transform: scale(1.5) translateY(2px);\n                  }\n                }\n              }\n              .middle {\n                display: flex;\n                flex: 1 1 0;\n                flex-wrap: wrap;\n                flex-direction: column;\n                position: relative;\n                &:hover {\n                  .popup {\n                    display: flex;\n                  }\n                }\n                .popup {\n                  bottom: 0;\n                  left: -50px;\n                }\n                .status {\n                  font-size: 12px;\n                  font-weight: 200;\n                }\n              }\n              .popup {\n                display: none;\n                background-color: #077a7a;\n                width: 180px;\n                height: 200px;\n                position: absolute;\n                z-index: 10;\n                padding: 0.5rem;\n                column-gap: 0.5rem;\n\n                .img-wrapper {\n                  flex: 1 0 45px;\n                  width: 40px;\n                  img {\n                    max-width: 40px;\n                  }\n                }\n\n                .content-wrapper {\n                  width: 100%;\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: flex-start;\n                  row-gap: 0.4rem;\n                  .name {\n                    color: #ededed;\n                    flex: 0 1 10px;\n                  }\n                  .bio {\n                    flex: 1 1 10px;\n                    font-size: 11px;\n                    color: #d2d2d2;\n                    font-weight: 200;\n                    &::selection {\n                      background-color: #ebebeb;\n                      color: #063939;\n                      font-weight: 600;\n                    }\n                  }\n                }\n              }\n\n              .name {\n                flex: 1 1 0;\n                font-size: 12px;\n                font-weight: 600;\n                color: #1c5c7e;\n                position: relative;\n                &:hover {\n                  .popup {\n                    display: flex;\n                  }\n                }\n                .popup {\n                  top: 0;\n                  left: -50px;\n                }\n              }\n\n              .options {\n                flex: 0 0 40px;\n                display: flex;\n                justify-content: space-between;\n                .icon {\n                  transition: 50ms ease-in-out;\n                  width: 18px;\n                  height: 18px;\n                  &:hover {\n                    transform: scale(1.05);\n                    opacity: 90%;\n                  }\n                  &:active {\n                    transform: scale(0.98);\n                  }\n                  &.icon-reject {\n                    background-color: white;\n                    color: #009999;\n                    &:hover {\n                      border: 0.2px solid #009999;\n                    }\n                  }\n                  &.icon-accept {\n                    background-color: #009999;\n                    color: white;\n                    &:hover {\n                      border: 0.2px solid #ffffff;\n                    }\n                  }\n                }\n\n                &.received {\n                  justify-content: flex-end;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    .main-panel {\n      flex: 6 1 300px;\n      padding: 0.6rem;\n      .main-content {\n        box-shadow: 1px 1px 15px #046b6b28;\n        background-color: #ebebeb;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        row-gap: 1rem;\n        .header-container {\n          & ::selection {\n            background-color: #ebebeb;\n            color: #077a7a;\n          }\n          &::before {\n            content: "";\n            position: absolute;\n            width: 20px;\n            height: 20px;\n            background-color: #077a7a;\n            bottom: -10px;\n            left: 0;\n            transform: rotateY("45deg");\n            clip-path: polygon(56% 0, 55% 100%, 3% 51%, 4% 0);\n          }\n          background-color: #077a7a;\n          width: calc(100% + 10px);\n          right: 0;\n          padding: 0.8rem 1rem;\n          display: flex;\n          transform: translateX(-10px);\n          justify-content: flex-start;\n          h1 {\n            font-weight: 500;\n            font-size: 1.8rem;\n            color: #ededed;\n            margin-left: 1rem;\n          }\n        }\n        .content {\n          display: flex;\n          flex-direction: column;\n          row-gap: 1rem;\n          .filters {\n            min-height: 60px;\n            flex: 1 1 1;\n            display: flex;\n            padding: 0.5rem;\n            column-gap: 0.5rem;\n            row-gap: 0.5rem;\n            flex-wrap: wrap;\n\n            .filter {\n              flex: 1 1 19%;\n              max-width: 300px;\n              margin: 0 auto;\n              background-color: #d2d2d2;\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n              padding: 0 0.5rem;\n              .filter-icon-wrapper {\n                width: 40px;\n                height: 40px;\n                display: grid;\n                place-items: center;\n                & > * {\n                  color: #1c5c7e;\n                }\n              }\n              .filter-name {\n                color: #1c5c7e;\n                font-weight: 500;\n                margin: 0 auto;\n              }\n            }\n          }\n          .results {\n            flex: 1 1 1;\n            display: flex;\n            flex-wrap: wrap;\n            column-gap: 0.5rem;\n            row-gap: 0.5rem;\n            padding: 0.5rem;\n            margin-bottom: 50px;\n            .single-user {\n              flex: 1 1 400px;\n              box-shadow: 0 0 5px #2a2a2a80;\n              display: flex;\n              padding: 0.4rem 1rem;\n              column-gap: 1rem;\n              min-height: 100px;\n              .pictute-wrapper {\n                flex: 1 0 1;\n                width: 100px;\n                img {\n                  width: 100%;\n                }\n              }\n              .text-content {\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n                row-gap: 0.5rem;\n                .name-wrapper {\n                  .name {\n                    color: #1c5c7e;\n                    font-weight: 600;\n                  }\n                }\n                .bio-wrapper {\n                  font-size: 14px;\n                  font-weight: 300;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',
            ]))
        ),
        h = r(7762),
        x = r(5063),
        m = (function () {
          var e = (0, a.Z)(
            (0, s.Z)().mark(function e(n, r) {
              var t;
              return (0, s.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        x.db.collection("users").where(n, "==", r).get()
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", t.docs[0].data());
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        v = (function () {
          var e = (0, a.Z)(
            (0, s.Z)().mark(function e(n) {
              var r, t, a, i, c, o;
              return (0, s.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (r = []), (e.next = 4), m("uid", n.uid)
                        );
                      case 4:
                        (t = e.sent),
                          (a = (0, h.Z)(t.sent_requests)),
                          (e.prev = 6),
                          a.s();
                      case 8:
                        if ((i = a.n()).done) {
                          e.next = 16;
                          break;
                        }
                        return (c = i.value), (e.next = 12), m("email", c);
                      case 12:
                        (o = e.sent), r.push(o);
                      case 14:
                        e.next = 8;
                        break;
                      case 16:
                        e.next = 21;
                        break;
                      case 18:
                        (e.prev = 18), (e.t0 = e.catch(6)), a.e(e.t0);
                      case 21:
                        return (e.prev = 21), a.f(), e.finish(21);
                      case 24:
                        return e.abrupt("return", r);
                      case 27:
                        (e.prev = 27),
                          (e.t1 = e.catch(0)),
                          console.log(e.t1.message);
                      case 30:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [0, 27],
                  [6, 18, 21, 24],
                ]
              );
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        g = (function () {
          var e = (0, a.Z)(
            (0, s.Z)().mark(function e(n) {
              var r, t, a, i, c, o;
              return (0, s.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (r = []), (e.next = 4), m("uid", n.uid)
                        );
                      case 4:
                        (t = e.sent),
                          (a = (0, h.Z)(t.received_requests)),
                          (e.prev = 6),
                          a.s();
                      case 8:
                        if ((i = a.n()).done) {
                          e.next = 16;
                          break;
                        }
                        return (c = i.value), (e.next = 12), m("email", c);
                      case 12:
                        (o = e.sent), r.push(o);
                      case 14:
                        e.next = 8;
                        break;
                      case 16:
                        e.next = 21;
                        break;
                      case 18:
                        (e.prev = 18), (e.t0 = e.catch(6)), a.e(e.t0);
                      case 21:
                        return (e.prev = 21), a.f(), e.finish(21);
                      case 24:
                        return e.abrupt("return", r);
                      case 27:
                        (e.prev = 27),
                          (e.t1 = e.catch(0)),
                          console.log(e.t1.message);
                      case 30:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [0, 27],
                  [6, 18, 21, 24],
                ]
              );
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      var w = r(2982),
        b = r(5671),
        y = r(3144),
        j = r(6150),
        Z = (function () {
          function e() {
            (0, b.Z)(this, e),
              (this.oncourse = !1),
              (this.currentUser = null),
              (this.currentUserQuery = null),
              (this.requestedUserQuery = null);
          }
          return (
            (0, y.Z)(e, [
              {
                key: "defineCurrentUser",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e() {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.currentUser) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (e.next = 4), (0, j.Z)();
                              case 4:
                                (this.currentUser = e.sent),
                                  this.defineCurrentUserQuery();
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "defineCurrentUserQuery",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e() {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.currentUserQuery = x.ZP.collection(
                                  "users"
                                ).where("uid", "==", this.currentUser.uid);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "defineRequestedUser",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e(n) {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.defineRequestedUserQuery(n)
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "defineRequestedUserQuery",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e(n) {
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.requestedUserQuery =
                                  x.ZP.collection("users").doc(n);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getElm",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e(n) {
                      return (0, s.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), n.get();
                            case 2:
                              return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getData",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e(n) {
                      return (0, s.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", n.data());
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getElementFromQuery",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e(n) {
                      var r;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.getElm(n);
                              case 2:
                                return (r = e.sent), e.abrupt("return", r);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getFirstElementFromQuery",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e(n) {
                      var r;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.getElm(n);
                              case 2:
                                return (
                                  (r = e.sent), e.abrupt("return", r.docs[0])
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "reset",
                value: function () {
                  this.requestedUserQuery = null;
                },
              },
              {
                key: "cancelRequest",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e() {
                      var n, r, t, a, i, c;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.oncourse) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (this.oncourse = !0),
                                  (e.next = 5),
                                  this.getFirstElementFromQuery(
                                    this.currentUserQuery
                                  )
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  (e.next = 8),
                                  this.getElementFromQuery(
                                    this.requestedUserQuery
                                  )
                                );
                              case 8:
                                return (
                                  (r = e.sent), (e.next = 11), this.getData(n)
                                );
                              case 11:
                                return (
                                  (t = e.sent), (e.next = 14), this.getData(r)
                                );
                              case 14:
                                return (
                                  (a = e.sent),
                                  (i = t.sent_requests.filter(function (e) {
                                    return e !== a.email;
                                  })),
                                  (c = a.received_requests.filter(function (e) {
                                    return e != t.email;
                                  })),
                                  (e.next = 19),
                                  this.requestedUserQuery.update({
                                    received_requests: c,
                                  })
                                );
                              case 19:
                                return (
                                  (e.next = 21),
                                  n.ref.update({ sent_requests: i })
                                );
                              case 21:
                                this.oncourse = !1;
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "acceptRequest",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e() {
                      var n, r, t, a, i, c, o, u;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.oncourse) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (this.oncourse = !0),
                                  (e.next = 5),
                                  this.getFirstElementFromQuery(
                                    this.currentUserQuery
                                  )
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  (e.next = 8),
                                  this.getElementFromQuery(
                                    this.requestedUserQuery
                                  )
                                );
                              case 8:
                                return (
                                  (r = e.sent), (e.next = 11), this.getData(n)
                                );
                              case 11:
                                return (
                                  (t = e.sent), (e.next = 14), this.getData(r)
                                );
                              case 14:
                                return (
                                  (a = e.sent),
                                  (i = (0, w.Z)(t.connections)).push(a.email),
                                  (c = (0, w.Z)(a.connections)).push(t.email),
                                  (o = a.sent_requests.filter(function (e) {
                                    return e !== t.email;
                                  })),
                                  (u = t.received_requests.filter(function (e) {
                                    return e != a.email;
                                  })),
                                  (e.next = 23),
                                  this.requestedUserQuery.update({
                                    sent_requests: o,
                                    connections: c,
                                  })
                                );
                              case 23:
                                return (
                                  (e.next = 25),
                                  n.ref.update({
                                    received_requests: u,
                                    connections: i,
                                  })
                                );
                              case 25:
                                this.oncourse = !1;
                              case 26:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "rejectRequest",
                value: (function () {
                  var e = (0, a.Z)(
                    (0, s.Z)().mark(function e() {
                      var n, r, t, a, i, c;
                      return (0, s.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.oncourse) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (this.oncourse = !0),
                                  (e.next = 5),
                                  this.getFirstElementFromQuery(
                                    this.currentUserQuery
                                  )
                                );
                              case 5:
                                return (
                                  (n = e.sent),
                                  (e.next = 8),
                                  this.getElementFromQuery(
                                    this.requestedUserQuery
                                  )
                                );
                              case 8:
                                return (
                                  (r = e.sent), (e.next = 11), this.getData(n)
                                );
                              case 11:
                                return (
                                  (t = e.sent), (e.next = 14), this.getData(r)
                                );
                              case 14:
                                return (
                                  (a = e.sent),
                                  (i = a.sent_requests.filter(function (e) {
                                    return e !== t.email;
                                  })),
                                  (c = t.received_requests.filter(function (e) {
                                    return e != a.email;
                                  })),
                                  (e.next = 19),
                                  this.requestedUserQuery.update({
                                    sent_requests: i,
                                  })
                                );
                              case 19:
                                return (
                                  (e.next = 21),
                                  n.ref.update({ received_requests: c })
                                );
                              case 21:
                                this.oncourse = !1;
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        k = new Z();
      function N(e) {
        return U.apply(this, arguments);
      }
      function U() {
        return (U = (0, a.Z)(
          (0, s.Z)().mark(function e(n) {
            return (0, s.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), k.defineCurrentUser();
                  case 2:
                    return (e.next = 4), k.defineRequestedUser(n);
                  case 4:
                    return (e.next = 6), k.rejectRequest();
                  case 6:
                    return k.reset(), e.abrupt("return", null);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function q(e) {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = (0, a.Z)(
          (0, s.Z)().mark(function e(n) {
            return (0, s.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), k.defineCurrentUser();
                  case 2:
                    return (e.next = 4), k.defineRequestedUser(n);
                  case 4:
                    return (e.next = 6), k.acceptRequest();
                  case 6:
                    return k.reset(), e.abrupt("return", null);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function S(e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = (0, a.Z)(
          (0, s.Z)().mark(function e(n) {
            return (0, s.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), k.defineCurrentUser();
                  case 2:
                    return (e.next = 4), k.defineRequestedUser(n);
                  case 4:
                    return (e.next = 6), k.cancelRequest();
                  case 6:
                    return k.reset(), e.abrupt("return", null);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function E(e) {
        try {
          return x.db
            .collection("users")
            .where("uid", "!=", e.uid)
            .get()
            .then(function (e) {
              var n = e.docs.map(function (e) {
                return e.data();
              });
              return n;
            });
        } catch (n) {
          console.log(n.message);
        }
      }
      function C(e, n) {
        try {
          return x.db
            .collection("users")
            .where("uid", "!=", n.uid)
            .where("keywords", "array-contains-any", e)
            .get()
            .then(function (e) {
              var n = e.docs.map(function (e) {
                return e.data();
              });
              return n;
            });
        } catch (r) {
          console.log(r.message);
        }
      }
      var F = r(71),
        z = function (e) {
          var n,
            r = (0, c.useRef)(),
            t = (0, c.useState)(null),
            o = (0, i.Z)(t, 2),
            d = (o[0], o[1], (0, c.useState)(!1)),
            h = (0, i.Z)(d, 2),
            m = h[0],
            w = h[1],
            b = (function () {
              var e = (0, c.useState)(null),
                n = (0, i.Z)(e, 2),
                r = n[0],
                t = n[1],
                o = (0, c.useState)(null),
                u = (0, i.Z)(o, 2),
                l = u[0],
                p = u[1],
                d = x.I8.onAuthStateChanged(function (e) {
                  e && t(e), d();
                });
              return (
                (0, c.useEffect)(
                  function () {
                    if (!r) return l;
                    (0, a.Z)(
                      (0, s.Z)().mark(function e() {
                        var n;
                        return (0, s.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), g(r);
                              case 2:
                                (n = e.sent), p(n);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )();
                  },
                  [r]
                ),
                l
              );
            })(),
            y = (function () {
              var e = (0, c.useState)(null),
                n = (0, i.Z)(e, 2),
                r = n[0],
                t = n[1],
                o = (0, c.useState)(null),
                u = (0, i.Z)(o, 2),
                l = u[0],
                p = u[1],
                d = x.I8.onAuthStateChanged(function (e) {
                  e && t(e), d();
                });
              return (
                (0, c.useEffect)(
                  function () {
                    if (!r) return l;
                    (0, a.Z)(
                      (0, s.Z)().mark(function e() {
                        var n;
                        return (0, s.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), v(r);
                              case 2:
                                (n = e.sent), p(n);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )();
                  },
                  [r]
                ),
                l
              );
            })(),
            j = (function (e, n, r) {
              var t = (0, c.useState)(null),
                o = (0, i.Z)(t, 2),
                u = o[0],
                l = o[1],
                p = (0, c.useState)(null),
                d = (0, i.Z)(p, 2),
                f = d[0],
                h = d[1],
                m = x.I8.onAuthStateChanged(function (e) {
                  e && l(e), m();
                });
              return (
                (0, c.useEffect)(
                  function () {
                    if (!u) return f;
                    if (r) {
                      if (!n || "string" !== typeof n) return f;
                      var e = (function (e) {
                        var n = e.split(" ");
                        return n === e ? [e] : n;
                      })(n);
                      (0, a.Z)(
                        (0, s.Z)().mark(function n() {
                          var r;
                          return (0, s.Z)().wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (n.next = 2), C(e, u);
                                case 2:
                                  (r = n.sent), h(r);
                                case 4:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      )();
                    } else
                      (0, a.Z)(
                        (0, s.Z)().mark(function e() {
                          var n;
                          return (0, s.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), E(u);
                                case 2:
                                  (n = e.sent), h(n);
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )();
                  },
                  [u, r]
                ),
                f
              );
            })(
              0,
              null === (n = r.current) || void 0 === n ? void 0 : n.value,
              m
            );
          return (0, u.jsx)(f, {
            children: (0, u.jsxs)("div", {
              className: "wrapper",
              children: [
                (0, u.jsx)("div", {
                  className: "left-box",
                  children: (0, u.jsxs)("div", {
                    className: "left-content",
                    children: [
                      (0, u.jsx)("div", {
                        className: "header-container",
                        children: (0, u.jsx)("h1", {
                          children: "Users Network",
                        }),
                      }),
                      (0, u.jsxs)("div", {
                        className: "search-container",
                        children: [
                          (0, u.jsx)("div", {
                            className: "outline",
                            children: (0, u.jsx)("input", {
                              type: "text",
                              placeholder: "Search for users",
                              ref: r,
                            }),
                          }),
                          (0, u.jsx)("button", {
                            className: "search-btn",
                            onClick: function (e) {
                              w(!0);
                            },
                            children: (0, u.jsx)(F.eaK, {
                              className: "icon",
                              size: 20,
                              color: "#d9d9d9",
                            }),
                          }),
                        ],
                      }),
                      (0, u.jsxs)("div", {
                        className: "sections",
                        children: [
                          b &&
                            (0, u.jsxs)("section", {
                              className: "section",
                              children: [
                                (0, u.jsx)("div", {
                                  className: "sections-header-container",
                                  children: (0, u.jsx)("h1", {
                                    children: "Requests",
                                  }),
                                }),
                                b.map(function (e, n) {
                                  return (0, u.jsxs)(
                                    "div",
                                    {
                                      className: "request-container",
                                      children: [
                                        (0, u.jsx)("div", {
                                          className: "img-wrapper",
                                          children: (0, u.jsx)("img", {
                                            src:
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.photoURL) ||
                                              "https://via.placeholder.com/150",
                                            alt: "",
                                          }),
                                        }),
                                        (0, u.jsxs)("span", {
                                          className: "name",
                                          children: [
                                            e.name,
                                            (0, u.jsxs)("div", {
                                              className: "popup",
                                              children: [
                                                (0, u.jsx)("div", {
                                                  className: "img-wrapper",
                                                  children: (0, u.jsx)("img", {
                                                    src:
                                                      (null === e ||
                                                      void 0 === e
                                                        ? void 0
                                                        : e.photoURL) ||
                                                      "https://via.placeholder.com/150",
                                                    alt: "",
                                                  }),
                                                }),
                                                (0, u.jsxs)("div", {
                                                  className: "content-wrapper",
                                                  children: [
                                                    (0, u.jsx)("div", {
                                                      className: "name",
                                                      children: e.name,
                                                    }),
                                                    (0, u.jsx)("div", {
                                                      className: "bio",
                                                      children: e.bio
                                                        ? e.bio
                                                        : "Hello There!",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, u.jsxs)("div", {
                                          className: "options",
                                          children: [
                                            (0, u.jsx)(F.jI1, {
                                              className: "icon icon-accept",
                                              onClick: (0, a.Z)(
                                                (0, s.Z)().mark(function n() {
                                                  return (0, s.Z)().wrap(
                                                    function (n) {
                                                      for (;;)
                                                        switch (
                                                          (n.prev = n.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (n.next = 2),
                                                              q(e.email)
                                                            );
                                                          case 2:
                                                          case "end":
                                                            return n.stop();
                                                        }
                                                    },
                                                    n
                                                  );
                                                })
                                              ),
                                            }),
                                            (0, u.jsx)(F.bjh, {
                                              className: "icon icon-reject",
                                              onClick: (0, a.Z)(
                                                (0, s.Z)().mark(function n() {
                                                  return (0, s.Z)().wrap(
                                                    function (n) {
                                                      for (;;)
                                                        switch (
                                                          (n.prev = n.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (n.next = 2),
                                                              N(e.email)
                                                            );
                                                          case 2:
                                                          case "end":
                                                            return n.stop();
                                                        }
                                                    },
                                                    n
                                                  );
                                                })
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    "".concat(e.name, "-").concat(n)
                                  );
                                }),
                              ],
                            }),
                          y
                            ? (0, u.jsxs)("section", {
                                className: "section",
                                children: [
                                  (0, u.jsx)("div", {
                                    className: "sections-header-container",
                                    children: (0, u.jsx)("h1", {
                                      children: "Pending",
                                    }),
                                  }),
                                  y.map(function (e, n) {
                                    return (0, u.jsxs)(
                                      "div",
                                      {
                                        className: "request-container",
                                        children: [
                                          (0, u.jsx)("div", {
                                            className: "img-wrapper",
                                            children: (0, u.jsx)("img", {
                                              src:
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.photoURL) ||
                                                "https://via.placeholder.com/150",
                                              alt: "",
                                            }),
                                          }),
                                          (0, u.jsxs)("div", {
                                            className: "middle",
                                            children: [
                                              (0, u.jsxs)("div", {
                                                className: "popup",
                                                children: [
                                                  (0, u.jsx)("div", {
                                                    className: "img-wrapper",
                                                    children: (0, u.jsx)(
                                                      "img",
                                                      {
                                                        src:
                                                          (null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.photoURL) ||
                                                          "https://via.placeholder.com/150",
                                                        alt: "",
                                                      }
                                                    ),
                                                  }),
                                                  (0, u.jsxs)("div", {
                                                    className:
                                                      "content-wrapper",
                                                    children: [
                                                      (0, u.jsx)("div", {
                                                        className: "name",
                                                        children: e.name,
                                                      }),
                                                      (0, u.jsx)("div", {
                                                        className: "bio",
                                                        children: e.bio
                                                          ? e.bio
                                                          : "Hello there!",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, u.jsx)("span", {
                                                className: "name",
                                                children: e.name,
                                              }),
                                              (0, u.jsx)("span", {
                                                className: "status",
                                                children: "pending",
                                              }),
                                            ],
                                          }),
                                          (0, u.jsx)("div", {
                                            className: "options received",
                                            children: (0, u.jsx)(F.bjh, {
                                              className: "icon icon-reject",
                                              onClick: (0, a.Z)(
                                                (0, s.Z)().mark(function n() {
                                                  return (0, s.Z)().wrap(
                                                    function (n) {
                                                      for (;;)
                                                        switch (
                                                          (n.prev = n.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (n.next = 2),
                                                              S(e.email)
                                                            );
                                                          case 2:
                                                          case "end":
                                                            return n.stop();
                                                        }
                                                    },
                                                    n
                                                  );
                                                })
                                              ),
                                            }),
                                          }),
                                        ],
                                      },
                                      "".concat(e.name, "-").concat(n)
                                    );
                                  }),
                                ],
                              })
                            : (0, u.jsx)("div", {
                                children: (0, u.jsx)("p", {
                                  children: "no results were found.",
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, u.jsx)("main", {
                  className: "main-panel",
                  children: (0, u.jsxs)("div", {
                    className: "main-content",
                    children: [
                      (0, u.jsx)("div", {
                        className: "header-container",
                        children: (0, u.jsx)(l, {
                          flag: m,
                          results: j,
                          search: r,
                        }),
                      }),
                      (0, u.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, u.jsxs)("div", {
                            className: "filters",
                            children: [
                              (0, u.jsxs)("div", {
                                className: "filter",
                                children: [
                                  (0, u.jsx)("div", {
                                    className: "filter-icon-wrapper",
                                    children: (0, u.jsx)(F.FpS, { size: 20 }),
                                  }),
                                  (0, u.jsx)("span", {
                                    className: "filter-name",
                                    children: "lorem ipsum",
                                  }),
                                ],
                              }),
                              (0, u.jsxs)("div", {
                                className: "filter",
                                children: [
                                  (0, u.jsx)("div", {
                                    className: "filter-icon-wrapper",
                                    children: (0, u.jsx)(F.FpS, { size: 20 }),
                                  }),
                                  (0, u.jsx)("span", {
                                    className: "filter-name",
                                    children: "lorem ipsum",
                                  }),
                                ],
                              }),
                              (0, u.jsxs)("div", {
                                className: "filter",
                                children: [
                                  (0, u.jsx)("div", {
                                    className: "filter-icon-wrapper",
                                    children: (0, u.jsx)(F.FpS, { size: 20 }),
                                  }),
                                  (0, u.jsx)("span", {
                                    className: "filter-name",
                                    children: "lorem ipsum",
                                  }),
                                ],
                              }),
                              (0, u.jsxs)("div", {
                                className: "filter",
                                children: [
                                  (0, u.jsx)("div", {
                                    className: "filter-icon-wrapper",
                                    children: (0, u.jsx)(F.FpS, { size: 20 }),
                                  }),
                                  (0, u.jsx)("span", {
                                    className: "filter-name",
                                    children: "lorem ipsum",
                                  }),
                                ],
                              }),
                              (0, u.jsxs)("div", {
                                className: "filter",
                                children: [
                                  (0, u.jsx)("div", {
                                    className: "filter-icon-wrapper",
                                    children: (0, u.jsx)(F.FpS, { size: 20 }),
                                  }),
                                  (0, u.jsx)("span", {
                                    className: "filter-name",
                                    children: "lorem ipsum",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, u.jsx)(p, { users: j }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
    2734: function (e, n, r) {
      r.d(n, {
        s: function () {
          return s;
        },
      });
      var t = r(184);
      function s(e, n) {
        var r = e.source;
        return (0, t.jsx)("img", {
          src: "/images/user.svg",
          alt: "user image",
          srcSet: r ? "".concat(r, ", /images/user.svg") : "/images/user.svg",
          onError: function (e) {
            e.target.removeAttribute("srcset"), (e.target.onError = null);
          },
        });
      }
    },
    5671: function (e, n, r) {
      function t(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      r.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    3144: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = r(9142);
      function s(e, n) {
        for (var r = 0; r < n.length; r++) {
          var s = n[r];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, (0, t.Z)(s.key), s);
        }
      }
      function a(e, n, r) {
        return (
          n && s(e.prototype, n),
          r && s(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
    },
    2982: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = r(907);
      var s = r(181);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, t.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, s.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
]);
//# sourceMappingURL=875.055b481a.chunk.js.map
