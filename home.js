const API_KEY = 'e0a7266a5d0e95c36475f349d8bc0a5a';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_W342 = 'https://image.tmdb.org/t/p/w342';
const IMG_W1280 = 'https://image.tmdb.org/t/p/w1280';

const VIVAMAX_COMPANY_ID = '149142';

const HISTORY_KEY = 'mobiflix_watch_history';
const THEME_KEY = 'mobiflix_theme';
const NOTIF_KEY = 'mobiflix_notifications';
const NOTIF_ENABLED_KEY = 'mobiflix_notif_enabled';
const CONTINUE_KEY = 'mobiflix_continue_watching';
const MAX_HISTORY = 30;
const MAX_CONTINUE = 10;

const INDIAN_LANGS = ['hi','ta','te','ml','kn','bn','mr','pa','gu','or','as','ur','sa','ne','si'];
const BANNED_GENRES_MOVIE = [10764, 10767, 10763, 10766, 10402, 99, 10768];
const BANNED_GENRES_TV = [10764, 10767, 10763, 10766, 10402, 99, 10768, 16, 10762];
const KOREAN_EXCLUDE_GENRES = [10764, 10767, 10763, 10766, 16, 10762];

const STREAMING_PROVIDERS = [
  { name: 'Vivamax', id: 'vivamax', type: 'vivamax', color: '#0028ff' },
  { name: 'Marvel Studios', id: 420, type: 'company', color: '#ed1d24' },
  { name: 'Netflix', id: 8, type: 'provider', color: '#e50914' },
  { name: 'Disney+', id: 337, type: 'provider', color: '#113ccf' },
  { name: 'Amazon Prime Video', id: 9, type: 'provider', color: '#00a8e1' },
  { name: 'HBO Max', id: 1899, type: 'provider', color: '#5822b4' },
  { name: 'Apple TV+', id: 350, type: 'provider', color: '#1c1c1e' },
  { name: 'AMC+', id: 526, type: 'provider', color: '#f5c518' },
  { name: 'Peacock', id: 386, type: 'provider', color: '#000000' },
  { name: 'Hulu', id: 15, type: 'provider', color: '#1ce783' }
];

const PROVIDER_LOGOS = {
  'Marvel Studios': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Marvel_Studios_logo.svg',
  'Netflix': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'Disney+': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
  'Amazon Prime Video': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo_%282022%29.svg',
  'HBO Max': 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg',
  'Apple TV+': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg',
  'AMC+': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/AMC%2B_logo.svg',
  'Peacock': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg',
  'Hulu': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'
};

const MCU_MOVIE_IDS = [
  1726, 1724, 10138, 10195, 1771, 24428,
  68721, 76338, 100402, 118340, 99861, 102899, 271110, 284052, 283995, 315635, 284053, 284054, 299536, 363088, 299537, 299534, 429617,
  497698, 566525, 524434, 634649, 453395, 616037, 505642,
  640146, 447365, 609681, 533535, 822119, 986056, 617126
];

const HOME_ROWS = {
  movies: { name: 'Movies', icon: '🔥', media: 'movie' },
  tv:     { name: 'TV Series', icon: '📺', media: 'tv' },
  kdrama: { name: 'Korean Series', icon: '🇰🇷', media: 'tv' }
};

const GENRE_LIST = [
  { id: 28, name: 'Action', icon: '💥', media: 'movie' },
  { id: 12, name: 'Adventure', icon: '🗺️', media: 'movie' },
  { id: 16, name: 'Animation', icon: '🎨', media: 'movie' },
  { id: 35, name: 'Comedy', icon: '😂', media: 'movie' },
  { id: 80, name: 'Crime', icon: '🕵️', media: 'movie' },
  { id: 18, name: 'Drama', icon: '🎭', media: 'movie' },
  { id: 10751, name: 'Family', icon: '👨‍👩‍👧', media: 'movie' },
  { id: 14, name: 'Fantasy', icon: '🧙', media: 'movie' },
  { id: 36, name: 'History', icon: '📜', media: 'movie' },
  { id: 27, name: 'Horror', icon: '👻', media: 'movie' },
  { id: 9648, name: 'Mystery', icon: '🔍', media: 'movie' },
  { id: 10749, name: 'Romance', icon: '💕', media: 'movie' },
  { id: 878, name: 'Sci-Fi', icon: '🚀', media: 'movie' },
  { id: 53, name: 'Thriller', icon: '😱', media: 'movie' },
  { id: 10752, name: 'War', icon: '⚔️', media: 'movie' },
  { id: 37, name: 'Western', icon: '🤠', media: 'movie' }
];

