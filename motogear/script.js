const ICONS = {
  Helmets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15c0-6 4-10 9.5-10C17.5 5 21 8.5 21 13v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 9h8.5M12 9v3a2 2 0 0 0 2 2h7"/></svg>',
  Jackets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3 4 6v14h4v-8M15 3l5 3v14h-4v-8M9 3l3 3 3-3M12 6v15M8 21h8"/></svg>',
  Gloves: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21v-4l-3-4 1.5-1.5L8 13V5a1.5 1.5 0 0 1 3 0v5-6.5a1.5 1.5 0 0 1 3 0V10V5a1.5 1.5 0 0 1 3 0v8c0 3-1 5-3 6v2"/></svg>',
  Boots: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h6v9l6 3a2 2 0 0 1 1 1.7V19H4V3z"/><path d="M4 21h16M7 8h6"/></svg>',
  Pants: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l1 18h-5l-2-11-2 11H5z"/><path d="M6 7h12"/></svg>',
  Tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="7" width="14" height="10" rx="3"/><path d="M9 12h.01M15 12h.01M12 3v4M8 21l1-4M16 21l-1-4"/></svg>',
};

const PALETTE = {
  Helmets: ['#ff6a3d', '#b8320f'],
  Jackets: ['#3b4252', '#12151b'],
  Gloves: ['#2f7d6d', '#123d35'],
  Boots: ['#7a5230', '#3a2512'],
  Pants: ['#4a5bd6', '#1e2670'],
  Tech: ['#8a44c8', '#3a1660'],
};

