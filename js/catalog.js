document.addEventListener('DOMContentLoaded', function () {

  function imgs(slug, count) {
    var arr = [];
    for (var i = 1; i <= count; i++) {
      var num = i < 10 ? '0' + i : '' + i;
      arr.push('images/catalogo/' + slug + '/' + num + '.jpg');
    }
    return arr;
  }

  var IMAGE_DATA = {
    'toldo-bola': imgs('toldo-bola', 5),
    'toldo-curvo-lona': imgs('toldo-curvo-lona', 8),
    'toldo-fixo-lona': imgs('toldo-fixo-lona', 10),
    'toldo-lua-lona': imgs('toldo-lua-lona', 9),
    'toldo-lua-policarbonato': imgs('toldo-lua-policarbonato', 8),
    'passarela-lona': imgs('passarela-lona', 8),
    'passarela-policarbonato': imgs('passarela-policarbonato', 6),
    'toldo-reto-policarbonato': imgs('toldo-reto-policarbonato', 12),
    'aluminio': imgs('aluminio', 5),
    'policarbonato': imgs('policarbonato', 5),
    'sanefa': imgs('sanefa', 4),
    'cobertura-inversor-solar': imgs('cobertura-inversor-solar', 5),
    'garagem-telhas': imgs('garagem-telhas', 5),
    'modelo-francis': imgs('modelo-francis', 5),
    'pergolado': imgs('pergolado', 7),
    'sombrites': imgs('sombrites', 5),
    'tendas': imgs('tendas', 6)
  };

  var CATEGORIES = [
    {
      id: 'toldo-fixo',
      label: 'Toldo Fixo',
      subcategories: [
        { id: 'toldo-bola', label: 'Toldo Bola' },
        { id: 'toldo-curvo-lona', label: 'Toldo Curvo de Lona' },
        { id: 'toldo-fixo-lona', label: 'Toldo Fixo de Lona' },
        { id: 'toldo-lua-lona', label: 'Toldo Lua de Lona' },
        { id: 'toldo-lua-policarbonato', label: 'Toldo Lua em Policarbonato' },
        { id: 'passarela-policarbonato', label: 'Passarela Policarbonato' },
        { id: 'passarela-lona', label: 'Passarela Lona' },
        { id: 'toldo-reto-policarbonato', label: 'Toldo Reto Policarbonato' }
      ]
    },
    {
      id: 'toldos-retratil',
      label: 'Toldos Retrátil',
      subcategories: [
        { id: 'aluminio', label: 'Alumínio' },
        { id: 'policarbonato', label: 'Policarbonato' },
        { id: 'sanefa', label: 'Sanefa' }
      ]
    },
    { id: 'cobertura-inversor-solar', label: 'Cobertura para Inversor Solar' },
    { id: 'garagem-telhas', label: 'Garagem de Telhas' },
    { id: 'modelo-francis', label: 'Modelo FRANCIS' },
    { id: 'pergolado', label: 'Pergolado' },
    { id: 'sombrites', label: 'Sombrites' },
    { id: 'tendas', label: 'Tendas' }
  ];

  var categoryList = document.getElementById('categoryList');
  var galleryPanel = document.getElementById('galleryPanel');
  if (!categoryList || !galleryPanel) return;

  var currentImages = [];
  var currentIndex = 0;
  var activeCategoryId = null;
  var activeSubcategoryId = null;

  var chevronRight = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
  var chevronDown = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  function buildCategoryList() {
    categoryList.innerHTML = '';
    CATEGORIES.forEach(function (cat) {
      var li = document.createElement('li');

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'category-btn';
      btn.dataset.id = cat.id;
      btn.innerHTML = '<span>' + cat.label + '</span>' + (cat.subcategories ? '<span class="chevron">' + chevronRight + '</span>' : '');
      li.appendChild(btn);

      var subList = null;
      if (cat.subcategories) {
        subList = document.createElement('ul');
        subList.className = 'subcategory-list';
        cat.subcategories.forEach(function (sub) {
          var subLi = document.createElement('li');
          var subBtn = document.createElement('button');
          subBtn.type = 'button';
          subBtn.className = 'subcategory-btn';
          subBtn.dataset.id = sub.id;
          subBtn.textContent = sub.label;
          subBtn.addEventListener('click', function () {
            selectSubcategory(cat.id, sub.id);
          });
          subLi.appendChild(subBtn);
          subList.appendChild(subLi);
        });
        li.appendChild(subList);
      }

      btn.addEventListener('click', function () {
        if (cat.subcategories) {
          var isOpen = subList.classList.toggle('open');
          btn.querySelector('.chevron').innerHTML = isOpen ? chevronDown : chevronRight;
          setActiveCategory(cat.id, false);
        } else {
          closeAllSubLists();
          setActiveCategory(cat.id, true);
          activeSubcategoryId = null;
          loadImages(cat.id);
        }
      });

      categoryList.appendChild(li);
    });
  }

  function closeAllSubLists() {
    categoryList.querySelectorAll('.subcategory-list').forEach(function (el) {
      el.classList.remove('open');
    });
    categoryList.querySelectorAll('.category-btn .chevron').forEach(function (el) {
      el.innerHTML = chevronRight;
    });
  }

  function setActiveCategory(id, exclusive) {
    activeCategoryId = id;
    categoryList.querySelectorAll('.category-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.id === id);
    });
    if (exclusive) {
      categoryList.querySelectorAll('.subcategory-btn').forEach(function (b) {
        b.classList.remove('active');
      });
    }
  }

  function selectSubcategory(catId, subId) {
    activeCategoryId = catId;
    activeSubcategoryId = subId;
    setActiveCategory(catId, false);
    categoryList.querySelectorAll('.subcategory-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.id === subId);
    });
    loadImages(subId);
  }

  function loadImages(key) {
    currentImages = IMAGE_DATA[key] || [];
    currentIndex = 0;
    renderGallery();
  }

  function renderGallery() {
    if (currentImages.length === 0) {
      galleryPanel.innerHTML = '<div class="gallery-panel-placeholder"><p>Nenhuma imagem encontrada para esta categoria.</p></div>';
      return;
    }

    var showThumbs = currentImages.length > 1;

    var html = '';
    html += '<div class="gallery-main-image" id="mainImageWrap">';
    html += '  <img id="mainImage" src="' + currentImages[currentIndex] + '" alt="Imagem ' + (currentIndex + 1) + '">';
    html += '  <div class="overlay">Clique para ampliar</div>';
    if (showThumbs) {
      html += '  <button type="button" class="gallery-nav-btn prev" id="mainPrev" aria-label="Anterior">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>';
      html += '  <button type="button" class="gallery-nav-btn next" id="mainNext" aria-label="Próximo">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>';
    }
    html += '</div>';

    if (showThumbs) {
      html += '<div class="gallery-counter" id="galleryCounter">' + (currentIndex + 1) + ' de ' + currentImages.length + '</div>';
      html += '<div class="thumb-grid" id="thumbGrid">';
      currentImages.forEach(function (src, i) {
        html += '<button type="button" data-index="' + i + '" class="' + (i === currentIndex ? 'active' : '') + '"><img src="' + src + '" alt="Miniatura ' + (i + 1) + '" loading="lazy"></button>';
      });
      html += '</div>';
    }

    galleryPanel.innerHTML = html;

    var mainImageWrap = document.getElementById('mainImageWrap');
    mainImageWrap.addEventListener('click', function (e) {
      if (e.target.closest('.gallery-nav-btn')) return;
      openLightbox(currentIndex);
    });

    var mainPrev = document.getElementById('mainPrev');
    var mainNext = document.getElementById('mainNext');
    if (mainPrev) mainPrev.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    if (mainNext) mainNext.addEventListener('click', function (e) { e.stopPropagation(); step(1); });

    var thumbGrid = document.getElementById('thumbGrid');
    if (thumbGrid) {
      thumbGrid.querySelectorAll('button').forEach(function (b) {
        b.addEventListener('click', function () {
          currentIndex = parseInt(b.dataset.index, 10);
          renderGallery();
        });
      });
    }
  }

  function step(dir) {
    currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
    renderGallery();
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxPrev = document.getElementById('lightboxPrev');
  var lightboxNext = document.getElementById('lightboxNext');

  function openLightbox(index) {
    if (!lightbox) return;
    currentIndex = index;
    lightboxImg.src = currentImages[currentIndex];
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function lightboxStep(dir) {
    currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
  }

  if (lightbox) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function () { lightboxStep(-1); });
    lightboxNext.addEventListener('click', function () { lightboxStep(1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxStep(-1);
      if (e.key === 'ArrowRight') lightboxStep(1);
    });
  }

  buildCategoryList();
});
