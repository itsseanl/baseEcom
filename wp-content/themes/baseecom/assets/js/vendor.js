"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/
!function (e) {
  "function" == typeof define && define.amd ? define(e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : e();
}(function () {
  var a = "undefined" != typeof window ? window : this,
      e = a.Glider = function (e, t) {
    var o = this;
    if (e._glider) return e._glider;
    if (o.ele = e, o.ele.classList.add("glider"), (o.ele._glider = o).opt = Object.assign({}, {
      slidesToScroll: 1,
      slidesToShow: 1,
      resizeLock: !0,
      duration: 0.5,
      easing: function easing(e, t, o, i, r) {
        return i * (t /= r) * t + o;
      }
    }, t), o.animate_id = o.page = o.slide = 0, o.arrows = {}, o._opt = o.opt, o.opt.skipTrack) o.track = o.ele.children[0];else for (o.track = document.createElement("div"), o.ele.appendChild(o.track); 1 !== o.ele.children.length;) {
      o.track.appendChild(o.ele.children[0]);
    }
    o.track.classList.add("glider-track"), o.init(), o.resize = o.init.bind(o, !0), o.event(o.ele, "add", {
      scroll: o.updateControls.bind(o)
    }), o.event(a, "add", {
      resize: o.resize
    });
  },
      t = e.prototype;

  return t.init = function (e, t) {
    var o = this,
        i = 0,
        r = 0;
    o.slides = o.track.children, [].forEach.call(o.slides, function (e) {
      e.classList.add("glider-slide");
    }), o.containerWidth = o.ele.clientWidth;
    var s = o.settingsBreakpoint();

    if (t = t || s, "auto" === o.opt.slidesToShow || void 0 !== o.opt._autoSlide) {
      var l = o.containerWidth / o.opt.itemWidth;
      o.opt._autoSlide = o.opt.slidesToShow = o.opt.exactWidth ? l : Math.floor(l);
    }

    "auto" === o.opt.slidesToScroll && (o.opt.slidesToScroll = Math.floor(o.opt.slidesToShow)), o.itemWidth = o.opt.exactWidth ? o.opt.itemWidth : o.containerWidth / o.opt.slidesToShow, [].forEach.call(o.slides, function (e) {
      e.style.height = "auto", e.style.width = o.itemWidth + "px", i += o.itemWidth, r = Math.max(e.offsetHeight, r);
    }), o.track.style.width = i + "px", o.trackWidth = i, o.isDrag = !1, o.preventClick = !1, o.opt.resizeLock && o.scrollTo(o.slide * o.itemWidth, 0), (s || t) && (o.bindArrows(), o.buildDots(), o.bindDrag()), o.updateControls(), o.emit(e ? "refresh" : "loaded");
  }, t.bindDrag = function () {
    var t = this;
    t.mouse = t.mouse || t.handleMouse.bind(t);

    function e() {
      t.mouseDown = void 0, t.ele.classList.remove("drag"), t.isDrag && (t.preventClick = !0), t.isDrag = !1;
    }

    var o = {
      mouseup: e,
      mouseleave: e,
      mousedown: function mousedown(e) {
        e.preventDefault(), e.stopPropagation(), t.mouseDown = e.clientX, t.ele.classList.add("drag");
      },
      mousemove: t.mouse,
      click: function click(e) {
        t.preventClick && (e.preventDefault(), e.stopPropagation()), t.preventClick = !1;
      }
    };
    t.ele.classList.toggle("draggable", !0 === t.opt.draggable), t.event(t.ele, "remove", o), t.opt.draggable && t.event(t.ele, "add", o);
  }, t.buildDots = function () {
    var e = this;

    if (e.opt.dots) {
      if ("string" == typeof e.opt.dots ? e.dots = document.querySelector(e.opt.dots) : e.dots = e.opt.dots, e.dots) {
        e.dots.innerHTML = "", e.dots.classList.add("glider-dots");

        for (var t = 0; t < Math.ceil(e.slides.length / e.opt.slidesToShow); ++t) {
          var o = document.createElement("button");
          o.dataset.index = t, o.setAttribute("aria-label", "Page " + (t + 1)), o.className = "glider-dot " + (t ? "" : "active"), e.event(o, "add", {
            click: e.scrollItem.bind(e, t, !0)
          }), e.dots.appendChild(o);
        }
      }
    } else e.dots && (e.dots.innerHTML = "");
  }, t.bindArrows = function () {
    var o = this;
    o.opt.arrows ? ["prev", "next"].forEach(function (e) {
      var t = o.opt.arrows[e];
      t && ("string" == typeof t && (t = document.querySelector(t)), t._func = t._func || o.scrollItem.bind(o, e), o.event(t, "remove", {
        click: t._func
      }), o.event(t, "add", {
        click: t._func
      }), o.arrows[e] = t);
    }) : Object.keys(o.arrows).forEach(function (e) {
      var t = o.arrows[e];
      o.event(t, "remove", {
        click: t._func
      });
    });
  }, t.updateControls = function (e) {
    var d = this;
    e && !d.opt.scrollPropagate && e.stopPropagation();
    var t = d.containerWidth >= d.trackWidth;
    d.opt.rewind || (d.arrows.prev && d.arrows.prev.classList.toggle("disabled", d.ele.scrollLeft <= 0 || t), d.arrows.next && d.arrows.next.classList.toggle("disabled", Math.ceil(d.ele.scrollLeft + d.containerWidth) >= Math.floor(d.trackWidth) || t)), d.slide = Math.round(d.ele.scrollLeft / d.itemWidth), d.page = Math.round(d.ele.scrollLeft / d.containerWidth);
    var c = d.slide + Math.floor(Math.floor(d.opt.slidesToShow) / 2),
        h = Math.floor(d.opt.slidesToShow) % 2 ? 0 : c + 1;
    1 === Math.floor(d.opt.slidesToShow) && (h = 0), d.ele.scrollLeft + d.containerWidth >= Math.floor(d.trackWidth) && (d.page = d.dots ? d.dots.children.length - 1 : 0), [].forEach.call(d.slides, function (e, t) {
      var o = e.classList,
          i = o.contains("visible"),
          r = d.ele.scrollLeft,
          s = d.ele.scrollLeft + d.containerWidth,
          l = d.itemWidth * t,
          n = l + d.itemWidth;
      [].forEach.call(o, function (e) {
        /^left|right/.test(e) && o.remove(e);
      }), o.toggle("active", d.slide === t), c === t || h && h === t ? o.add("center") : (o.remove("center"), o.add([t < c ? "left" : "right", Math.abs(t - (t < c ? c : h || c))].join("-")));
      var a = Math.ceil(l) >= r && Math.floor(n) <= s;
      o.toggle("visible", a), a !== i && d.emit("slide-" + (a ? "visible" : "hidden"), {
        slide: t
      });
    }), d.dots && [].forEach.call(d.dots.children, function (e, t) {
      e.classList.toggle("active", d.page === t);
    }), e && d.opt.scrollLock && (clearTimeout(d.scrollLock), d.scrollLock = setTimeout(function () {
      clearTimeout(d.scrollLock), 0.02 < Math.abs(d.ele.scrollLeft / d.itemWidth - d.slide) && (d.mouseDown || d.trackWidth > d.containerWidth + d.ele.scrollLeft && d.scrollItem(d.getCurrentSlide()));
    }, d.opt.scrollLockDelay || 250));
  }, t.getCurrentSlide = function () {
    var e = this;
    return e.round(e.ele.scrollLeft / e.itemWidth);
  }, t.scrollItem = function (e, t, o) {
    o && o.preventDefault();
    var i = this,
        r = e;
    if (++i.animate_id, !0 === t) e *= i.containerWidth, e = Math.round(e / i.itemWidth) * i.itemWidth;else {
      if ("string" == typeof e) {
        var s = "prev" === e;

        if (e = i.opt.slidesToScroll % 1 || i.opt.slidesToShow % 1 ? i.getCurrentSlide() : i.slide, s ? e -= i.opt.slidesToScroll : e += i.opt.slidesToScroll, i.opt.rewind) {
          var l = i.ele.scrollLeft;
          e = s && !l ? i.slides.length : !s && l + i.containerWidth >= Math.floor(i.trackWidth) ? 0 : e;
        }
      }

      e = Math.max(Math.min(e, i.slides.length), 0), i.slide = e, e = i.itemWidth * e;
    }
    return i.scrollTo(e, i.opt.duration * Math.abs(i.ele.scrollLeft - e), function () {
      i.updateControls(), i.emit("animated", {
        value: r,
        type: "string" == typeof r ? "arrow" : t ? "dot" : "slide"
      });
    }), !1;
  }, t.settingsBreakpoint = function () {
    var e = this,
        t = e._opt.responsive;

    if (t) {
      t.sort(function (e, t) {
        return t.breakpoint - e.breakpoint;
      });

      for (var o = 0; o < t.length; ++o) {
        var i = t[o];
        if (a.innerWidth >= i.breakpoint) return e.breakpoint !== i.breakpoint && (e.opt = Object.assign({}, e._opt, i.settings), e.breakpoint = i.breakpoint, !0);
      }
    }

    var r = 0 !== e.breakpoint;
    return e.opt = Object.assign({}, e._opt), e.breakpoint = 0, r;
  }, t.scrollTo = function (t, o, i) {
    var r = this,
        s = new Date().getTime(),
        l = r.animate_id,
        n = function n() {
      var e = new Date().getTime() - s;
      r.ele.scrollLeft = r.ele.scrollLeft + (t - r.ele.scrollLeft) * r.opt.easing(0, e, 0, 1, o), e < o && l === r.animate_id ? a.requestAnimationFrame(n) : (r.ele.scrollLeft = t, i && i.call(r));
    };

    a.requestAnimationFrame(n);
  }, t.removeItem = function (e) {
    var t = this;
    t.slides.length && (t.track.removeChild(t.slides[e]), t.refresh(!0), t.emit("remove"));
  }, t.addItem = function (e) {
    this.track.appendChild(e), this.refresh(!0), this.emit("add");
  }, t.handleMouse = function (e) {
    var t = this;
    t.mouseDown && (t.isDrag = !0, t.ele.scrollLeft += (t.mouseDown - e.clientX) * (t.opt.dragVelocity || 3.3), t.mouseDown = e.clientX);
  }, t.round = function (e) {
    var t = 1 / (this.opt.slidesToScroll % 1 || 1);
    return Math.round(e * t) / t;
  }, t.refresh = function (e) {
    this.init(!0, e);
  }, t.setOption = function (t, e) {
    var o = this;
    o.breakpoint && !e ? o._opt.responsive.forEach(function (e) {
      e.breakpoint === o.breakpoint && (e.settings = Object.assign({}, e.settings, t));
    }) : o._opt = Object.assign({}, o._opt, t), o.breakpoint = 0, o.settingsBreakpoint();
  }, t.destroy = function () {
    function e(t) {
      t.removeAttribute("style"), [].forEach.call(t.classList, function (e) {
        /^glider/.test(e) && t.classList.remove(e);
      });
    }

    var t = this,
        o = t.ele.cloneNode(!0);
    o.children[0].outerHTML = o.children[0].innerHTML, e(o), [].forEach.call(o.getElementsByTagName("*"), e), t.ele.parentNode.replaceChild(o, t.ele), t.event(a, "remove", {
      resize: t.resize
    }), t.emit("destroy");
  }, t.emit = function (e, t) {
    var o = new a.CustomEvent("glider-" + e, {
      bubbles: !this.opt.eventPropagate,
      detail: t
    });
    this.ele.dispatchEvent(o);
  }, t.event = function (e, t, o) {
    var i = e[t + "EventListener"].bind(e);
    Object.keys(o).forEach(function (e) {
      i(e, o[e]);
    });
  }, e;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/

/* global define */
(function (factory) {
  typeof define === "function" && define.amd ? define(factory) : (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" ? module.exports = factory() : factory();
})(function () {
  "use strict"; // eslint-disable-line no-unused-expressions

  /* globals window:true */


  var _window = typeof window !== "undefined" ? window : this;

  var Glider = _window.Glider = function (element, settings) {
    var _ = this;

    if (element._glider) return element._glider;
    _.ele = element;

    _.ele.classList.add("glider"); // expose glider object to its DOM element


    _.ele._glider = _; // merge user setting with defaults

    _.opt = Object.assign({}, {
      slidesToScroll: 1,
      slidesToShow: 1,
      resizeLock: true,
      duration: 0.5,
      // easeInQuad
      easing: function easing(x, t, b, c, d) {
        return c * (t /= d) * t + b;
      }
    }, settings); // set defaults

    _.animate_id = _.page = _.slide = 0;
    _.arrows = {}; // preserve original options to
    // extend breakpoint settings

    _._opt = _.opt;

    if (_.opt.skipTrack) {
      // first and only child is the track
      _.track = _.ele.children[0];
    } else {
      // create track and wrap slides
      _.track = document.createElement("div");

      _.ele.appendChild(_.track);

      while (_.ele.children.length !== 1) {
        _.track.appendChild(_.ele.children[0]);
      }
    }

    _.track.classList.add("glider-track"); // start glider


    _.init(); // set events


    _.resize = _.init.bind(_, true);

    _.event(_.ele, "add", {
      scroll: _.updateControls.bind(_)
    });

    _.event(_window, "add", {
      resize: _.resize
    });
  };

  var gliderPrototype = Glider.prototype;

  gliderPrototype.init = function (refresh, paging) {
    var _ = this;

    var width = 0;
    var height = 0;
    _.slides = _.track.children;
    [].forEach.call(_.slides, function (_) {
      _.classList.add("glider-slide");
    });
    _.containerWidth = _.ele.clientWidth;

    var breakpointChanged = _.settingsBreakpoint();

    if (!paging) paging = breakpointChanged;

    if (_.opt.slidesToShow === "auto" || typeof _.opt._autoSlide !== "undefined") {
      var slideCount = _.containerWidth / _.opt.itemWidth;
      _.opt._autoSlide = _.opt.slidesToShow = _.opt.exactWidth ? slideCount : Math.floor(slideCount);
    }

    if (_.opt.slidesToScroll === "auto") {
      _.opt.slidesToScroll = Math.floor(_.opt.slidesToShow);
    }

    _.itemWidth = _.opt.exactWidth ? _.opt.itemWidth : _.containerWidth / _.opt.slidesToShow; // set slide dimensions

    [].forEach.call(_.slides, function (__) {
      __.style.height = "auto";
      __.style.width = _.itemWidth + "px";
      width += _.itemWidth;
      height = Math.max(__.offsetHeight, height);
    });
    _.track.style.width = width + "px";
    _.trackWidth = width;
    _.isDrag = false;
    _.preventClick = false;
    _.opt.resizeLock && _.scrollTo(_.slide * _.itemWidth, 0);

    if (breakpointChanged || paging) {
      _.bindArrows();

      _.buildDots();

      _.bindDrag();
    }

    _.updateControls();

    _.emit(refresh ? "refresh" : "loaded");
  };

  gliderPrototype.bindDrag = function () {
    var _ = this;

    _.mouse = _.mouse || _.handleMouse.bind(_);

    var mouseup = function mouseup() {
      _.mouseDown = undefined;

      _.ele.classList.remove("drag");

      if (_.isDrag) {
        _.preventClick = true;
      }

      _.isDrag = false;
    };

    var events = {
      mouseup: mouseup,
      mouseleave: mouseup,
      mousedown: function mousedown(e) {
        e.preventDefault();
        e.stopPropagation();
        _.mouseDown = e.clientX;

        _.ele.classList.add("drag");
      },
      mousemove: _.mouse,
      click: function click(e) {
        if (_.preventClick) {
          e.preventDefault();
          e.stopPropagation();
        }

        _.preventClick = false;
      }
    };

    _.ele.classList.toggle("draggable", _.opt.draggable === true);

    _.event(_.ele, "remove", events);

    if (_.opt.draggable) _.event(_.ele, "add", events);
  };

  gliderPrototype.buildDots = function () {
    var _ = this;

    if (!_.opt.dots) {
      if (_.dots) _.dots.innerHTML = "";
      return;
    }

    if (typeof _.opt.dots === "string") {
      _.dots = document.querySelector(_.opt.dots);
    } else _.dots = _.opt.dots;

    if (!_.dots) return;
    _.dots.innerHTML = "";

    _.dots.classList.add("glider-dots");

    for (var i = 0; i < Math.ceil(_.slides.length / _.opt.slidesToShow); ++i) {
      var dot = document.createElement("button");
      dot.dataset.index = i;
      dot.setAttribute("aria-label", "Page " + (i + 1));
      dot.className = "glider-dot " + (i ? "" : "active");

      _.event(dot, "add", {
        click: _.scrollItem.bind(_, i, true)
      });

      _.dots.appendChild(dot);
    }
  };

  gliderPrototype.bindArrows = function () {
    var _ = this;

    if (!_.opt.arrows) {
      Object.keys(_.arrows).forEach(function (direction) {
        var element = _.arrows[direction];

        _.event(element, "remove", {
          click: element._func
        });
      });
      return;
    }

    ["prev", "next"].forEach(function (direction) {
      var arrow = _.opt.arrows[direction];

      if (arrow) {
        if (typeof arrow === "string") arrow = document.querySelector(arrow);
        arrow._func = arrow._func || _.scrollItem.bind(_, direction);

        _.event(arrow, "remove", {
          click: arrow._func
        });

        _.event(arrow, "add", {
          click: arrow._func
        });

        _.arrows[direction] = arrow;
      }
    });
  };

  gliderPrototype.updateControls = function (event) {
    var _ = this;

    if (event && !_.opt.scrollPropagate) {
      event.stopPropagation();
    }

    var disableArrows = _.containerWidth >= _.trackWidth;

    if (!_.opt.rewind) {
      if (_.arrows.prev) {
        _.arrows.prev.classList.toggle("disabled", _.ele.scrollLeft <= 0 || disableArrows);
      }

      if (_.arrows.next) {
        _.arrows.next.classList.toggle("disabled", Math.ceil(_.ele.scrollLeft + _.containerWidth) >= Math.floor(_.trackWidth) || disableArrows);
      }
    }

    _.slide = Math.round(_.ele.scrollLeft / _.itemWidth);
    _.page = Math.round(_.ele.scrollLeft / _.containerWidth);
    var middle = _.slide + Math.floor(Math.floor(_.opt.slidesToShow) / 2);
    var extraMiddle = Math.floor(_.opt.slidesToShow) % 2 ? 0 : middle + 1;

    if (Math.floor(_.opt.slidesToShow) === 1) {
      extraMiddle = 0;
    } // the last page may be less than one half of a normal page width so
    // the page is rounded down. when at the end, force the page to turn


    if (_.ele.scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)) {
      _.page = _.dots ? _.dots.children.length - 1 : 0;
    }

    [].forEach.call(_.slides, function (slide, index) {
      var slideClasses = slide.classList;
      var wasVisible = slideClasses.contains("visible");
      var start = _.ele.scrollLeft;
      var end = _.ele.scrollLeft + _.containerWidth;
      var itemStart = _.itemWidth * index;
      var itemEnd = itemStart + _.itemWidth;
      [].forEach.call(slideClasses, function (className) {
        /^left|right/.test(className) && slideClasses.remove(className);
      });
      slideClasses.toggle("active", _.slide === index);

      if (middle === index || extraMiddle && extraMiddle === index) {
        slideClasses.add("center");
      } else {
        slideClasses.remove("center");
        slideClasses.add([index < middle ? "left" : "right", Math.abs(index - (index < middle ? middle : extraMiddle || middle))].join("-"));
      }

      var isVisible = Math.ceil(itemStart) >= start && Math.floor(itemEnd) <= end;
      slideClasses.toggle("visible", isVisible);

      if (isVisible !== wasVisible) {
        _.emit("slide-" + (isVisible ? "visible" : "hidden"), {
          slide: index
        });
      }
    });

    if (_.dots) {
      [].forEach.call(_.dots.children, function (dot, index) {
        dot.classList.toggle("active", _.page === index);
      });
    }

    if (event && _.opt.scrollLock) {
      clearTimeout(_.scrollLock);
      _.scrollLock = setTimeout(function () {
        clearTimeout(_.scrollLock); // dont attempt to scroll less than a pixel fraction - causes looping

        if (Math.abs(_.ele.scrollLeft / _.itemWidth - _.slide) > 0.02) {
          if (!_.mouseDown) {
            // Only scroll if not at the end (#94)
            if (_.trackWidth > _.containerWidth + _.ele.scrollLeft) {
              _.scrollItem(_.getCurrentSlide());
            }
          }
        }
      }, _.opt.scrollLockDelay || 250);
    }
  };

  gliderPrototype.getCurrentSlide = function () {
    var _ = this;

    return _.round(_.ele.scrollLeft / _.itemWidth);
  };

  gliderPrototype.scrollItem = function (slide, dot, e) {
    if (e) e.preventDefault();

    var _ = this;

    var originalSlide = slide;
    ++_.animate_id;

    if (dot === true) {
      slide = slide * _.containerWidth;
      slide = Math.round(slide / _.itemWidth) * _.itemWidth;
    } else {
      if (typeof slide === "string") {
        var backwards = slide === "prev"; // use precise location if fractional slides are on

        if (_.opt.slidesToScroll % 1 || _.opt.slidesToShow % 1) {
          slide = _.getCurrentSlide();
        } else {
          slide = _.slide;
        }

        if (backwards) slide -= _.opt.slidesToScroll;else slide += _.opt.slidesToScroll;

        if (_.opt.rewind) {
          var scrollLeft = _.ele.scrollLeft;
          slide = backwards && !scrollLeft ? _.slides.length : !backwards && scrollLeft + _.containerWidth >= Math.floor(_.trackWidth) ? 0 : slide;
        }
      }

      slide = Math.max(Math.min(slide, _.slides.length), 0);
      _.slide = slide;
      slide = _.itemWidth * slide;
    }

    _.scrollTo(slide, _.opt.duration * Math.abs(_.ele.scrollLeft - slide), function () {
      _.updateControls();

      _.emit("animated", {
        value: originalSlide,
        type: typeof originalSlide === "string" ? "arrow" : dot ? "dot" : "slide"
      });
    });

    return false;
  };

  gliderPrototype.settingsBreakpoint = function () {
    var _ = this;

    var resp = _._opt.responsive;

    if (resp) {
      // Sort the breakpoints in mobile first order
      resp.sort(function (a, b) {
        return b.breakpoint - a.breakpoint;
      });

      for (var i = 0; i < resp.length; ++i) {
        var size = resp[i];

        if (_window.innerWidth >= size.breakpoint) {
          if (_.breakpoint !== size.breakpoint) {
            _.opt = Object.assign({}, _._opt, size.settings);
            _.breakpoint = size.breakpoint;
            return true;
          }

          return false;
        }
      }
    } // set back to defaults in case they were overriden


    var breakpointChanged = _.breakpoint !== 0;
    _.opt = Object.assign({}, _._opt);
    _.breakpoint = 0;
    return breakpointChanged;
  };

  gliderPrototype.scrollTo = function (scrollTarget, scrollDuration, callback) {
    var _ = this;

    var start = new Date().getTime();
    var animateIndex = _.animate_id;

    var animate = function animate() {
      var now = new Date().getTime() - start;
      _.ele.scrollLeft = _.ele.scrollLeft + (scrollTarget - _.ele.scrollLeft) * _.opt.easing(0, now, 0, 1, scrollDuration);

      if (now < scrollDuration && animateIndex === _.animate_id) {
        _window.requestAnimationFrame(animate);
      } else {
        _.ele.scrollLeft = scrollTarget;
        callback && callback.call(_);
      }
    };

    _window.requestAnimationFrame(animate);
  };

  gliderPrototype.removeItem = function (index) {
    var _ = this;

    if (_.slides.length) {
      _.track.removeChild(_.slides[index]);

      _.refresh(true);

      _.emit("remove");
    }
  };

  gliderPrototype.addItem = function (ele) {
    var _ = this;

    _.track.appendChild(ele);

    _.refresh(true);

    _.emit("add");
  };

  gliderPrototype.handleMouse = function (e) {
    var _ = this;

    if (_.mouseDown) {
      _.isDrag = true;
      _.ele.scrollLeft += (_.mouseDown - e.clientX) * (_.opt.dragVelocity || 3.3);
      _.mouseDown = e.clientX;
    }
  }; // used to round to the nearest 0.XX fraction


  gliderPrototype.round = function (double) {
    var _ = this;

    var step = _.opt.slidesToScroll % 1 || 1;
    var inv = 1.0 / step;
    return Math.round(double * inv) / inv;
  };

  gliderPrototype.refresh = function (paging) {
    var _ = this;

    _.init(true, paging);
  };

  gliderPrototype.setOption = function (opt, global) {
    var _ = this;

    if (_.breakpoint && !global) {
      _._opt.responsive.forEach(function (v) {
        if (v.breakpoint === _.breakpoint) {
          v.settings = Object.assign({}, v.settings, opt);
        }
      });
    } else {
      _._opt = Object.assign({}, _._opt, opt);
    }

    _.breakpoint = 0;

    _.settingsBreakpoint();
  };

  gliderPrototype.destroy = function () {
    var _ = this;

    var replace = _.ele.cloneNode(true);

    var clear = function clear(ele) {
      ele.removeAttribute("style");
      [].forEach.call(ele.classList, function (className) {
        /^glider/.test(className) && ele.classList.remove(className);
      });
    }; // remove track


    replace.children[0].outerHTML = replace.children[0].innerHTML;
    clear(replace);
    [].forEach.call(replace.getElementsByTagName("*"), clear);

    _.ele.parentNode.replaceChild(replace, _.ele);

    _.event(_window, "remove", {
      resize: _.resize
    });

    _.emit("destroy");
  };

  gliderPrototype.emit = function (name, arg) {
    var _ = this;

    var e = new _window.CustomEvent("glider-" + name, {
      bubbles: !_.opt.eventPropagate,
      detail: arg
    });

    _.ele.dispatchEvent(e);
  };

  gliderPrototype.event = function (ele, type, args) {
    var eventHandler = ele[type + "EventListener"].bind(ele);
    Object.keys(args).forEach(function (k) {
      eventHandler(k, args[k]);
    });
  };

  return Glider;
});