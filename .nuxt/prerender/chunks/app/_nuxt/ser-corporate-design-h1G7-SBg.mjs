import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { useSSRContext, unref, defineComponent, mergeProps } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/server-renderer/index.mjs';
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from './loader-rPQn2KgB.mjs';
import { N as Navbar } from './Navbar-DH_ohDax.mjs';
import { d as data } from './corproate-design-Ds2MCMAN.mjs';
import { _ as _sfc_main$3 } from './Footer-BiIwQ1Fu.mjs';
import '../server.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/h3/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/destr/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/scule/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/klona/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/xampp/htdocs/AQSite/node_modules/pathe/dist/index.mjs';
import './logo-ojOhGMds.mjs';
import '../../renderer.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/devalue/index.js';
import 'file://C:/xampp/htdocs/AQSite/node_modules/@unhead/ssr/dist/index.mjs';

const _sfc_main$2 = {
  __name: "corporate-header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Corporate Design.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div><p class="pt-50" style="${ssrRenderStyle({ "padding-left": "15%", "padding-right": "15%" })}"> We create professional corporate design solutions that establish a consistent brand identity, strengthen visual communication, and ensure a cohesive presence across all business touchpoints.</p></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-standard/corporate-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = _sfc_main$2;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "corporate-design-portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = data;
    const categoryClass = (value) => value.replace(/[^a-zA-Z0-9_-]/g, "");
    const categories = [...new Set(projects.map((item) => item.subTitle))].sort();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal section-padding sub-bg" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-50"><div class="filter text-center"><span class="text"><b>Filter By :</b></span><span data-filter="*" class="active"> Show All </span><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<span${ssrRenderAttr("data-filter", `.${categoryClass(category)}`)}>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="gallery row stand-marg"><!--[-->`);
      ssrRenderList(unref(projects), (item, i) => {
        _push(`<div class="${ssrRenderClass(["col-lg-4", "col-md-6", "items", categoryClass(item.subTitle)])}"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="cont d-flex align-items-center"><div><h5 class="fz-22"><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.title)}</a></h5><p><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.subTitle)}</a></p></div><div class="ml-auto"><a${ssrRenderAttr("href", item.link)} class="ti-arrow-top-right"></a></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-gallery/corporate-design-portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ser-corporate-design",
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
      _push(ssrRenderComponent(unref(ProgressScroll), null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/ser-corporate-design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ser-corporate-design-h1G7-SBg.mjs.map