const COUNTRY_LIST = [
  { code: '', name: 'All Countries' }, { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' }, { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' }, { code: 'PH', name: 'Philippines' },
  { code: 'JP', name: 'Japan' }, { code: 'KR', name: 'South Korea' },
  { code: 'CN', name: 'China' }, { code: 'HK', name: 'Hong Kong' },
  { code: 'TW', name: 'Taiwan' }, { code: 'TH', name: 'Thailand' },
  { code: 'ID', name: 'Indonesia' }, { code: 'MY', name: 'Malaysia' },
  { code: 'SG', name: 'Singapore' }, { code: 'VN', name: 'Vietnam' },
  { code: 'IN', name: 'India' }, { code: 'FR', name: 'France' },
  { code: 'DE', name: 'Germany' }, { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' }, { code: 'MX', name: 'Mexico' },
  { code: 'BR', name: 'Brazil' }, { code: 'AR', name: 'Argentina' },
  { code: 'RU', name: 'Russia' }, { code: 'TR', name: 'Turkey' },
  { code: 'SA', name: 'Saudi Arabia' }, { code: 'AE', name: 'United Arab Emirates' },
  { code: 'EG', name: 'Egypt' }, { code: 'ZA', name: 'South Africa' },
  { code: 'NG', name: 'Nigeria' }, { code: 'NZ', name: 'New Zealand' },
  { code: 'IE', name: 'Ireland' }, { code: 'SE', name: 'Sweden' },
  { code: 'NO', name: 'Norway' }, { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' }, { code: 'NL', name: 'Netherlands' },
  { code: 'BE', name: 'Belgium' }, { code: 'CH', name: 'Switzerland' },
  { code: 'AT', name: 'Austria' }, { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' }, { code: 'GR', name: 'Greece' },
  { code: 'IL', name: 'Israel' }, { code: 'PK', name: 'Pakistan' },
  { code: 'BD', name: 'Bangladesh' }, { code: 'LK', name: 'Sri Lanka' }
];

let bannerItem;

// ============================================================
// API CACHE (5 minuto)
// ============================================================
const CACHE_TTL = 5 * 60 * 1000;
const API_CACHE = {};

async function cachedFetch(url) {
  const now = Date.now();
  const cached = API_CACHE[url];
  if (cached && (now - cached.time) < CACHE_TTL) return cached.data;

  const res = await fetch(url);
  const data = await res.json();
  API_CACHE[url] = { data: data, time: now };

  const keys = Object.keys(API_CACHE);
  if (keys.length > 60) {
    let oldestKey = keys[0];
    let oldestTime = API_CACHE[oldestKey].time;
    keys.forEach(function(k) {
      if (API_CACHE[k].time < oldestTime) {
        oldestTime = API_CACHE[k].time;
        oldestKey = k;
      }
    });
    delete API_CACHE[oldestKey];
  }
  return data;
}

// ============================================================
// AUTO-REFRESH
// ============================================================
let isRefreshing = false;

function triggerHomeRefresh() {
  if (typeof refreshHomeContent !== 'function') return;
  if (isRefreshing) return;
  isRefreshing = true;
  refreshHomeContent().finally(function() { isRefreshing = false; });
}

function getSortParams(sortBy, mediaType) {
  if (!sortBy || sortBy === 'popularity.desc') return '&sort_by=popularity.desc';
  if (sortBy === 'primary_release_date.desc') {
    return mediaType === 'tv' ? '&sort_by=first_air_date.desc' : '&sort_by=primary_release_date.desc';
  }
  if (sortBy === 'primary_release_date.asc') {
    return mediaType === 'tv' ? '&sort_by=first_air_date.asc' : '&sort_by=primary_release_date.asc';
  }
  if (sortBy === 'vote_average.desc') return '&sort_by=vote_average.desc&vote_count.gte=100';
  if (sortBy === 'vote_average.asc') return '&sort_by=vote_average.asc&vote_count.gte=100';
  return '&sort_by=' + sortBy;
}

// ============================================================
// HELPERS
// ============================================================
function getStarHTML(voteAverage) {
  const numericRating = (voteAverage || 0).toFixed(1);
  return '<i class="fa fa-star"></i><span class="rating-number">' + numericRating + '</span>';
}

function createPosterWithRating(item, mediaType, isEager) {
  if (mediaType) item.media_type = mediaType;
  if (!item.media_type) {
    item.media_type = (item.first_air_date || (!item.title && item.name)) ? 'tv' : 'movie';
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'poster-wrapper';
  wrapper.dataset.id = item.id;

  const img = document.createElement('img');
  img.src = `${IMG_W342}${item.poster_path}`;
  img.alt = item.title || item.name;
  img.loading = isEager ? 'eager' : 'lazy';
  img.decoding = 'async';
  if (isEager) img.fetchPriority = 'high';
  wrapper.appendChild(img);

  const ratingBadge = document.createElement('div');
  ratingBadge.className = 'poster-rating';
  ratingBadge.innerHTML = getStarHTML(item.vote_average);
  wrapper.appendChild(ratingBadge);

  wrapper.onclick = function() { showDetails(item); };
  return wrapper;
}

function filterNonIndian(results) {
  return (results || []).filter(function(item) {
    return !INDIAN_LANGS.includes(item.original_language);
  });
}

function filterReleased(results) {
  const today = new Date().toISOString().split('T')[0];
  return (results || []).filter(function(item) {
    const date = item.release_date || item.first_air_date;
    if (!date) return true;
    return date <= today;
  });
}

function filterBannedGenres(results, mediaType) {
  const bannedList = (mediaType === 'tv') ? BANNED_GENRES_TV : BANNED_GENRES_MOVIE;
  return (results || []).filter(function(item) {
    const genres = item.genre_ids || [];
    if (genres.length === 0) return true;
    return !genres.some(function(g) { return bannedList.includes(g); });
  });
}

function isKoreanSeries(item) {
  const isKorean = (item.origin_country || []).includes('KR') || item.original_language === 'ko';
  if (!isKorean) return false;
  const genres = item.genre_ids || [];
  if (genres.length === 0) return true;
  return !genres.some(function(g) { return KOREAN_EXCLUDE_GENRES.includes(g); });
}

function filterKoreanSeries(results) {
  return (results || []).filter(isKoreanSeries);
}

// ============================================================
// HISTORY STACK (para sa back button)
// ============================================================
let layerStack = [];

function pushLayer(type, data) {
  layerStack.push({ type: type, data: data || null });
  history.pushState({ mobiflixLayer: layerStack.length, type: type }, '');
}

function closeLayerByType(type) {
  switch (type) {
    case 'genre':
    case 'more': closeAllPagesOnly(); setActiveNav('more'); triggerHomeRefresh(); break;
    default: closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh();
  }
}

history.replaceState({ mobiflixHome: true }, '', '#home');
history.pushState({ mobiflixTrap: false }, '', '#home');
history.pushState({ mobiflixHome: true }, '', '#home');

let exitConfirmActive = false;

window.addEventListener('popstate', function() {
  if (layerStack.length > 0) {
    const layer = layerStack.pop();
    closeLayerByType(layer.type);
    return;
  }
  if (exitConfirmActive) return;
  exitConfirmActive = true;
  const wantExit = confirm('Do you want to exit?');
  if (wantExit) {
    exitConfirmActive = false;
    history.back();
  } else {
    history.pushState({ mobiflixHome: true }, '', '#home');
    exitConfirmActive = false;
  }
});

let viewAllState = { key: null, page: 1, maxPages: 500, loading: false, hasMore: true, initialized: false, seenIds: new Set(), filters: {} };
let vivamaxPageState = { page: 1, maxPages: 500, loading: false, hasMore: true, initialized: false, seenIds: new Set(), filters: {} };
let marvelPageState = { page: 1, maxPages: 1, loading: false, hasMore: true, initialized: false, seenIds: new Set() };
let providerPageState = { providerId: null, providerName: '', providerType: 'provider', page: 1, batchCount: 0, maxPages: 500, loading: false, hasMore: true, initialized: false, seenIds: new Set(), filters: {} };
let genrePageState = {};
let ongoingPageState = {};
let completedPageState = {};

// ============================================================
// SNOW EFFECT
// ============================================================
function createSnow() {
  const existing = document.getElementById('snow-container');
  if (existing) existing.parentNode.removeChild(existing);

  const container = document.createElement('div');
  container.id = 'snow-container';
  document.body.appendChild(container);

  const snowChars = ['❄', '❅', '❆', '•', '*', '❄', '❅'];
  const isMobile = window.innerWidth <= 768;
  const maxSnowflakes = isMobile ? 20 : 50;

  function createSnowflake() {
    if (container.children.length >= maxSnowflakes) return;
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = snowChars[Math.floor(Math.random() * snowChars.length)];
    snowflake.style.left = (Math.random() * 100) + '%';
    snowflake.style.fontSize = (Math.random() * 12 + 8) + 'px';
    const duration = Math.random() * 10 + 8;
    snowflake.style.animationDuration = duration + 's';
    const delay = Math.random() * 8;
    snowflake.style.animationDelay = delay + 's';
    snowflake.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
    container.appendChild(snowflake);
    setTimeout(function() {
      if (snowflake.parentNode) snowflake.parentNode.removeChild(snowflake);
    }, (duration + delay) * 1000 + 500);
  }

  function startSnow() {
    createSnowflake();
    setTimeout(startSnow, Math.random() * 600 + 300);
  }
  startSnow();
}

// ============================================================
// COUNTRY DROPDOWNS
// ============================================================
function populateCountryDropdowns() {
  const prefixes = ['filter-', 'provider-filter-', 'genre-filter-', 'vivamax-filter-'];
  prefixes.forEach(function(prefix) {
    const select = document.getElementById(prefix + 'country');
    if (!select) return;
    select.innerHTML = '';
    COUNTRY_LIST.forEach(function(country) {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      select.appendChild(option);
    });
  });
}

// ============================================================
// FETCH FUNCTIONS
// ============================================================
async function fetchTrendingPhilippines(type, page) {
  const data = await cachedFetch(`${BASE_URL}/trending/${type}/week?api_key=${API_KEY}&page=${page}&region=PH`);
  let results = filterNonIndian(data.results);
  results = filterReleased(results);
  results = filterBannedGenres(results, type);
  return { results: results, total_pages: data.total_pages || 1 };
}

async function fetchPopular(mediaType, page) {
  const today = new Date().toISOString().split('T')[0];
  const bannedList = (mediaType === 'tv') ? BANNED_GENRES_TV : BANNED_GENRES_MOVIE;
  let url = `${BASE_URL}/discover/${mediaType}?api_key=${API_KEY}` +
    `&sort_by=popularity.desc&vote_count.gte=50&page=${page}` +
    `&without_original_language=${INDIAN_LANGS.join('|')}` +
    `&without_genres=${bannedList.join(',')}`;
  if (mediaType === 'movie') url += `&primary_release_date.lte=${today}`;
  else url += `&first_air_date.lte=${today}`;
  const data = await cachedFetch(url);
  let results = filterNonIndian(data.results);
  results = filterReleased(results);
  results = filterBannedGenres(results, mediaType);
  return { results: results, total_pages: data.total_pages || 1 };
}

async function fetchKoreanSeriesNewest(page) {
  const today = new Date().toISOString().split('T')[0];
  const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}` +
    `&with_origin_country=KR&without_genres=${KOREAN_EXCLUDE_GENRES.join(',')}` +
    `&sort_by=first_air_date.desc&vote_count.gte=10&first_air_date.lte=${today}` +
    `&page=${page}&without_original_language=${INDIAN_LANGS.join('|')}`;
  const data = await cachedFetch(url);
  let results = filterKoreanSeries(data.results);
  results = filterReleased(results);
  results.forEach(function(item) { item.media_type = 'tv'; });
  return { results: results, total_pages: data.total_pages || 1 };
}

async function fetchOngoingTV(page) {
  const today = new Date().toISOString().split('T')[0];
  const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}&first_air_date.lte=${today}&vote_count.gte=50&with_status=0|1&without_original_language=${INDIAN_LANGS.join('|')}&without_genres=${BANNED_GENRES_TV.join(',')}`;
  const data = await cachedFetch(url);
  let results = filterReleased(data.results);
  results = filterBannedGenres(results, 'tv');
  return { results: results, total_pages: data.total_pages || 1 };
}

async function fetchCompletedTV(page) {
  const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}&with_status=3|4&vote_count.gte=100&without_original_language=${INDIAN_LANGS.join('|')}&without_genres=${BANNED_GENRES_TV.join(',')}`;
  const data = await cachedFetch(url);
  let results = filterReleased(data.results);
  results = filterBannedGenres(results, 'tv');
  return { results: results, total_pages: data.total_pages || 1 };
}

let _mcuCache = null;

async function fetchMarvelMovies() {
  if (!_mcuCache) {
    const promises = MCU_MOVIE_IDS.map(function(id) {
      return cachedFetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).catch(function() { return null; });
    });
    const all = await Promise.all(promises);
    _mcuCache = all
      .filter(function(m) { return m && m.id && m.poster_path; })
      .map(function(m) { m.media_type = 'movie'; return m; })
      .sort(function(a, b) {
        return (b.release_date || '').localeCompare(a.release_date || '');
      });
  }
  return { results: _mcuCache, total_pages: 1 };
}

// ============================================================
// WATCH HISTORY
// ============================================================
function getWatchHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; }
  catch (e) { return []; }
}
function saveWatchHistory(list) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
}
function clearHistory() {
  if (confirm('Clear your watch history?')) {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }
}
function renderHistory() {
  const list = getWatchHistory();
  const grid = document.getElementById('history-grid');
  const empty = document.getElementById('history-empty');
  const clearBtn = document.getElementById('clear-history-btn');

  if (!grid) return;
  grid.innerHTML = '';

  if (list.length === 0) {
    empty.style.display = 'block';
    clearBtn.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  clearBtn.style.display = 'inline-flex';

  list.forEach(function(item) {
    if (!item.poster_path) return;
    const wrapper = createPosterWithRating(item);
    wrapper.onclick = function() {
      closeUserProfile();
      showDetails(item);
    };
    grid.appendChild(wrapper);
  });
}

// ============================================================
// CONTINUE WATCHING
// ============================================================
function getContinueWatching() {
  try { return JSON.parse(localStorage.getItem(CONTINUE_KEY)) || []; }
  catch (e) { return []; }
}

function renderContinueWatching() {
  const list = getContinueWatching();
  const container = document.getElementById('continue-watching-list');
  const row = document.getElementById('continue-watching-row');

  if (!container || !row) return;
  if (list.length === 0) { row.style.display = 'none'; return; }

  row.style.display = 'block';
  container.innerHTML = '';

  list.forEach(function(item) {
    const card = document.createElement('div');
    card.className = 'continue-card';
    card.onclick = function() { showDetails(item); };

    const img = document.createElement('img');
    img.alt = item.title || item.name;
    img.loading = 'lazy';
    img.decoding = 'async';
    if (item.backdrop_path) img.src = `${IMG_W342}${item.backdrop_path}`;
    else if (item.poster_path) img.src = `${IMG_W342}${item.poster_path}`;
    else img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 124" fill="%23222"><rect width="220" height="124"/></svg>';

    const progress = document.createElement('div');
    progress.className = 'continue-progress';
    const progressBar = document.createElement('div');
    progressBar.className = 'continue-progress-bar';
    progressBar.style.width = item.progress + '%';
    progress.appendChild(progressBar);

    const title = document.createElement('div');
    title.className = 'continue-title';
    title.textContent = item.title || item.name;

    const subtitle = document.createElement('div');
    subtitle.className = 'continue-subtitle';
    subtitle.textContent = item.progress + '% watched';

    card.appendChild(img);
    card.appendChild(progress);
    card.appendChild(title);
    card.appendChild(subtitle);
    container.appendChild(card);
  });
}

// ============================================================
// THEMES
// ============================================================
function loadTheme() {
  applyTheme(localStorage.getItem(THEME_KEY) || 'default');
}
function applyTheme(theme) {
  document.body.classList.remove('theme-blue', 'theme-purple', 'theme-green', 'theme-light');
  if (theme === 'light') document.body.classList.add('theme-light');
  else if (theme === 'dark-blue') document.body.classList.add('theme-blue');
  else if (theme === 'dark-purple') document.body.classList.add('theme-purple');
  else if (theme === 'dark-green') document.body.classList.add('theme-green');
  document.querySelectorAll('.theme-option').forEach(function(el) {
    el.classList.remove('active');
    if (el.dataset.theme === theme) el.classList.add('active');
  });
  updateThemeIcon();
}
function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}
function toggleTheme() {
  const current = localStorage.getItem(THEME_KEY) || 'default';
  setTheme((current === 'light') ? 'default' : 'light');
}
function updateThemeIcon() {
  const theme = localStorage.getItem(THEME_KEY) || 'default';
  const icon = document.getElementById('theme-toggle-icon');
  if (!icon) return;
  icon.className = theme === 'light' ? 'fa fa-sun' : 'fa fa-moon';
}

// ============================================================
// NOTIFICATIONS
// ============================================================
function getNotifications() {
  try { return JSON.parse(localStorage.getItem(NOTIF_KEY)) || []; }
  catch (e) { return []; }
}
function saveNotifications(list) {
  localStorage.setItem(NOTIF_KEY, JSON.stringify(list));
  updateNotifBadge();
}
function isNotifEnabled() {
  return localStorage.getItem(NOTIF_ENABLED_KEY) !== 'false';
}
function toggleNotifications() {
  const toggle = document.getElementById('notif-toggle');
  localStorage.setItem(NOTIF_ENABLED_KEY, toggle.checked ? 'true' : 'false');
  updateNotifBadge();
}
function updateNotifBadge() {
  const list = getNotifications();
  const unread = list.filter(function(n) { return !n.read; });
  const badge = document.getElementById('notif-badge');
  if (!badge) return;
  if (unread.length > 0 && isNotifEnabled()) {
    badge.textContent = unread.length > 9 ? '9+' : unread.length;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}
async function generateNotifications() {
  if (!isNotifEnabled()) return;
  try {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const dateStr = weekAgo.toISOString().split('T')[0];

    const newMovies = await cachedFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.desc&primary_release_date.gte=${dateStr}&primary_release_date.lte=${todayStr}&vote_count.gte=20&without_original_language=${INDIAN_LANGS.join('|')}&without_genres=${BANNED_GENRES_MOVIE.join(',')}`);
    const newTV = await cachedFetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.desc&first_air_date.gte=${dateStr}&first_air_date.lte=${todayStr}&vote_count.gte=20&without_original_language=${INDIAN_LANGS.join('|')}&without_genres=${BANNED_GENRES_TV.join(',')}`);
    const ongoing = await cachedFetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&first_air_date.lte=${todayStr}&vote_count.gte=50&with_status=0|1&without_original_language=${INDIAN_LANGS.join('|')}&without_genres=${BANNED_GENRES_TV.join(',')}&page=1`);

    const notifications = [];

    (newMovies.results || []).slice(0, 5).forEach(function(item) {
      notifications.push({ id: item.id, media_type: 'movie', title: item.title, poster_path: item.poster_path, type: 'new_release', message: 'New movie released!', createdAt: Date.now(), read: false });
    });
    (newTV.results || []).slice(0, 5).forEach(function(item) {
      notifications.push({ id: item.id, media_type: 'tv', title: item.name, poster_path: item.poster_path, type: 'new_release', message: 'New TV show released!', createdAt: Date.now(), read: false });
    });
    (ongoing.results || []).slice(0, 8).forEach(function(item) {
      if (!item.poster_path) return;
      const isKdrama = (item.origin_country || []).includes('KR');
      const isAnime = (item.genre_ids || []).includes(16) && (item.origin_country || []).includes('JP');
      let typeLabel = 'TV Show';
      if (isKdrama) typeLabel = 'Korean Series';
      if (isAnime) typeLabel = 'Anime';
      notifications.push({ id: item.id, media_type: 'tv', title: item.name, poster_path: item.poster_path, type: 'new_episode', message: 'New episode available! (' + typeLabel + ')', createdAt: Date.now(), read: false });
    });
    saveNotifications(notifications);
  } catch (err) { console.error('[Notifications]', err); }
}
function openNotifications() {
  const panel = document.getElementById('notif-panel');
  if (panel.classList.contains('open')) { closeNotifications(); return; }
  panel.classList.add('open');
  renderNotifications();
  const list = getNotifications();
  list.forEach(function(n) { n.read = true; });
  saveNotifications(list);
  updateNotifBadge();
}
function closeNotifications() {
  document.getElementById('notif-panel').classList.remove('open');
}
document.addEventListener('click', function(e) {
  const panel = document.getElementById('notif-panel');
  const notifBtn = e.target.closest('button[aria-label="Notifications"]');
  if (!panel || !panel.classList.contains('open')) return;
  if (panel.contains(e.target) || notifBtn) return;
  closeNotifications();
});
function renderNotifications() {
  const list = getNotifications();
  const container = document.getElementById('notif-list');
  const empty = document.getElementById('notif-empty');
  if (!container) return;
  container.innerHTML = '';
  if (list.length === 0) { empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  list.forEach(function(notif) {
    const item = document.createElement('div');
    item.className = 'notif-item';
    item.onclick = function() { closeNotifications(); showDetails(notif); };
    const img = document.createElement('img');
    img.className = 'notif-item-img';
    img.alt = notif.title;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = notif.poster_path ? `${IMG_W342}${notif.poster_path}` : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 75" fill="%23333"><rect width="50" height="75"/></svg>';
    const info = document.createElement('div');
    info.className = 'notif-item-info';
    const title = document.createElement('div');
    title.className = 'notif-item-title';
    title.textContent = notif.title;
    const meta = document.createElement('div');
    meta.className = 'notif-item-meta';
    const icon = notif.type === 'new_episode' ? 'fa-tv' : 'fa-fire';
    meta.innerHTML = '<i class="fa ' + icon + '"></i> ' + notif.message;
    info.appendChild(title);
    info.appendChild(meta);
    item.appendChild(img);
    item.appendChild(info);
    container.appendChild(item);
  });
}

// ============================================================
// USER PROFILE
// ============================================================
function openUserProfile() {
  closeAllPagesOnly();
  const page = document.getElementById('user-profile-page');
  page.classList.add('open');
  page.scrollTop = 0;
  let username = 'User';
  try {
    const session = JSON.parse(localStorage.getItem('mobiflix_auth_session') || '{}');
    if (session.username) username = session.username;
  } catch (e) {}
  document.getElementById('profile-username').textContent = username;
  const notifToggle = document.getElementById('notif-toggle');
  if (notifToggle) notifToggle.checked = isNotifEnabled();
  renderHistory();
  loadTheme();
  setActiveNav('profile');
  pushLayer('profile');
}
function closeUserProfile() {
  document.getElementById('user-profile-page').classList.remove('open');
  setActiveNav('home');
  triggerHomeRefresh();
}

// ============================================================
// DISPLAY
// ============================================================
function displayBanner(item) {
  bannerItem = item;
  const banner = document.getElementById('banner');
  banner.style.backgroundImage = `url(${IMG_W1280}${item.backdrop_path || item.poster_path})`;
  document.getElementById('banner-title').textContent = item.title || item.name;

  const ratingEl = document.getElementById('banner-rating');
  if (ratingEl) ratingEl.innerHTML = '<i class="fa fa-star" style="color:#f5c518;"></i> <span style="color:#fff;font-weight:700;margin-left:4px;">' + (item.vote_average || 0).toFixed(1) + '</span>';

  const yearEl = document.getElementById('banner-year');
  if (yearEl) yearEl.textContent = (item.release_date || item.first_air_date || '').slice(0, 4);

  const typeEl = document.getElementById('banner-type');
  if (typeEl) typeEl.textContent = item.media_type === 'movie' ? 'Movie' : 'TV Show';

  const descEl = document.getElementById('banner-description');
  if (descEl) descEl.textContent = item.overview || 'No description available.';
}
function playBanner() { if (bannerItem) showDetails(bannerItem); }
function showBannerDetails() { if (bannerItem) showDetails(bannerItem); }

function renderTop10(items, containerId, mediaType) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  filterReleased(items).slice(0, 10).forEach(function(item, index) {
    if (!item.poster_path) return;
    if (mediaType) item.media_type = mediaType;
    else if (!item.media_type) item.media_type = item.title ? 'movie' : 'tv';

    const wrapper = document.createElement('div');
    wrapper.className = 'top10-item';
    wrapper.onclick = function() { showDetails(item); };

    const number = document.createElement('div');
    number.className = 'top10-number';
    number.textContent = index + 1;

    const posterWrap = document.createElement('div');
    posterWrap.className = 'top10-poster-wrap';

    const img = document.createElement('img');
    img.src = `${IMG_W342}${item.poster_path}`;
    img.alt = item.title || item.name;
    img.loading = 'eager';
    img.decoding = 'async';
    img.fetchPriority = 'high';

    const ratingBadge = document.createElement('div');
    ratingBadge.className = 'poster-rating';
    ratingBadge.innerHTML = getStarHTML(item.vote_average);

    posterWrap.appendChild(img);
    posterWrap.appendChild(ratingBadge);
    wrapper.appendChild(number);
    wrapper.appendChild(posterWrap);
    container.appendChild(wrapper);
  });
}

