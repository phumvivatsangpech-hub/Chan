/* เสื่อกกจันทบูร — main.js (vanilla, no build) */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  var SVGNS = 'http://www.w3.org/2000/svg';
  var XLINK = 'http://www.w3.org/1999/xlink';
  var NAV_H = 68;
  var hasRO = typeof window.ResizeObserver === 'function';
  var hasIO = typeof window.IntersectionObserver === 'function';
  var raf = window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : function (cb) { return setTimeout(cb, 16); };
  var mqReduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function reduced() { return !!(mqReduce && mqReduce.matches); }
  function rnd(v) { return Math.round(v * 10) / 10; }
  // เลขอารบิก → เลขไทย
  function thai(n) {
    return String(n).replace(/[0-9]/g, function (d) { return String.fromCharCode(0x0E50 + +d); });
  }
  function attempt(fn) {
    try { fn(); } catch (err) { if (window.console && console.warn) console.warn('[main.js]', err); }
  }
  function focusEl(el) {
    if (!el || typeof el.focus !== 'function') return;
    try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); }
  }
  function ornament(cls) {
    var svg = doc.createElementNS(SVGNS, 'svg');
    svg.setAttribute('class', cls);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    var use = doc.createElementNS(SVGNS, 'use');
    use.setAttribute('href', '#prajamyam');
    use.setAttributeNS(XLINK, 'xlink:href', '#prajamyam');
    svg.appendChild(use);
    return svg;
  }

  /* ---------- shared scroll/resize frame: all reads, then all writes ---------- */
  var jobs = [];
  var frameQueued = false;
  function requestFrame() {
    if (!frameQueued) { frameQueued = true; raf(runFrame); }
  }
  function runFrame() {
    frameQueued = false;
    var st = {
      vh: window.innerHeight || root.clientHeight,
      y: window.pageYOffset || root.scrollTop || 0,
      sh: root.scrollHeight
    };
    var writes = [];
    for (var i = 0; i < jobs.length; i++) {
      var w = jobs[i](st);
      if (w) writes.push(w);
    }
    for (var j = 0; j < writes.length; j++) writes[j]();
  }

  /* ---------- Mat card corners ---------- */
  function initCorners() {
    $$('.mat-card').forEach(function (card) {
      for (var c = card.firstElementChild; c; c = c.nextElementSibling) {
        if (/\bmat-card__corner\b/.test(c.getAttribute('class') || '')) return;
      }
      // prepend (absolute) so `.mat-card > :last-child` rules keep working
      card.insertBefore(ornament('mat-card__corner mat-card__corner--br'), card.firstChild);
      card.insertBefore(ornament('mat-card__corner mat-card__corner--tl'), card.firstChild);
    });
  }

  /* ---------- Reading progress ---------- */
  function initProgress() {
    var el = $('.reading-progress');
    if (!el) return;
    var last = -1;
    jobs.push(function (st) {
      var max = st.sh - st.vh;
      var p = max > 0 ? clamp(st.y / max, 0, 1) : 0;
      p = Math.round(p * 1000) / 1000;
      if (p === last) return null;
      return function () { last = p; el.style.setProperty('--progress', String(p)); };
    });
  }

  /* ---------- Hero / nav state ---------- */
  function initHero() {
    var hero = doc.getElementById('top');
    if (!hero) return;
    var nav = $('.top-nav');
    var past = null;
    function set(v) {
      if (v === past) return;
      past = v;
      root.classList.toggle('is-past-hero', v);
      if (nav) nav.classList.toggle('is-solid', v);
    }
    if (hasIO) {
      new IntersectionObserver(function (entries) {
        var e = entries[entries.length - 1];
        set(!e.isIntersecting && e.boundingClientRect.bottom <= NAV_H + 1);
      }, { rootMargin: '-' + NAV_H + 'px 0px 0px 0px', threshold: 0 }).observe(hero);
    } else {
      jobs.push(function () {
        var v = hero.getBoundingClientRect().bottom <= NAV_H;
        return v === past ? null : function () { set(v); };
      });
    }
  }

  /* ---------- Scrollspy (nav + process TOC) ---------- */
  function hashId(a) {
    var h = a.getAttribute('href') || '';
    if (h.charAt(0) !== '#' || h.length < 2) return '';
    try { return decodeURIComponent(h.slice(1)); } catch (e) { return h.slice(1); }
  }

  function addSpy(links, targets, opt) {
    if (!links.length || !targets.length) return;
    var ids = links.map(hashId);
    var current = null;
    jobs.push(function (st) {
      var line = st.vh * 0.45;
      var idx = -1, lastIdx = -1, lastBottom = 0, tops = [], i, r;
      if (!(opt.hero && opt.hero.getBoundingClientRect().bottom > line)) {
        for (i = 0; i < targets.length; i++) {
          r = targets[i].getBoundingClientRect();
          tops[i] = r.height ? r.top : null;
          if (!r.height) continue;
          lastIdx = i;
          if (r.top <= line) { idx = i; lastBottom = r.bottom; }
        }
        // past the last target → nothing current
        if (idx !== -1 && idx === lastIdx && lastBottom < line) idx = -1;
        // at page bottom: last target still on screen wins
        if (opt.bottom && st.y + st.vh >= st.sh - 2) {
          for (i = targets.length - 1; i >= 0; i--) {
            if (tops[i] !== null && tops[i] < st.vh) { idx = i; break; }
          }
        }
      }
      var id = idx === -1 ? '' : targets[idx].id;
      if (id === current) return null;
      return function () {
        current = id;
        links.forEach(function (a, k) {
          if (id && ids[k] === id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      };
    });
  }

  function initSpy() {
    // top-level sections only (nested section[id] would steal the spot)
    var sections = $$('main section[id]').filter(function (s) {
      return !(s.parentElement && s.parentElement.closest('main section'));
    });
    addSpy($$('.top-nav__link[href^="#"], .tab-bar__link[href^="#"]'), sections, {
      hero: doc.getElementById('top'),
      bottom: true
    });
    addSpy($$('.process-toc a[href^="#"]'), $$('.process-group[id]'), {});
  }

  /* ---------- Reed timeline ---------- */
  function initTimelines() {
    $$('.timeline').forEach(function (tl) {
      var fill = $('.timeline__fill', tl);
      var items = $$('.timeline__item', tl).map(function (el) {
        return { el: el, knot: $('.timeline__knot', el), on: el.classList.contains('is-reached') };
      }).filter(function (it) { return it.knot; });
      if (!items.length) return;
      var lastF = 0;
      var primed = !fill;
      if (fill) {
        fill.style.transition = 'none'; // no 1→0 animation on load
        fill.style.setProperty('--fill', '0');
      }
      jobs.push(function (st) {
        var line = st.vh * 0.65, lastC = null, states = [], changed = false, i, r, c;
        for (i = 0; i < items.length; i++) {
          r = items[i].knot.getBoundingClientRect();
          c = r.top + r.height / 2;
          states[i] = r.height > 0 && c < line;
          if (states[i]) lastC = c;
          if (states[i] !== items[i].on) changed = true;
        }
        var f = 0;
        if (fill && lastC !== null) {
          // offset* ignore the scaleY transform on the fill
          var op = fill.offsetParent || tl;
          var h = fill.offsetHeight;
          var top = op.getBoundingClientRect().top + op.clientTop + fill.offsetTop;
          f = h > 0 ? Math.round(clamp((lastC - top) / h, 0, 1) * 1e4) / 1e4 : 0;
        }
        if (!changed && f === lastF && primed) return null;
        return function () {
          for (var k = 0; k < items.length; k++) {
            if (items[k].on !== states[k]) {
              items[k].on = states[k];
              items[k].el.classList.toggle('is-reached', states[k]);
            }
          }
          if (fill && f !== lastF) { lastF = f; fill.style.setProperty('--fill', String(f)); }
          if (!primed) { primed = true; raf(function () { fill.style.transition = ''; }); }
        };
      });
    });
  }

  /* ---------- Pattern gallery dots ---------- */
  function initGalleries() {
    $$('.pattern-track[data-dots]').forEach(function (track) {
      var box = doc.getElementById(track.getAttribute('data-dots'));
      var cards = Array.prototype.filter.call(track.children, function (c) {
        return c.classList.contains('pattern-card');
      });
      var n = cards.length;
      if (!box || n < 2) return;
      var pos = [], pad = 0, active = -1, queued = false;
      var frag = doc.createDocumentFragment();
      var dots = cards.map(function (card, i) {
        var b = doc.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'ไปที่การ์ดที่ ' + thai(i + 1) + ' จาก ' + thai(n));
        b.appendChild(ornament('ornament'));
        b.addEventListener('click', function () { go(i); });
        frag.appendChild(b);
        return b;
      });
      box.textContent = '';
      box.appendChild(frag);

      function measure() {
        var cs = getComputedStyle(track);
        var sp = parseFloat(cs.scrollPaddingLeft);
        pad = isFinite(sp) ? sp : (parseFloat(cs.paddingLeft) || 0);
        // card left edges in scroll-content coordinates
        var origin = track.getBoundingClientRect().left + track.clientLeft - track.scrollLeft;
        pos = cards.map(function (c) { return c.getBoundingClientRect().left - origin; });
      }
      function update() {
        queued = false;
        var x = track.scrollLeft, max = track.scrollWidth - track.clientWidth, best = 0, bestD = Infinity;
        if (max > 2 && x >= max - 2) best = n - 1;
        else {
          for (var i = 0; i < n; i++) {
            var d = Math.abs(pos[i] - pad - x);
            if (d < bestD) { bestD = d; best = i; }
          }
        }
        if (best === active) return;
        if (active > -1) dots[active].removeAttribute('aria-current');
        dots[best].setAttribute('aria-current', 'true');
        active = best;
      }
      function go(i) {
        measure();
        var left = Math.max(0, pos[i] - pad);
        if (typeof track.scrollTo === 'function') {
          try { track.scrollTo({ left: left, behavior: reduced() ? 'auto' : 'smooth' }); return; } catch (e) { /* fall through */ }
        }
        track.scrollLeft = left;
      }
      function refresh() { measure(); update(); }

      track.addEventListener('scroll', function () {
        if (!queued) { queued = true; raf(update); }
      }, { passive: true });
      window.addEventListener('load', refresh);
      if (hasRO) new ResizeObserver(refresh).observe(track); // fires once on observe
      else { window.addEventListener('resize', refresh, { passive: true }); raf(refresh); }
    });
  }

  /* ---------- Map card ---------- */
  function initMaps() {
    var boxes = $$('[data-map]');
    var single = boxes.length === 1;
    boxes.forEach(function (box) {
      // scoped to the card; if only one map on the page, fall back to document
      function pick(sel) {
        var l = $$(sel, box);
        return l.length || !single ? l : $$(sel);
      }
      var chips = $$('button.chip[data-place]', box);
      var frame = $('.map-frame', box);
      var loadBtn = $('[data-map-load]', box);
      var status = pick('[data-map-status]')[0] || null;
      var gLinks = pick('a[data-map-google]');
      var aLinks = pick('a[data-map-apple]');
      var names = pick('[data-map-place-name]');
      var iframe = null, cur = null, sayTimer = 0;

      function place() {
        var src = cur || box;
        return {
          q: src.getAttribute('data-query') || '',
          name: src.getAttribute('data-name') || (cur ? cur.textContent.trim() : '')
        };
      }
      function embed(q) {
        return 'https://www.google.com/maps?q=' + encodeURIComponent(q) + '&output=embed&hl=th';
      }
      function say(msg) {
        if (!status) return;
        clearTimeout(sayTimer);
        status.textContent = '';
        sayTimer = setTimeout(function () { status.textContent = msg; }, 60);
      }
      function select(chip, announce) {
        cur = chip;
        chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        var p = place();
        if (p.name) names.forEach(function (el) { el.textContent = p.name; });
        if (p.q) {
          var q = encodeURIComponent(p.q);
          gLinks.forEach(function (a) { a.href = 'https://www.google.com/maps/dir/?api=1&destination=' + q; });
          aLinks.forEach(function (a) { a.href = 'https://maps.apple.com/?daddr=' + q + '&q=' + encodeURIComponent(p.name); });
          if (iframe) {
            var src = embed(p.q);
            if (iframe.getAttribute('src') !== src) iframe.src = src;
            iframe.title = 'แผนที่ ' + p.name;
          }
        }
        if (announce) say('แสดง ' + p.name);
      }
      function load() {
        if (iframe || !frame) return;
        var p = place();
        if (!p.q) return;
        var center = $('.map-frame__center', frame);
        var active = doc.activeElement;
        var hadFocus = active === loadBtn || !!(center && center.contains(active));
        iframe = doc.createElement('iframe');
        iframe.title = 'แผนที่ ' + p.name;
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        iframe.setAttribute('allowfullscreen', '');
        iframe.src = embed(p.q);
        frame.appendChild(iframe);
        if (center && center.parentNode) center.parentNode.removeChild(center);
        if (root.contains(loadBtn)) { loadBtn.hidden = true; loadBtn.style.display = 'none'; }
        if (hadFocus) focusEl(iframe);
        say('กำลังแสดงแผนที่ ' + p.name);
      }

      chips.forEach(function (c) {
        c.addEventListener('click', function () { select(c, true); });
      });
      var initial = chips.filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; })[0] || chips[0];
      if (initial) select(initial, false);
      if (loadBtn) loadBtn.addEventListener('click', load);
    });
  }

  /* ---------- Process strands (เส้นกกเชื่อมขั้นตอน) ---------- */
  function initStrands() {
    var hosts = $$('.process-track');
    if (!hosts.length) hosts = $$('ol.process-list'); // legacy markup
    if (!hosts.length) return;
    var svgOf = new WeakMap(), keyOf = new WeakMap();
    var dirty = [], queued = false;

    hosts.forEach(function (host) {
      var svg = null;
      for (var c = host.firstElementChild; c; c = c.nextElementSibling) {
        if (c.tagName.toLowerCase() === 'svg' && /\bprocess-strand\b/.test(c.getAttribute('class') || '')) { svg = c; break; }
      }
      if (!svg) {
        svg = doc.createElementNS(SVGNS, 'svg');
        svg.setAttribute('class', 'process-strand');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
        host.insertBefore(svg, host.firstChild);
      }
      svgOf.set(host, svg);
    });

    function mark(host) {
      if (dirty.indexOf(host) < 0) dirty.push(host);
      if (!queued) { queued = true; raf(flush); }
    }
    function markAll() { hosts.forEach(mark); }
    function flush() {
      queued = false;
      var todo = dirty;
      dirty = [];
      todo.map(measure).forEach(function (w) { if (w) w(); });
    }
    function measure(host) {
      var svg = svgOf.get(host);
      var w = host.clientWidth, h = host.clientHeight, pts = [];
      if (w && h) {
        var hr = host.getBoundingClientRect();
        var ox = hr.left + host.clientLeft, oy = hr.top + host.clientTop;
        $$('.step__badge', host).forEach(function (b) {
          var r = b.getBoundingClientRect();
          if (r.width) pts.push([rnd(r.left + r.width / 2 - ox), rnd(r.top + r.height / 2 - oy)]);
        });
      }
      var key = w + 'x' + h + ':' + pts.join(';');
      if (keyOf.get(host) === key) return null;
      return function () { keyOf.set(host, key); draw(svg, w, h, pts); };
    }
    function draw(svg, w, h, pts) {
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      svg.setAttribute('width', String(w));
      svg.setAttribute('height', String(h));
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      if (pts.length < 2) return;
      var path = doc.createElementNS(SVGNS, 'path');
      path.setAttribute('d', 'M' + pts.map(function (p) { return p[0] + ' ' + p[1]; }).join(' L'));
      svg.appendChild(path);
      for (var i = 1; i < pts.length; i++) {
        var k = doc.createElementNS(SVGNS, 'circle');
        k.setAttribute('cx', String(rnd((pts[i - 1][0] + pts[i][0]) / 2)));
        k.setAttribute('cy', String(rnd((pts[i - 1][1] + pts[i][1]) / 2)));
        k.setAttribute('r', '3');
        svg.appendChild(k);
      }
    }

    if (hasRO) {
      var ro = new ResizeObserver(function (entries) {
        entries.forEach(function (e) { mark(e.target); });
      });
      hosts.forEach(function (h) { ro.observe(h); });
    } else {
      window.addEventListener('resize', markAll, { passive: true });
      markAll();
    }
    window.addEventListener('load', markAll);
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(markAll, function () {});
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    var dlg = doc.getElementById('lightbox');
    if (!dlg) return;
    var img = $('.lightbox__img', dlg);
    var stage = $('.lightbox__stage', dlg);
    if (!img || !stage) return;
    var countEl = $('.lightbox__count', dlg);
    var textEl = $('.lightbox__text', dlg);
    var btnPrev = $('[data-lb-prev]', dlg);
    var btnNext = $('[data-lb-next]', dlg);
    var btnClose = $('[data-lb-close]', dlg);
    var canModal = typeof dlg.showModal === 'function';

    var items = [], index = 0, opener = null, isOpen = false, isModal = false, savedOverflow = '';
    var s = 1, tx = 0, ty = 0;           // current transform
    var ptrs = new Map(), g = null;      // active pointers + gesture state
    var lastTap = null, animTimer = 0, gestureBase = 1;

    img.draggable = false;

    function apply() {
      img.style.setProperty('--tx', rnd(tx) + 'px');
      img.style.setProperty('--ty', rnd(ty) + 'px');
      img.style.setProperty('--scale', String(Math.round(s * 1000) / 1000));
    }
    function stopAnim() { clearTimeout(animTimer); dlg.classList.remove('is-animating'); }
    function animate() {
      stopAnim();
      if (!reduced()) {
        dlg.classList.add('is-animating');
        animTimer = setTimeout(stopAnim, 260);
      }
      apply();
    }
    function animateTo(ns, ntx, nty) { s = ns; tx = ntx; ty = nty; animate(); }
    function clearDrag() { dlg.classList.remove('is-dragging-down'); dlg.style.removeProperty('--lb-alpha'); }
    function reset() { stopAnim(); clearDrag(); s = 1; tx = 0; ty = 0; apply(); }

    // cx/cy = untransformed image centre (screen); sizes ignore transforms
    function box() {
      var r = img.getBoundingClientRect();
      return {
        cx: r.left + r.width / 2 - tx, cy: r.top + r.height / 2 - ty,
        w: img.offsetWidth, h: img.offsetHeight, sw: stage.clientWidth, sh: stage.clientHeight
      };
    }
    function clampT(b) {
      var mx = Math.max(0, (b.w * s - b.sw) / 2), my = Math.max(0, (b.h * s - b.sh) / 2);
      tx = clamp(tx, -mx, mx);
      ty = clamp(ty, -my, my);
    }
    // keep image point under anchor (ax,ay) at screen point (bx,by); coords relative to centre
    function zoomTo(ns, ax, ay, bx, by, b, base) {
      ns = clamp(ns, 1, 4);
      if (ns <= 1.001) { s = 1; tx = 0; ty = 0; return; }
      var k = ns / base.s;
      tx = bx - k * (ax - base.tx);
      ty = by - k * (ay - base.ty);
      s = ns;
      clampT(b);
    }
    function zoomBy(f) {
      stopAnim();
      zoomTo(s * f, 0, 0, 0, 0, box(), { s: s, tx: tx, ty: ty });
      animate();
    }

    function itemOf(btn) {
      var im = $('img', btn);
      var fig = btn.closest('figure');
      var cap = null;
      if (fig) {
        for (var c = fig.firstElementChild; c; c = c.nextElementSibling) {
          if (c.tagName.toLowerCase() === 'figcaption') { cap = c; break; }
        }
      }
      return {
        src: btn.getAttribute('data-full') || (im ? im.currentSrc || im.src : '') || '',
        alt: im ? im.getAttribute('alt') || '' : '',
        cap: cap
      };
    }
    function cloneKids(from) {
      var frag = doc.createDocumentFragment();
      for (var n = from.firstChild; n; n = n.nextSibling) frag.appendChild(n.cloneNode(true));
      Array.prototype.forEach.call(frag.querySelectorAll('[id]'), function (el) { el.removeAttribute('id'); });
      return frag;
    }
    function preload(i) {
      var n = items.length;
      if (n < 2) return;
      var it = items[(i + n) % n];
      if (it && it.src && !it.pre) {
        it.pre = true;
        var im = new Image();
        im.decoding = 'async';
        im.src = it.src;
      }
    }
    function render() {
      var it = items[index];
      if (!it) return;
      var refocus = !!(textEl && textEl.contains(doc.activeElement));
      reset();
      if (it.src) img.src = it.src;
      else img.removeAttribute('src');
      img.alt = it.alt;
      if (textEl) {
        textEl.textContent = '';
        if (it.cap) textEl.appendChild(cloneKids(it.cap));
      }
      if (countEl) countEl.textContent = 'ภาพที่ ' + thai(index + 1) + ' จาก ' + thai(items.length);
      preload(index + 1);
      preload(index - 1);
      if (refocus) focusEl(btnClose);
    }
    function go(d) {
      var n = items.length;
      if (n < 2) return;
      index = (index + d + n) % n;
      render();
    }

    function open(trigger) {
      var group = trigger.getAttribute('data-lightbox');
      var list = $$('button.zoom-btn[data-lightbox]').filter(function (b) {
        return b.getAttribute('data-lightbox') === group;
      });
      items = list.map(itemOf);
      index = Math.max(0, list.indexOf(trigger));
      opener = trigger;
      var multi = items.length > 1;
      [btnPrev, btnNext].forEach(function (b) {
        if (!b) return;
        b.hidden = !multi;
        b.style.display = multi ? '' : 'none'; // .lightbox__btn{display:grid} beats [hidden]
      });
      render();
      if (isOpen) return;
      isOpen = true;
      savedOverflow = root.style.overflow;
      root.style.overflow = 'hidden';
      isModal = false;
      if (canModal) {
        try { dlg.showModal(); isModal = true; } catch (e) { /* fallback below */ }
      }
      if (!isModal) {
        dlg.setAttribute('open', '');
        dlg.style.position = 'fixed';
        dlg.style.top = '0';
        dlg.style.left = '0';
        dlg.style.zIndex = '1000';
      }
      focusEl(btnClose);
    }
    function close() {
      if (!isOpen) return;
      if (isModal && dlg.open) {
        try { dlg.close(); return; } catch (e) { /* fall through */ }
      }
      dlg.removeAttribute('open');
      onClosed();
    }
    // cleanup for every close path (button, Esc/cancel, swipe)
    function onClosed() {
      if (!isOpen) return;
      isOpen = false;
      isModal = false;
      root.style.overflow = savedOverflow;
      ptrs.clear();
      g = null;
      lastTap = null;
      reset();
      var el = opener;
      opener = null;
      if (el && root.contains(el)) focusEl(el);
    }
    dlg.addEventListener('close', onClosed);

    doc.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('button.zoom-btn[data-lightbox]') : null;
      if (!t || dlg.contains(t)) return;
      e.preventDefault();
      open(t);
    });
    if (btnPrev) btnPrev.addEventListener('click', function () { go(-1); });
    if (btnNext) btnNext.addEventListener('click', function () { go(1); });
    if (btnClose) btnClose.addEventListener('click', close);

    dlg.addEventListener('keydown', function (e) {
      if (!isOpen || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      var k = e.key;
      if (k === 'ArrowLeft' || k === 'Left') {
        if (items.length > 1) { e.preventDefault(); go(-1); }
      } else if (k === 'ArrowRight' || k === 'Right') {
        if (items.length > 1) { e.preventDefault(); go(1); }
      } else if (k === '+' || k === '=') {
        e.preventDefault(); zoomBy(1.5);
      } else if (k === '-' || k === '_') {
        e.preventDefault(); zoomBy(1 / 1.5);
      } else if (k === '0') {
        e.preventDefault(); stopAnim(); animateTo(1, 0, 0);
      } else if ((k === 'Escape' || k === 'Esc') && !isModal) {
        e.preventDefault(); close();
      }
    });

    /* gestures */
    function firstTwo() {
      var it = ptrs.values();
      return [it.next().value, it.next().value];
    }
    function startSingle(p) {
      g.mode = s > 1 ? 'pan' : 'swipe';
      g.x0 = p.x; g.y0 = p.y; g.tx0 = tx; g.ty0 = ty; g.axis = '';
    }
    function startPinch() {
      var q = firstTwo();
      if (g.mode === 'swipe' && (tx || ty)) { tx = 0; ty = 0; clearDrag(); }
      g.mode = 'pinch';
      g.tap = false;
      g.d0 = Math.max(1, Math.hypot(q[1].x - q[0].x, q[1].y - q[0].y));
      g.s0 = s; g.tx0 = tx; g.ty0 = ty;
      g.ax = (q[0].x + q[1].x) / 2 - g.b.cx;
      g.ay = (q[0].y + q[1].y) / 2 - g.b.cy;
    }
    function onTap(x, y) {
      var now = Date.now();
      if (lastTap && now - lastTap.t < 300 && Math.hypot(x - lastTap.x, y - lastTap.y) < 24) {
        lastTap = null;
        if (s > 1) { animateTo(1, 0, 0); return; }
        var b = box(), mx = x - b.cx, my = y - b.cy;
        zoomTo(2.5, mx, my, mx, my, b, { s: s, tx: tx, ty: ty });
        animate();
      } else {
        lastTap = { t: now, x: x, y: y };
      }
    }

    stage.addEventListener('pointerdown', function (e) {
      if (!isOpen || ptrs.size >= 2) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target.closest && e.target.closest('button, a')) return;
      if (!ptrs.size) {
        stopAnim();
        g = { b: box(), t0: Date.now(), tap: true };
      }
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { stage.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      if (ptrs.size === 2) startPinch();
      else startSingle(ptrs.get(e.pointerId));
    }, { passive: true });

    stage.addEventListener('pointermove', function (e) {
      var p = ptrs.get(e.pointerId);
      if (!p || !g) return;
      p.x = e.clientX;
      p.y = e.clientY;
      if (g.mode === 'pinch') {
        if (ptrs.size < 2) return;
        var q = firstTwo();
        var d = Math.hypot(q[1].x - q[0].x, q[1].y - q[0].y);
        zoomTo(g.s0 * d / g.d0, g.ax, g.ay,
          (q[0].x + q[1].x) / 2 - g.b.cx, (q[0].y + q[1].y) / 2 - g.b.cy,
          g.b, { s: g.s0, tx: g.tx0, ty: g.ty0 });
        apply();
        return;
      }
      var dx = p.x - g.x0, dy = p.y - g.y0;
      if (g.tap && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) g.tap = false;
      if (g.mode === 'pan') {
        tx = g.tx0 + dx;
        ty = g.ty0 + dy;
        clampT(g.b);
        apply();
      } else if (g.mode === 'swipe') {
        if (!g.axis) {
          if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
          g.axis = Math.abs(dx) >= Math.abs(dy) ? 'x' : (dy > 0 ? 'down' : 'up');
        }
        if (g.axis === 'x') {
          tx = items.length > 1 ? dx : dx * 0.3;
          ty = 0;
        } else if (g.axis === 'down') {
          tx = 0;
          ty = Math.max(0, dy);
          dlg.classList.add('is-dragging-down');
          dlg.style.setProperty('--lb-alpha', (0.95 - Math.min(ty / 400, 1) * 0.45).toFixed(3));
        } else {
          return;
        }
        apply();
      }
    }, { passive: true });

    function onUp(e) {
      var p = ptrs.get(e.pointerId);
      if (!p) return;
      ptrs.delete(e.pointerId);
      if (!g) return;
      var cancelled = e.type === 'pointercancel';
      if (g.mode === 'pinch') {
        if (ptrs.size === 1) {
          // one finger left: keep panning if zoomed, otherwise ignore until lifted
          var q = ptrs.values().next().value;
          g.mode = s > 1 ? 'pan' : 'idle';
          g.x0 = q.x; g.y0 = q.y; g.tx0 = tx; g.ty0 = ty;
        }
        return;
      }
      if (ptrs.size) return;
      var gg = g;
      g = null;
      var dx = p.x - gg.x0, dy = p.y - gg.y0, ax = Math.abs(dx);
      if (gg.mode === 'swipe') {
        if (!cancelled && ax > 50 && ax > Math.abs(dy) && items.length > 1) { go(dx < 0 ? 1 : -1); return; }
        if (!cancelled && dy > 90 && dy > ax) { close(); return; }
        clearDrag();
        if (tx || ty) animateTo(1, 0, 0);
      } else if (s < 1.02 && (s !== 1 || tx || ty)) {
        animateTo(1, 0, 0);
      }
      if (gg.tap && !cancelled && Date.now() - gg.t0 < 300) onTap(p.x, p.y);
    }
    stage.addEventListener('pointerup', onUp, { passive: true });
    stage.addEventListener('pointercancel', onUp, { passive: true });

    // trackpad pinch (Chrome/Firefox send ctrl+wheel); plain wheel pans when zoomed
    stage.addEventListener('wheel', function (e) {
      if (!isOpen) return;
      var unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? stage.clientHeight : 1;
      if (e.ctrlKey) {
        e.preventDefault();
        stopAnim();
        var b = box(), mx = e.clientX - b.cx, my = e.clientY - b.cy;
        zoomTo(s * Math.exp(-e.deltaY * unit * 0.01), mx, my, mx, my, b, { s: s, tx: tx, ty: ty });
        apply();
      } else if (s > 1) {
        e.preventDefault();
        stopAnim();
        tx -= e.deltaX * unit;
        ty -= e.deltaY * unit;
        clampT(box());
        apply();
      }
    }, { passive: false });

    // Safari trackpad pinch (GestureEvent); touch pinch is handled by pointers
    stage.addEventListener('gesturestart', function (e) {
      e.preventDefault();
      gestureBase = s;
    }, { passive: false });
    stage.addEventListener('gesturechange', function (e) {
      e.preventDefault();
      if (!isOpen || ptrs.size || !isFinite(e.scale)) return;
      stopAnim();
      var b = box();
      var mx = isFinite(e.clientX) ? e.clientX - b.cx : 0;
      var my = isFinite(e.clientY) ? e.clientY - b.cy : 0;
      zoomTo(gestureBase * e.scale, mx, my, mx, my, b, { s: s, tx: tx, ty: ty });
      apply();
    }, { passive: false });
  }

  /* ---------- boot ---------- */
  function init() {
    attempt(initCorners);
    attempt(initProgress);
    attempt(initHero);
    attempt(initSpy);
    attempt(initTimelines);
    attempt(initGalleries);
    attempt(initMaps);
    attempt(initStrands);
    attempt(initLightbox);

    if (jobs.length) {
      window.addEventListener('scroll', requestFrame, { passive: true });
      window.addEventListener('resize', requestFrame, { passive: true });
      window.addEventListener('load', requestFrame);
      window.addEventListener('pageshow', requestFrame);
      if (hasRO && doc.body) new ResizeObserver(function () { requestFrame(); }).observe(doc.body);
      requestFrame();
    }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
})();
