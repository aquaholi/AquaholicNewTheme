import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$4 } from './Navbar-Bx-BsPR6.mjs';
import { d as data } from './workstand-DzQZ588R.mjs';
import { _ as _sfc_main$5 } from './Footer-HHcXPl2n.mjs';
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
import '../../renderer.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/devalue/index.js';
import 'file://C:/xampp/htdocs/AQSite/node_modules/@unhead/ssr/dist/index.mjs';

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/light/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Portfolio Gallery.</h1><div class="mt-15"><a href="#0">Home</a><span class="padding-rl-20">|</span><span class="main-color">Portfolio</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/portfolio-gallery/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal section-padding sub-bg" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-50 text-center"><div class="filter"><span class="text">Filter By :</span><span data-filter="*" class="active"> Show All </span><span data-filter=".art">Art</span><span data-filter=".Branding">Branding</span><span data-filter=".design">Design</span><span data-filter=".marketing">Marketing</span></div></div></div><div class="gallery row stand-marg"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="${ssrRenderClass(["col-lg-4", "col-md-6", "items", item.subTitle])}"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="cont d-flex align-items-center"><div><h5 class="fz-22"><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.title)}</a></h5><p><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.subTitle.split(" ")[0])}</a></p></div><div class="ml-auto"><a${ssrRenderAttr("href", item.link)} class="ti-arrow-top-right"></a></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/portfolio-gallery/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "portfolio-gallery",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/light/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/light/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/light/assets/css/style.css" }
      ]
      // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/portfolio-gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-gallery-BYX13WuE.mjs.map