function renderProviders() {
  const container = document.getElementById('providers-list');
  if (!container) return;
  container.innerHTML = '';

  STREAMING_PROVIDERS.forEach(function(provider) {
    const card = document.createElement('div');
    card.className = 'provider-card';
    card.title = provider.name;

    if (provider.type === 'vivamax') {
      card.classList.add('provider-card-vivamax');
      card.style.background = '#000';
      card.style.borderColor = '#ff6a00';
      card.style.color = '#ff6a00';

      const logoWrap = document.createElement('div');
      logoWrap.className = 'vivamax-logo-wrap';
      const vivaText = document.createElement('span');
      vivaText.className = 'vivamax-viva';
      vivaText.textContent = 'VIVA';
      const maxText = document.createElement('span');
      maxText.className = 'vivamax-max';
      maxText.textContent = 'MAX';
      logoWrap.appendChild(vivaText);
      logoWrap.appendChild(maxText);
      card.appendChild(logoWrap);
      card.onclick = function() { openVivamaxPage(); };
      container.appendChild(card);
      return;
    }

    if (provider.type === 'company') {
      card.style.background = '#ed1d24';
      card.style.borderColor = '#ed1d24';
      card.style.color = '#ed1d24';

      const img = document.createElement('img');
      img.alt = provider.name;
      img.src = PROVIDER_LOGOS[provider.name];
      img.loading = 'lazy';
      img.decoding = 'async';
      img.onerror = function() {
        this.style.display = 'none';
        if (!card.querySelector('span')) {
          const span = document.createElement('span');
          span.textContent = provider.name;
          card.appendChild(span);
        }
      };
      card.appendChild(img);
      card.onclick = function() { openMarvelPage(); };
      container.appendChild(card);
      return;
    }

    card.style.background = provider.color;
    card.style.borderColor = provider.color;
    card.style.color = provider.color;

    const img = document.createElement('img');
    img.alt = provider.name;
    img.src = PROVIDER_LOGOS[provider.name];
    img.loading = 'lazy';
    img.decoding = 'async';
    img.onerror = function() {
      this.style.display = 'none';
      if (!card.querySelector('span')) {
        const span = document.createElement('span');
        span.textContent = provider.name;
        card.appendChild(span);
      }
    };
    card.appendChild(img);
    card.onclick = function() { openProviderPage(provider.id, provider.name, provider.type); };
    container.appendChild(card);
  });
}