const REVIEWS = [
  {
    name: 'Arai Quantic', brand: 'Arai', category: 'Helmets', price: 749, rating: 4.8, badge: "Editor's Choice",
    summary: 'Supremely quiet and comfortable with a superb peripheral field of view.',
    scores: { Safety: 5, Comfort: 4.8, Noise: 4.7, Value: 3.9 },
    pros: ['Very low wind noise', 'Excellent ventilation', 'Superb fit and finish'],
    cons: ['Expensive', 'Visor swap is fiddly'],
  },
  {
    name: 'HJC i71', brand: 'HJC', category: 'Helmets', price: 279, rating: 4.3, badge: 'Best Value',
    summary: 'ECE 22.06 protection and a drop-down sun visor at a great price.',
    scores: { Safety: 4.5, Comfort: 4.2, Noise: 3.8, Value: 4.9 },
    pros: ['Great value', 'Integrated sun visor', 'Pinlock included'],
    cons: ['Louder above 70 mph', 'Heavier than premium lids'],
  },
  {
    name: 'Shoei Neotec 3', brand: 'Shoei', category: 'Helmets', price: 899, rating: 4.6,
    summary: 'The modular benchmark — refined, quiet, and comm-system ready.',
    scores: { Safety: 4.6, Comfort: 4.8, Noise: 4.5, Value: 3.6 },
    pros: ['Slick flip-up mechanism', 'SENA integration', 'Quiet for a modular'],
    cons: ['Pricey', 'Heavier at 1.8 kg'],
  },
  {
    name: "Rev'It! Sand 4 H2O", brand: "Rev'It!", category: 'Jackets', price: 549, rating: 4.7, badge: 'Top Pick',
    summary: 'A do-it-all adventure jacket with removable thermal and waterproof liners.',
    scores: { Safety: 4.5, Comfort: 4.7, Weather: 4.6, Value: 4.4 },
    pros: ['Huge ventilation panels', 'Versatile liner system', 'Level 2 armour'],
    cons: ['Liners add bulk', 'Waterproofing is internal'],
  },
  {
    name: 'Dainese Super Speed 4', brand: 'Dainese', category: 'Jackets', price: 499, rating: 4.4,
    summary: 'Sporty leather jacket with a sharp cut and excellent abrasion resistance.',
    scores: { Safety: 4.7, Comfort: 4.0, Weather: 3.2, Value: 4.1 },
    pros: ['Thick cowhide', 'Great sport fit', 'Back protector pocket'],
    cons: ['Hot in traffic', 'Not waterproof'],
  },
  {
    name: 'Klim Badlands Pro A3', brand: 'Klim', category: 'Jackets', price: 1499, rating: 4.5,
    summary: 'Gore-Tex Pro laminate and D3O armour for riders who never cancel a trip.',
    scores: { Safety: 4.9, Comfort: 4.4, Weather: 5, Value: 3.4 },
    pros: ['Bombproof waterproofing', 'Outstanding armour', 'Built to last'],
    cons: ['Very expensive', 'Heavy'],
  },
  {
    name: 'Alpinestars GP Pro R4', brand: 'Alpinestars', category: 'Gloves', price: 279, rating: 4.6,
    summary: 'Race-proven gauntlets with superb feel at the bars.',
    scores: { Safety: 4.8, Comfort: 4.5, Feel: 4.7, Value: 4.0 },
    pros: ['Excellent knuckle protection', 'Pre-curved fingers', 'Touchscreen tips'],
    cons: ['Long break-in period'],
  },
  {
    name: 'Knox Orsa Leather MK3', brand: 'Knox', category: 'Gloves', price: 129, rating: 4.4,
    summary: 'A short summer glove that punches well above its price on protection.',
    scores: { Safety: 4.4, Comfort: 4.6, Feel: 4.5, Value: 4.8 },
    pros: ['SPS scaphoid sliders', 'Comfortable from day one', 'Great price'],
    cons: ['Short cuff', 'Not for cold weather'],
  },
  {
    name: 'Alpinestars Tech 10', brand: 'Alpinestars', category: 'Boots', price: 649, rating: 4.7, badge: 'Premium',
    summary: 'The off-road protection benchmark, with a brilliant hinge system.',
    scores: { Safety: 5, Comfort: 4.2, Weather: 3.8, Value: 3.9 },
    pros: ['Unrivalled protection', 'Very durable', 'Replaceable sole'],
    cons: ['Stiff off the bike', 'Expensive'],
  },
  {
    name: 'TCX Clima 2 GTX', brand: 'TCX', category: 'Boots', price: 379, rating: 4.3,
    summary: 'Comfortable Gore-Tex touring boots you can walk around town in.',
    scores: { Safety: 4.2, Comfort: 4.7, Weather: 4.8, Value: 4.2 },
    pros: ['Truly waterproof', 'Walkable', 'Easy on/off'],
    cons: ['Runs narrow'],
  },
  {
    name: 'Rev\'It! Tornado 4 Pants', brand: "Rev'It!", category: 'Pants', price: 329, rating: 4.2,
    summary: 'Summer-ready textile pants with big mesh panels and a hydratex liner.',
    scores: { Safety: 4.1, Comfort: 4.5, Weather: 4.0, Value: 4.2 },
    pros: ['Massive airflow', 'Zips to jacket', 'Adjustable fit'],
    cons: ['Liner is fiddly'],
  },
  {
    name: 'Sena 50S Mesh', brand: 'Sena', category: 'Tech', price: 359, rating: 4.4,
    summary: 'Mesh intercom with crisp audio and reliable group connections.',
    scores: { Audio: 4.6, Battery: 4.0, Ease: 4.3, Value: 4.1 },
    pros: ['Excellent range', 'Clear voice pickup', 'Harman Kardon speakers'],
    cons: ['App can be clunky'],
  },
];

const state = { category: 'All', query: '', sort: 'rating' };

