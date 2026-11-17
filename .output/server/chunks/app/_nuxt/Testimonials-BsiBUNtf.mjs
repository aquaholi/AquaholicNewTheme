import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { d as data$1 } from './testimonials-Dq-BK1h4.mjs';

const data = [
  "/dark/assets/imgs/brands/Patchi.png",
  "/dark/assets/imgs/brands/Hitachi.png",
  "/dark/assets/imgs/brands/Schlumberger.png",
  "/dark/assets/imgs/brands/AbudhabiExperience.png",
  "/dark/assets/imgs/brands/Ceva.png",
  "/dark/assets/imgs/brands/Fairmont.png",
  "/dark/assets/imgs/brands/QasrAlWatan.png",
  "/dark/assets/imgs/brands/BurgerKing.png",
  "/dark/assets/imgs/brands/Purelab.png",
  "/dark/assets/imgs/brands/Seha.png",
  "/dark/assets/imgs/brands/EmiratesPalace.png",
  "/dark/assets/imgs/brands/Godiva.png",
  "/dark/assets/imgs/brands/Aldar.png",
  "/dark/assets/imgs/brands/Expo2020.png",
  "/dark/assets/imgs/brands/Silal.png",
  "/dark/assets/imgs/brands/JWMarriot.png",
  "/dark/assets/imgs/brands/DubaiFinancial.png",
  "/dark/assets/imgs/brands/Savills.png",
  "/dark/assets/imgs/brands/HenryWiltshire.png",
  "/dark/assets/imgs/brands/ABB.png",
  "/dark/assets/imgs/brands/Parsons.png",
  "/dark/assets/imgs/brands/YasIsland.png",
  "/dark/assets/imgs/brands/Altrad.png",
  "/dark/assets/imgs/brands/Modon.png",
  "/dark/assets/imgs/brands/Manazel.png",
  "/dark/assets/imgs/brands/Agthia.png"
];
const _sfc_main$1 = {
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    const unique = [...new Set(data)];
    const size = Math.ceil(unique.length / 3);
    const groups = [
      unique.slice(0, size),
      unique.slice(size, size * 2),
      unique.slice(size * 2)
    ];
    const swiperOptions = {
      modules: [Navigation, Pagination, Autoplay],
      speed: 500,
      loop: true,
      autoplay: {
        delay: 2e3,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      breakpoints: {
        500: { loop: true, slidesPerView: 2, spaceBetween: 15, centeredSlides: false },
        700: { loop: true, slidesPerView: 3, spaceBetween: 15, centeredSlides: false },
        1e3: { loop: true, slidesPerView: 5, spaceBetween: 15, centeredSlides: true }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "clients-carso pt-80 sub-bg",
        style: { "padding-bottom": "40px" }
      }, _attrs))} data-v-9ca64b2b><div class="container" data-v-9ca64b2b><div class="sec-bottom clients-heading" data-v-9ca64b2b><div class="sub-bg d-flex align-items-center" data-v-9ca64b2b><h6 class="fz-14 fw-400" data-v-9ca64b2b> More than <span class="fw-600" data-v-9ca64b2b>200+ companies</span> trusted us worldwide </h6></div></div><!--[-->`);
      ssrRenderList(groups, (group, g) => {
        _push(`<div class="swiper5" data-v-9ca64b2b>`);
        _push(ssrRenderComponent(unref(Swiper), mergeProps({
          id: `content-carousel-container-unq-clients-${g + 1}`,
          class: "swiper-container"
        }, swiperOptions), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(group, (item, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: `g${g}-${i}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="item" data-v-9ca64b2b${_scopeId2}><div class="img icon-img-100" data-v-9ca64b2b${_scopeId2}><img${ssrRenderAttr("src", item)} alt="" data-v-9ca64b2b${_scopeId2}></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "item" }, [
                          createVNode("div", { class: "img icon-img-100" }, [
                            createVNode("img", {
                              src: item,
                              alt: ""
                            }, null, 8, ["src"])
                          ])
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
                (openBlock(true), createBlock(Fragment, null, renderList(group, (item, i) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: `g${g}-${i}`
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img icon-img-100" }, [
                          createVNode("img", {
                            src: item,
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Clients.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Clients = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9ca64b2b"]]);
const _sfc_main = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      spaceBetween: 30,
      speed: 1e3,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="sec-head"><h6 class="sub-title main-color mb-15">Testimonials</h6><h3 class="fw-600 d-rotate wow"><span class="rotate-text"> What People <span class="fw-200">Say?</span></span></h3></div></div><div class="col-lg-8 position-re"><div class="testim-swiper">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1).slice(0, 2), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><p class="fz-30"${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"${_scopeId2}><div class="ml-20 pb-15"${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="sub-title main-color"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "text" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                "data-name": "Path",
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ])),
                            createVNode("p", { class: "fz-30" }, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                            createVNode("div", { class: "ml-20 pb-15" }, [
                              createVNode("h5", null, toDisplayString(item.name), 1),
                              createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                            ])
                          ])
                        ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1).slice(0, 2), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              "data-name": "Path",
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ])),
                          createVNode("p", { class: "fz-30" }, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                          createVNode("div", { class: "ml-20 pb-15" }, [
                            createVNode("h5", null, toDisplayString(item.name), 1),
                            createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                          ])
                        ])
                      ])
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
      _push(`</div><div class="swiper-arrow-control control-abslout"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="small-line"><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Clients as C, _sfc_main as _ };
//# sourceMappingURL=Testimonials-BsiBUNtf.mjs.map