function renderGenresInMore() {
  const container = document.getElementById('more-genres-list');
  if (!container) return;
  container.innerHTML = '';
  GENRE_LIST.forEach(function(genre) {
    const link = document.createElement('a');
    link.textContent = `${genre.icon} ${genre.name}`;
    link.onclick = function() { openGenrePage(genre); };
    container.appendChild(link);
  });
}

// ============================================================
// FILTERS
// ============================================================
const FILTER_PANEL_MAP = {
  'view-all': 'view-all-filter-panel',
  'provider': 'provider-filter-panel',
  'genre': 'genre-filter-panel',
  'vivamax': 'vivamax-filter-panel'
};
const FILTER_PREFIX_MAP = {
  'view-all': 'filter-',
  'provider': 'provider-filter-',
  'genre': 'genre-filter-',
  'vivamax': 'vivamax-filter-'
};

function toggleFilters(pageKey) {
  const panelId = FILTER_PANEL_MAP[pageKey];
  if (!panelId) return;
  const panel = document.getElementById(panelId);
  if (!panel) return;
  panel.style.display = (panel.style.display === 'none' || !panel.style.display) ? 'block' : 'none';
}

function getFilterValues(pageKey) {
  const prefix = FILTER_PREFIX_MAP[pageKey] || 'filter-';
  const yearEl = document.getElementById(prefix + 'year');
  const genreEl = document.getElementById(prefix + 'genre');
  const countryEl = document.getElementById(prefix + 'country');
  const sortEl = document.getElementById(prefix + 'sort');
  return {
    year: yearEl ? yearEl.value : '',
    genre: genreEl ? genreEl.value : '',
    country: countryEl ? countryEl.value : '',
    sort: sortEl ? sortEl.value : 'popularity.desc'
  };
}

