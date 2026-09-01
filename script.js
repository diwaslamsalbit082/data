/* ==========================================================================
   VISUAL STORIES — Gallery Script
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. GALLERY DATA
   Add a new photo by adding one object here — nothing else needs to change.
--------------------------------------------------------------------------- */
const galleryImages = [
  { id: 1,  src: "images/image-01.jpg", title: "Golden Hour Bench",       category: "Moments",      description: "Six friends gathered on a bench as warm sunset light spills over the hills.", location: "Vederator, Nepal", date: "2025-09-14", tags: ["friends","sunset","group","vederator"] },
  { id: 2,  src: "images/image-02.jpg", title: "Sunny Group Selfie",      category: "Moments",      description: "A bright afternoon selfie with the whole crew — lens flare and all.", location: "Vederator, Nepal", date: "2025-09-14", tags: ["selfie","friends","sunlight","vederator"] },
  { id: 3,  src: "images/image-03.jpg", title: "City Lights Below",       category: "Nature",       description: "A night stop on the hillside — phone glow, distant city lights and deep darkness.", location: "Heaven Daada, Nepal", date: "2025-10-02", tags: ["night","hills","city-lights","heaven-daada"] },
  { id: 4,  src: "images/image-04.jpg", title: "Framing the Sunset",      category: "Nature",       description: "Filming the horizon as golden light breaks through misty mountain ridges.", location: "Vederator, Nepal", date: "2025-09-14", tags: ["sunset","mountains","viewpoint","vederator"] },
  { id: 5,  src: "images/image-05.jpg", title: "Down the Hill Road",      category: "Travel",       description: "Five friends walking away together on a paved road through green hills.", location: "Vederator, Nepal", date: "2025-09-13", tags: ["road","walk","friends","vederator"] },

  { id: 6,  src: "images/image-06.jpg", title: "Balcony Mirror Selfie",   category: "Moments",      description: "Three friends reflected in glass, hills and rooftops stretching behind them.", location: "Vederator, Nepal", date: "2025-09-13", tags: ["selfie","mirror","balcony","vederator"] },
  { id: 7,  src: "images/image-07.jpg", title: "Above the Clouds",        category: "Travel",       description: "Standing at the railing with a full sea of clouds rolling below.", location: "Ramita, Nepal", date: "2025-11-08", tags: ["clouds","viewpoint","friends","ramita"] },
  { id: 8,  src: "images/image-08.jpg", title: "Roadside Pulsar",         category: "Travel",       description: "Arms crossed, bike parked — a quiet pause on a cloudy mountain road.", location: "Ramita, Nepal", date: "2025-11-08", tags: ["motorcycle","pulsar","road","ramita"] },
  { id: 9,  src: "images/image-09.jpg", title: "Hill Road Selfie",        category: "Moments",      description: "Four friends close together on a winding road with terraced green hills behind.", location: "Ramita, Nepal", date: "2025-11-07", tags: ["selfie","friends","hills","ramita"] },
  { id: 10, src: "images/image-10.jpg", title: "Grassy Slope Crew",       category: "Moments",      description: "A tight group selfie on a bright green hillside — smiles all around.", location: "Heaven Daada, Nepal", date: "2025-10-03", tags: ["selfie","friends","grass","heaven-daada"] },

  { id: 11, src: "images/image-11.jpg", title: "Honda on the Pass",       category: "Travel",       description: "Perched on a Honda scooter with stone walls and blue sky on a mountain road.", location: "Namja, Nepal", date: "2025-12-01", tags: ["scooter","honda","road","namja"] },
  { id: 12, src: "images/image-12.jpg", title: "NTORQ at the Ridge",      category: "Travel",       description: "Resting on a blue TVS NTORQ with layered mountains and big white clouds.", location: "Namja, Nepal", date: "2025-12-01", tags: ["scooter","ntorq","mountains","namja"] },
  { id: 13, src: "images/image-13.jpg", title: "Beside the Stupa",        category: "Architecture", description: "Standing next to a white Buddhist stupa under a deep blue high-altitude sky.", location: "Atama Ghar, Nepal", date: "2025-08-19", tags: ["stupa","buddhist","sky","atama-ghar"] },
  { id: 14, src: "images/image-14.jpg", title: "Pointing at the Fog",     category: "Nature",       description: "Seven friends from behind, arms raised toward a wall of thick white fog.", location: "Heaven Daada, Nepal", date: "2025-10-03", tags: ["fog","friends","ridge","heaven-daada"] },
  { id: 15, src: "images/image-15.jpg", title: "Three in Monochrome",     category: "Art",          description: "A black-and-white low-angle shot of three friends against a plain wall.", location: "Namja, Nepal", date: "2025-12-02", tags: ["black-and-white","portrait","friends","namja"] },

  { id: 16, src: "images/image-16.jpg", title: "Tower View",              category: "Architecture", description: "Looking out from Jataee View Tower over the surrounding landscape.", location: "Jataee View Tower, Nepal", date: "2025-07-22", tags: ["view-tower","landscape","jataee"] },
  { id: 17, src: "images/image-17.jpg", title: "Heaven Daada Vista",      category: "Nature",       description: "A wide view from Heaven Daada — hills, sky and open distance.", location: "Heaven Daada, Nepal", date: "2025-10-04", tags: ["viewpoint","landscape","heaven-daada"] },
  { id: 18, src: "images/image-18.jpg", title: "Snow Peaks",              category: "Nature",       description: "Layered ridges leading to snow-capped summits under heavy grey cloud.", location: "Pathibhara, Nepal", date: "2026-01-10", tags: ["mountains","snow","landscape","pathibhara"] },
  { id: 19, src: "images/image-19.jpg", title: "At the Shrine",           category: "Travel",       description: "A selfie at the Pathibhara shrine — garlands, golden deity and pilgrims nearby.", location: "Pathibhara, Nepal", date: "2026-01-10", tags: ["temple","shrine","pilgrimage","pathibhara"] },
  { id: 20, src: "images/image-20.jpg", title: "Forest Pilgrims",         category: "Moments",      description: "Four friends in the forest with red headbands and tika after the shrine visit.", location: "Pathibhara, Nepal", date: "2026-01-10", tags: ["friends","forest","pilgrimage","pathibhara"] },

  { id: 21, src: "images/image-21.jpg", title: "Valley Overlook",         category: "Nature",       description: "Standing by a bamboo fence, looking across green valleys toward distant cloud.", location: "Pathibhara, Nepal", date: "2026-01-09", tags: ["valley","mountains","viewpoint","pathibhara"] },
  { id: 22, src: "images/image-22.jpg", title: "Sea of Clouds Selfie",    category: "Portraits",    description: "A solo selfie with a vast blanket of clouds filling the valley below.", location: "Ramita, Nepal", date: "2025-11-09", tags: ["selfie","clouds","viewpoint","ramita"] },
  { id: 23, src: "images/image-23.jpg", title: "Mirror Trio",             category: "Moments",      description: "Another balcony mirror shot — three friends with lush hills in the reflection.", location: "Vederator, Nepal", date: "2025-09-13", tags: ["selfie","mirror","friends","vederator"] },
  { id: 24, src: "images/image-24.jpg", title: "Samala Moment",           category: "Moments",      description: "A candid memory captured during the Samala trip with friends.", location: "Samala, Nepal", date: "2025-06-15", tags: ["friends","trip","samala"] },

  { id: 25, src: "images/image-25.jpg", title: "Samala Outing",           category: "Moments",      description: "Out together at Samala — another frame from the same journey.", location: "Samala, Nepal", date: "2025-06-15", tags: ["friends","outing","samala"] },
  { id: 26, src: "images/image-26.jpg", title: "Samala Hangout",          category: "Moments",      description: "Relaxed and casual, somewhere along the Samala route.", location: "Samala, Nepal", date: "2025-06-16", tags: ["friends","casual","samala"] },
  { id: 27, src: "images/image-27.jpg", title: "Samala Day",              category: "Moments",      description: "One more shot from the Samala day — light, place and company.", location: "Samala, Nepal", date: "2025-06-16", tags: ["friends","day-trip","samala"] },
  { id: 28, src: "images/image-28.jpg", title: "Flags and Friends",       category: "Moments",      description: "Three friends smiling with the Nepal flag and Lions Club flag behind them.", location: "Ramita, Nepal", date: "2025-11-09", tags: ["friends","flags","ramita"] },
  { id: 29, src: "images/image-29.jpg", title: "Valley and Snow Peaks",   category: "Nature",       description: "Looking over a deep green valley toward distant snow-capped mountains.", location: "Namja, Nepal", date: "2025-12-03", tags: ["valley","snow","mountains","namja"] },
];

