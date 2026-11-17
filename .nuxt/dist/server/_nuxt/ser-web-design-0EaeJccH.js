import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from "./loader-rPQn2KgB.js";
import { N as Navbar } from "./Navbar-DH_ohDax.js";
import { _ as _sfc_main$3 } from "./Footer-BiIwQ1Fu.js";
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
import "./logo-ojOhGMds.js";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header section-padding" }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Web Design</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div><p class="pt-50" style="${ssrRenderStyle({ "padding-left": "15%", "padding-right": "15%" })}"> We design modern, responsive, and user-focused websites that bring brands to life, enhance digital experiences, and help businesses establish a strong and effective online presence. </p></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-outline/ser-web-design-portfolio-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const data = [
  {
    img: "/dark/assets/imgs/works/projects/website-alrashed/alrashed-thumbnai.jpg",
    title: "Al Rashed Group",
    subTitle: "Corporate Website Development",
    link: "https://alrashed.com.sa/"
  },
  {
    img: "/dark/assets/imgs/works/projects/website-manazel/thumbnail.jpg",
    title: "Manazel Group",
    subTitle: "Corporate Website Development",
    link: "https://manazelgroup.com/"
  },
  {
    img: "/dark/assets/imgs/works/projects/website-altrad/thumbnail.jpg",
    title: "Altrad Adyard",
    subTitle: "Corporate Digital Solution & Lead Management",
    link: "https://aqcreative.ae/altrad_form"
  },
  {
    img: "/dark/assets/imgs/works/projects/website-nclacademy/thumbnail.jpg",
    title: "NCL World",
    subTitle: "Website Design & Development",
    link: "https://nclworld.academy/"
  },
  {
    img: "/dark/assets/imgs/works/projects/website-vanguardvantage/thumbnail.jpg",
    title: "Vanguard Vantage",
    subTitle: "Corporate Website Development",
    link: "https://vanguardvantage.net/"
  },
  {
    img: "/dark/assets/imgs/works/projects/website-reharvestfestival/thumbnail.jpg",
    title: "ReHarvest Festival 2026",
    subTitle: "Interactive Digital Campaign Platform",
    link: "https://aqcreative.ae/Reharvest/"
  },
  {
    img: "/dark/assets/imgs/works/projects/website-petcure/thumbnail.jpg",
    title: "Petcure",
    subTitle: "Corporate Website Design & Development",
    link: "https://petcure.ae/"
  }
];
const _sfc_main$1 = {
  __name: "ser-web-design",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-outline" }, _attrs))}><div class="container-fluid rest"><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-lg-4 col-md-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""></div><div class="cont mt-20"><h5 class="fz-22"><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.title)}</a></h5><p><a href="/dark/portfolio-outline">${ssrInterpolate(item.subTitle)}</a></p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-outline/ser-web-design.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = _sfc_main$1;
const _sfc_main = {
  __name: "ser-web-design",
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
      _push(ssrRenderComponent(unref(LoadingScreen), null, null, _parent));
      _push(ssrRenderComponent(unref(Cursor), null, null, _parent));
      _push(ssrRenderComponent(unref(ProgressScroll), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Portfolio, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/ser-web-design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ser-web-design-0EaeJccH.js.map