function applyFilters(pageKey) {
  const filters = getFilterValues(pageKey);
  const hasFilter = filters.year || filters.genre || filters.country || (filters.sort && filters.sort !== 'popularity.desc');
  if (!hasFilter) {
    alert('Please select at least one filter (Year, Genre, Country, or Sort By).');
    return;
  }

  if (pageKey === 'view-all') {
    viewAllState.filters = filters; viewAllState.page = 1; viewAllState.hasMore = true; viewAllState.seenIds = new Set();
    document.getElementById('view-all-grid').innerHTML = '';
    document.getElementById('view-all-end').style.display = 'none';
    loadViewAllBatch();
  } else if (pageKey === 'provider') {
    providerPageState.filters = filters; providerPageState.page = 1; providerPageState.batchCount = 0; providerPageState.hasMore = true; providerPageState.seenIds = new Set();
    document.getElementById('provider-page-grid').innerHTML = '';
    document.getElementById('provider-page-end').style.display = 'none';
    loadProviderBatch();
  } else if (pageKey === 'genre') {
    genrePageState.filters = filters; genrePageState.page = 1; genrePageState.hasMore = true; genrePageState.seenIds = new Set();
    document.getElementById('genre-page-grid').innerHTML = '';
    document.getElementById('genre-page-end').style.display = 'none';
    loadGenrePageBatch();
  } else if (pageKey === 'vivamax') {
    vivamaxPageState.filters = filters; vivamaxPageState.page = 1; vivamaxPageState.hasMore = true; vivamaxPageState.seenIds = new Set();
    document.getElementById('vivamax-page-grid').innerHTML = '';
    document.getElementById('vivamax-page-end').style.display = 'none';
    loadVivamaxBatch();
  }

  const panelId = FILTER_PANEL_MAP[pageKey];
  if (panelId) document.getElementById(panelId).style.display = 'none';
}

function clearFilters(pageKey) {
  const prefix = FILTER_PREFIX_MAP[pageKey] || 'filter-';
  const yearEl = document.getElementById(prefix + 'year');
  const genreEl = document.getElementById(prefix + 'genre');
  const countryEl = document.getElementById(prefix + 'country');
  const sortEl = document.getElementById(prefix + 'sort');
  if (yearEl) yearEl.value = '';
  if (genreEl) genreEl.value = '';
  if (countryEl) countryEl.value = '';
  if (sortEl) sortEl.value = 'popularity.desc';

  if (pageKey === 'view-all') {
    viewAllState.filters = {}; viewAllState.page = 1; viewAllState.hasMore = true; viewAllState.seenIds = new Set();
    document.getElementById('view-all-grid').innerHTML = '';
    document.getElementById('view-all-end').style.display = 'none';
    loadViewAllBatch();
  } else if (pageKey === 'provider') {
    providerPageState.filters = {}; providerPageState.page = 1; providerPageState.batchCount = 0; providerPageState.hasMore = true; providerPageState.seenIds = new Set();
    document.getElementById('provider-page-grid').innerHTML = '';
    document.getElementById('provider-page-end').style.display = 'none';
    loadProviderBatch();
  } else if (pageKey === 'genre') {
    genrePageState.filters = {}; genrePageState.page = 1; genrePageState.hasMore = true; genrePageState.seenIds = new Set();
    document.getElementById('genre-page-grid').innerHTML = '';
    document.getElementById('genre-page-end').style.display = 'none';
    loadGenrePageBatch();
  } else if (pageKey === 'vivamax') {
    vivamaxPageState.filters = {}; vivamaxPageState.page = 1; vivamaxPageState.hasMore = true; vivamaxPageState.seenIds = new Set();
    document.getElementById('vivamax-page-grid').innerHTML = '';
    document.getElementById('vivamax-page-end').style.display = 'none';
    loadVivamaxBatch();
  }

  const panelId = FILTER_PANEL_MAP[pageKey];
  if (panelId) document.getElementById(panelId).style.display = 'none';
}

// ============================================================
// CLOSE FUNCTIONS
// ============================================================
function closeAllPagesOnly() {
  const pagesToClose = ['view-all-page', 'provider-page', 'my-list-page', 'more-page', 'search-modal', 'genre-page', 'ongoing-page', 'completed-page', 'vivamax-page', 'marvel-page', 'user-profile-page'];
  pagesToClose.forEach(function(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('open'); el.scrollTop = 0; }
  });
  document.body.style.overflow = '';
}
function closeViewAll() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function closeVivamaxPage() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function closeMarvelPage() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function closeGenrePage() { closeAllPagesOnly(); setActiveNav('more'); triggerHomeRefresh(); }
function closeOngoingPage() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function closeCompletedPage() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function closeProviderPage() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function closeMyListPage() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function closeMorePage() { closeAllPagesOnly(); setActiveNav('home'); triggerHomeRefresh(); }
function openMoviesPage() { openViewAll('movies'); }
function openSeriesPage() { openViewAll('tv'); }
function closeSearchModal() {
  closeAllPagesOnly();
  document.body.style.overflow = '';
  setActiveNav('home');
  triggerHomeRefresh();
}

