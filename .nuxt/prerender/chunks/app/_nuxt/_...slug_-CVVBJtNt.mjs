import { d as useRoute, c as createError } from '../server.mjs';
import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { defineComponent, computed, unref, useSSRContext } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/server-renderer/index.mjs';
import { d as data } from './corproate-design-Ds2MCMAN.mjs';
import { F as Footer } from './Footer-DNpYDDj8.mjs';
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from './loader-rPQn2KgB.mjs';
import { N as Navbar } from './Navbar-DH_ohDax.mjs';
import { _ as _sfc_main$1 } from './ProjectDetail-CsuyhLsb.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const projects = data;
    const routePath = computed(() => `/dark/Projects/${(Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]).join("/")}`.toLowerCase());
    const project = computed(() => {
      const foundProject = projects.find((item) => item.link.toLowerCase() === routePath.value);
      if (!foundProject) {
        throw createError({ statusCode: 404, statusMessage: "Project not found" });
      }
      return foundProject;
    });
    useHead({
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" }
      ]
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
      _push(ssrRenderComponent(_sfc_main$1, {
        key: routePath.value,
        project: project.value,
        projects: unref(projects)
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/Projects/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CVVBJtNt.mjs.map
