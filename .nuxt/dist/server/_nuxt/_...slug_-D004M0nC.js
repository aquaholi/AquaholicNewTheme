import { d as useRoute, c as createError } from "../server.mjs";
import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { defineComponent, computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { d as data } from "./corproate-design-Ds2MCMAN.js";
import { p as projectsData } from "./social-media-C1e6XRmU.js";
import { d as data$1 } from "./branding-BpMEEeFf.js";
import { F as Footer } from "./Footer-DNpYDDj8.js";
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from "./loader-rPQn2KgB.js";
import { N as Navbar } from "./Navbar-CUpl-oSg.js";
import { P as ProjectDetail } from "./ProjectDetail-BVFqewYV.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const corporateProjects = data;
    const socialMediaProjects = projectsData;
    const brandingProjects = data$1;
    const projects = [...corporateProjects, ...socialMediaProjects, ...brandingProjects];
    const routePath = computed(() => `/dark/Projects/${(Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]).join("/")}`.toLowerCase());
    const project = computed(() => {
      const foundProject = projects.find((item) => item.link.toLowerCase() === routePath.value);
      if (!foundProject) {
        throw createError({ statusCode: 404, statusMessage: "Project not found" });
      }
      return foundProject;
    });
    const isSocialMediaProject = computed(
      () => socialMediaProjects.some((item) => item.link.toLowerCase() === routePath.value)
    );
    const isBrandingProject = computed(
      () => brandingProjects.some((item) => item.link.toLowerCase() === routePath.value)
    );
    const relatedProjects = computed(() => {
      if (isSocialMediaProject.value)
        return socialMediaProjects;
      if (isBrandingProject.value)
        return brandingProjects;
      return corporateProjects;
    });
    const allProjectsLink = computed(() => {
      if (isSocialMediaProject.value)
        return "/dark/ser-social-media";
      if (isBrandingProject.value)
        return "/dark/ser-branding";
      return "/dark/ser-corporate-design";
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
      _push(ssrRenderComponent(ProjectDetail, {
        key: routePath.value,
        project: project.value,
        projects: relatedProjects.value,
        "all-projects-link": allProjectsLink.value
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-D004M0nC.js.map