const $ = (sel) => document.querySelector(sel);
const grid = $('#grid');
const chips = $('#chips');
const empty = $('#empty');
const dialog = $('#reviewDialog');
const fmtPrice = (n) => '$' + n.toLocaleString('en-US');
const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function renderChips() {
  const cats = ['All', ...new Set(REVIEWS.map((r) => r.category))];
  chips.innerHTML = cats
    .map((c) => `<button class="chip" role="tab" aria-selected="${c === state.category}" data-cat="${c}">${c}</button>`)
    .join('');
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  const list = REVIEWS.filter((r) =>
    (state.category === 'All' || r.category === state.category) &&
    (!q || `${r.name} ${r.brand} ${r.category} ${r.summary}`.toLowerCase().includes(q))
  );
  const sorters = {
    rating: (a, b) => b.rating - a.rating,
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    name: (a, b) => a.name.localeCompare(b.name),
  };
  return list.sort(sorters[state.sort]);
}

function mediaStyle(cat) {
  const [c1, c2] = PALETTE[cat];
  return `--c1:${c1};--c2:${c2}`;
}

function renderGrid() {
  const list = filtered();
  empty.hidden = list.length > 0;
  grid.innerHTML = list
    .map((r, i) => `
      <button class="card" data-index="${REVIEWS.indexOf(r)}" style="animation-delay:${i * 40}ms">
        <div class="card-media" style="${mediaStyle(r.category)}">
          ${r.badge ? `<span class="badge">${escapeHtml(r.badge)}</span>` : ''}
          <span class="score">${r.rating.toFixed(1)}</span>
          ${ICONS[r.category]}
        </div>
        <div class="card-body">
          <span class="card-cat">${r.category} · ${escapeHtml(r.brand)}</span>
          <h3>${escapeHtml(r.name)}</h3>
          <p>${escapeHtml(r.summary)}</p>
          <div class="card-foot">
            <span class="stars" style="--rating:${r.rating}" aria-label="${r.rating} out of 5"></span>
            <span class="price">${fmtPrice(r.price)}</span>
          </div>
        </div>
      </button>`)
    .join('');
}

function openReview(r) {
  const scoreRows = Object.entries(r.scores)
    .map(([k, v]) => `
      <div class="score-row">
        <span>${k}</span>
        <div class="bar"><span style="width:${(v / 5) * 100}%"></span></div>
        <strong>${v.toFixed(1)}</strong>
      </div>`)
    .join('');
  const li = (items) => items.map((x) => `<li>${escapeHtml(x)}</li>`).join('');

  $('#dialogContent').innerHTML = `
    <div class="dialog-media" style="${mediaStyle(r.category)}">${ICONS[r.category]}</div>
    <div class="dialog-body">
      <span class="card-cat">${r.category} · ${escapeHtml(r.brand)}</span>
      <h2>${escapeHtml(r.name)}</h2>
      <div class="dialog-meta">
        <span class="stars" style="--rating:${r.rating}" aria-label="${r.rating} out of 5"></span>
        <strong>${r.rating.toFixed(1)} / 5</strong>
        <span class="price">${fmtPrice(r.price)}</span>
      </div>
      <p>${escapeHtml(r.summary)}</p>
      <div class="scores">${scoreRows}</div>
      <div class="pros-cons">
        <div class="pros"><h4>What we liked</h4><ul>${li(r.pros)}</ul></div>
        <div class="cons"><h4>What we didn't</h4><ul>${li(r.cons)}</ul></div>
      </div>
    </div>`;
  dialog.showModal();
}

chips.addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  state.category = btn.dataset.cat;
  renderChips();
  renderGrid();
});

$('#search').addEventListener('input', (e) => { state.query = e.target.value; renderGrid(); });
$('#sort').addEventListener('change', (e) => { state.sort = e.target.value; renderGrid(); });

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (card) openReview(REVIEWS[card.dataset.index]);
});

$('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

$('#subscribeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
  $('#formMsg').textContent = "Thanks! You're on the list. See you on the road.";
});

// Theme: respect saved choice, then system preference
const root = document.documentElement;
let saved = null;
try { saved = localStorage.getItem('theme'); } catch {}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
$('#themeToggle').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch {}
});

$('#year').textContent = new Date().getFullYear();
renderChips();
renderGrid();