const collectionsMeta = [
  { category: "Moments",      cover: "images/image-01.jpg", description: "Group selfies, friends and candid memories on the road." },
  { category: "Travel",       cover: "images/image-08.jpg", description: "Roads, rides, shrines and stops across eastern Nepal." },
  { category: "Nature",       cover: "images/image-29.jpg", description: "Mountains, fog, valleys and open sky." },
  { category: "Portraits",    cover: "images/image-22.jpg", description: "Solo frames and close studies of people." },
  { category: "Architecture", cover: "images/image-13.jpg", description: "Stupas, towers and built landmarks along the way." },
  { category: "Art",          cover: "images/image-15.jpg", description: "Stylized and monochrome frames with a creative edge." },
];

const editorialNotes = [
  {
    title: "Golden hours at Vederator",
    body: "Sunset benches, hill roads and mirror selfies — the first stops where the group learned to wait for the light together.",
    location: "Vederator, Nepal",
  },
  {
    title: "Above the clouds",
    body: "From Ramita and Heaven Daada to Namja on two wheels — viewpoints, fog banks and cold air above the valleys.",
    location: "Eastern Hills, Nepal",
  },
  {
    title: "Road to Pathibhara",
    body: "Snow peaks, the shrine visit, red headbands in the forest — frames from the pilgrimage and the long walk back down.",
    location: "Pathibhara, Nepal",
  },
];

