/* Shared behaviour for every page.
   1. Marks the current page in the navigation (.active lives in style.css).
   2. Settles sections upward as they scroll into view. */
(function () {
  var file = location.pathname.split('/').pop();
  if (!file) file = 'index.html';

  var link = document.querySelector('.nav-links a[href="' + file + '"]');
  if (link) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
})();

(function () {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;

  // The hero is never hidden: it is the first thing a visitor sees and must
  // not fade in. Everything after it reveals as it arrives.
  var targets = document.querySelectorAll('body > section:not(.room-hero)');
  if (!targets.length) return;

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i, 3) * 60 + 'ms';
  });

  // The huge top margin is deliberate. It extends the observed area far above
  // the viewport so anything already scrolled past still counts as seen and
  // gets revealed. Without it, a fast scroll or a jump to the foot of a long
  // page skips sections and strands them at opacity 0 for good. It must stay
  // larger than any page on the site, hence the absurd number rather than a
  // tuned one.
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '100000px 0px -12% 0px', threshold: 0 });

  targets.forEach(function (el) { io.observe(el); });
})();
