/*! Free Online Tools Widgets – https://pdfseotools.com/widgets – MIT License */
(function () {
  'use strict';
  var BASE = 'https://pdfseotools.com/';
  function safe(v, re, d) { return v && re.test(v) ? v : d; }
  function build(box) {
    if (box.getAttribute('data-ready')) return;
    box.setAttribute('data-ready', '1');
    var tool = safe(box.getAttribute('data-tool'), /^[a-z0-9-]{2,60}$/, 'word-counter');
    var h = parseInt(box.getAttribute('data-height'), 10);
    if (!(h >= 300 && h <= 1600)) h = 620;
    var border = safe(box.getAttribute('data-border'), /^#[0-9a-fA-F]{3,8}$/, '#e2e8f0');
    var name = tool.replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    var f = document.createElement('iframe');
    f.src = BASE + tool + '?embed=1';
    f.title = name + ' – PDF SEO Tools';
    f.loading = 'lazy';
    f.style.cssText = 'width:100%;height:' + h + 'px;border:2px solid ' + border + ';border-radius:10px';
    var p = document.createElement('p');
    p.style.cssText = 'text-align:right;font-size:12px;margin:4px 0';
    p.innerHTML = 'Powered by <a href="' + BASE + tool + '" target="_blank" rel="nofollow">PDF SEO Tools</a>';
    box.appendChild(f);
    box.appendChild(p);
  }
  function run() {
    var list = document.querySelectorAll('.pst-widget');
    for (var i = 0; i < list.length; i++) build(list[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