const CATEGORIES = ["All", ...collectionsMeta.map(c => c.category)];
const PAGE_SIZE = 12;
const LOAD_MORE_SIZE = 10;
const CHUNK_SIZE = 12; // gallery items rendered before an editorial break

/* ---------------------------------------------------------------------------
   2. STATE
--------------------------------------------------------------------------- */
const state = {
  category: "All",
  query: "",
  sort: "newest",
  visibleCount: PAGE_SIZE,
  favorites: loadFavorites(),
  showFavoritesOnly: false,
};

function loadFavorites(){
  try{
    return new Set(JSON.parse(localStorage.getItem("gallery_favorites") || "[]"));
  }catch(e){ return new Set(); }
}
function saveFavorites(){
  localStorage.setItem("gallery_favorites", JSON.stringify([...state.favorites]));
}

/* ---------------------------------------------------------------------------
   3. DOM REFERENCES
--------------------------------------------------------------------------- */
const els = {
  header: document.querySelector(".site-header"),
  menuBtn: document.querySelector(".menu-btn"),
  mobileNav: document.querySelector(".mobile-nav"),
  mobileNavClose: document.querySelector(".mobile-nav-close"),
  themeToggle: document.querySelectorAll(".theme-toggle"),
  searchSlot: document.querySelector(".search-slot"),
  searchToggle: document.querySelector(".search-toggle"),
  searchInput: document.querySelector(".search-input"),
  filterBar: document.querySelector(".filter-bar"),
  resultsNote: document.querySelector(".results-note"),
  gallery: document.querySelector(".gallery"),
  loadMoreWrap: document.querySelector(".load-more-wrap"),
  loadMoreBtn: document.querySelector(".load-more-btn"),
  sortSelect: document.querySelector(".sort-select"),
  collectionsGrid: document.querySelector(".collections-grid"),
  statsGrid: document.querySelector(".stats-grid"),
  featuredFrame: document.querySelector(".featured-frame"),
  heroMeta: document.querySelector(".hero-meta-count"),
  lightbox: document.querySelector(".lightbox"),
  lightboxImg: document.querySelector(".lightbox-img"),
  lightboxTitle: document.querySelector(".lightbox-info h3"),
  lightboxMeta: document.querySelector(".lightbox-info .meta"),
  lightboxDesc: document.querySelector(".lightbox-info .desc"),
  lightboxCounter: document.querySelector(".lightbox-top .counter"),
  lightboxClose: document.querySelector(".lb-close"),
  lightboxPrev: document.querySelector(".lb-prev"),
  lightboxNext: document.querySelector(".lb-next"),
  lightboxFav: document.querySelector(".lb-fav"),
  lightboxShare: document.querySelector(".lb-share"),
  lightboxDownload: document.querySelector(".lb-download"),
  cursorDot: document.querySelector(".cursor-dot"),
  year: document.querySelector(".footer-year"),
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------------------------
   4. UTILITIES
--------------------------------------------------------------------------- */
function pad(n){ return String(n).padStart(2, "0"); }

function getFilteredSortedImages(){
  let list = galleryImages.slice();

  if (state.showFavoritesOnly){
    list = list.filter(img => state.favorites.has(img.id));
  } else if (state.category !== "All"){
    list = list.filter(img => img.category === state.category);
  }

  if (state.query.trim()){
    const q = state.query.trim().toLowerCase();
    list = list.filter(img => {
      const haystack = [img.title, img.category, img.description, img.location, ...(img.tags||[])]
        .join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }

  switch(state.sort){
    case "oldest":    list.sort((a,b) => new Date(a.date) - new Date(b.date)); break;
    case "az":        list.sort((a,b) => a.title.localeCompare(b.title)); break;
    case "za":        list.sort((a,b) => b.title.localeCompare(a.title)); break;
    case "category":  list.sort((a,b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title)); break;
    default:          list.sort((a,b) => new Date(b.date) - new Date(a.date)); // newest
  }
  return list;
}

/* ---------------------------------------------------------------------------
   5. HEADER BEHAVIOR
--------------------------------------------------------------------------- */
function initHeaderScroll(){
  const onScroll = () => {
    els.header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMobileNav(){
  const open = () => { els.mobileNav.classList.add("is-open"); els.mobileNav.setAttribute("aria-hidden","false"); };
  const close = () => { els.mobileNav.classList.remove("is-open"); els.mobileNav.setAttribute("aria-hidden","true"); };
  els.menuBtn?.addEventListener("click", open);
  els.mobileNavClose?.addEventListener("click", close);
  els.mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

function initSearch(){
  els.searchToggle?.addEventListener("click", () => {
    const opening = !els.searchSlot.classList.contains("is-open");
    els.searchSlot.classList.toggle("is-open");
    if (opening) els.searchInput.focus();
    else { els.searchInput.value = ""; state.query = ""; render(); }
  });
  els.searchInput?.addEventListener("input", (e) => {
    state.query = e.target.value;
    state.visibleCount = PAGE_SIZE;
    render();
  });
}

function initTheme(){
  const stored = localStorage.getItem("gallery_theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = stored || (prefersLight ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcons(theme);

  els.themeToggle.forEach(btn => btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gallery_theme", next);
    updateThemeIcons(next);
  }));
}
function updateThemeIcons(theme){
  els.themeToggle.forEach(btn => btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode"));
}

/* ---------------------------------------------------------------------------
   6. FILTER BAR
--------------------------------------------------------------------------- */
function renderFilterBar(){
  els.filterBar.innerHTML = "";
  const counts = { All: galleryImages.length };
  collectionsMeta.forEach(c => counts[c.category] = galleryImages.filter(i => i.category === c.category).length);

  const makePill = (label, key, count, isFav=false) => {
    const btn = document.createElement("button");
    btn.className = "filter-pill" + ((!state.showFavoritesOnly && state.category === key && !isFav) || (isFav && state.showFavoritesOnly) ? " active" : "");
    btn.type = "button";
    btn.innerHTML = `${label}<span class="n">${count}</span><span class="indicator"></span>`;
    btn.addEventListener("click", () => {
      state.showFavoritesOnly = isFav;
      if (!isFav) state.category = key;
      state.visibleCount = PAGE_SIZE;
      render();
    });
    return btn;
  };

  CATEGORIES.forEach(cat => els.filterBar.appendChild(makePill(cat, cat, counts[cat] ?? 0)));
  els.filterBar.appendChild(makePill("Favorites", "Favorites", state.favorites.size, true));
}

/* ---------------------------------------------------------------------------
   7. GALLERY RENDERING (masonry + editorial breaks)
--------------------------------------------------------------------------- */
let currentLightboxList = [];
let currentLightboxIndex = 0;

function renderGallery(){
  const all = getFilteredSortedImages();
  const visible = all.slice(0, state.visibleCount);

  els.resultsNote.textContent = state.query.trim()
    ? `${visible.length} ${visible.length === 1 ? "RESULT" : "RESULTS"}`
    : "";

  els.gallery.innerHTML = "";
  currentLightboxList = visible;

  if (visible.length === 0){
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = state.query.trim()
      ? `<h3>No images found</h3><p>Try another keyword or explore all collections.</p>`
      : `<h3>Your gallery is empty</h3><p>Add images to the gallery data to begin creating your visual archive.</p>`;
    els.gallery.appendChild(empty);
    els.loadMoreWrap.style.display = "none";
    return;
  }

  let chunk = document.createElement("div");
  chunk.className = "masonry";
  els.gallery.appendChild(chunk);

  visible.forEach((img, i) => {
    if (i > 0 && i % CHUNK_SIZE === 0){
      const note = editorialNotes[(Math.floor(i / CHUNK_SIZE) - 1) % editorialNotes.length];
      els.gallery.appendChild(buildEditorial(note, img));
      chunk = document.createElement("div");
      chunk.className = "masonry";
      els.gallery.appendChild(chunk);
    }
    chunk.appendChild(buildGalleryItem(img, i));
  });

  const hasMore = state.visibleCount < all.length;
  els.loadMoreWrap.style.display = hasMore ? "flex" : "none";

  observeReveal();
  observeLazyImages();
}

function buildEditorial(note, imgForCover){
  const wrap = document.createElement("div");
  wrap.className = "editorial";
  const location = note.location || imgForCover.location;
  wrap.innerHTML = `
    <div class="editorial-frame">
      <img data-src="${imgForCover.src}" alt="${escapeHtml(imgForCover.title)}" loading="lazy" decoding="async">
    </div>
    <div class="editorial-copy">
      <span class="editorial-location">${escapeHtml(location)}</span>
      <h3>${note.title}</h3>
      <p>${note.body}</p>
    </div>
  `;
  return wrap;
}

function buildGalleryItem(img, index){
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.id = img.id;

  const isFav = state.favorites.has(img.id);

  item.innerHTML = `
    <div class="frame" style="--ar:${aspectHintFor(img)}" tabindex="0" role="button" aria-label="Open ${escapeHtml(img.title)}">
      <div class="skeleton"></div>
      <img data-src="${img.src}" alt="${escapeHtml(img.title)} — ${escapeHtml(img.category)}" loading="lazy" decoding="async">
      <button class="fav-btn${isFav ? " is-fav" : ""}" type="button" aria-label="${isFav ? "Remove from favorites" : "Add to favorites"}" aria-pressed="${isFav}">
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="${isFav ? "currentColor" : "none"}" stroke-width="1.6"><path d="M12 21s-7.5-4.6-10-9.2C.4 8.4 2 4.8 5.6 4.2c2-.3 3.9.6 5 2.2 1.1-1.6 3-2.5 5-2.2 3.6.6 5.2 4.2 3.6 7.6C19.5 16.4 12 21 12 21z"/></svg>
      </button>
      <div class="card-overlay">
        <span class="cat">${escapeHtml(img.category)}</span>
        <span class="title">${escapeHtml(img.title)}</span>
        <span class="view">View <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
    </div>
  `;

  const frame = item.querySelector(".frame");
  const open = () => openLightbox(img.id);
  frame.addEventListener("click", (e) => {
    if (e.target.closest(".fav-btn")) return;
    open();
  });
  frame.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " "){ e.preventDefault(); open(); }
  });

  item.querySelector(".fav-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(img.id);
  });

  return item;
}

// Rough aspect-ratio hints so the skeleton doesn't jump once the real image loads
function aspectHintFor(img){
  const n = img.id % 5;
  if (n === 0) return "1/1";
  if (n === 1) return "3/4";
  if (n === 2) return "4/3";
  if (n === 3) return "16/9";
  return "3/4";
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

/* ---------------------------------------------------------------------------
   8. LAZY LOADING
--------------------------------------------------------------------------- */
let lazyObserver;
function observeLazyImages(){
  if (!("IntersectionObserver" in window)){
    document.querySelectorAll("img[data-src]").forEach(loadImage);
    return;
  }
  if (!lazyObserver){
    lazyObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          loadImage(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "300px 0px" });
  }
  document.querySelectorAll("img[data-src]").forEach(img => lazyObserver.observe(img));
}

function loadImage(img){
  const src = img.getAttribute("data-src");
  if (!src) return;
  const tester = new Image();
  tester.onload = () => {
    img.src = src;
    img.removeAttribute("data-src");
    requestAnimationFrame(() => img.classList.add("is-loaded"));
  };
  tester.onerror = () => {
    const frame = img.closest(".frame");
    if (frame) frame.classList.add("is-broken");
  };
  tester.src = src;
}

/* ---------------------------------------------------------------------------
   9. SCROLL REVEAL
--------------------------------------------------------------------------- */
let revealObserver;
function observeReveal(){
  const targets = document.querySelectorAll(".gallery-item:not(.is-visible), .editorial:not(.is-visible), .reveal:not(.is-visible)");
  if (prefersReducedMotion){
    targets.forEach(t => t.classList.add("is-visible"));
    return;
  }
  if (!revealObserver){
    revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
  }
  targets.forEach(t => revealObserver.observe(t));
}

/* ---------------------------------------------------------------------------
   10. FAVORITES
--------------------------------------------------------------------------- */
function toggleFavorite(id){
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
  renderFilterBar();

  const btn = els.gallery.querySelector(`.gallery-item[data-id="${id}"] .fav-btn`);
  if (btn){
    const isFav = state.favorites.has(id);
    btn.classList.toggle("is-fav", isFav);
    btn.setAttribute("aria-pressed", isFav);
    btn.setAttribute("aria-label", isFav ? "Remove from favorites" : "Add to favorites");
    btn.querySelector("svg").setAttribute("fill", isFav ? "currentColor" : "none");
  }
  if (els.lightboxFav && currentLightboxList[currentLightboxIndex]?.id === id){
    updateLightboxFav(id);
  }
  if (state.showFavoritesOnly) renderGallery();
}

/* ---------------------------------------------------------------------------
   11. LOAD MORE
--------------------------------------------------------------------------- */
function initLoadMore(){
  els.loadMoreBtn.addEventListener("click", () => {
    state.visibleCount += LOAD_MORE_SIZE;
    renderGallery();
  });
}

/* ---------------------------------------------------------------------------
   12. SORT
--------------------------------------------------------------------------- */
function initSort(){
  els.sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });
}

