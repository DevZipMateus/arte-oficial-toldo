document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var iconMenu = document.getElementById('iconMenu');
  var iconClose = document.getElementById('iconClose');

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    iconMenu.style.display = 'block';
    iconClose.style.display = 'none';
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      iconMenu.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    });
  }

  /* ---------- Scroll to section (works from any page) ---------- */
  document.querySelectorAll('[data-scroll]').forEach(function (el) {
    el.addEventListener('click', function () {
      var id = el.getAttribute('data-scroll');
      var onIndex = /(^|\/)index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname.endsWith('/');
      closeMenu();
      if (onIndex) {
        var target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = 'index.html#' + id;
      }
    });
  });

  // If arriving with a hash, scroll to it after load
  if (location.hash) {
    var id = location.hash.substring(1);
    setTimeout(function () {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  /* ---------- Hero background carousel ---------- */
  var heroSlides = document.querySelectorAll('.hero-bg-slide');
  if (heroSlides.length > 1) {
    var heroIndex = 0;
    setInterval(function () {
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }, 3000);
  }

  /* ---------- Work gallery carousel ---------- */
  var galTrack = document.getElementById('galTrack');
  var galPrev = document.getElementById('galPrev');
  var galNext = document.getElementById('galNext');

  if (galTrack) {
    function galStep() {
      var item = galTrack.querySelector('.gallery-item');
      return item ? item.getBoundingClientRect().width + 16 : 300;
    }
    function galScroll(dir) {
      galTrack.scrollBy({ left: dir * galStep(), behavior: 'smooth' });
    }
    if (galPrev) galPrev.addEventListener('click', function () { galScroll(-1); });
    if (galNext) galNext.addEventListener('click', function () { galScroll(1); });

    var galAutoplay = setInterval(function () {
      var atEnd = galTrack.scrollLeft + galTrack.clientWidth >= galTrack.scrollWidth - 5;
      if (atEnd) {
        galTrack.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        galScroll(1);
      }
    }, 3000);

    galTrack.addEventListener('mouseenter', function () { clearInterval(galAutoplay); });
  }

});
