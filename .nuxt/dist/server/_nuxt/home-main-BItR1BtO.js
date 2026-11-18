import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from "./loader-rPQn2KgB.js";
import { _ as _sfc_main$1, I as Intro, S as Services, a as _sfc_main$2, M as Marquee, b as _sfc_main$3, c as _sfc_main$5, B as Blog } from "./Team-CBP9Qv61.js";
import { _ as _sfc_main$4, C as Clients } from "./Testimonials-BsiBUNtf.js";
import { _ as _sfc_main$6 } from "./Footer-DCoFxQu0.js";
import { N as Navbar } from "./Navbar-CUpl-oSg.js";
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
import "./3-B497koQy.js";
import "./author-CbTf732r.js";
import "./1-B1Q864LO.js";
import "./3-Bn4yLYcT.js";
import "./arrow-right-D5_iop0t.js";
import "./services-JN6EFaoS.js";
import "swiper/vue";
import "swiper";
import "./team-CJ8xZ8IL.js";
import "./testimonials-Dq-BK1h4.js";
import "./logo-ojOhGMds.js";
const _sfc_main = {
  __name: "home-main",
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
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(Services), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(ssrRenderComponent(unref(Clients), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-main-BItR1BtO.js.map