/* ---------------------------------------------------------------------------
   13. FEATURED / HERO / COLLECTIONS / STATS  (static, built once)
--------------------------------------------------------------------------- */
function renderFeatured(){
  const feature = galleryImages[13]; // "Pointing at the Fog" — Heaven Daada
  els.featuredFrame.innerHTML = `
    <img data-src="${feature.src}" alt="${escapeHtml(feature.title)}" loading="lazy" decoding="async">
    <span class="featured-tag">FEATURED <span class="count">01 / ${pad(galleryImages.length)}</span></span>
    <div class="featured-info">
      <div>
        <h3>${escapeHtml(feature.title)}</h3>
        <div class="meta">${escapeHtml(feature.category)} · ${escapeHtml(feature.location)}</div>
      </div>
      <span class="featured-view">View full size</span>
    </div>
  `;
  els.featuredFrame.addEventListener("click", () => openLightboxFromFullList(feature.id));
  observeLazyImages();
}

function openLightboxFromFullList(id){
  currentLightboxList = galleryImages;
  const idx = galleryImages.findIndex(i => i.id === id);
  currentLightboxIndex = idx;
  showLightboxImage();
  document.body.style.overflow = "hidden";
  els.lightbox.classList.add("is-open");
  els.lightbox.setAttribute("aria-hidden", "false");
  els.lightboxClose.focus();
}