// ============================================================
// PAGE OPENERS
// ============================================================
function openVivamaxPage() {
  closeAllPagesOnly();
  const page = document.getElementById('vivamax-page');
  page.classList.add('open');
  page.scrollTop = 0;
  vivamaxPageState = { page: 1, maxPages: 500, loading: false, hasMore: true, initialized: true, seenIds: new Set(), filters: {} };
  document.getElementById('vivamax-page-grid').innerHTML = '';
  document.getElementById('vivamax-page-end').style.display = 'none';
  document.getElementById('vivamax-page-loading').style.display = 'none';
  page.removeEventListener('scroll', vivamaxPageScrollHandler);
  page.addEventListener('scroll', vivamaxPageScrollHandler, { passive: true });
  setActiveNav('home');
  loadVivamaxBatch();
  pushLayer('vivamax');
}
function vivamaxPageScrollHandler() {
  if (!vivamaxPageState.initialized || vivamaxPageState.loading || !vivamaxPageState.hasMore) return;
  const page = document.getElementById('vivamax-page');
  if (!page) return;
  if (page.scrollTop + page.clientHeight >= page.scrollHeight - 300) loadVivamaxBatch();
}
async function loadVivamaxBatch() {
  if (vivamaxPageState.loading || !vivamaxPageState.hasMore) return;
  vivamaxPageState.loading = true;
  document.getElementById('vivamax-page-loading').style.display = 'block';
  try {
    const filters = vivamaxPageState.filters || {};
    const sortBy = filters.sort || 'primary_release_date.desc';
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_companies=${VIVAMAX_COMPANY_ID}&sort_by=${sortBy}&include_adult=true&page=${vivamaxPageState.page}`;
    if (filters.year) url += `&primary_release_year=${filters.year}`;
    if (filters.genre) url += `&with_genres=${filters.genre}`;
    if (filters.country) url += `&with_origin_country=${filters.country}`;
    const data = await cachedFetch(url);
    if (!data.results || data.results.length === 0) {
      vivamaxPageState.hasMore = false;
      document.getElementById('vivamax-page-end').style.display = 'block';
      return;
    }
    vivamaxPageState.maxPages = data.total_pages || 1;
    vivamaxPageState.page += 1;
    const grid = document.getElementById('vivamax-page-grid');
    filterReleased(data.results).forEach(function(item) {
      if (!item.poster_path || vivamaxPageState.seenIds.has(item.id)) return;
      vivamaxPageState.seenIds.add(item.id);
      item.media_type = 'movie';
      grid.appendChild(createPosterWithRating(item, 'movie'));
    });
    if (vivamaxPageState.page > vivamaxPageState.maxPages) {
      vivamaxPageState.hasMore = false;
      document.getElementById('vivamax-page-end').style.display = 'block';
    }
  } catch (err) { console.error(err); }
  finally {
    vivamaxPageState.loading = false;
    document.getElementById('vivamax-page-loading').style.display = 'none';
  }
}

function openMarvelPage() {
  closeAllPagesOnly();
  const page = document.getElementById('marvel-page');
  page.classList.add('open');
  page.scrollTop = 0;
  marvelPageState = { page: 1, maxPages: 1, loading: false, hasMore: true, initialized: true, seenIds: new Set() };
  document.getElementById('marvel-page-grid').innerHTML = '';
  document.getElementById('marvel-page-end').style.display = 'none';
  document.getElementById('marvel-page-loading').style.display = 'none';
  setActiveNav('home');
  loadMarvelBatch();
  pushLayer('marvel');
}
async function loadMarvelBatch() {
  if (marvelPageState.loading || !marvelPageState.hasMore) return;
  marvelPageState.loading = true;
  document.getElementById('marvel-page-loading').style.display = 'block';
  try {
    const data = await fetchMarvelMovies();
    if (!data.results || data.results.length === 0) {
      marvelPageState.hasMore = false;
      document.getElementById('marvel-page-end').style.display = 'block';
      return;
    }
    const grid = document.getElementById('marvel-page-grid');
    data.results.forEach(function(item) {
      if (!item.poster_path || marvelPageState.seenIds.has(item.id)) return;
      marvelPageState.seenIds.add(item.id);
      item.media_type = 'movie';
      grid.appendChild(createPosterWithRating(item, 'movie'));
    });
    marvelPageState.hasMore = false;
    document.getElementById('marvel-page-end').style.display = 'block';
  } catch (err) { console.error(err); }
  finally {
    marvelPageState.loading = false;
    document.getElementById('marvel-page-loading').style.display = 'none';
  }
}

function openGenrePage(genre) {
  closeAllPagesOnly();
  const page = document.getElementById('genre-page');
  page.classList.add('open');
  page.scrollTop = 0;
  genrePageState = { genre: genre, page: 1, maxPages: 500, loading: false, hasMore: true, initialized: true, seenIds: new Set(), filters: {} };
  document.getElementById('genre-page-title').textContent = `${genre.icon} ${genre.name}`;
  document.getElementById('genre-page-grid').innerHTML = '';
  document.getElementById('genre-page-end').style.display = 'none';
  document.getElementById('genre-page-loading').style.display = 'none';
  page.removeEventListener('scroll', genrePageScrollHandler);
  page.addEventListener('scroll', genrePageScrollHandler, { passive: true });
  setActiveNav('more');
  loadGenrePageBatch();
  pushLayer('genre');
}
function genrePageScrollHandler() {
  if (!genrePageState.initialized || genrePageState.loading || !genrePageState.hasMore) return;
  const page = document.getElementById('genre-page');
  if (!page) return;
  if (page.scrollTop + page.clientHeight >= page.scrollHeight - 300) loadGenrePageBatch();
}
async function loadGenrePageBatch() {
  if (genrePageState.loading || !genrePageState.hasMore) return;
  genrePageState.loading = true;
  document.getElementById('genre-page-loading').style.display = 'block';
  try {
    const genre = genrePageState.genre;
    const filters = genrePageState.filters || {};
    const sortBy = filters.sort || 'popularity.desc';
    const bannedList = (genre.media === 'tv') ? BANNED_GENRES_TV : BANNED_GENRES_MOVIE;
    const sortParams = getSortParams(sortBy, genre.media);
    let url = `${BASE_URL}/discover/${genre.media}?api_key=${API_KEY}&with_genres=${genre.id}${sortParams}&page=${genrePageState.page}&without_original_language=${INDIAN_LANGS.join('|')}&without_genres=${bannedList.join(',')}`;
    if (filters.year) {
      if (genre.media === 'movie') url += `&primary_release_year=${filters.year}`;
      else url += `&first_air_date_year=${filters.year}`;
    }
    if (filters.country) url += `&with_origin_country=${filters.country}`;
    if (sortBy === 'primary_release_date.desc' || sortBy === 'primary_release_date.asc') {
      const today = new Date().toISOString().split('T')[0];
      if (genre.media === 'movie') url += `&primary_release_date.lte=${today}`;
      else url += `&first_air_date.lte=${today}`;
    }
    const data = await cachedFetch(url);
    if (!data.results || data.results.length === 0) {
      genrePageState.hasMore = false;
      document.getElementById('genre-page-end').style.display = 'block';
      return;
    }
    genrePageState.maxPages = data.total_pages || 1;
    genrePageState.page += 1;
    const grid = document.getElementById('genre-page-grid');
    filterReleased(data.results).forEach(function(item) {
      if (!item.poster_path || genrePageState.seenIds.has(item.id)) return;
      genrePageState.seenIds.add(item.id);
      item.media_type = genre.media;
      grid.appendChild(createPosterWithRating(item, genre.media));
    });
    if (genrePageState.page > genrePageState.maxPages) {
      genrePageState.hasMore = false;
      document.getElementById('genre-page-end').style.display = 'block';
    }
  } catch (err) { console.error(err); }
  finally {
    genrePageState.loading = false;
    document.getElementById('genre-page-loading').style.display = 'none';
  }
}

function openOngoingPage() {
  closeAllPagesOnly();
  const page = document.getElementById('ongoing-page');
  page.classList.add('open');
  page.scrollTop = 0;
  ongoingPageState = { page: 1, maxPages: 500, loading: false, hasMore: true, initialized: true, seenIds: new Set() };
  document.getElementById('ongoing-page-grid').innerHTML = '';
  document.getElementById('ongoing-page-end').style.display = 'none';
  document.getElementById('ongoing-page-loading').style.display = 'none';
  page.removeEventListener('scroll', ongoingPageScrollHandler);
  page.addEventListener('scroll', ongoingPageScrollHandler, { passive: true });
  setActiveNav('home');
  loadOngoingPageBatch();
  pushLayer('ongoing');
}
function ongoingPageScrollHandler() {
  if (!ongoingPageState.initialized || ongoingPageState.loading || !ongoingPageState.hasMore) return;
  const page = document.getElementById('ongoing-page');
  if (!page) return;
  if (page.scrollTop + page.clientHeight >= page.scrollHeight - 300) loadOngoingPageBatch();
}
async function loadOngoingPageBatch() {
  if (ongoingPageState.loading || !ongoingPageState.hasMore) return;
  ongoingPageState.loading = true;
  document.getElementById('ongoing-page-loading').style.display = 'block';
  try {
    const data = await fetchOngoingTV(ongoingPageState.page);
    ongoingPageState.maxPages = data.total_pages;
    ongoingPageState.page += 1;
    const grid = document.getElementById('ongoing-page-grid');
    data.results.forEach(function(item) {
      if (!item.poster_path || ongoingPageState.seenIds.has(item.id)) return;
      ongoingPageState.seenIds.add(item.id);
      item.media_type = 'tv';
      grid.appendChild(createPosterWithRating(item, 'tv'));
    });
    if (ongoingPageState.page > ongoingPageState.maxPages) {
      ongoingPageState.hasMore = false;
      document.getElementById('ongoing-page-end').style.display = 'block';
    }
  } catch (err) { console.error(err); }
  finally {
    ongoingPageState.loading = false;
    document.getElementById('ongoing-page-loading').style.display = 'none';
  }
}

function openCompletedPage() {
  closeAllPagesOnly();
  const page = document.getElementById('completed-page');
  page.classList.add('open');
  page.scrollTop = 0;
  completedPageState = { page: 1, maxPages: 500, loading: false, hasMore: true, initialized: true, seenIds: new Set() };
  document.getElementById('completed-page-grid').innerHTML = '';
  document.getElementById('completed-page-end').style.display = 'none';
  document.getElementById('completed-page-loading').style.display = 'none';
  page.removeEventListener('scroll', completedPageScrollHandler);
  page.addEventListener('scroll', completedPageScrollHandler, { passive: true });
  setActiveNav('home');
  loadCompletedPageBatch();
  pushLayer('completed');
}
function completedPageScrollHandler() {
  if (!completedPageState.initialized || completedPageState.loading || !completedPageState.hasMore) return;
  const page = document.getElementById('completed-page');
  if (!page) return;
  if (page.scrollTop + page.clientHeight >= page.scrollHeight - 300) loadCompletedPageBatch();
}
async function loadCompletedPageBatch() {
  if (completedPageState.loading || !completedPageState.hasMore) return;
  completedPageState.loading = true;
  document.getElementById('completed-page-loading').style.display = 'block';
  try {
    const data = await fetchCompletedTV(completedPageState.page);
    completedPageState.maxPages = data.total_pages;
    completedPageState.page += 1;
    const grid = document.getElementById('completed-page-grid');
    data.results.forEach(function(item) {
      if (!item.poster_path || completedPageState.seenIds.has(item.id)) return;
      completedPageState.seenIds.add(item.id);
      item.media_type = 'tv';
      grid.appendChild(createPosterWithRating(item, 'tv'));
    });
    if (completedPageState.page > completedPageState.maxPages) {
      completedPageState.hasMore = false;
      document.getElementById('completed-page-end').style.display = 'block';
    }
  } catch (err) { console.error(err); }
  finally {
    completedPageState.loading = false;
    document.getElementById('completed-page-loading').style.display = 'none';
  }
}

function openProviderPage(providerId, providerName, providerType) {
  closeAllPagesOnly();
  const page = document.getElementById('provider-page');
  page.classList.add('open');
  page.scrollTop = 0;
  providerPageState = {
    providerId: providerId, providerName: providerName, providerType: providerType || 'provider',
    page: 1, batchCount: 0, maxPages: 500, loading: false, hasMore: true, initialized: true, seenIds: new Set(),
    filters: { sort: 'popularity.desc' }
  };
  document.getElementById('provider-page-title').textContent = '📡 ' + providerName;
  document.getElementById('provider-page-grid').innerHTML = '';
  document.getElementById('provider-page-end').style.display = 'none';
  document.getElementById('provider-page-loading').style.display = 'none';
  const sortEl = document.getElementById('provider-filter-sort');
  if (sortEl) sortEl.value = 'popularity.desc';
  page.removeEventListener('scroll', providerPageScrollHandler);
  page.addEventListener('scroll', providerPageScrollHandler, { passive: true });
  loadProviderBatch();
  pushLayer('provider');
}
function providerPageScrollHandler() {
  if (!providerPageState.initialized || providerPageState.loading || !providerPageState.hasMore) return;
  const page = document.getElementById('provider-page');
  if (!page) return;
  if (page.scrollTop + page.clientHeight >= page.scrollHeight - 300) loadProviderBatch();
}
async function loadProviderBatch() {
  if (providerPageState.loading || !providerPageState.hasMore) return;
  providerPageState.loading = true;
  document.getElementById('provider-page-loading').style.display = 'block';
  try {
    const filters = providerPageState.filters || {};
    const sortBy = filters.sort || 'popularity.desc';
    if (typeof providerPageState.batchCount === 'undefined') providerPageState.batchCount = 0;
    const mediaType = (providerPageState.batchCount % 2 === 0) ? 'movie' : 'tv';
    const apiPage = Math.floor(providerPageState.batchCount / 2) + 1;
    const bannedList = (mediaType === 'tv') ? BANNED_GENRES_TV : BANNED_GENRES_MOVIE;
    const sortParams = getSortParams(sortBy, mediaType);
    let url = `${BASE_URL}/discover/${mediaType}?api_key=${API_KEY}&with_watch_providers=${providerPageState.providerId}&watch_region=US&page=${apiPage}${sortParams}&without_original_language=${INDIAN_LANGS.join('|')}&without_genres=${bannedList.join(',')}`;
    if (filters.year) {
      if (mediaType === 'movie') url += `&primary_release_year=${filters.year}`;
      else url += `&first_air_date_year=${filters.year}`;
    }
    if (filters.genre) url += `&with_genres=${filters.genre}`;
    if (filters.country) url += `&with_origin_country=${filters.country}`;
    if (sortBy === 'primary_release_date.desc' || sortBy === 'primary_release_date.asc') {
      const today = new Date().toISOString().split('T')[0];
      if (mediaType === 'movie') url += `&primary_release_date.lte=${today}`;
      else url += `&first_air_date.lte=${today}`;
    }
    const data = await cachedFetch(url);
    if (!data.results || data.results.length === 0) {
      providerPageState.hasMore = false;
      document.getElementById('provider-page-end').style.display = 'block';
      return;
    }
    providerPageState.maxPages = data.total_pages || 1;
    providerPageState.batchCount += 1;
    const grid = document.getElementById('provider-page-grid');
    filterReleased(data.results).forEach(function(item) {
      if (!item.poster_path || providerPageState.seenIds.has(item.id)) return;
      providerPageState.seenIds.add(item.id);
      item.media_type = mediaType;
      grid.appendChild(createPosterWithRating(item, mediaType));
    });
    if (apiPage >= providerPageState.maxPages) {
      providerPageState.hasMore = false;
      document.getElementById('provider-page-end').style.display = 'block';
    }
  } catch (err) { console.error(err); }
  finally {
    providerPageState.loading = false;
    document.getElementById('provider-page-loading').style.display = 'none';
  }
}

// ============================================================
// SHOW DETAILS
// ============================================================
function showDetails(item) {
  if (!item || !item.id) return;
  if (!item.media_type) {
    item.media_type = (item.first_air_date || (!item.title && item.name)) ? 'tv' : 'movie';
  }
  window.location.href = `details.html?id=${item.id}&type=${item.media_type}`;
}

// ============================================================
// WATCHLIST
// ============================================================
function getWatchlist() {
  try { return JSON.parse(localStorage.getItem('mobiflix_watchlist')) || []; }
  catch (e) { return []; }
}
function openMyListPage() {
  closeAllPagesOnly();
  const page = document.getElementById('my-list-page');
  page.classList.add('open');
  page.scrollTop = 0;
  renderMyList();
  setActiveNav('home');
  pushLayer('my-list');
}
function renderMyList() {
  const list = getWatchlist();
  const grid = document.getElementById('my-list-grid');
  const empty = document.getElementById('my-list-empty');
  grid.innerHTML = '';
  if (list.length === 0) { empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  list.forEach(function(item) {
    if (!item.poster_path) return;
    grid.appendChild(createPosterWithRating(item));
  });
}

// ============================================================
// SEARCH
// ============================================================
function openSearchModal() {
  closeAllPagesOnly();
  const modal = document.getElementById('search-modal');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  setActiveNav('home');
  setTimeout(function() { document.getElementById('search-input').focus(); }, 200);
  pushLayer('search');
}

let searchTimeout;
async function searchTMDB() {
  clearTimeout(searchTimeout);
  const query = document.getElementById('search-input').value;
  if (!query.trim()) {
    document.getElementById('search-results').innerHTML = '';
    return;
  }
  searchTimeout = setTimeout(async () => {
    try {
      const [movieData, tvData, krData] = await Promise.all([
        cachedFetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=true&region=PH&language=en-US`),
        cachedFetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=true&language=en-US`),
        cachedFetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=true&language=ko-KR`)
      ]);

      const movies = (movieData.results || []).map(function(m) { m.media_type = 'movie'; return m; });
      const tvs = (tvData.results || []).map(function(t) { t.media_type = 'tv'; return t; });
      const koreanSeries = (krData.results || [])
        .filter(function(t) {
          const genres = t.genre_ids || [];
          return !genres.some(function(g) { return KOREAN_EXCLUDE_GENRES.includes(g); });
        })
        .map(function(t) { t.media_type = 'tv'; t._isKorean = true; return t; });

      const seen = new Set();
      const combined = [];
      koreanSeries.forEach(function(item) {
        if (!seen.has(item.id) && item.poster_path && !INDIAN_LANGS.includes(item.original_language)) {
          seen.add(item.id);
          combined.push(item);
        }
      });
      [...movies, ...tvs].forEach(function(item) {
        if (!seen.has(item.id) && item.poster_path && !INDIAN_LANGS.includes(item.original_language)) {
          seen.add(item.id);
          combined.push(item);
        }
      });

      const today = new Date().toISOString().split('T')[0];
      const finalResults = combined
        .filter(function(item) {
          const date = item.release_date || item.first_air_date;
          return !date || date <= today;
        })
        .filter(function(item) {
          const genres = item.genre_ids || [];
          if (genres.length === 0) return true;
          const bannedList = (item.media_type === 'tv') ? BANNED_GENRES_TV : BANNED_GENRES_MOVIE;
          return !genres.some(function(g) { return bannedList.includes(g); });
        })
        .sort(function(a, b) {
          if (a._isKorean && !b._isKorean) return -1;
          if (!a._isKorean && b._isKorean) return 1;
          return (b.popularity || 0) - (a.popularity || 0);
        });

      const container = document.getElementById('search-results');
      container.innerHTML = '';
      if (finalResults.length === 0) {
        container.innerHTML = '<div style="color:#666;padding:40px 20px;text-align:center;grid-column:1/-1;">No results found.</div>';
        return;
      }
      finalResults.forEach(function(item) {
        container.appendChild(createPosterWithRating(item));
      });
    } catch (err) { console.error('[Search]', err); }
  }, 300);
}

