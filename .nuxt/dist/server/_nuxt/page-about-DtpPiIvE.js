import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$c } from "./Footer-DkBYRv6X.js";
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8, L as Lines } from "./loader-Lp04mhPh.js";
import { _ as _sfc_main$9 } from "./Navbar-BfXWCn3I.js";
import { _ as _imports_0 } from "./4-CUa9Y2jh.js";
import { _ as _imports_2 } from "./02-D3NKgtkr.js";
import { _ as _imports_0$1 } from "./03-DYXBsvJS.js";
import { _ as _sfc_main$a, a as _sfc_main$b, B as Blog } from "./Blog-DrP-7r5t.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "./logo-light-BzZVrvC4.js";
import "./logo-ojOhGMds.js";
import "./testimonials-Dq-BK1h4.js";
import "./nuxt-link-CgIPAz5u.js";
import "./team-CJ8xZ8IL.js";
import "./3-B497koQy.js";
import "./author-CbTf732r.js";
const _sfc_main$5 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100 pb-100"><div class="text-center"><h1 class="fz-100 text-u">About Us.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">About Us</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro position-re" }, _attrs))}><div class="container-fluid rest"><div class="row justify-content-end"><div class="col-sm-9"><div class="img to-up fit-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div></div><div class="container section-padding"><div class="row"><div class="col-lg-5"><h6 class="sub-title main-color">About Company</h6></div><div class="col-lg-7"><div class="text"><h4> Aquaholic is a creative and content partner built for brands that demand consistency, speed, and scale. We work with healthcare institutions, government entities, and enterprise organizations to deliver high-quality design, content, and campaigns through structured, strategy-led systems. By combining creative thinking with efficient execution, we help brands communicate clearly, stay consistent across every touchpoint, and grow with confidence in fast-moving environments. </h4></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Intro.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="main-marq xlrg o-hidden"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Scalable Creative</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Strategy-Led Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>High-Volume Execution</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Consistent Brand Systems</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Fast Turnaround</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Enterprise-Ready Solutions </span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Marquee.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Intro2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro-cerv section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 bord-thin-right rest"><div class="row justify-content-end rest"><div class="col-md-5 rest"><div class="cont"><div class="mb-40"><h2 class="fz-100 numb-font">1.</h2></div><h4>Our Mission</h4><div class="text mt-30"><p> To deliver scalable, strategy-led creative solutions that help brands communicate consistently and grow with impact. </p></div></div></div><div class="col-md-5 rest"><div class="img fit-img bord-thin-left"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div><div class="row justify-content-end bord-thin-top rest"><div class="col-md-5 rest"><div class="img fit-img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-md-5 rest"><div class="cont bord-thin-left"><div class="mb-40"><h2 class="fz-100 numb-font">2.</h2></div><h4>Our Vision</h4><div class="text mt-30"><p> To be the leading creative partner for enterprise and institutional brands across the region and beyond. </p></div></div></div></div></div><div class="col-lg-4 rest"><div class="bord-thin-top mt-100 position-re"><div class="row"><div class="col-md-11"><div class="cont"><div class="mb-40"><h2 class="fz-100 numb-font">3.</h2></div><h4>Why Us?</h4><div class="text mt-30"><p> Because we combine strategic thinking with fast, high-volume execution to deliver consistent, high-quality creative at scale. </p></div></div></div></div><div class="bg-dots bg-img" data-background="/dark/assets/imgs/patterns/dots.png"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Intro2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const data = [
  "/dark/assets/imgs/brands/about-us-brands/ADNH.png",
  "/dark/assets/imgs/brands/about-us-brands/ADSCC.png",
  "/dark/assets/imgs/brands/about-us-brands/BFL.png",
  "/dark/assets/imgs/brands/about-us-brands/Bnoon.png",
  "/dark/assets/imgs/brands/about-us-brands/Compass Group.png",
  "/dark/assets/imgs/brands/about-us-brands/Kibun.png",
  "/dark/assets/imgs/brands/about-us-brands/Skin Instituite.png",
  "/dark/assets/imgs/brands/about-us-brands/YAM.png",
  "/dark/assets/imgs/brands/about-us-brands/Yas Bay.png",
  "/dark/assets/imgs/brands/about-us-brands/Yas Clinic.png",
  "/dark/assets/imgs/brands/about-us-brands/Yas Marina.png"
];
const _sfc_main$1 = {
  __name: "Clients-About-Us",
  __ssrInlineRender: true,
  setup(__props) {
    const firstGroup = data.slice(0, 4);
    const secondGroup = data.slice(5, 10);
    const swiperOptions = {
      modules: [Navigation, Pagination, Autoplay],
      speed: 500,
      loop: true,
      autoplay: {
        delay: 2e3,
        // time between slides (ms)
        disableOnInteraction: false,
        // keep autoplay after user interaction
        pauseOnMouseEnter: true
        // optional: pause on hover
      },
      breakpoints: {
        // when window width is >= 640px
        500: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 15,
          centeredSlides: false
        },
        // when window width is >= 768px
        700: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 15,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1e3: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 15,
          centeredSlides: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "clients-carso pt-0 sub-bg",
        style: { "padding-bottom": "30px" }
      }, _attrs))} data-v-647c8ef1><div class="container" data-v-647c8ef1><div class="sec-bottom mb-100" data-v-647c8ef1><div class="sub-bg d-flex align-items-center" data-v-647c8ef1><h6 class="fz-14 fw-400" data-v-647c8ef1> More than <span class="fw-600" data-v-647c8ef1>200+ companies</span> trusted us worldwide </h6></div></div><div class="swiper5" style="${ssrRenderStyle({ "margin-bottom": "50px" })}" data-v-647c8ef1>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-clients-1",
        class: "swiper-container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(firstGroup), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: `g1-${i}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item" data-v-647c8ef1${_scopeId2}><div class="img icon-img-100" data-v-647c8ef1${_scopeId2}><img${ssrRenderAttr("src", item)} alt="" data-v-647c8ef1${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img icon-img-100" }, [
                          createVNode("img", {
                            src: item,
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(firstGroup), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: `g1-${i}`
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: item,
                          alt: ""
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="swiper5" style="${ssrRenderStyle({ "margin-bottom": "50px" })}" data-v-647c8ef1>`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-clients-2",
        class: "swiper-container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(secondGroup), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: `g2-${i}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item" data-v-647c8ef1${_scopeId2}><div class="img icon-img-100" data-v-647c8ef1${_scopeId2}><img${ssrRenderAttr("src", item)} alt="" data-v-647c8ef1${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img icon-img-100" }, [
                          createVNode("img", {
                            src: item,
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(secondGroup), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: `g2-${i}`
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: item,
                          alt: ""
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Clients-About-Us.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Clients = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-647c8ef1"]]);
const _sfc_main = {
  __name: "page-about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" }
      ]
      // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(ssrRenderComponent(Clients, null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/page-about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-about-DtpPiIvE.js.map
