import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, L as Lines } from "./loader-Lp04mhPh.js";
import { _ as _sfc_main$5 } from "./Navbar-BfXWCn3I.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel } from "swiper";
import "./Footer-B0tkdHsU.js";
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
const _sfc_main$1 = {
  __name: "industries-overview",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation, Autoplay, Parallax, Pagination, Mousewheel],
      speed: 1500,
      autoplay: {
        delay: 5e3
      },
      mousewheel: true,
      parallax: true,
      loop: true,
      onSwiper(swiper) {
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].querySelector(".bg-img").setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      },
      onResize(swiper) {
        swiper.update();
      },
      pagination: {
        el: ".full-showcase .parallax-slider .swiper-pagination",
        clickable: true,
        renderBullet(_, className) {
          return '<span class="' + className + '"><svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"><circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"stroke-opacity="1" stroke-width="1px"></circle><circle cx="8" cy="8" r="3" fill="#FFF"></circle></svg></span>';
        }
      },
      navigation: {
        nextEl: ".full-showcase .parallax-slider .swiper-button-next",
        prevEl: ".full-showcase .parallax-slider .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header full-showcase" }, _attrs))}><div class="swiper-container parallax-slider">`);
      _push(ssrRenderComponent(unref(Swiper), swiperOptions, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Digital Transformation <br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-Healthcare-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Healthcare</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Digital Transformation "),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-Healthcare-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, "Healthcare")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/2.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Trust &amp; Identity Systems </h6><h1${_scopeId2}><a href="/dark/Industries/indus-BanksNFinancialInstitute-page"${_scopeId2}><span data-swiper-parallax="-3000"${_scopeId2}>Banks <br${_scopeId2}>&amp; Finance </span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/2.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, " Trust & Identity Systems "),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-BanksNFinancialInstitute-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-3000" }, [
                                    createTextVNode("Banks "),
                                    createVNode("br"),
                                    createTextVNode("& Finance ")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Sensory Brand Experience <br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-HospitalityNFnB-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Hospitality <br${_scopeId2}> &amp; F&amp;B</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Sensory Brand Experience "),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-HospitalityNFnB-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                    createTextVNode("Hospitality "),
                                    createVNode("br"),
                                    createTextVNode(" & F&B")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/2.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Packaging &amp; Market Presence <br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-agriculturalNfnb-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Agriculture <br${_scopeId2}> &amp; FMCG</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/2.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Packaging & Market Presence "),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-agriculturalNfnb-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                    createTextVNode("Agriculture "),
                                    createVNode("br"),
                                    createTextVNode(" & FMCG")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Visual Narrative &amp; Sales <br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-RealEstate-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Real Estate</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Visual Narrative & Sales "),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-RealEstate-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, "Real Estate")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Destination Storytelling<br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-TravelNLeisureNDestination-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Travel <br${_scopeId2}> &amp; Leisure</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Destination Storytelling"),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-TravelNLeisureNDestination-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                    createTextVNode("Travel "),
                                    createVNode("br"),
                                    createTextVNode(" & Leisure")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Destination Storytelling<br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-IndustrialNEngineering-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Industrial <br${_scopeId2}> &amp; Engineering</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Destination Storytelling"),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-IndustrialNEngineering-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                    createTextVNode("Industrial "),
                                    createVNode("br"),
                                    createTextVNode(" & Engineering")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Lifestyle Movement Design<br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-HealthNFitness-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Health <br${_scopeId2}> &amp; Fitness</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Lifestyle Movement Design"),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-HealthNFitness-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                    createTextVNode("Health "),
                                    createVNode("br"),
                                    createTextVNode(" & Fitness")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="../assets/imgs/works/full/2.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> Corporate Ecosystems<br${_scopeId2}></h6><h1${_scopeId2}><a href="/dark/Industries/indus-ConglomeratesNHoldingGroups-page"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Conglomerates</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "../assets/imgs/works/full/2.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" Corporate Ecosystems"),
                                createVNode("br")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/dark/Industries/indus-ConglomeratesNHoldingGroups-page" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, "Conglomerates")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Digital Transformation "),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-Healthcare-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, "Healthcare")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/2.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, " Trust & Identity Systems "),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-BanksNFinancialInstitute-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-3000" }, [
                                  createTextVNode("Banks "),
                                  createVNode("br"),
                                  createTextVNode("& Finance ")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Sensory Brand Experience "),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-HospitalityNFnB-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                  createTextVNode("Hospitality "),
                                  createVNode("br"),
                                  createTextVNode(" & F&B")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/2.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Packaging & Market Presence "),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-agriculturalNfnb-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                  createTextVNode("Agriculture "),
                                  createVNode("br"),
                                  createTextVNode(" & FMCG")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Visual Narrative & Sales "),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-RealEstate-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, "Real Estate")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Destination Storytelling"),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-TravelNLeisureNDestination-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                  createTextVNode("Travel "),
                                  createVNode("br"),
                                  createTextVNode(" & Leisure")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Destination Storytelling"),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-IndustrialNEngineering-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                  createTextVNode("Industrial "),
                                  createVNode("br"),
                                  createTextVNode(" & Engineering")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Lifestyle Movement Design"),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-HealthNFitness-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, [
                                  createTextVNode("Health "),
                                  createVNode("br"),
                                  createTextVNode(" & Fitness")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "../assets/imgs/works/full/2.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" Corporate Ecosystems"),
                              createVNode("br")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/dark/Industries/indus-ConglomeratesNHoldingGroups-page" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, "Conglomerates")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiper-controls"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Industry</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Industry</span></div></div></div><div class="swiper-pagination"></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Industry-wise/industries-overview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IndustryOverview = _sfc_main$1;
const _sfc_main = {
  __name: "main-industries",
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
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(IndustryOverview, null, null, _parent));
      _push(`</main></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/industries/main-industries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=main-industries-uxAB4qLU.js.map
