import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, L as Lines } from "./loader-Lp04mhPh.js";
import { _ as _sfc_main$6 } from "./Navbar-BfXWCn3I.js";
import { _ as _sfc_main$7 } from "./Footer-B0tkdHsU.js";
import "./Header-jM8KL62R.js";
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
import "swiper/vue";
import "swiper";
const _sfc_main$2 = {
  __name: "corporate-header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Corporate Design.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div><p class="pt-50" style="${ssrRenderStyle({ "padding-left": "15%", "padding-right": "15%" })}">Velorinax quentari lumessa prandor vixelate, torvani lexum prastico velmirex antravi. Solentra vaxion delmora quintexa reluvion astryxen, porvalis enturo maxenti dravique. Lunarex polvinta cerulex montra velsari quindexa florentis, zenvora ultimar dexion preluxa novaris. </p></div></div></header>`);
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
const data = [
  {
    img: "/dark/assets/imgs/works/stand/1.jpg",
    title: "Aevoe",
    subTitle: "Silal",
    link: "/dark/project1"
  },
  {
    img: "/dark/assets/imgs/works/stand/2.jpg",
    title: "Digital Design",
    subTitle: "Agthia",
    link: "/dark/project2"
  },
  {
    img: "/dark/assets/imgs/works/stand/3.jpg",
    title: "Aevoe",
    subTitle: "CompassSingapore",
    link: "/dark/project3"
  },
  {
    img: "/dark/assets/imgs/works/stand/4.jpg",
    title: "Aevoe",
    subTitle: "CorporateStationery",
    link: "/dark/project4"
  },
  {
    img: "/dark/assets/imgs/works/stand/5.jpg",
    title: "Aevoe",
    subTitle: "Flyers",
    link: "/dark/project5"
  },
  {
    img: "/dark/assets/imgs/works/stand/6.jpg",
    title: "Digital Design",
    subTitle: "Presentations&PitchDecks",
    link: "/dark/project6"
  },
  {
    img: "/dark/assets/imgs/works/stand/7.jpg",
    title: "Aevoe",
    subTitle: "MarketingCampaigns",
    link: "/dark/project1"
  },
  {
    img: "/dark/assets/imgs/works/stand/8.jpg",
    title: "Aevoe",
    subTitle: "PrintAds",
    link: "/dark/project2"
  },
  {
    img: "/dark/assets/imgs/works/stand/9.jpg",
    title: "Aevoe",
    subTitle: "OOH",
    link: "/dark/project4"
  },
  {
    img: "/dark/assets/imgs/works/stand/9.jpg",
    title: "Aevoe",
    subTitle: "EnvironmentalGraphics",
    link: "/dark/project4"
  },
  {
    img: "/dark/assets/imgs/works/stand/9.jpg",
    title: "Aevoe",
    subTitle: "EventsBranding",
    link: "/dark/project4"
  },
  {
    img: "/dark/assets/imgs/works/stand/9.jpg",
    title: "Aevoe",
    subTitle: "EmailersNewsletters",
    link: "/dark/project4"
  }
];
const _sfc_main$1 = {
  __name: "corporate-design-portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal section-padding sub-bg" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-50"><div class="filter text-center"><span class="text"><b>Filter By :</b></span><span data-filter="*" class="active"> Show All </span><span data-filter=".CorporateStationery">Sale Collateral</span><span data-filter=".Flyers">Flyers</span><span data-filter=".Presentations&amp;PitchDecks">Presentations</span><span data-filter=".MarketingCampaigns">Campaigns</span><span data-filter=".PrintAds">Print Ads</span><span data-filter=".OOH">Signage</span><span data-filter=".EmailersNewsletters">Emailers</span><span data-filter=".EnvironmentalGraphics">Environmental Graphics</span><span data-filter=".EventsBranding">Events</span></div></div></div><div class="gallery row stand-marg"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-gallery/corporate-design-portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = _sfc_main$1;
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(Portfolio, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
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
export {
  _sfc_main as default
};
//# sourceMappingURL=ser-corporate-design-CR_eNE6X.js.map
