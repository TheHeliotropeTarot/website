/* Shared behaviour for every page.
   Currently: marks the current page in the navigation. The .active styling
   already lives in style.css; this is what decides which link gets it. */
(function () {
  var file = location.pathname.split('/').pop();
  if (!file) file = 'index.html';

  var link = document.querySelector('.nav-links a[href="' + file + '"]');
  if (!link) return;

  link.classList.add('active');
  link.setAttribute('aria-current', 'page');
})();
