"use strict";
(self.webpackChunkreentry_resources =
  self.webpackChunkreentry_resources || []).push([
  [347],
  {
    8080: function (e, n, r) {
      var i,
        s = r(168),
        o = r(6444),
        t = r(184),
        c = o.ZP.div(
          i ||
            (i = (0, s.Z)([
              "\n  input {\n    margin: 30px 0 30px 30px;\n  }\n",
            ]))
        );
      n.Z = function () {
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)(c, {
              children: [
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Basic Needs",
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Domestic Violence",
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Food",
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Education",
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Employment",
              ],
            }),
            (0, t.jsxs)(c, {
              children: [
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Housing",
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Medical",
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Mental Health",
                (0, t.jsx)("input", {
                  type: "checkbox",
                  id: "resources.id",
                  name: "resources.name",
                  value: "resources.id",
                }),
                "Transportation",
              ],
            }),
          ],
        });
      };
    },
    3347: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return M;
          },
        });
      var i,
        s,
        o,
        t,
        c,
        a,
        d,
        l,
        p,
        u = r(885),
        h = r(168),
        m = r(2791),
        x = "Resources_postResource__jDUu2",
        g = "Resources_resourceOutput__3B+oH",
        f = "Resources_resourceOutputText__-ef5i",
        v = "Resources_resourcesOutputBox__sQfE3",
        b = r(184),
        w = function () {
          return (0, b.jsx)("div", {
            className: g,
            children: (0, b.jsx)("p", { className: f, children: "Empoyment" }),
          });
        },
        j = r(6444),
        y = j.ZP.div(
          i ||
            (i = (0, h.Z)([
              "\n  flex: 0 1 350px;\n  max-width: 100vw;\n  width: 350px;\n  margin: auto;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  height: 140px;\n  .header {\n    flex: 1 0 40px;\n    background-color: #009999;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 1.5rem;\n    h4 {\n      color: white;\n      font-weight: 600;\n    }\n  }\n  .bottom {\n    flex: 1 1 1;\n    display: flex;\n    column-gap: 1rem;\n    margin: 0.5rem;\n    height: 80px;\n    .img-wrapper {\n      flex: 1 0 110px;\n      height: 110px;\n      width: 110px;\n      border-radius: 100vmax;\n      overflow: hidden;\n      transform: translateY(-30px);\n\n      img {\n        width: 100%;\n      }\n    }\n    .text {\n      background-color: #d9d9d9;\n      flex: 0 1 1;\n      font-size: 14px;\n      padding: 0.4rem;\n    }\n  }\n",
            ]))
        ),
        k = function (e) {
          var n = e.type,
            r = e.imageSrc,
            i = e.description;
          return (0, b.jsxs)(y, {
            children: [
              (0, b.jsx)("div", {
                className: "header",
                children: (0, b.jsx)("h4", { children: n }),
              }),
              (0, b.jsxs)("div", {
                className: "bottom",
                children: [
                  (0, b.jsx)("div", {
                    className: "img-wrapper",
                    children: (0, b.jsx)("img", { src: r, alt: n + " image" }),
                  }),
                  (0, b.jsx)("div", {
                    className: "text",
                    children: (0, b.jsx)("p", { children: i }),
                  }),
                ],
              }),
            ],
          });
        },
        T = r(3178),
        Z = r(8820),
        A = r(8080),
        R = j.ZP.div(
          s ||
            (s = (0, h.Z)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  background-color: whitesmoke;\n  width: 56%;\n  border-radius: 10px;\n  padding: 1%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 4%;\n  border: 1px solid rgb(201, 201, 201);\n  height: 85%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  button {\n    border-radius: 50px;\n    padding: 7px 20px;\n    background-color: rgb(27, 126, 255);\n    color: white;\n    border: none;\n    margin: 0 0 0 84.5%;\n    cursor: pointer;\n  }\n",
            ]))
        ),
        _ = j.ZP.div(
          o ||
            (o = (0, h.Z)([
              "\n  display: flex;\n  p {\n    font-size: 130%;\n    /* border: 1px solid red; */\n    width: 95%;\n    margin-top: -0.5%;\n  }\n  img {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    /* margin: 0 0 0 85%; */\n    hover {\n      cursor: pointer;\n      border-radius: 50px;\n      background-color: rgb(209, 209, 209);\n    }\n  }\n",
            ]))
        ),
        I = j.ZP.div(
          t ||
            (t = (0, h.Z)([
              "\n  min-height: 100px;\n  background-color: whitesmoke;\n  margin-left: 40px;\n  overflow-y: scroll;\n  /* border: 1px solid blue; */\n",
            ]))
        ),
        N = j.ZP.div(
          c ||
            (c = (0, h.Z)([
              "\n  background-color: #077a7a;\n  height: 50px;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  padding-right: 20px;\n  color: whitesmoke;\n",
            ]))
        ),
        P = j.ZP.div(
          a || (a = (0, h.Z)(["\n  img {\n    width: 20%;\n  }\n"]))
        ),
        z = j.ZP.div(d || (d = (0, h.Z)([""]))),
        C = j.ZP.div(l || (l = (0, h.Z)([""]))),
        D = function (e) {
          return (0, b.jsx)(b.Fragment, {
            children:
              "open" === e.showModal &&
              (0, b.jsxs)(R, {
                children: [
                  (0, b.jsxs)(_, {
                    children: [
                      (0, b.jsx)("p", { children: "Resource alerts" }),
                      (0, b.jsx)(Z.SV5, {}),
                    ],
                  }),
                  (0, b.jsxs)(P, {
                    children: [
                      (0, b.jsx)(N, {}),
                      (0, b.jsx)("img", { src: "/images/user.svg", alt: "" }),
                      (0, b.jsx)(I, {}),
                    ],
                  }),
                  (0, b.jsxs)(z, {
                    children: [(0, b.jsx)(N, {}), (0, b.jsx)(I, {})],
                  }),
                  (0, b.jsxs)(C, {
                    children: [
                      (0, b.jsx)(N, {}),
                      (0, b.jsx)(I, { children: (0, b.jsx)(A.Z, {}) }),
                    ],
                  }),
                  (0, b.jsx)("button", { children: "Done" }),
                ],
              }),
          });
        },
        E = j.ZP.div(
          p ||
            (p = (0, h.Z)([
              "\n  display: flex;\n  margin-top: 3rem;\n  column-gap: 3rem;\n  padding: 2rem;\n  flex-wrap: wrap;\n  max-width: 100%;\n\n  &,\n  * {\n    box-sizing: border-box;\n    font-family: Inter, sans-serif;\n  }\n\n  .search-box {\n    flex: 0 1 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    padding-top: 3rem;\n    background-color: #d9d9d9;\n    margin: 1rem auto;\n    max-width: 100%;\n\n    .search-container {\n      .resource-search {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        .search-bar {\n          position: relative;\n          width: 100%;\n          .input-container {\n            width: 100%;\n            input {\n              width: 100%;\n            }\n          }\n          .icon-wrapper {\n          }\n        }\n        .search-results {\n          background-color: #fff;\n          width: 100%;\n          padding: 1rem;\n          height: max-content;\n          position: absolute;\n          top: 35px;\n        }\n      }\n    }\n  }\n  .items {\n    flex: 1 1 300px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    max-height: calc(100vh - 100px);\n    overflow-y: scroll;\n    ::-webkit-scrollbar {\n      width: 0;\n    }\n    .items-wrapper {\n      margin: auto;\n      background-color: #d9d9d9;\n      display: flex;\n      flex-wrap: wrap;\n      padding: 1rem;\n      column-gap: 1.4rem;\n      row-gap: 1rem;\n    }\n  }\n  @media (max-width: 600px) {\n    padding: 0;\n    row-gap: 1rem;\n    .search-box {\n      flex-grow: 1;\n    }\n    .items {\n      margin-top: 2rem;\n      padding-bottom: 2rem;\n    }\n  }\n",
            ]))
        ),
        M = function (e) {
          var n = (0, m.useState)("close"),
            r = (0, u.Z)(n, 2),
            i = r[0],
            s = r[1],
            o = function (e) {
              if ((e.preventDefault(), e.target === e.currentTarget))
                switch (i) {
                  case "open":
                  default:
                    s("close");
                    break;
                  case "close":
                    s("open");
                }
            };
          return (0, b.jsxs)(E, {
            children: [
              (0, b.jsxs)("div", {
                className: "search-box",
                children: [
                  (0, b.jsx)("div", {
                    className: "search-container",
                    children: (0, b.jsx)(T.s, {}),
                  }),
                  (0, b.jsx)("button", {
                    className: x,
                    onClick: o,
                    disabled: !!e.loading,
                    children: "Post a Resource",
                  }),
                  (0, b.jsxs)("div", {
                    className: v,
                    children: [
                      (0, b.jsx)(w, {}),
                      (0, b.jsx)(w, {}),
                      (0, b.jsx)(w, {}),
                      (0, b.jsx)(w, {}),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "items",
                children: (0, b.jsx)("div", {
                  className: "items-wrapper",
                  children: [
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                    {
                      resourceImage: "https://via.placeholder.com/200",
                      resourceType: "Resource Type Available",
                      description:
                        "Amount of resource description that wll fit in this div",
                    },
                  ].map(function (e, n) {
                    var r = e.resourceType,
                      i = e.resourceImage,
                      s = e.description;
                    return (0,
                    b.jsx)(k, { type: r, imageSrc: i, description: s }, "".concat(r, " ").concat(n));
                  }),
                }),
              }),
              "open" === i && (0, b.jsx)(D, { showModal: i, handleClick: o }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=347.aa9764ad.chunk.js.map