function renderCollections(){
  els.collectionsGrid.innerHTML = "";
  collectionsMeta.forEach((c, i) => {
    const count = galleryImages.filter(img => img.category === c.category).length;
    const card = document.createElement("div");
    card.className = "collection-card reveal";
    card.innerHTML = `
      <img data-src="${c.cover}" alt="${escapeHtml(c.category)} collection" loading="lazy" decoding="async">
      <div class="collection-info">
        <div class="idx">${pad(i+1)}</div>
        <h3>${escapeHtml(c.category)}</h3>
        <div class="count">${count} ${count === 1 ? "IMAGE" : "IMAGES"}</div>
      </div>
    `;
    card.addEventListener("click", () => {
      state.category = c.category;
      state.showFavoritesOnly = false;
      state.visibleCount = PAGE_SIZE;
      render();
      document.querySelector("#gallery")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
    els.collectionsGrid.appendChild(card);
  });
  observeLazyImages();
  observeReveal();
}

function renderStats(){
  const locations = new Set(galleryImages.map(i => i.location));
  const years = galleryImages.map(i => new Date(i.date).getFullYear());
  const stats = [
    { num: galleryImages.length, label: "Images" },
    { num: collectionsMeta.length, label: "Collections" },
    { num: locations.size, label: "Locations" },
    { num: Math.max(...years), label: "Latest update" },
  ];
  els.statsGrid.innerHTML = stats.map(s => `
    <div class="reveal">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
  els.heroMeta.textContent = `${pad(galleryImages.length)} IMAGES`;
  observeReveal();
}

/* ---------------------------------------------------------------------------
   14. LIGHTBOX
--------------------------------------------------------------------------- */
function openLightbox(id){
  const idx = currentLightboxList.findIndex(i => i.id === id);
  currentLightboxIndex = idx >= 0 ? idx : 0;
  showLightboxImage();
  document.body.style.overflow = "hidden";
  els.lightbox.classList.add("is-open");
  els.lightbox.setAttribute("aria-hidden", "false");
  els.lightboxClose.focus();
}

function closeLightbox(){
  els.lightbox.classList.remove("is-open");
  els.lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showLightboxImage(){
  const img = currentLightboxList[currentLightboxIndex];
  if (!img) return;
  els.lightboxImg.classList.remove("is-active");
  const tester = new Image();
  tester.onload = () => {
    els.lightboxImg.src = img.src;
    requestAnimationFrame(() => els.lightboxImg.classList.add("is-active"));
  };
  tester.src = img.src;

  els.lightboxTitle.textContent = img.title;
  els.lightboxMeta.textContent = `${img.category} · ${img.location} · ${new Date(img.date).getFullYear()}`;
  els.lightboxDesc.textContent = img.description;
  els.lightboxCounter.textContent = `${pad(currentLightboxIndex+1)} / ${pad(currentLightboxList.length)}`;
  els.lightboxImg.alt = `${img.title} — ${img.category}`;
  updateLightboxFav(img.id);
}

function updateLightboxFav(id){
  const isFav = state.favorites.has(id);
  els.lightboxFav.classList.toggle("is-fav", isFav);
  els.lightboxFav.setAttribute("aria-pressed", isFav);
  const svg = els.lightboxFav.querySelector("svg");
  if (svg) svg.setAttribute("fill", isFav ? "currentColor" : "none");
}

function stepLightbox(delta){
  if (!currentLightboxList.length) return;
  currentLightboxIndex = (currentLightboxIndex + delta + currentLightboxList.length) % currentLightboxList.length;
  showLightboxImage();
}

function initLightbox(){
  els.lightboxClose.addEventListener("click", closeLightbox);
  els.lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  els.lightboxNext.addEventListener("click", () => stepLightbox(1));

  els.lightbox.addEventListener("click", (e) => {
    if (e.target === els.lightbox || e.target.classList.contains("lightbox-stage")) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!els.lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  els.lightboxFav.addEventListener("click", () => {
    const img = currentLightboxList[currentLightboxIndex];
    if (img) toggleFavorite(img.id);
  });

  els.lightboxShare.addEventListener("click", async () => {
    const img = currentLightboxList[currentLightboxIndex];
    const shareData = { title: img.title, text: `${img.title} — ${img.category}`, url: location.href };
    try{
      if (navigator.share){ await navigator.share(shareData); }
      else{
        await navigator.clipboard.writeText(location.href);
        flashShareFeedback();
      }
    }catch(e){ /* user cancelled share — no action needed */ }
  });

  els.lightboxDownload.addEventListener("click", () => {
    const img = currentLightboxList[currentLightboxIndex];
    const a = document.createElement("a");
    a.href = img.src;
    a.download = `${img.title.toLowerCase().replace(/\s+/g,"-")}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  });

  // Touch swipe
  let touchStartX = 0;
  els.lightbox.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  els.lightbox.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) stepLightbox(dx > 0 ? -1 : 1);
  }, { passive: true });
}

