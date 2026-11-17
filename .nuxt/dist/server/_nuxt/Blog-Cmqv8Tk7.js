import { _ as __nuxt_component_0 } from "./nuxt-link-CgIPAz5u.js";
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { d as data } from "./team-CJ8xZ8IL.js";
import { _ as _imports_0, a as _imports_2 } from "./3-B497koQy.js";
import { _ as _imports_1 } from "./author-CbTf732r.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
const _sfc_main$1 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Team</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Meet our <span class="fw-200">legends</span></h2></div></div><div class="row" style="${ssrRenderStyle({ "gap": "50px 0px" })}"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-lg-4"><div class="item md-mb50"><div class="img"><img${ssrRenderAttr("src", item.img)} alt="">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.detailLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="info"${_scopeId}><span class="fz-12"${_scopeId}>${ssrInterpolate(item.subName)}</span><h6 class="fz-18"${_scopeId}>${ssrInterpolate(item.name)}</h6></div>`);
            } else {
              return [
                createVNode("div", { class: "info" }, [
                  createVNode("span", { class: "fz-12" }, toDisplayString(item.subName), 1),
                  createVNode("h6", { class: "fz-18" }, toDisplayString(item.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Team.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/dark/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a></div><h5><a href="/dark/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a><a href="/dark/blog-list">Design</a></div><h5><a href="/dark/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Blog as B,
  _sfc_main$1 as _
};
//# sourceMappingURL=Blog-Cmqv8Tk7.js.map
