/* Pokozo ads: fills every .ad-slot-top / .ad-slot-mid with an AdSense unit.
   Put your AdSense slot IDs below (AdSense > Ads > By ad unit > Get code > data-ad-slot). */
(function () {
  var CLIENT = 'ca-pub-5523912402347259';
  var SLOTS = {
    top: '', // e.g. '1234567890'
    mid: ''  // e.g. '0987654321'
  };

  var slots = [];
  [['top', '.ad-slot-top'], ['mid', '.ad-slot-mid']].forEach(function (p) {
    if (!SLOTS[p[0]]) return;
    document.querySelectorAll(p[1]).forEach(function (box) {
      if (box.querySelector('ins.adsbygoogle')) return;
      var ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.cssText = 'display:block;width:100%;position:relative;z-index:2';
      ins.setAttribute('data-ad-client', CLIENT);
      ins.setAttribute('data-ad-slot', SLOTS[p[0]]);
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
      box.appendChild(ins);
      slots.push(ins);
    });
  });
  if (!slots.length) return;

  var s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + CLIENT;
  document.head.appendChild(s);
  slots.forEach(function () {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  });
})();
