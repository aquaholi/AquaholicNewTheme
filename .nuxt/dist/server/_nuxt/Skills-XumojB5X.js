import { onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { i as isInView } from "./isInView-VXyFXDVH.js";
const _sfc_main = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    function handleShowProgressValues() {
      isInView({
        selector: ".skill-progress .progres",
        isElements: true,
        callback: (element) => {
          element.style.width = element.getAttribute("data-value");
        }
      });
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleShowProgressValues);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "skills section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="skil-progs md-mb80"><h3>Professionals <span class="fw-300">Skills</span></h3><p class="fz-13 mt-15"> Similique sunin culpa qui officia deserunt mollitia animi est laborum ets dolorum fuga. Et harum quidem rerum facilis esty expedita distinctioam nobis est eligendi optio cumquey. </p><div class="skill-item mt-50"><h6 class="fz-16 mb-10">Product Design</h6><div class="skill-progress"><div class="progres" data-value="82%"></div></div></div><div class="skill-item mt-30"><h6 class="fz-16 mb-10">Brand Management</h6><div class="skill-progress"><div class="progres" data-value="94%"></div></div></div><div class="skill-item mt-30"><h6 class="fz-16 mb-10">Growth Analysis</h6><div class="skill-progress"><div class="progres" data-value="89%"></div></div></div></div></div><div class="col-lg-5 offset-lg-1"><div class="resume-exp"><h3>Educational <span class="fw-300">Experience</span></h3><p class="fz-13 mt-15"> Completely evisculates alone expertise through revolutionary strategic are theme areas fashion impactful paradigm for process centric relation whiteboard seamless capital with methods. </p><div class="box-items row mt-50"><div class="col-md-6 item"><span class="num"> 1 <small>st</small></span><div class="text-center"><h6 class="fz-16">Business Expert</h6><span class="opacity-7">2023 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 2 <small>st</small></span><div class="text-center"><h6 class="fz-16">Finance Manager</h6><span class="opacity-7">2020 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 3 <small>st</small></span><div class="text-center"><h6 class="fz-16">Senior Designer</h6><span class="opacity-7">2018 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 4 <small>st</small></span><div class="text-center"><h6 class="fz-16">Junior Architect</h6><span class="opacity-7">2016 - Present(Themes)</span></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/team-single/Skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Skills-XumojB5X.js.map
