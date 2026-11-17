import { p as publicAssetsURL } from '../../renderer.mjs';
import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$4 } from './Footer-Bov6VySB.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$3 } from './Navbar-BtwYJRqD.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/h3/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/devalue/index.js';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/destr/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/scule/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/klona/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/defu/dist/defu.mjs';
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
import 'file://C:/xampp/htdocs/AQSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/@unhead/shared/dist/index.mjs';
import '../server.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("light/assets/imgs/404.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header page-header-error section-padding valign" }, _attrs))}><div class="container"><div class="text-center"><div class="row justify-content-center"><div class="col-lg-5"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="text mt-40"><h2 class="mb-10">Page not found</h2><p>Sorry, but the page you are looking for does not exist.</p><a href="/light/home-main" class="butn butn-md butn-bg main-colorbg text-dark radius-30 mt-30"><span class="text">Back to Home</span></a></div></div></div></div></div><div class="main-marq"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div></div></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/error404/Error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Error = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-error404",
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
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Error), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/page-error404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-error404-X18L1j__.mjs.map
