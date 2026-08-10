const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.querySelector('[data-current-year]');
if (year) year.textContent = new Date().getFullYear();


// Full-screen evidence viewer with native-resolution-aware zoom.
(() => {
  const screenshots = document.querySelectorAll('[data-evidence-image], .gsc-figure img, .case-visual img, .archive-visual img');
  const proofButtons = document.querySelectorAll('[data-lightbox-src]');
  if (!screenshots.length && !proofButtons.length) return;

  let lastFocused = null;
  let scale = 1;
  let maxScale = 1;
  let tx = 0, ty = 0;
  let dragging = false, startX = 0, startY = 0, startTx = 0, startTy = 0;
  let lastTap = 0;

  const overlay = document.createElement('div');
  overlay.className = 'evidence-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'SEO evidence preview');
  overlay.hidden = true;
  overlay.innerHTML = `
    <button class="evidence-lightbox__close" type="button" aria-label="Close image preview">×</button>
    <div class="evidence-lightbox__toolbar" aria-label="Image zoom controls">
      <button type="button" data-zoom-out aria-label="Zoom out">−</button>
      <span data-zoom-level>100%</span>
      <button type="button" data-zoom-in aria-label="Zoom in">+</button>
      <button type="button" data-zoom-reset aria-label="Reset zoom">Reset</button>
    </div>
    <div class="evidence-lightbox__stage" tabindex="0" aria-label="Zoomable image area">
      <img class="evidence-lightbox__image" alt="" draggable="false">
    </div>
    <div class="evidence-lightbox__help">Tap twice or use + / − to zoom. Drag to inspect details.</div>
  `;
  document.body.appendChild(overlay);

  const image = overlay.querySelector('.evidence-lightbox__image');
  const stage = overlay.querySelector('.evidence-lightbox__stage');
  const closeButton = overlay.querySelector('.evidence-lightbox__close');
  const zoomIn = overlay.querySelector('[data-zoom-in]');
  const zoomOut = overlay.querySelector('[data-zoom-out]');
  const zoomReset = overlay.querySelector('[data-zoom-reset]');
  const zoomLevel = overlay.querySelector('[data-zoom-level]');

  const updateTransform = () => {
    if (scale <= 1) { tx = 0; ty = 0; }
    image.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${scale})`;
    zoomLevel.textContent = `${Math.round(scale * 100)}%`;
    stage.classList.toggle('is-zoomed', scale > 1.001);
    zoomIn.disabled = scale >= maxScale - .001;
    zoomOut.disabled = scale <= 1.001;
  };

  const computeMaxScale = () => {
    const rect = image.getBoundingClientRect();
    const displayedW = rect.width / Math.max(scale, .001);
    const displayedH = rect.height / Math.max(scale, .001);
    const nativeRatio = Math.min(
      image.naturalWidth / Math.max(displayedW, 1),
      image.naturalHeight / Math.max(displayedH, 1)
    );
    // Never intentionally scale beyond native pixel density; cap extreme zoom for usability.
    maxScale = Math.max(1, Math.min(4, nativeRatio));
    if (scale > maxScale) scale = maxScale;
    updateTransform();
  };

  const setScale = (next) => {
    scale = Math.min(maxScale, Math.max(1, next));
    updateTransform();
  };

  const openLightbox = (source) => {
    lastFocused = document.activeElement;
    const src = source.dataset?.lightboxSrc || source.currentSrc || source.src;
    const alt = source.dataset?.lightboxAlt || source.alt || 'SEO evidence screenshot';
    scale = 1; tx = 0; ty = 0; maxScale = 1;
    image.src = src;
    image.alt = alt;
    overlay.hidden = false;
    document.documentElement.classList.add('lightbox-open');
    document.body.classList.add('lightbox-open');
    image.onload = () => requestAnimationFrame(() => { computeMaxScale(); updateTransform(); });
    requestAnimationFrame(() => overlay.classList.add('is-open'));
    closeButton.focus({ preventScroll: true });
  };

  const closeLightbox = () => {
    overlay.classList.remove('is-open');
    document.documentElement.classList.remove('lightbox-open');
    document.body.classList.remove('lightbox-open');
    window.setTimeout(() => {
      overlay.hidden = true;
      image.removeAttribute('src');
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus({ preventScroll: true });
    }, 180);
  };

  screenshots.forEach((img) => {
    img.classList.add('evidence-zoom-trigger');
    img.setAttribute('title', 'Click or tap to inspect full-size evidence');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `${img.alt || 'Evidence image'}. Open full-screen zoomable preview.`);
    img.addEventListener('click', () => openLightbox(img));
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLightbox(img); }
    });
  });
  proofButtons.forEach((button) => button.addEventListener('click', () => openLightbox(button)));

  zoomIn.addEventListener('click', () => setScale(scale + .25));
  zoomOut.addEventListener('click', () => setScale(scale - .25));
  zoomReset.addEventListener('click', () => { scale = 1; tx = 0; ty = 0; updateTransform(); });
  closeButton.addEventListener('click', closeLightbox);

  stage.addEventListener('wheel', (event) => {
    if (overlay.hidden) return;
    event.preventDefault();
    setScale(scale + (event.deltaY < 0 ? .2 : -.2));
  }, { passive: false });

  stage.addEventListener('pointerdown', (event) => {
    if (scale <= 1) return;
    dragging = true; startX = event.clientX; startY = event.clientY; startTx = tx; startTy = ty;
    stage.setPointerCapture?.(event.pointerId);
  });
  stage.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    tx = startTx + event.clientX - startX; ty = startTy + event.clientY - startY; updateTransform();
  });
  stage.addEventListener('pointerup', () => { dragging = false; });
  stage.addEventListener('pointercancel', () => { dragging = false; });

  stage.addEventListener('click', (event) => {
    const now = Date.now();
    if (now - lastTap < 320) setScale(scale > 1 ? 1 : Math.min(maxScale, 2));
    lastTap = now;
    event.stopPropagation();
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeLightbox();
  });
  window.addEventListener('resize', () => { if (!overlay.hidden) computeMaxScale(); });
  document.addEventListener('keydown', (event) => {
    if (overlay.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === '+' || event.key === '=') setScale(scale + .25);
    if (event.key === '-') setScale(scale - .25);
    if (event.key === '0') { scale = 1; tx = 0; ty = 0; updateTransform(); }
  });
})();
