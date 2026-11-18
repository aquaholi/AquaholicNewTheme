import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from './loader-rPQn2KgB.mjs';
import { _ as _sfc_main$6, I as Intro, S as Services, a as _sfc_main$1, M as Marquee } from './Team-CBP9Qv61.mjs';
import { C as Clients } from './Testimonials-BsiBUNtf.mjs';
import { _ as _sfc_main$2 } from './Footer-DCoFxQu0.mjs';
import { N as Navbar } from './Navbar-CUpl-oSg.mjs';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './3-B497koQy.mjs';
import './author-CbTf732r.mjs';
import './1-B1Q864LO.mjs';
import './3-Bn4yLYcT.mjs';
import './arrow-right-D5_iop0t.mjs';
import './services-JN6EFaoS.mjs';
import 'swiper/vue';
import 'swiper';
import './team-CJ8xZ8IL.mjs';
import './testimonials-Dq-BK1h4.mjs';
import './logo-ojOhGMds.mjs';

const _sfc_main = {
  __name: "index",
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
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(Services), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(Clients), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5_WnDS1O.mjs.map
