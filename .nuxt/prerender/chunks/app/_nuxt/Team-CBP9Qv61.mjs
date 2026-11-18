import { p as publicAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0$3, a as _imports_2$1 } from './3-B497koQy.mjs';
import { _ as _imports_1$1 } from './author-CbTf732r.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { _ as _imports_0$1 } from './1-B1Q864LO.mjs';
import { _ as _imports_1, a as _imports_2 } from './3-Bn4yLYcT.mjs';
import { _ as _imports_0$2 } from './arrow-right-D5_iop0t.mjs';
import { d as data } from './services-JN6EFaoS.mjs';
import { Swiper, SwiperSlide } from 'file://C:/xampp/htdocs/AQSite/node_modules/swiper/vue/swiper-vue.js';
import { Navigation } from 'file://C:/xampp/htdocs/AQSite/node_modules/swiper/swiper.esm.js';
import { d as data$1 } from './team-CJ8xZ8IL.mjs';

const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Read Latest <span class="fw-200">News</span></span></h2><div class="ml-auto"><a href="/dark/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a></div><h5><a href="/dark/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2$1)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/dark/blog-list">Marketing</a><a href="/dark/blog-list">Design</a></div><h5><a href="/dark/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Blog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header main-header bg-img",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "8"
      }, _attrs))}><div class="container pt-100"><div class="row justify-content-end"><div class="col-lg-6"><div class="text mb-100"><h4> We deliver high-volume, strategy-led creative solutions for enterprises requiring consistent, fast, and impactful designs. </h4></div></div></div></div><div class="container-fluid ontop"><div class="container"><div class="lg-text"><div class="d-flex"><h6>FOR SCALABLE</h6><h6 class="ml-auto">CREATIVE PARTNER</h6></div><h1>BRAND GROWTH</h1></div></div><div class="img"><video autoplay muted loop playsinline style="${ssrRenderStyle({ "width": "100%" })}"><source src="https://winter-mud-4232.shahrozsaqib3.workers.dev/" type="video/mp4"> Your browser does not support the video tag. </video></div></div></header>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-lg-6"><div class="cont"><h4 class="d-slideup wow"><span class="sideup-text"><span class="up-text"> Book a consultation today and let\u2019s build </span></span><span class="sideup-text"><span class="up-text"> a creative system tailored to your brand\u2019s growth. <br><br><br></span></span></h4><div class="exp mt-80 md-mb15"><h2 class="fz-70 numb-font"> 28 <span class="sub-title main-font opacity-7 ml-15"> Years of Experience </span></h2></div></div></div><div class="col-lg-5"><div class="text"><p> At Aquaholic, we go beyond design we build structured creative systems that enable brands to scale consistently and efficiently. From high-volume content production to strategic campaigns and brand development, our team delivers with speed, precision, and a deep understanding of complex industries. Whether you\u2019re a healthcare network, government entity, or enterprise brand, we become your dedicated creative partner, ensuring every output aligns with your goals and drives measurable impact. </p></div><div class="main-marq o-hidden mt-100"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Scalable Creative</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Strategy-Led Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>High-Volume Execution</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Consistent Brand Systems</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Fast Turnaround</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Enterprise-Ready Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Scalable Creative</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Strategy-Led Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>High-Volume Execution</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Consistent Brand Systems</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Fast Turnaround</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Enterprise-Ready Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Intro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="main-marq xlrg o-hidden"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Scalable Creative</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Strategy-Led Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>High-Volume Execution</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Consistent Brand Systems</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Fast Turnaround</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Enterprise-Ready Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Marquee.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inter-fixed-text section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex justify-content-end"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Featured <span class="fw-200">Projects &amp; Case Studies.</span></span></h2></div></div></div><div class="container position-re"><div class="links-img"><div class="row"><div class="col-lg-4 items"><div class="item"><div class="img" data-tab="tab-1"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><a href="/dark/project1" class="link-overlay"></a></div><div class="cont"><span class="tag">Branding</span><h2>Earthmade Aroma</h2></div></div></div><div class="col-lg-4 items"><div class="item"><div class="img" data-tab="tab-2"><img${ssrRenderAttr("src", _imports_1)} alt=""><a href="/dark/project2" class="link-overlay"></a></div><div class="cont"><span class="tag">Branding</span><h2>Blom Air Purifier</h2></div></div></div><div class="col-lg-4 items"><div class="item"><div class="img" data-tab="tab-3"><img${ssrRenderAttr("src", _imports_2)} alt=""><a href="/dark/project3" class="link-overlay"></a></div><div class="cont"><span class="tag">Branding</span><h2>Bank Rebranding</h2></div></div></div></div></div><div class="links-text"><ul class="rest"><li id="tab-1"><span class="tag">Branding</span><h2>Earthmade Aroma</h2></li><li id="tab-2"><span class="tag">Branding</span><h2>Blom Air Purifier</h2></li><li id="tab-3"><span class="tag">Branding</span><h2>Bank Rebranding</h2></li></ul></div></div><div class="container mt-40"><div class="sec-bottom mt-100"><div class="main-bg d-flex align-items-center"><p>Here are some select projects that showcase.</p><a href="/dark/portfolio-metro" class="butn main-color ml-40 underline"><span>View All</span></a></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Portfolio.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/intro/04.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "skills-img-crev pb-50" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-lg-4 offset-lg-1 valign"><div class="img md-mb80"><img${ssrRenderAttr("src", _imports_0)} alt="" class="radius-30"></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-50"><h6 class="sub-title mb-15 main-color">The Aquaholic Advantage</h6><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">Built for Scale</span></span><span class="sideup-text"><span class="up-text">Designed for Impact.</span></span></h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text"><p> We deliver high-volume, strategy-led creative without compromising quality, speed, or consistency. </p></div><div class="row mt-50 pt-50 bord-thin-top"><div class="col-sm-6"><div class="item d-flex align-items-center sm-mb30"><h2 class="fz-60 line-height-1"><span class="numb-count">52</span></h2><span class="sub-title opacity-7 ml-30"> Projects <br> Completed </span></div></div><div class="col-sm-6"><div class="item d-flex align-items-center"><h2 class="fz-60 line-height-1"><span class="numb-count">6</span>k <span class="fz-30">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Services.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Services2",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      speed: 600,
      loop: false,
      initialSlide: 0,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      },
      breakpoints: {
        // when window width is >= 640px
        640: {
          loop: false,
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 768px
        768: {
          loop: false,
          slidesPerView: 2,
          spaceBetween: 50,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1e3: {
          loop: false,
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Comprehensive <span class="fw-200">Services.</span></span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="serv-swiper" data-carousel="swiper" data-loop="false" data-space="7">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-serv",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.link
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item-box radius-15"${_scopeId2}><div class="icon mb-40 opacity-5"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><h5 class="mb-15"${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.desc)}</p><a${ssrRenderAttr("href", item.link)} class="rmore mt-30"${_scopeId2}><span class="sub-title"${_scopeId2}>Read More</span><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="icon-img-20 ml-5"${_scopeId2}></a></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item-box radius-15" }, [
                        createVNode("div", { class: "icon mb-40 opacity-5" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("h5", { class: "mb-15" }, toDisplayString(item.title), 1),
                        createVNode("p", null, toDisplayString(item.desc), 1),
                        createVNode("a", {
                          href: item.link,
                          class: "rmore mt-30"
                        }, [
                          createVNode("span", { class: "sub-title" }, "Read More"),
                          createVNode("img", {
                            src: _imports_0$2,
                            alt: "",
                            class: "icon-img-20 ml-5"
                          })
                        ], 8, ["href"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.link
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item-box radius-15" }, [
                      createVNode("div", { class: "icon mb-40 opacity-5" }, [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("h5", { class: "mb-15" }, toDisplayString(item.title), 1),
                      createVNode("p", null, toDisplayString(item.desc), 1),
                      createVNode("a", {
                        href: item.link,
                        class: "rmore mt-30"
                      }, [
                        createVNode("span", { class: "sub-title" }, "Read More"),
                        createVNode("img", {
                          src: _imports_0$2,
                          alt: "",
                          class: "icon-img-20 ml-5"
                        })
                      ], 8, ["href"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Services2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Team</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Meet our <span class="fw-200">legends</span></span></h2><div class="ml-auto"><a href="/dark/page-team" class="go-more"><span class="text">Join to us</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$1), (item, i) => {
        _push(`<div class="col-lg-4"><div class="item md-mb50"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="info"><span class="fz-12">${ssrInterpolate(item.subName)}</span><h6 class="fz-18">${ssrInterpolate(item.name)}</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Blog as B, Intro as I, Marquee as M, Services as S, _sfc_main$6 as _, _sfc_main$1 as a, _sfc_main$3 as b, _sfc_main as c };
//# sourceMappingURL=Team-CBP9Qv61.mjs.map