// ============================================================
// BOTTOM NAV
// ============================================================
function setActiveNav(name) {
  document.querySelectorAll('.bottom-nav-item').forEach(function(el) { el.classList.remove('active'); });
  const items = document.querySelectorAll('.bottom-nav-item');
  const map = { home: 0, movies: 1, series: 2, more: 3, profile: 4 };
  if (items[map[name]]) items[map[name]].classList.add('active');
}

function goHome() {
  layerStack = [];
  closeAllPagesOnly();
  setActiveNav('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState({ mobiflixTrap: false }, '', '#home');
  history.pushState({ mobiflixHome: true }, '', '#home');
  triggerHomeRefresh();
}

function openMorePage() {
  closeAllPagesOnly();
  const page = document.getElementById('more-page');
  page.classList.add('open');
  page.scrollTop = 0;
  renderGenresInMore();
  setActiveNav('more');
  pushLayer('more');
}

// ============================================================
// VIEW ALL PAGE
// ============================================================
function openViewAll(key) {
  closeAllPagesOnly();
  const config = HOME_ROWS[key];
  if (!config) return;
  viewAllState = { key: key, page: 1, maxPages: 500, loading: false, hasMore: true, initialized: true, seenIds: new Set(), filters: {} };
  document.getElementById('view-all-title').textContent = config.icon + ' ' + config.name;
  const grid = document.getElementById('view-all-grid');
  grid.innerHTML = '';
  document.getElementById('view-all-end').style.display = 'none';
  document.getElementById('view-all-loading').style.display = 'none';
  const page = document.getElementById('view-all-page');
  page.classList.add('open');
  page.scrollTop = 0;
  const sortEl = document.getElementById('filter-sort');
  if (sortEl) sortEl.value = 'popularity.desc';
  page.removeEventListener('scroll', viewAllScrollHandler);
  page.addEventListener('scroll', viewAllScrollHandler, { passive: true });
  if (key === 'movies') setActiveNav('movies');
  else if (key === 'tv') setActiveNav('series');
  else setActiveNav('home');
  loadViewAllBatch();
  pushLayer('view-all');
}

async function loadViewAllBatch() {
  if (viewAllState.loading || !viewAllState.hasMore) return;
  viewAllState.loading = true;
  document.getElementById('view-all-loading').style.display = 'block';
  const key = viewAllState.key;
  const config = HOME_ROWS[key];
  const grid = document.getElementById('view-all-grid');
  try {
    let data;
    const filters = viewAllState.filters || {};
    const hasFilters = filters.year || filters.genre || filters.country;
    const hasCustomSort = filters.sort && filters.sort !== 'popularity.desc';
    const sortBy = filters.sort || 'popularity.desc';
    if (hasFilters || hasCustomSort) {
      const mediaType = config.media;
      let extraParams = '';
      if (key === 'kdrama') extraParams = '&with_origin_country=KR&without_genres=' + KOREAN_EXCLUDE_GENRES.join(',');
      else {
        const bannedList = (mediaType === 'tv') ? BANNED_GENRES_TV : BANNED_GENRES_MOVIE;
        extraParams = '&without_genres=' + bannedList.join(',');
      }
      let filterParams = '';
      if (filters.year) {
        if (mediaType === 'movie') filterParams += `&primary_release_year=${filters.year}`;
        else filterParams += `&first_air_date_year=${filters.year}`;
      }
      if (filters.genre) filterParams += `&with_genres=${filters.genre}`;
      if (filters.country) filterParams += `&with_origin_country=${filters.country}`;
      const sortParams = getSortParams(sortBy, mediaType);
      let url = `${BASE_URL}/discover/${mediaType}?api_key=${API_KEY}${extraParams}${filterParams}${sortParams}&page=${viewAllState.page}&without_original_language=${INDIAN_LANGS.join('|')}`;
      if (sortBy === 'primary_release_date.desc' || sortBy === 'primary_release_date.asc') {
        const today = new Date().toISOString().split('T')[0];
        if (mediaType === 'movie') url += `&primary_release_date.lte=${today}`;
        else url += `&first_air_date.lte=${today}`;
      }
      data = await cachedFetch(url);
      let results = filterReleased(data.results);
      if (key === 'kdrama') results = filterKoreanSeries(results);
      data.results = results;
    } else {
      if (key === 'movies') data = await fetchPopular('movie', viewAllState.page);
      else if (key === 'tv') data = await fetchPopular('tv', viewAllState.page);
      else if (key === 'kdrama') data = await fetchKoreanSeriesNewest(viewAllState.page);
    }
    if (!data.results || data.results.length === 0) {
      viewAllState.hasMore = false;
      document.getElementById('view-all-end').style.display = 'block';
      return;
    }
    viewAllState.maxPages = data.total_pages || 1;
    viewAllState.page += 1;
    data.results.forEach(function(item) {
      if (!item.poster_path || viewAllState.seenIds.has(item.id)) return;
      viewAllState.seenIds.add(item.id);
      item.media_type = config.media;
      grid.appendChild(createPosterWithRating(item, config.media));
    });
    if (viewAllState.page > viewAllState.maxPages) {
      viewAllState.hasMore = false;
      document.getElementById('view-all-end').style.display = 'block';
    }
  } catch (err) { console.error(err); }
  finally {
    viewAllState.loading = false;
    document.getElementById('view-all-loading').style.display = 'none';
  }
}

let viewAllScrollTimer = null;
function viewAllScrollHandler() {
  if (!viewAllState.initialized || viewAllState.loading || !viewAllState.hasMore) return;
  const page = document.getElementById('view-all-page');
  if (!page) return;
  clearTimeout(viewAllScrollTimer);
  viewAllScrollTimer = setTimeout(function() {
    if (page.scrollTop + page.clientHeight >= page.scrollHeight - 300) loadViewAllBatch();
  }, 150);
}

// ============================================================
// REFRESH HOME
// ============================================================
async function refreshHomeContent() {
  try {
    const bannerTitle = document.getElementById('banner-title');
    if (bannerTitle) bannerTitle.textContent = 'Loading new content...';

    const moviesRow = document.getElementById('top10-movies');
    const tvRow = document.getElementById('top10-tv');
    const kdramaRow = document.getElementById('top10-kdrama');
    if (moviesRow) moviesRow.innerHTML = '';
    if (tvRow) tvRow.innerHTML = '';
    if (kdramaRow) kdramaRow.innerHTML = '';

    const moviesData = await fetchTrendingPhilippines('movie', 1);
    if (moviesData.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * Math.min(5, moviesData.results.length));
      displayBanner(moviesData.results[randomIndex]);
    }
    moviesData.results.forEach(function(item) { item.media_type = 'movie'; });
    renderTop10(moviesData.results, 'top10-movies', 'movie');

    const tvData = await fetchTrendingPhilippines('tv', 1);
    tvData.results.forEach(function(item) { item.media_type = 'tv'; });
    renderTop10(tvData.results, 'top10-tv', 'tv');

    const kdramaData = await fetchKoreanSeriesNewest(1);
    kdramaData.results.forEach(function(item) { item.media_type = 'tv'; });
    renderTop10(kdramaData.results, 'top10-kdrama', 'tv');

    setTimeout(function() {
      generateNotifications().catch(function(err) { console.error('[MobiFlix] Notif error:', err); });
    }, 1500);

    renderContinueWatching();
    updateNotifBadge();
  } catch (err) {
    console.error('[MobiFlix] ❌ Refresh error:', err);
    const bannerTitle = document.getElementById('banner-title');
    if (bannerTitle && bannerTitle.textContent === 'Loading new content...') {
      bannerTitle.textContent = 'MobiFlix';
    }
  }
}