function flashShareFeedback(){
  const original = els.lightboxShare.innerHTML;
  els.lightboxShare.innerHTML = `<span style="font-size:11px;letter-spacing:.05em;padding:0 4px;">Copied</span>`;
  setTimeout(() => { els.lightboxShare.innerHTML = original; }, 1400);
}

/* ---------------------------------------------------------------------------
   15. CUSTOM CURSOR (desktop / fine pointer only)
--------------------------------------------------------------------------- */
function initCustomCursor(){
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!supportsHover || !els.cursorDot) return;

  document.addEventListener("mousemove", (e) => {
    els.cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".frame") && !e.target.closest(".is-broken")){
      els.cursorDot.classList.add("is-active");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".frame")){
      els.cursorDot.classList.remove("is-active");
    }
  });
}

/* ---------------------------------------------------------------------------
   16. MASTER RENDER
--------------------------------------------------------------------------- */
function render(){
  renderFilterBar();
  renderGallery();
}

/* ---------------------------------------------------------------------------
   17. INIT
--------------------------------------------------------------------------- */
function init(){
  els.year.textContent = new Date().getFullYear();
  initHeaderScroll();
  initMobileNav();
  initSearch();
  initTheme();
  initLoadMore();
  initSort();
  initLightbox();
  initCustomCursor();

  renderFeatured();
  renderCollections();
  renderStats();
  render();
}

document.addEventListener("DOMContentLoaded", init);
