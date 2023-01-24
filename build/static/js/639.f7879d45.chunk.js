"use strict";
(self.webpackChunkreentry_resources =
  self.webpackChunkreentry_resources || []).push([
  [639],
  {
    1639: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return me;
          },
        });
      var r,
        i,
        o,
        a,
        s,
        c,
        l,
        d,
        u,
        p,
        x,
        m,
        h,
        g,
        f,
        b,
        v,
        j,
        w,
        Z,
        y,
        k,
        P,
        C,
        z,
        S,
        N,
        I,
        M,
        U,
        R = t(9598),
        _ = t(364),
        T = t(1523),
        F = t(8820),
        E = t(9126),
        A = t(168),
        B = t(6444),
        L = B.ZP.div(
          r ||
            (r = (0, A.Z)(["\n  grid-area: leftside;\n  margin-left: 20px;\n"]))
        ),
        D = B.ZP.div(
          i ||
            (i = (0, A.Z)([
              "\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #ffffff;\n  border-radius: 5px;\n  transition: box-shadow 83ms;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n",
            ]))
        ),
        V = B.ZP.div(
          o ||
            (o = (0, A.Z)([
              "\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 12px 12px 16px;\n  word-wrap: break-word;\n  word-break: break-word;\n",
            ]))
        ),
        W = B.ZP.div(
          a ||
            (a = (0, A.Z)([
              '\n  background: url("/images/card-bg.svg");\n  background-position: center;\n  background-size: 462px;\n  height: 54px;\n  margin: -12px -12px 0;\n',
            ]))
        ),
        H = B.ZP.div(
          s ||
            (s = (0, A.Z)([
              "\n  img {\n    box-shadow: none;\n    width: 72px;\n    height: 72px;\n    box-sizing: border-box;\n    background-clip: content-box;\n    background-color: #ffffff;\n    background-position: center;\n    background-size: 60%;\n    background-repeat: no-repeat;\n    border: 2px solid #ffffff;\n    margin: -38px auto 12px;\n    border-radius: 50%;\n  }\n",
            ]))
        ),
        $ = B.ZP.div(
          c ||
            (c = (0, A.Z)([
              "\n  color: #0a66c2;\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 400;\n",
            ]))
        ),
        O = B.ZP.div(
          l ||
            (l = (0, A.Z)([
              "\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding-top: 12px;\n  padding-bottom: 12px;\n  & > nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 12px;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.08);\n    }\n    div {\n      a {\n        text-decoration: none;\n      }\n      display: flex;\n      flex-direction: column;\n      text-align: left;\n      span {\n        font-size: 12px;\n        line-height: 1.333;\n        &:first-child {\n          color: rgba(0, 0, 0, 0.6);\n        }\n        &:nth-child(2) {\n          color: rgba(0, 0, 0, 1);\n        }\n      }\n    }\n  }\n\n  svg {\n    color: rgba(0, 0, 0, 1);\n  }\n",
            ]))
        ),
        K = B.ZP.a(
          d ||
            (d = (0, A.Z)([
              "\n  border-color: rgba(0, 0, 0, 0.8);\n  text-align: left;\n  padding: 12px;\n  font-size: 12px;\n  display: block;\n  span {\n    display: flex;\n    align-items: center;\n    color: rgba(0, 0, 0, 1);\n    svg {\n      color: rgba(0, 0, 0, 0.6);\n    }\n  }\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n  }\n",
            ]))
        ),
        Y = (0, B.ZP)(D)(
          u ||
            (u = (0, A.Z)([
              "\n  padding: 8px 0 0;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  a {\n    color: #000000;\n    padding: 4px 12px;\n    font-size: 12px;\n    &:hover {\n      color: #0a66c2;\n    }\n    span {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n    &:last-child {\n      color: rgba(0, 0, 0, 0.6);\n      text-decoration: none;\n      border-top: 1px solid #d6cec2;\n      padding: 12px;\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.08);\n      }\n    }\n  }\n",
            ]))
        ),
        q = t(2734),
        G = t(184),
        Q = (0, _.$j)(function (n) {
          return { user: n.userState.user };
        })(function (n) {
          return (0,
          G.jsxs)(L, { children: [(0, G.jsxs)(D, { children: [(0, G.jsxs)(V, { children: [(0, G.jsx)(W, {}), (0, G.jsxs)(T.rU, { to: "/profile", className: "welcome", children: [(0, G.jsx)(H, { children: n.user && (0, G.jsx)(q.s, { source: n.user.photoURL }) }), (0, G.jsxs)("h3", { children: ["Welcome, ", n.user ? n.user.displayName : "there", "!"] })] }), (0, G.jsx)("a", { children: (0, G.jsx)($, {}) })] }), (0, G.jsx)(O, { children: (0, G.jsxs)("nav", { children: [(0, G.jsxs)("div", { children: [(0, G.jsx)(T.rU, { to: "/notifications", children: (0, G.jsx)("span", { children: "Notifications" }) }), (0, G.jsx)(T.rU, { to: "/network", children: (0, G.jsx)("span", { children: "Network" }) }), (0, G.jsx)(T.rU, { to: "/functionalities", children: (0, G.jsx)("span", { children: "Welcome" }) })] }), (0, G.jsx)(F.vM4, {})] }) }), (0, G.jsx)(K, { children: (0, G.jsxs)("span", { children: [(0, G.jsx)(E.M3k, {}), "My Items"] }) })] }), (0, G.jsxs)(Y, { children: [(0, G.jsx)("a", { children: (0, G.jsx)("span", { children: "Groups" }) }), (0, G.jsx)("a", { children: (0, G.jsxs)("span", { children: ["Events", (0, G.jsx)(F.Lfi, {})] }) }), (0, G.jsx)("a", { children: (0, G.jsx)("span", { children: "Follow Hashtags" }) }), (0, G.jsx)("a", { children: (0, G.jsx)("span", { children: "Discover more" }) })] })] });
        }),
        J = t(885),
        X = t(2791),
        nn = t(6469),
        en = t(4165),
        tn = t(5861),
        rn = t(5352),
        on = t(6355),
        an = t(5063),
        sn = B.ZP.div(
          p ||
            (p = (0, A.Z)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  color: #000000;\n  background-color: rgba(0, 0, 0, 0.8);\n  animation: fadeIn 0.3s;\n",
            ]))
        ),
        cn = B.ZP.div(
          x ||
            (x = (0, A.Z)([
              "\n  width: 100%;\n  max-width: 552px;\n  background-color: whitesmoke;\n  overflow: initial;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  top: 32px;\n  margin: 0 auto;\n  .preview {\n    padding: 0.5rem 2rem;\n    .img-container {\n      width: 250px;\n      margin: auto;\n      max-width: 100%;\n      flex: 1 1 300px;\n      text-align: center;\n      img {\n        width: 100%;\n      }\n      &:hover {\n        transform: scale(1.3);\n      }\n    }\n    .vid-container {\n      flex: 1 1 200px;\n      margin: auto;\n      max-width: 250px;\n      &:hover {\n        transform: scale(1.3);\n      }\n    }\n  }\n",
            ]))
        ),
        ln = B.ZP.div(
          m ||
            (m = (0, A.Z)([
              "\n  padding: 5px 25px;\n  border-bottom: 1px solid #00000026;\n  font-size: 16px;\n  line-height: 1.5;\n  color: whitesmoke;\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #ffffff4d;\n  background-color: #077a7a;\n  border-radius: 5px;\n\n  button {\n    height: 30px;\n    width: 30px;\n    min-width: auto;\n    display: flex;\n    color: #077a7a;\n    background: whitesmoke;\n    border-radius: 7px;\n    border-color: lightgray;\n    &:hover {\n      background: lightgray;\n    }\n\n    img {\n      pointer-events: none;\n    }\n  }\n",
            ]))
        ),
        dn = B.ZP.div(
          h ||
            (h = (0, A.Z)([
              "\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: max-content;\n  overflow-y: auto;\n  vertical-align: baseline;\n  background: transparent;\n  padding: 8px 12px;\n",
            ]))
        ),
        un = B.ZP.div(
          g ||
            (g = (0, A.Z)([
              "\n  display: flex;\n  align-items: center;\n  padding: 5px;\n\n  svg,\n  img {\n    width: 48px;\n    height: 48px;\n    background-clip: content-box;\n    border: 2px solid transparent;\n    border-radius: 50%;\n    margin-right: 5px;\n  }\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n",
            ]))
        ),
        pn = B.ZP.div(
          f ||
            (f = (0, A.Z)([
              "\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5rem 2rem 1rem;\n  .files-container {\n    display: flex;\n  }\n",
            ]))
        ),
        xn = B.ZP.button(
          b ||
            (b = (0, A.Z)([
              "\n  display: flex;\n  margin-right: 5px;\n  margin-left: 5px;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  min-width: auto;\n  color: whitesmoke;\n  background: #009999;\n  border-radius: 7px;\n  border-color: #009999;\n  &:hover {\n    background: #077a7a;\n  }\n",
            ]))
        ),
        mn = B.ZP.div(
          v ||
            (v = (0, A.Z)([
              "\n  align-items: center;\n  display: flex;\n  padding-right: 8px;\n\n  ",
              " {\n    width: 40px;\n  }\n",
            ])),
          xn
        ),
        hn = B.ZP.button(
          j ||
            (j = (0, A.Z)([
              "\n  min-width: 60px;\n  border-radius: 7px;\n  border-color: lightgray;\n  padding-left: 16px;\n  padding-right: 16px;\n  font-weight: 600;\n  background: ",
              ";\n  color: ",
              ";\n\n  &:hover {\n    background: ",
              ";\n    cursor: ",
              ";\n    outline: none !important;\n  }\n",
            ])),
          function (n) {
            return n.disabled ? "lightgray" : "#077a7a";
          },
          function (n) {
            return n.disabled ? "rgba(1,1,1,0.2)" : "whitesmoke";
          },
          function (n) {
            return n.disabled ? "lightgray" : "#009999";
          },
          function (n) {
            return n.disabled ? "none" : "pointer";
          }
        ),
        gn = B.ZP.div(
          w ||
            (w = (0, A.Z)([
              "\n  padding: 0.5rem 2rem;\n\n  textarea {\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 7px;\n    min-height: 100px;\n    resize: vertical;\n    max-height: 200px;\n    background-color: white;\n    padding-left: 0.5rem;\n  }\n\n  input {\n    width: 100%;\n    border-radius: 7px;\n    height: 35px;\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n",
            ]))
        ),
        fn = t(6710),
        bn = (0, _.$j)(
          function (n) {
            return { user: n.userState.user };
          },
          function (n) {
            return {
              postArticle: function (e) {
                return n((0, nn.HZ)(e));
              },
            };
          }
        )(function (n) {
          var e = (0, X.useState)(""),
            t = (0, J.Z)(e, 2),
            r = t[0],
            i = t[1],
            o = (0, X.useState)(""),
            a = (0, J.Z)(o, 2),
            s = a[0],
            c = a[1],
            l = (0, X.useState)(""),
            d = (0, J.Z)(l, 2),
            u = d[0],
            p = d[1],
            x = (0, X.useRef)(),
            m = n.postMode || "new",
            h = function (n, e) {
              n.size > 1e7
                ? alert("File size exceeded the maximum limit of 10MB")
                : "image" === e
                ? c(n)
                : "video" === e && p(n);
            },
            g = function (n) {
              var e = (function (n) {
                  switch (n) {
                    case "video":
                      return {
                        Icon: on.WBU,
                        types: "video/mp4,video/x-m4v,video/*",
                      };
                    case "image":
                      return {
                        Icon: on.Ms2,
                        types: "image/png, image/gif, image/jpeg",
                      };
                    default:
                      return {
                        Icon: on.Ms2,
                        types: "image/png,image/gif,image/jpeg,image/*",
                      };
                  }
                })(n.type),
                t = (0, X.useRef)();
              return (0, G.jsxs)(G.Fragment, {
                children: [
                  (0, G.jsx)(xn, {
                    onClick: function () {
                      t.current.click();
                    },
                    children: (0, G.jsx)(e.Icon, {}),
                  }),
                  (0, G.jsx)("input", {
                    accept: e.types,
                    type: "file",
                    ref: t,
                    onChange: function (e) {
                      var t;
                      e.target.files.length > 0 &&
                        ((t = function () {
                          var t = e.target.files[0];
                          n.handleFile(t);
                        }),
                        c(""),
                        p(""),
                        t());
                    },
                    style: { display: "none" },
                  }),
                ],
              });
            };
          (0, X.useEffect)(function () {
            var e = n.postText || "";
            i(e);
          }, []);
          function f() {
            return (f = (0, tn.Z)(
              (0, en.Z)().mark(function e(t) {
                var o, a, s;
                return (0, en.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = n.postId),
                          (a = r),
                          (s = an.ZP.collection("articles").doc(o)),
                          (e.next = 5),
                          s.update({ description: a, edited: !0 })
                        );
                      case 5:
                        n.setShowModal("close"),
                          n.setshowMenu(!0),
                          i(""),
                          c(""),
                          p("");
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var b = function (e) {
            i(""), c(""), p(""), n.handleClick(e);
          };
          return (0, G.jsx)(G.Fragment, {
            children:
              "open" === n.showModal &&
              (0, G.jsx)(sn, {
                children: (0, G.jsxs)(cn, {
                  children: [
                    (0, G.jsxs)(ln, {
                      children: [
                        (0, G.jsxs)(un, {
                          children: [
                            n.user.photoURL
                              ? (0, G.jsx)("img", { src: n.user.photoURL })
                              : (0, G.jsx)("img", {
                                  src: "/images/user.svg",
                                  alt: "",
                                }),
                            (0, G.jsx)("span", {
                              children: n.user.displayName,
                            }),
                          ],
                        }),
                        (0, G.jsx)("button", {
                          onClick: function (n) {
                            return (function (n) {
                              b(n);
                            })(n);
                          },
                          children: (0, G.jsx)(F.SV5, {
                            style: { margin: "auto" },
                            onClick: function (n) {
                              return b(n);
                            },
                          }),
                        }),
                      ],
                    }),
                    (0, G.jsx)(dn, {
                      children: (0, G.jsx)(gn, {
                        children: (0, G.jsx)("textarea", {
                          value: r,
                          onChange: function (n) {
                            return i(n.target.value);
                          },
                          placeholder: "What do you want to talk about?",
                        }),
                      }),
                    }),
                    (0, G.jsx)("div", {
                      className: "preview",
                      children: s
                        ? (0, G.jsx)("div", {
                            className: "img-container",
                            children: (0, G.jsx)("img", {
                              src: URL.createObjectURL(s),
                              alt: "",
                            }),
                          })
                        : u
                        ? (0, G.jsx)(fn.Z, {
                            ref: x,
                            url: URL.createObjectURL(u),
                            className: "vid-container",
                            width: "100%",
                            height: "100%",
                            onClick: function () {
                              var n = x.current.player.player.player;
                              n.paused ? n.play() : n.pause();
                            },
                          })
                        : "",
                    }),
                    (0, G.jsxs)(pn, {
                      children: [
                        (0, G.jsxs)("div", {
                          className: "files-container",
                          children: [
                            (0, G.jsx)(mn, {
                              children: (0, G.jsx)(g, {
                                handleFile: function (n) {
                                  return h(n, "image");
                                },
                                type: "image",
                                sharedFile: s,
                              }),
                            }),
                            (0, G.jsx)(mn, {
                              children: (0, G.jsx)(g, {
                                handleFile: function (n) {
                                  return h(n, "video");
                                },
                                type: "video",
                                sharedFile: u,
                              }),
                            }),
                          ],
                        }),
                        "new" === m
                          ? (0, G.jsx)(hn, {
                              disabled: !r && !s && !u,
                              onClick: function (e) {
                                if (
                                  (e.preventDefault(),
                                  e.target === e.currentTarget)
                                ) {
                                  var t = {
                                    image: s,
                                    video: u,
                                    user: n.user,
                                    description: r,
                                    timestamp: rn.Z.firestore.Timestamp.now(),
                                  };
                                  console.log(t), n.postArticle(t), b(e);
                                }
                              },
                              children: "Post",
                            })
                          : (0, G.jsx)(hn, {
                              onClick: function (n) {
                                return (function (n) {
                                  return f.apply(this, arguments);
                                })(n);
                              },
                              children: "Save Changes",
                            }),
                      ],
                    }),
                  ],
                }),
              }),
          });
        }),
        vn = t(4373),
        jn = B.ZP.div(Z || (Z = (0, A.Z)(["\n  grid-area: main;\n"]))),
        wn = B.ZP.div(
          y ||
            (y = (0, A.Z)([
              "\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #e9e9e9;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  border-radius: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n",
            ]))
        ),
        Zn = (0, B.ZP)(wn)(
          k ||
            (k = (0, A.Z)([
              "\n  padding: 0;\n  margin: 0 0 8px;\n  overflow: visible;\n",
            ]))
        ),
        yn = B.ZP.div(
          P ||
            (P = (0, A.Z)([
              "\n  flex-wrap: nowrap;\n  padding: 12px 16px 0;\n  margin-bottom: 8px;\n  align-items: center;\n  display: flex;\n  background-color: #e9e9e9;\n  border-radius: 5px;\n  a {\n    margin-right: 12px;\n    flex-grow: 1;\n    overflow: hidden;\n    display: flex;\n    text-decoration: none;\n    img {\n      width: 48px;\n      height: 48px;\n      border-radius: 5px;\n    }\n    & > div {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      flex-basis: 0;\n      margin-left: 8px;\n      overflow: hidden;\n      span {\n        text-align: left;\n        &:first-child {\n          font-size: 14px;\n          font-weight: 700;\n          color: rgba(0, 0, 0, 1);\n        }\n        &:nth-child(n + 1) {\n          font-size: 12px;\n          color: rgba(0, 0, 0, 0.6);\n        }\n      }\n    }\n  }\n  button {\n    position: absolute;\n    right: 12px;\n    outline: none;\n    border: none;\n    top: 0;\n    background: transparent;\n  }\n",
            ]))
        ),
        kn = B.ZP.div(
          C ||
            (C = (0, A.Z)([
              "\n  padding: 0 16px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 14px;\n  text-align: left;\n",
            ]))
        ),
        Pn = B.ZP.div(
          z ||
            (z = (0, A.Z)([
              "\n  margin-top: 8px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 70%;\n  display: block;\n  position: relative;\n  background-color: #e9e9e9;\n  img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n  }\n",
            ]))
        ),
        Cn = B.ZP.ul(
          S ||
            (S = (0, A.Z)([
              "\n  line-height: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-start;\n  overflow: auto;\n  list-style: none;\n  margin: 0 16px;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9e5df;\n  li {\n    margin-right: 5px;\n    font-size: 12px;\n  }\n",
            ]))
        ),
        zn = B.ZP.div(
          N ||
            (N = (0, A.Z)([
              "\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n  margin: 0;\n  min-height: 40px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  button {\n    display: inline-flex;\n    align-items: center;\n    padding: 8px;\n    color: #009999;\n    border: none;\n    background-color: whitesmoke;\n    border-radius: 5px;\n    margin: 5px;\n    text-align: center;\n    @media (min-width: 768px) {\n      span {\n        margin: 3px;\n      }\n    }\n    &:hover {\n      background-color: #077a7a;\n      box-shadow: 0 0 5px #009999;\n      color: whitesmoke;\n    }\n  }\n",
            ]))
        ),
        Sn = B.ZP.div(
          I ||
            (I = (0, A.Z)([
              "\n  text-align: center;\n  overflow-y: scroll;\n  height: 100vh;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  & > img {\n    width: 30px;\n  }\n",
            ]))
        ),
        Nn = B.ZP.div(
          M ||
            (M = (0, A.Z)([
              "\n  background-color: #009999;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  overflow: hidden;\n  margin-bottom: 8px;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  border-radius: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n  &:hover {\n    background-color: #077a7a;\n    box-shadow: 0 0 10px #009999;\n    color: whitesmoke;\n  }\n  button {\n    display: inline-flex;\n    align-items: center;\n    padding: 8px;\n    color: #077a7a;\n    border: none;\n    background-color: whitesmoke;\n    margin: 8px;\n    border-radius: 5px;\n\n    @media (min-width: 768px) {\n      span {\n        margin-left: 8px;\n      }\n    }\n    &:hover {\n      background-color: #009999;\n      color: whitesmoke;\n    }\n  }\n",
            ]))
        ),
        In = t(2982),
        Mn = t(1413),
        Un = B.ZP.div(
          U ||
            (U = (0, A.Z)([
              "\n  display: flex;\n  width: auto;\n  padding: 1rem;\n  &,\n  * {\n    box-sizing: border-box;\n  }\n  .picture-wrapper {\n    width: 50px;\n    img {\n      border-radius: 5px;\n      width: 100%;\n    }\n  }\n  column-gap: 1rem;\n\n  .comment-container {\n    width: 100%;\n    display: flex;\n    .comment-form {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      textarea {\n        resize: vertical;\n        border-radius: 5px;\n        min-height: 50px;\n        max-height: 200px;\n        padding: 1rem;\n        background-color: #ffffffb9;\n        box-shadow: 0px 0px 2px #009999 inset;\n        border: none;\n        &:focus,\n        &:focus-visible,\n        &:focus-within {\n          outline: none;\n        }\n      }\n      .button-group {\n        padding-top: 0.5rem;\n        display: flex;\n        justify-content: flex-end;\n        margin-top: 5px;\n        column-gap: 0.5rem;\n        align-items: center;\n        .btn {\n          border: none;\n          &.btn-comment {\n            background-color: #009999;\n            border-radius: 5px;\n            color: #ffffffbe;\n            border: none;\n            padding: 0.4rem 0.8rem;\n            align-items: center;\n            :hover {\n              background-color: #008383;\n            }\n            &.Mui-disabled {\n              background-color: #00999992;\n              :hover {\n                background-color: #00999992;\n              }\n            }\n            span {\n              height: 0.95rem;\n            }\n          }\n          &.btn-cancel {\n            //\n          }\n        }\n      }\n    }\n  }\n",
            ]))
        ),
        Rn = t(9818),
        _n = t(6513),
        Tn = t(5671),
        Fn = t(3144),
        En = (function () {
          function n(e) {
            (0, Tn.Z)(this, n),
              (this.currentField = null),
              (this.isValid =
                this.keyValidation(e) &&
                this.isText(e.text) &&
                this.isText(e.postedBy) &&
                this.isDate(e.timestamp) &&
                this.isText(e.commenterUid) &&
                this.isText(e.commenterProfilePic, !0) &&
                !0);
          }
          return (
            (0, Fn.Z)(n, [
              {
                key: "keyValidation",
                value: function (n) {
                  return (
                    (this.currentField = n),
                    "text" in n &&
                      "postedBy" in n &&
                      "timestamp" in n &&
                      "commenterUid" in n &&
                      "commenterProfilePic" in n &&
                      !0
                  );
                },
              },
              {
                key: "isDate",
                value: function (n) {
                  return (this.currentField = n), "object" === typeof n;
                },
              },
              {
                key: "isText",
                value: function (n, e) {
                  return (
                    (this.currentField = n),
                    e
                      ? "string" === typeof n || null === n
                      : "string" === typeof n
                  );
                },
              },
            ]),
            n
          );
        })();
      function An(n) {
        var e = n.articleId,
          t = n.setshowCommentBox,
          r = (0, X.useState)(""),
          i = (0, J.Z)(r, 2),
          o = i[0],
          a = i[1],
          s = (0, X.useRef)();
        function c(n, e) {
          return l.apply(this, arguments);
        }
        function l() {
          return (
            (l = (0, tn.Z)(
              (0, en.Z)().mark(function n(e, r) {
                var i, a, s, c, l, d;
                return (0, en.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        i = an.I8.currentUser;
                        try {
                          e.preventDefault();
                        } catch (e) {
                          console.log(e.message);
                        }
                        if (
                          ((a = new Date()),
                          (s = {
                            text: o,
                            postedBy: i.displayName,
                            timestamp: a,
                            commenterUid: i.uid,
                            commenterProfilePic: i.photoURL,
                          }),
                          (c = new En(s)).isValid)
                        ) {
                          n.next = 7;
                          break;
                        }
                        return n.abrupt(
                          "return",
                          window.alert(
                            "validation error during validation of ",
                            c.currentField
                          )
                        );
                      case 7:
                        return (
                          (l = an.ZP.collection("articles").doc(r)),
                          (d = l.collection("comments")),
                          (n.next = 11),
                          d.add(s)
                        );
                      case 11:
                        n.sent, t(!1);
                      case 13:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )),
            l.apply(this, arguments)
          );
        }
        var d = { ctrl: !1 };
        return (0, G.jsxs)(Un, {
          onKeyDown: function (n) {
            "Control" === n.key && (d.ctrl = !0),
              "Enter" === n.key && d.ctrl && c(n, e);
          },
          onKeyUp: function (n) {
            "Control" === n.key && (d.ctrl = !1);
          },
          children: [
            (0, G.jsx)("div", {
              className: "picture-wrapper",
              children: (0, G.jsx)("img", {
                src: an.I8.currentUser.photoURL,
                alt: "commenter profile picture",
              }),
            }),
            (0, G.jsx)("div", {
              className: "comment-container",
              children: (0, G.jsxs)("form", {
                ref: s,
                onSubmit: function (n) {
                  return c(n, e);
                },
                className: "comment-form",
                children: [
                  (0, G.jsx)("textarea", {
                    type: "text",
                    value: o,
                    onChange: function (n) {
                      return a(n.target.value);
                    },
                    required: !0,
                  }),
                  (0, G.jsxs)(Rn.Z, {
                    className: "button-group",
                    children: [
                      (0, G.jsx)(_n.Z, {
                        size: "small",
                        variant: "outlined",
                        type: "submit",
                        disabled: !o.length > 0,
                        className: "btn btn-comment",
                        children: "Add Comment",
                      }),
                      (0, G.jsx)(_n.Z, {
                        size: "small",
                        onClick: function () {
                          return t(!1);
                        },
                        className: "btn btn-cancel",
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var Bn = t(7025),
        Ln = t(4319),
        Dn = t(5471),
        Vn = "Posts_menu_button__2FyW0",
        Wn = "Posts_menu_items__CedQs";
      function Hn(n) {
        var e = n.initateCommentEdit,
          t = n.commentText,
          r = n.seteditCommentText,
          i = n.commentId,
          o = n.deleteComment,
          a = n.allowEdit,
          s = (0, X.useState)(null),
          c = (0, J.Z)(s, 2),
          l = c[0],
          d = c[1];
        return (0, G.jsxs)("div", {
          children: [
            (0, G.jsx)(Bn.Z, {
              className: Vn,
              "aria-controls": "simple-menu",
              "aria-haspopup": "true",
              onClick: function (n) {
                d(n.currentTarget);
              },
              children: (0, G.jsx)(on.LCi, {}),
            }),
            (0, G.jsxs)(Ln.Z, {
              id: "simple-menu",
              PaperProps: {
                style: { minWidth: 50, maxHeight: 100, fontSize: "10px" },
              },
              className: Wn,
              anchorEl: l,
              keepMounted: !0,
              open: Boolean(l),
              onClose: function () {
                d(null);
              },
              children: [
                a &&
                  (0, G.jsx)(Dn.Z, {
                    onClick: function () {
                      e(!0), r(t);
                    },
                    children: "Edit",
                  }),
                (0, G.jsx)(Dn.Z, {
                  onClick: function () {
                    return o(i);
                  },
                  children: "Delete",
                }),
              ],
            }),
          ],
        });
      }
      var $n,
        On = t(7859),
        Kn = B.ZP.div(
          $n ||
            ($n = (0, A.Z)([
              "\n  display: flex;\n  background-color: whitesmoke;\n  padding: 10px;\n  margin: 5px 15px 5px 15px;\n  border-radius: 10px;\n  .picture-wrapper {\n    margin-top: 0.3rem;\n    width: 50px;\n    margin-right: 10px;\n    img {\n      border-radius: 5px;\n      width: 100%;\n      font-size: 0;\n    }\n  }\n  .comment-content-container {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n\n    .comment-edit-box {\n      width: 100%;\n      resize: vertical;\n      border-radius: 5px;\n      min-height: 50px;\n      max-height: 200px;\n      padding: 1rem;\n      background-color: #ffffffb9;\n      box-shadow: 0px 0px 2px #009999 inset;\n      border: none;\n      &:focus,\n      &:focus-visible,\n      &:focus-within {\n        outline: none;\n      }\n    }\n\n    .comment-content {\n      .postedby {\n        text-align: left;\n        font-size: 0.8em;\n      }\n      .comment-text {\n        text-align: left;\n        font-size: 0.7em;\n        margin: 0.3rem auto;\n      }\n      .publication-date {\n        text-align: left;\n        font-size: 0.5em;\n      }\n    }\n  }\n",
            ]))
        );
      function Yn(n) {
        var e = n.comment,
          t = n.triggerPostRerender,
          r = n.articleId,
          i = n.articleAuthor,
          o = (0, X.useState)(""),
          a = (0, J.Z)(o, 2),
          s = a[0],
          c = a[1],
          l = (0, X.useState)(!1),
          d = (0, J.Z)(l, 2),
          u = d[0],
          p = d[1],
          x = an.I8.currentUser;
        function m() {
          return (m = (0, tn.Z)(
            (0, en.Z)().mark(function n(e) {
              var i, o, a;
              return (0, en.Z)().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (i = an.ZP.collection("articles").doc(r)),
                        (o = i.collection("comments")),
                        (a = o.doc(e)),
                        (n.next = 5),
                        a.update({ text: s, edited: !0 })
                      );
                    case 5:
                      t(Math.random()), p(!1);
                    case 7:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )).apply(this, arguments);
        }
        function h() {
          return (h = (0, tn.Z)(
            (0, en.Z)().mark(function n(e) {
              var i, o, a;
              return (0, en.Z)().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (i = an.ZP.collection("articles").doc(r)),
                        (o = i.collection("comments")),
                        (a = o.doc(e)),
                        (n.next = 5),
                        a.delete()
                      );
                    case 5:
                      t(Math.random());
                    case 6:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )).apply(this, arguments);
        }
        return (0, G.jsxs)(
          Kn,
          {
            children: [
              (0, G.jsx)("div", {
                className: "picture-wrapper",
                children: (0, G.jsx)(q.s, { source: e.commenterProfilePic }),
              }),
              (0, G.jsxs)("div", {
                className: "comment-content-container",
                children: [
                  u && e.commenterUid === x.uid
                    ? (0, G.jsx)("textarea", {
                        className: "comment-edit-box",
                        type: "text",
                        value: s,
                        onChange: function (n) {
                          return c(n.target.value);
                        },
                      })
                    : (0, G.jsxs)("section", {
                        className: "comment-content",
                        children: [
                          (0, G.jsx)("p", {
                            className: "postedby",
                            children: e.postedBy,
                          }),
                          (0, G.jsx)("p", {
                            className: "comment-text",
                            children: (0, On._h)(e.text).map(function (n) {
                              return (0, On.CB)(n)
                                ? (0, G.jsx)("a", {
                                    href: n,
                                    target: "_blank",
                                    children: n,
                                  })
                                : n;
                            }),
                          }),
                          (0, G.jsx)("p", {
                            className: "publication-date",
                            children: (function (n) {
                              return n.timestamp
                                .toDate()
                                .toLocaleDateString(void 0, {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                })
                                .toString();
                            })(e),
                          }),
                        ],
                      }),
                  e.commenterUid === x.uid || i === x.uid
                    ? u
                      ? (0, G.jsxs)("div", {
                          children: [
                            (0, G.jsx)(_n.Z, {
                              size: "small",
                              onClick: function () {
                                return (function (n) {
                                  return m.apply(this, arguments);
                                })(e.id);
                              },
                              children: "Save",
                            }),
                            (0, G.jsx)(_n.Z, {
                              size: "small",
                              onClick: function () {
                                p(!1);
                              },
                              children: "Cancel",
                            }),
                          ],
                        })
                      : (0, G.jsx)("section", {
                          children: (0, G.jsx)(Hn, {
                            initateCommentEdit: p,
                            seteditCommentText: c,
                            commentText: e.text,
                            deleteComment: function (n) {
                              return h.apply(this, arguments);
                            },
                            commentId: e.id,
                            allowEdit: e.commenterUid === x.uid,
                          }),
                        })
                    : (0, G.jsx)(G.Fragment, {}),
                ],
              }),
            ],
          },
          e.timestamp
        );
      }
      function qn(n) {
        var e = n.articleText,
          t = n.articleId,
          r = n.fileType,
          i = (0, X.useState)(null),
          o = (0, J.Z)(i, 2),
          a = o[0],
          s = o[1],
          c = (0, X.useState)("close"),
          l = (0, J.Z)(c, 2),
          d = l[0],
          u = l[1],
          p = Boolean(a),
          x = (0, X.useState)(!0),
          m = (0, J.Z)(x, 2),
          h = m[0],
          g = m[1],
          f = function (n) {
            if ((g(!h), n.preventDefault(), n.target === n.currentTarget))
              switch (d) {
                case "open":
                default:
                  u("close");
                  break;
                case "close":
                  u("open");
              }
          };
        function b() {
          return (
            (b = (0, tn.Z)(
              (0, en.Z)().mark(function n(e) {
                var t, i, o;
                return (0, en.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          ((t = an.db.collection("articles").doc(e)),
                          (i = t.collection("comments")),
                          !(o = r ? an.tO.refFromURL(r) : null))
                        ) {
                          n.next = 6;
                          break;
                        }
                        return (
                          (n.next = 6),
                          o.delete().then(function () {
                            console.log("file deleted");
                          })
                        );
                      case 6:
                        return (
                          (n.next = 8),
                          t.delete().then(function () {
                            console.log("article deleted");
                          })
                        );
                      case 8:
                        i.get().then(function (n) {
                          n.docs.forEach(function (n) {
                            n.ref.delete();
                          });
                        });
                      case 9:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )),
            b.apply(this, arguments)
          );
        }
        return (0, G.jsxs)("div", {
          children: [
            (0, G.jsx)(Bn.Z, {
              className: Vn,
              "aria-controls": "simple-menu",
              "aria-haspopup": "true",
              onClick: function (n) {
                s(n.currentTarget);
              },
              children: (0, G.jsx)(on.LCi, {}),
            }),
            (0, G.jsxs)(Ln.Z, {
              id: "long-menu",
              PaperProps: {
                style: { minWidth: 50, maxHeight: 100, fontSize: "10px" },
              },
              className: Wn,
              anchorEl: a,
              open: p,
              onClose: function () {
                s(null);
              },
              children: [
                h && (0, G.jsx)(Dn.Z, { onClick: f, children: "Edit" }),
                (0, G.jsx)(Dn.Z, {
                  onClick: function () {
                    return (function (n) {
                      return b.apply(this, arguments);
                    })(t);
                  },
                  children: "Delete",
                }),
                "close" !== d &&
                  (0, G.jsx)(bn, {
                    showModal: d,
                    handleEditClick: f,
                    setShowModal: u,
                    postText: e,
                    postId: t,
                    postMode: "edit",
                    handleClick: f,
                    setshowMenu: g,
                  }),
              ],
            }),
          ],
        });
      }
      function Gn(n) {
        var e = n.article,
          t = n.id,
          r = an.I8.currentUser,
          i = (0, X.useState)(!1),
          o = (0, J.Z)(i, 2),
          a = o[0],
          s = o[1],
          c = (0, X.useState)([]),
          l = (0, J.Z)(c, 2),
          d = l[0],
          u = l[1],
          p = (0, X.useState)([]),
          x = (0, J.Z)(p, 2),
          m = x[0],
          h = x[1],
          g = (0, X.useState)(!1),
          f = (0, J.Z)(g, 2),
          b = f[0],
          v = f[1],
          j = (0, X.useState)(1),
          w = (0, J.Z)(j, 2),
          Z = w[0],
          y = w[1];
        (0, X.useEffect)(
          function () {
            !(function () {
              var n = (0, tn.Z)(
                (0, en.Z)().mark(function n() {
                  var i, o, a, s, c;
                  return (0, en.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (i = an.ZP.collection("articles").doc(t)),
                            (o = i
                              .collection("comments")
                              .orderBy("timestamp", "asc")),
                            (n.next = 4),
                            o.get()
                          );
                        case 4:
                          (a = n.sent),
                            (s = a.docs.map(function (n) {
                              return (0,
                              Mn.Z)((0, Mn.Z)({}, n.data()), {}, { id: n.id });
                            })),
                            u(s),
                            (c = e.likedBy)
                              ? (h(c), c.includes(r.uid) && v(!0))
                              : h([]);
                        case 9:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function () {
                return n.apply(this, arguments);
              };
            })()();
          },
          [a, Z]
        );
        var k = (function () {
            var n = (0, tn.Z)(
              (0, en.Z)().mark(function n() {
                var e, i, o, a;
                return (0, en.Z)().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (((n.prev = 0), !b)) {
                            n.next = 12;
                            break;
                          }
                          return (
                            v(!1),
                            (e = m.slice()),
                            (i = e.indexOf(r.id)),
                            e.splice(i, 1),
                            h(e),
                            (o = an.ZP.collection("articles").doc(t)),
                            (n.next = 10),
                            o.update({
                              likedBy: rn.Z.firestore.FieldValue.arrayRemove(
                                r.uid
                              ),
                            })
                          );
                        case 10:
                          n.next = 17;
                          break;
                        case 12:
                          return (
                            v(!0),
                            h(function (n) {
                              return [].concat((0, In.Z)(n), [r.uid]);
                            }),
                            (a = an.ZP.collection("articles").doc(t)),
                            (n.next = 17),
                            a.update({
                              likedBy: rn.Z.firestore.FieldValue.arrayUnion(
                                r.uid
                              ),
                            })
                          );
                        case 17:
                          n.next = 22;
                          break;
                        case 19:
                          (n.prev = 19),
                            (n.t0 = n.catch(0)),
                            y(Z + Math.random());
                        case 22:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 19]]
                );
              })
            );
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          P = e.video ? e.video : e.sharedImg ? e.sharedImg : null;
        return (0, G.jsxs)(Zn, {
          children: [
            (0, G.jsxs)(yn, {
              children: [
                (0, G.jsxs)("a", {
                  children: [
                    (0, G.jsx)(q.s, { source: e.actor.image }),
                    (0, G.jsxs)("div", {
                      children: [
                        (0, G.jsx)("span", { children: e.actor.title }),
                        (0, G.jsx)("span", {
                          children: e.actor.date
                            .toDate()
                            .toLocaleDateString(void 0, {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.actor.uid === r.uid
                  ? (0, G.jsx)("section", {
                      children: (0, G.jsx)(qn, {
                        fileType: P,
                        articleText: e.description,
                        articleId: t,
                        triggerPostRerender: y,
                      }),
                    })
                  : null,
              ],
            }),
            (0, G.jsx)(kn, {
              children: (0, On._h)(e.description).map(function (n) {
                return (0, On.CB)(n)
                  ? (0, G.jsx)("a", { href: n, target: "_blank", children: n })
                  : n;
              }),
            }),
            (0, G.jsx)(Pn, {
              children: (0, G.jsx)("a", {
                children:
                  !e.sharedImg && e.video
                    ? (0, G.jsx)(fn.Z, {
                        width: "100%",
                        height: "100%",
                        url: e.video,
                        controls: !0,
                      })
                    : e.sharedImg &&
                      (0, G.jsx)("img", { src: e.sharedImg, alt: "" }),
              }),
            }),
            (0, G.jsxs)(Cn, {
              children: [
                (0, G.jsx)("li", {
                  children: (0, G.jsxs)("a", {
                    children: [
                      null === m || void 0 === m ? void 0 : m.length,
                      " Likes",
                    ],
                  }),
                }),
                (0, G.jsx)("li", {
                  children: (0, G.jsxs)("a", {
                    children: [d.length, " Comments"],
                  }),
                }),
              ],
            }),
            (0, G.jsxs)(zn, {
              className: "social",
              children: [
                (0, G.jsx)("button", {
                  onClick: function () {
                    return k();
                  },
                  children: (0, G.jsx)("span", {
                    children: b ? "Unlike" : "Like",
                  }),
                }),
                (0, G.jsx)("button", {
                  onClick: function () {
                    return s(!0);
                  },
                  children: (0, G.jsx)("span", { children: "Comment" }),
                }),
              ],
            }),
            a &&
              (0, G.jsx)(An, { articleId: t, setshowCommentBox: s, user: r }),
            d.length > 0 &&
              (0, G.jsxs)(G.Fragment, {
                children: [
                  (0, G.jsx)("p", {
                    style: { textAlign: "left", marginLeft: "15px" },
                    children: "Comments:",
                  }),
                  (0, G.jsx)("div", {
                    style: {
                      maxHeight: "300px",
                      overflowY: "scroll",
                      display: "flex",
                      flexDirection: "column-reverse",
                    },
                    children: d.map(function (n, r) {
                      return (0,
                      G.jsx)(Yn, { comment: n, articleAuthor: e.actor.uid, articleId: t, triggerPostRerender: y }, r);
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      var Qn,
        Jn,
        Xn,
        ne,
        ee,
        te,
        re,
        ie,
        oe = (0, _.$j)(
          function (n) {
            return {
              loading: n.articleState.loading,
              user: n.userState.user,
              articles: n.articleState.articles,
            };
          },
          function (n) {
            return {
              getArticles: function () {
                return n((0, nn.VW)());
              },
            };
          }
        )(function (n) {
          var e = (0, X.useState)("close"),
            t = (0, J.Z)(e, 2),
            r = t[0],
            i = t[1];
          (0, X.useEffect)(function () {
            n.getArticles();
          }, []);
          var o = function (n) {
            if ((n.preventDefault(), n.target === n.currentTarget))
              switch (r) {
                case "open":
                default:
                  i("close");
                  break;
                case "close":
                  i("open");
              }
          };
          return (0, G.jsxs)(jn, {
            children: [
              (0, G.jsxs)(Nn, {
                children: [
                  (0, G.jsx)("button", {
                    onClick: o,
                    disabled: !!n.loading,
                    className: "post-space",
                    children: "Start a Post",
                  }),
                  (0, G.jsx)(vn.rzH, {
                    size: 30,
                    style: { margin: "8px", fill: "whitesmoke" },
                  }),
                ],
              }),
              (0, G.jsxs)(Sn, {
                children: [
                  n.loading &&
                    (0, G.jsx)("img", {
                      src: "public/images/spin-loading.gif",
                      alt: "",
                    }),
                  0 != n.articles.length &&
                    n.articles.map(function (n) {
                      return (0, G.jsx)(Gn, { article: n, id: n.id }, n.id);
                    }),
                ],
              }),
              "open" === r && (0, G.jsx)(bn, { showModal: r, handleClick: o }),
            ],
          });
        }),
        ae = B.ZP.div(
          Qn ||
            (Qn = (0, A.Z)([
              "\n  grid-area: rightside;\n  margin-right: 20px;\n",
            ]))
        ),
        se = B.ZP.div(
          Jn ||
            (Jn = (0, A.Z)([
              "\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 2px 3px 2px -2px rgba(110, 104, 104, 0.75);\n  padding: 12px;\n",
            ]))
        ),
        ce = B.ZP.div(
          Xn ||
            (Xn = (0, A.Z)([
              "\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.6);\n",
            ]))
        ),
        le = B.ZP.div(
          ne ||
            (ne = (0, A.Z)([
              "\n  margin-top: 16px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  a {\n    text-decoration: none;\n    color: #074453af;\n    align-items: center;\n    margin: 12px;\n    position: relative;\n    font-size: 14px;\n    font-weight: bold;\n  }\n",
            ]))
        ),
        de = (0, B.ZP)(se)(
          ee ||
            (ee = (0, A.Z)([
              "\n  img {\n    width: 100%;\n    height: 100%;\n  }\n",
            ]))
        ),
        ue = function () {
          return (0, G.jsxs)(ae, {
            children: [
              (0, G.jsxs)(se, {
                children: [
                  (0, G.jsx)(ce, {
                    children: (0, G.jsx)("h2", {
                      children: "Reentry Reading Material",
                    }),
                  }),
                  (0, G.jsxs)(le, {
                    children: [
                      (0, G.jsx)("a", {
                        href: "https://www.namimaine.org/",
                        target: "_blank",
                        children:
                          "National Alliance on Mental Illness (NAMI), Maine",
                      }),
                      (0, G.jsx)("a", {
                        href: "https://re-entrymaine.org/",
                        target: "_blank",
                        children: "Maine Prisoner Re-Entry Network (MPRN)",
                      }),
                      (0, G.jsx)("a", {
                        href: "https://www.maineprisoneradvocacy.org/",
                        target: "_blank",
                        children: "Maine Prisoner Advocacy Coalition (MPAC)",
                      }),
                      (0, G.jsx)("a", {
                        href: "https://www.planstreetinc.com/reentry-a-new-way-of-life/",
                        target: "_blank",
                        children: "Four Key Elements to Successful Reentry",
                      }),
                      (0, G.jsx)("a", {
                        href: "https://civilrights.org/resource/barriers-to-successful-re-entry-of-formerly-incarcerated-people/",
                        target: "_blank",
                        children: "Barriers to Successful Re-Entry",
                      }),
                      (0, G.jsx)("a", {
                        href: "https://www.apa.org/pi/ses/resources/indicator/2018/03/prisons-to-communities",
                        target: "_blank",
                        children: "Assist an Inmate with Successfully Reentry",
                      }),
                      (0, G.jsx)("a", {
                        href: "https://www.trendwyoming.org/articles/helping-family-member-reintegrate-after-prison-release/",
                        target: "_blank",
                        children: "5 Tips to Help Your Reentry",
                      }),
                    ],
                  }),
                ],
              }),
              (0, G.jsx)(de, {
                children: (0, G.jsx)("img", {
                  src: "/images/2of3.png",
                  alt: "",
                }),
              }),
            ],
          });
        },
        pe = B.ZP.div(
          te ||
            (te = (0, A.Z)([
              "\n  padding-top: 52px;\n  max-width: 100%;\n  background-color: #cdcdcd;\n  min-height: 100vh;\n",
            ]))
        ),
        xe =
          (B.ZP.div(
            re ||
              (re = (0, A.Z)([
                "\n  max-width: 1120px;\n  margin-left: auto;\n  margin-right: auto;\n",
              ]))
          ),
          B.ZP.div(
            ie ||
              (ie = (0, A.Z)([
                '\n  display: grid;\n  grid-template-areas: "leftside main rightside";\n  grid-template-columns: minmax(0, 6fr) minmax(0, 10fr) minmax(300px, 8fr);\n  column-gap: 25px;\n  row-gap: 25px;\n  margin: 25px 0;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5px;\n  }\n',
              ]))
          )),
        me = (0, _.$j)(function (n) {
          return { user: n.userState.user };
        })(function (n) {
          return (0,
          G.jsxs)(pe, { children: [(!n.user || !n.user.emailVerified) && (0, G.jsx)(R.l_, { to: "/" }), (0, G.jsxs)(xe, { children: [(0, G.jsx)(Q, {}), (0, G.jsx)(oe, {}), (0, G.jsx)(ue, {})] })] });
        });
    },
    7859: function (n, e, t) {
      t.d(e, {
        CB: function () {
          return i;
        },
        _h: function () {
          return o;
        },
        r6: function () {
          return a;
        },
      });
      var r =
        /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g;
      function i(n) {
        return !!n.match(r);
      }
      function o(n) {
        return n.replaceAll(r, "<url*>$1<url*>").split("<url*>");
      }
      function a(n) {
        return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(n);
      }
    },
    2734: function (n, e, t) {
      t.d(e, {
        s: function () {
          return i;
        },
      });
      var r = t(184);
      function i(n, e) {
        var t = n.source;
        return (0, r.jsx)("img", {
          src: "/images/user.svg",
          alt: "user image",
          srcSet: t ? "".concat(t, ", /images/user.svg") : "/images/user.svg",
          onError: function (n) {
            n.target.removeAttribute("srcset"), (n.target.onError = null);
          },
        });
      }
    },
  },
]);
//# sourceMappingURL=639.f7879d45.chunk.js.map