// ============================================================
// INIT
// ============================================================
async function init() {
  try {
    loadTheme();
    renderProviders();
    renderContinueWatching();
    updateNotifBadge();
    populateCountryDropdowns();

    const notifToggle = document.getElementById('notif-toggle');
    if (notifToggle) notifToggle.checked = isNotifEnabled();

    setTimeout(createSnow, 300);

    const moviesData = await fetchTrendingPhilippines('movie', 1);
    if (moviesData.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * Math.min(5, moviesData.results.length));
      displayBanner(moviesData.results[randomIndex]);
    }
    moviesData.results.forEach(function(item) { item.media_type = 'movie'; });
    renderTop10(moviesData.results, 'top10-movies', 'movie');

    const tvData = await fetchTrendingPhilippines('tv', 1);
    tvData.results.forEach(function(item) { item.media_type = 'tv'; });
    renderTop10(tvData.results, 'top10-tv', 'tv');

    const kdramaData = await fetchKoreanSeriesNewest(1);
    kdramaData.results.forEach(function(item) { item.media_type = 'tv'; });
    renderTop10(kdramaData.results, 'top10-kdrama', 'tv');

    setTimeout(function() {
      generateNotifications().catch(function(err) { console.error('[MobiFlix] Notif error:', err); });
    }, 1500);
  } catch (err) { console.error('[MobiFlix] Init error:', err); }
}

init();

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeAllPagesOnly();
    layerStack = [];
  }
});