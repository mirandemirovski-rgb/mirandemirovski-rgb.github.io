/* Shared helpers for the five preview styles. No libraries. */
(function () {
  "use strict";

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  document.documentElement.classList.add("js");
  if (reduced) document.documentElement.classList.add("reduced");

  var STYLES = [
    { slug: "blueprint", name: "Blueprint" },
    { slug: "darkroom", name: "Darkroom" },
    { slug: "ink", name: "Ink" },
    { slug: "live-ops", name: "Live Ops" },
    { slug: "swiss", name: "Swiss Grid" }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // Escape text and turn [[gaps]] into visible marks.
  function t(s) {
    return esc(s).replace(/\[\[(.+?)\]\]/g, '<mark class="gap" title="Missing: waiting for your answer">$1</mark>');
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  // Run fn(element) once, when the element first enters the viewport.
  function onView(els, fn, opts) {
    opts = opts || {};
    if (!els) return;
    if (!els.length && els.nodeType) els = [els];
    if (reduced || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (e) { fn(e); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { io.unobserve(en.target); fn(en.target); }
      });
    }, { threshold: opts.threshold != null ? opts.threshold : 0.18, rootMargin: opts.rootMargin || "0px 0px -8% 0px" });
    Array.prototype.forEach.call(els, function (e) { io.observe(e); });
  }

  // Add class "in" when visible.
  function reveal(els, opts) { onView(els, function (e) { e.classList.add("in"); }, opts); }

  var easeOut = function (x) { return 1 - Math.pow(1 - x, 3); };
  var easeInOut = function (x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };

  function tween(dur, fn, ease, done) {
    if (reduced) { fn(1); if (done) done(); return; }
    var start = null;
    ease = ease || easeOut;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      fn(ease(p));
      if (p < 1) requestAnimationFrame(step); else if (done) done();
    }
    requestAnimationFrame(step);
  }

  function fmtNum(v, dec) { return dec ? v.toFixed(dec) : String(Math.round(v)); }

  function countUp(node, to, opts) {
    opts = opts || {};
    var dec = opts.decimals || 0, suffix = opts.suffix || "", from = opts.from || 0;
    tween(opts.duration || 1600, function (p) {
      node.textContent = fmtNum(from + (to - from) * p, dec) + (p === 1 ? suffix : "");
    }, easeOut);
  }

  // Wrap each word (or character) in a span with --i set for staggering.
  function split(node, by) {
    var text = node.textContent;
    node.textContent = "";
    node.setAttribute("aria-label", text);
    var parts = by === "char" ? Array.from(text) : text.split(/(\s+)/);
    var i = 0;
    parts.forEach(function (p) {
      if (/^\s+$/.test(p)) { node.appendChild(document.createTextNode(p)); return; }
      var s = document.createElement("span");
      s.className = by === "char" ? "ch" : "w";
      s.setAttribute("aria-hidden", "true");
      s.style.setProperty("--i", i++);
      s.textContent = p === " " ? " " : p;
      node.appendChild(s);
    });
    return i;
  }

  // Calls fn on every scroll/resize frame.
  function onScroll(fn) {
    var queued = false;
    function run() { queued = false; fn(); }
    function q() { if (!queued) { queued = true; requestAnimationFrame(run); } }
    window.addEventListener("scroll", q, { passive: true });
    window.addEventListener("resize", q);
    q();
  }

  // 0 when the element's top reaches `start` of the viewport, 1 when its bottom reaches `end`.
  function progress(node, start, end) {
    var r = node.getBoundingClientRect(), vh = window.innerHeight;
    start = start == null ? 0.85 : start; end = end == null ? 0.5 : end;
    var p = (vh * start - r.top) / (vh * start - vh * end + r.height || 1);
    return Math.max(0, Math.min(1, p));
  }

  function pageProgress() {
    var d = document.documentElement;
    var max = d.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
  }

  function months(a) { return a[0] * 12 + (a[1] - 1); }

  function nowYM() { var d = new Date(); return [d.getFullYear(), d.getMonth() + 1]; }

  // The small bar that links the five previews together.
  function previewBar(slug) {
    var i = STYLES.findIndex(function (s) { return s.slug === slug; });
    var prev = STYLES[(i + STYLES.length - 1) % STYLES.length];
    var next = STYLES[(i + 1) % STYLES.length];
    var bar = el("nav", "pv-bar");
    bar.setAttribute("aria-label", "Preview navigation");
    bar.innerHTML =
      '<a class="pv-btn" href="' + prev.slug + '.html" aria-label="Previous style: ' + prev.name + '">&larr;</a>' +
      '<a class="pv-home" href="../index.html"><span class="pv-n">' + (i + 1) + '/5</span> ' + STYLES[i].name + '</a>' +
      '<button class="pv-btn pv-replay" type="button" aria-label="Replay the build">&#8635;</button>' +
      '<a class="pv-btn" href="' + next.slug + '.html" aria-label="Next style: ' + next.name + '">&rarr;</a>';
    document.body.appendChild(bar);
    bar.querySelector(".pv-replay").addEventListener("click", function () {
      window.scrollTo(0, 0);
      location.reload();
    });
  }

  window.addEventListener("load", function () { window.scrollTo(0, 0); });

  window.Core = {
    reduced: reduced, finePointer: finePointer, STYLES: STYLES,
    esc: esc, t: t, $: $, $$: $$, el: el,
    onView: onView, reveal: reveal, tween: tween, easeOut: easeOut, easeInOut: easeInOut,
    countUp: countUp, fmtNum: fmtNum, split: split, onScroll: onScroll, progress: progress,
    pageProgress: pageProgress, months: months, nowYM: nowYM, previewBar: previewBar
  };
})();
