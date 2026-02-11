/* ==========================================
   THRIFT BOOK - App Logic
   ========================================== */

// ==========================================
// DATA
// ==========================================

const categories = [
  {
    id: 'clothing',
    emoji: '👗',
    title: 'Clothing',
    subtitle: '24 guides',
    badge: 'Popular',
    tags: ['popular', 'clothing'],
    bgClass: 'cat-bg-1',
    viewers: 342,
    sections: [
      {
        title: 'How to Spot Quality Fabric',
        icon: '🧵',
        tips: [
          { title: 'The Scrunch Test', desc: 'Scrunch the fabric in your hand and release. Quality fabric bounces back with minimal wrinkles. Cheap fabric stays wrinkled.' },
          { title: 'Check the Seams', desc: 'Look for tight, even stitching. French seams and flat-felled seams indicate higher quality construction.' },
          { title: 'Read the Labels', desc: 'Natural fibers (cotton, linen, wool, silk) generally indicate better quality than pure polyester. Blends can be great too.' },
          { title: 'Weight & Drape', desc: 'Hold the garment up. Quality pieces have a nice weight and drape naturally. Cheap items feel flimsy and stiff.' }
        ],
        proTip: 'Turn garments inside out! The inside construction tells you more about quality than the outside ever will.'
      },
      {
        title: 'Brands Worth Looking For',
        icon: '🏷️',
        tips: [
          { title: 'High-End Basics', desc: 'Look for Eileen Fisher, COS, Everlane, & Other Stories — they hold up beautifully and retail for $$$.' },
          { title: 'Vintage Gold', desc: 'Older pieces from brands like Pendleton, LL Bean, and Levi\'s were made with better quality than their modern counterparts.' },
          { title: 'Designer Finds', desc: 'Check for Max Mara, Theory, Vince, and Equipment. These are commonly donated and resell for great prices.' }
        ],
        proTip: 'Learn to recognize quality brand labels — some thrift stores miss designer items and price them at regular rates!'
      },
      {
        title: 'Thrift Store Checklist',
        icon: '✅',
        checklist: ['Check for stains & holes', 'Test all zippers & buttons', 'Check for pilling', 'Look at armpit areas', 'Try it on if possible', 'Check the care label', 'Look for alterations potential']
      }
    ]
  },
  {
    id: 'jewellery',
    emoji: '💎',
    title: 'Jewellery',
    subtitle: '18 guides',
    badge: 'Hot',
    tags: ['popular', 'accessories', 'vintage'],
    bgClass: 'cat-bg-2',
    viewers: 289,
    sections: [
      {
        title: 'Identifying Real vs. Costume',
        icon: '🔍',
        tips: [
          { title: 'The Magnet Test', desc: 'Real gold and silver are not magnetic. If a piece sticks to a magnet, it\'s likely plated or costume jewellery.' },
          { title: 'Hallmarks & Stamps', desc: 'Look for stamps like 925 (sterling silver), 14K/18K (gold), or 750 (18K gold). These are usually on clasps or inside bands.' },
          { title: 'Weight Matters', desc: 'Real precious metals feel heavier than they look. Pick up the piece — if it feels surprisingly heavy, that\'s a good sign.' },
          { title: 'The Green Skin Test', desc: 'If jewellery turns your skin green, it contains copper. Real gold and silver won\'t cause this reaction.' }
        ],
        proTip: 'Bring a small magnifying glass and a magnet to the thrift store. These two tools will help you find hidden gems!'
      },
      {
        title: 'What to Look For',
        icon: '✨',
        tips: [
          { title: 'Signed Pieces', desc: 'Look for signatures from vintage designers like Monet, Trifari, Sarah Coventry, and Napier — they\'re highly collectible.' },
          { title: 'Gemstone Basics', desc: 'Real gemstones feel cold to the touch and have natural imperfections. Glass stones feel warmer and look too perfect.' },
          { title: 'Pearl Test', desc: 'Gently rub pearls against your teeth. Real pearls feel slightly gritty/sandy, while fake ones feel smooth.' }
        ],
        proTip: 'Check the jewellery section multiple times during your visit — stores are constantly restocking throughout the day.'
      }
    ]
  },
  {
    id: 'art',
    emoji: '🎨',
    title: 'Art & Prints',
    subtitle: '15 guides',
    tags: ['home', 'vintage'],
    bgClass: 'cat-bg-3',
    viewers: 198,
    sections: [
      {
        title: 'Finding Valuable Art',
        icon: '🖼️',
        tips: [
          { title: 'Original vs. Print', desc: 'Run your finger over the surface. Original paintings have texture and raised brushstrokes. Prints are flat and smooth.' },
          { title: 'Check the Back', desc: 'Flip the piece over. Old canvases, gallery labels, and artist signatures on the back indicate authenticity and value.' },
          { title: 'Frame Quality', desc: 'Even if the art isn\'t valuable, vintage and ornate frames can be worth more than the art inside them!' },
          { title: 'Look for Numbered Prints', desc: 'Limited edition prints are numbered (like 12/250). Lower numbers and smaller editions tend to be more valuable.' }
        ],
        proTip: 'Don\'t overlook the frames! Solid wood, gilded, and hand-carved frames from thrift stores can sell for $50-200+.'
      },
      {
        title: 'Art Resale Checklist',
        icon: '✅',
        checklist: ['Check for signatures or initials', 'Look for gallery stickers on back', 'Note the medium (oil, watercolor, etc.)', 'Check frame condition', 'Research the artist name online', 'Look for certificates of authenticity']
      }
    ]
  },
  {
    id: 'furniture',
    emoji: '🪑',
    title: 'Furniture',
    subtitle: '20 guides',
    tags: ['home', 'vintage'],
    bgClass: 'cat-bg-4',
    viewers: 256,
    sections: [
      {
        title: 'Spotting Quality Furniture',
        icon: '🔨',
        tips: [
          { title: 'Solid Wood Check', desc: 'Knock on it! Solid wood sounds dull and solid. Particleboard or MDF sounds hollow. Check edges for veneer peeling.' },
          { title: 'Dovetail Joints', desc: 'Open drawers and look for dovetail joints (interlocking zigzag pattern). This indicates quality craftsmanship and solid wood.' },
          { title: 'Mid-Century Modern Gold', desc: 'Look for clean lines, tapered legs, and minimal ornamentation. Brands like Herman Miller, Knoll, and Danish pieces are gold.' },
          { title: 'Check Stability', desc: 'Sit in chairs, open all drawers, test all mechanisms. Wobbling can sometimes be fixed with wood glue, but check first.' }
        ],
        proTip: 'Many thrift stores have "furniture days" with 50% off. Ask the staff about sale schedules to get the best deals!'
      }
    ]
  },
  {
    id: 'books',
    emoji: '📚',
    title: 'Books',
    subtitle: '12 guides',
    tags: ['popular'],
    bgClass: 'cat-bg-5',
    viewers: 412,
    sections: [
      {
        title: 'Finding Valuable Books',
        icon: '📖',
        tips: [
          { title: 'First Editions', desc: 'Check the copyright page for "First Edition" or a number line starting with 1. First printings of popular books can be very valuable.' },
          { title: 'Signed Copies', desc: 'Always flip to the title page. Signed copies hide in plain sight at thrift stores and can be worth 10-50x the cover price.' },
          { title: 'Vintage Cookbooks', desc: 'Pre-1970s cookbooks, especially from community organizations, are highly sought after by collectors and can sell for $20-100+.' },
          { title: 'ISBN Check', desc: 'Use your phone to scan the ISBN barcode. Apps like BookScouter will show you the current resale value instantly.' }
        ],
        proTip: 'Children\'s books from the 1950s-70s, especially Dr. Seuss first editions, can be worth thousands. Always check the kids\' section!'
      }
    ]
  },
  {
    id: 'shoes',
    emoji: '👟',
    title: 'Shoes',
    subtitle: '14 guides',
    badge: 'New',
    tags: ['popular', 'clothing', 'accessories'],
    bgClass: 'cat-bg-6',
    viewers: 187,
    sections: [
      {
        title: 'Evaluating Thrifted Shoes',
        icon: '👀',
        tips: [
          { title: 'Check the Sole', desc: 'Flexible soles with good tread indicate life left. Worn-down heels and cracked soles mean the shoe is at end of life.' },
          { title: 'Leather Quality', desc: 'Real leather warms to your touch and has natural grain variations. Faux leather feels cold and has a uniform pattern.' },
          { title: 'Brand Indicators', desc: 'Look inside the shoe for brand stamps and size markings. Quality brands stamp, not print. Allen Edmonds, Ferragamo, and Cole Haan are frequent finds.' },
          { title: 'The Flex Test', desc: 'Bend the shoe at the ball of the foot. Quality shoes flex here naturally. Cheap shoes bend in the middle or feel rigid.' }
        ],
        proTip: 'Leather shoes can be cleaned, conditioned, and polished to look almost new. Don\'t pass on a great pair just because they\'re dusty!'
      }
    ]
  },
  {
    id: 'kitchenware',
    emoji: '🍳',
    title: 'Kitchenware',
    subtitle: '16 guides',
    tags: ['home'],
    bgClass: 'cat-bg-7',
    viewers: 231,
    sections: [
      {
        title: 'Kitchen Gold at Thrift Stores',
        icon: '🏆',
        tips: [
          { title: 'Cast Iron', desc: 'Always check for cast iron! Le Creuset, Staub, and Lodge pieces are thrift store gold. Even rusty cast iron can be restored.' },
          { title: 'Pyrex & Vintage Glass', desc: 'Vintage Pyrex patterns (especially from the 60s-70s) are highly collectible. Look for bright colors and bold patterns.' },
          { title: 'Quality Knives', desc: 'Look for full-tang knives (the metal extends through the handle). Brands like Wusthof, Henckels, and Global are commonly found.' },
          { title: 'Stand Mixers', desc: 'KitchenAid stand mixers show up more often than you\'d think. Test that they power on and the attachments work.' }
        ],
        proTip: 'Le Creuset retails for $200-400+. At thrift stores, they\'re often priced at $10-20. Check the bottom for the brand stamp!'
      }
    ]
  },
  {
    id: 'handbags',
    emoji: '👜',
    title: 'Handbags',
    subtitle: '16 guides',
    badge: 'Hot',
    tags: ['popular', 'accessories'],
    bgClass: 'cat-bg-8',
    viewers: 367,
    sections: [
      {
        title: 'Authenticating Designer Bags',
        icon: '🔎',
        tips: [
          { title: 'Stitching Quality', desc: 'Authentic designer bags have perfectly even, tight stitching. Count stitches per inch — luxury brands are consistent.' },
          { title: 'Hardware Check', desc: 'Real designer hardware feels heavy and has brand engravings. Cheap hardware feels light and may be glued on.' },
          { title: 'Lining & Interior', desc: 'Check inside for serial numbers, brand tags, and quality lining. Authentic bags have neat, clean interiors.' },
          { title: 'Leather Smell', desc: 'Real leather has a distinct, rich smell. Faux leather smells like plastic or chemicals.' }
        ],
        proTip: 'Coach, Dooney & Bourke, and Kate Spade are the most commonly found designer bags at thrift stores. Learn their authentication markers!'
      }
    ]
  },
  {
    id: 'vinyl',
    emoji: '🎵',
    title: 'Vinyl Records',
    subtitle: '10 guides',
    tags: ['vintage'],
    bgClass: 'cat-bg-9',
    viewers: 145,
    sections: [
      {
        title: 'Vinyl Hunting 101',
        icon: '💿',
        tips: [
          { title: 'Condition is Key', desc: 'Hold records up to the light. Surface scratches are OK, but deep grooves affect playback. Check for warping by laying flat.' },
          { title: 'First Pressings', desc: 'Check the matrix numbers etched in the dead wax (near the label). First pressings are the most valuable.' },
          { title: 'Genre Gold', desc: 'Jazz, soul, funk, and early hip-hop records tend to be the most valuable. Classic rock is plentiful but less rare.' },
          { title: 'Cover Art Value', desc: 'Some album covers are valuable art pieces themselves. Original gatefold covers in good condition add significant value.' }
        ],
        proTip: 'Use the Discogs app to scan barcodes and check current market values while you browse the bins!'
      }
    ]
  },
  {
    id: 'home-decor',
    emoji: '🏠',
    title: 'Home Decor',
    subtitle: '18 guides',
    tags: ['home'],
    bgClass: 'cat-bg-10',
    viewers: 278,
    sections: [
      {
        title: 'Decorating on a Thrift Budget',
        icon: '✨',
        tips: [
          { title: 'Vases & Ceramics', desc: 'Look for quality pottery — flip it over and check for maker\'s marks. Brands like Heath, Bauer, and studio pottery hold great value.' },
          { title: 'Candle Holders & Brass', desc: 'Brass items are thrift store staples. They clean up beautifully with Bar Keeper\'s Friend and look expensive on shelves.' },
          { title: 'Mirrors & Frames', desc: 'Vintage mirrors and ornate frames can transform a room. Even damaged ones can be DIY-refreshed with spray paint.' },
          { title: 'Textiles & Throws', desc: 'Wool blankets, quality throw pillows, and vintage textiles are always available. Check for moth damage and stains.' }
        ],
        proTip: 'Think of thrift decor as "raw material." A coat of spray paint, new hardware, or fresh fabric can transform any piece.'
      }
    ]
  },
  {
    id: 'denim',
    emoji: '👖',
    title: 'Denim',
    subtitle: '11 guides',
    badge: 'Popular',
    tags: ['popular', 'clothing'],
    bgClass: 'cat-bg-11',
    viewers: 321,
    sections: [
      {
        title: 'The Denim Guide',
        icon: '🧵',
        tips: [
          { title: 'Vintage Levi\'s', desc: 'Pre-1980s Levi\'s have a capital "E" on the red tab. These "Big E" Levi\'s can sell for $100-500+. Check the back pocket tab!' },
          { title: 'Selvedge Denim', desc: 'Look at the inside of the outseam. A clean, colored edge (usually red/white) indicates selvedge denim — the good stuff.' },
          { title: 'Fit Potential', desc: 'Denim can be tailored easily. Buy for the hip/waist fit and have the length hemmed. Oversized is also very on-trend.' },
          { title: 'Natural Fading', desc: 'Authentic vintage fading (whiskers, honeycombs) can\'t be replicated. These naturally worn-in jeans are more valuable than new distressed ones.' }
        ],
        proTip: 'Japanese denim brands (Momotaro, Pure Blue Japan, Flat Head) sometimes show up at thrift stores. They retail for $200-400!'
      }
    ]
  },
  {
    id: 'reselling',
    emoji: '💰',
    title: 'Reselling Tips',
    subtitle: '22 guides',
    tags: ['popular'],
    bgClass: 'cat-bg-12',
    viewers: 456,
    sections: [
      {
        title: 'Thrift to Profit',
        icon: '📈',
        tips: [
          { title: 'Know Your Platforms', desc: 'Depop for trendy/vintage clothing, eBay for collectibles, Poshmark for brands, Facebook Marketplace for furniture.' },
          { title: 'Photography Matters', desc: 'Good photos sell items faster. Use natural light, a clean background, and show the item from multiple angles including any flaws.' },
          { title: 'Price Research', desc: 'Always check "sold" listings on eBay/Poshmark to see what items actually sell for, not just what people list them at.' },
          { title: 'Timing Your Finds', desc: 'Buy winter coats in summer and swimwear in winter when thrift stores are stocked. Sell when demand peaks for maximum profit.' }
        ],
        proTip: 'The best resellers specialize in a niche. Pick a category you\'re passionate about and become an expert in that area!'
      }
    ]
  }
];

const inspoFeed = [
  {
    id: 1,
    image: '👗',
    title: 'Oversized blazer + wide leg trouser moment',
    handle: '@thaboranoke',
    platform: 'Instagram',
    platformIcon: '📸',
    tags: ['streetwear', 'plus-size'],
    saves: 1243,
    bgClass: 'inspo-bg-1',
    sizeTag: 'Size 18',
    link: '#'
  },
  {
    id: 2,
    image: '🧥',
    title: '70s suede jacket styling for fall',
    handle: '@vintagesoulmate',
    platform: 'Pinterest',
    platformIcon: '📌',
    tags: ['vintage', 'outerwear'],
    saves: 892,
    bgClass: 'inspo-bg-2',
    sizeTag: null,
    link: '#'
  },
  {
    id: 3,
    image: '👠',
    title: 'Runway to thrift: Miu Miu ballet flat dupes',
    handle: '@thriftedrunway',
    platform: 'TikTok',
    platformIcon: '🎵',
    tags: ['runway', 'shoes'],
    saves: 2104,
    bgClass: 'inspo-bg-3',
    sizeTag: null,
    link: '#'
  },
  {
    id: 4,
    image: '👖',
    title: 'Barrel jeans + crop top — all thrifted',
    handle: '@curvythriftqueen',
    platform: 'Instagram',
    platformIcon: '📸',
    tags: ['denim', 'plus-size'],
    saves: 1567,
    bgClass: 'inspo-bg-4',
    sizeTag: 'Size 22',
    link: '#'
  },
  {
    id: 5,
    image: '💍',
    title: 'Layered gold jewelry — all under $5 at Goodwill',
    handle: '@goldfindsonly',
    platform: 'Instagram',
    platformIcon: '📸',
    tags: ['accessories', 'jewelry'],
    saves: 3201,
    bgClass: 'inspo-bg-5',
    sizeTag: null,
    link: '#'
  },
  {
    id: 6,
    image: '🧵',
    title: 'SS25 Bottega Veneta — find the thrift version',
    handle: '@runwaytothrift',
    platform: 'Runway',
    platformIcon: '🏛️',
    tags: ['runway', 'designer'],
    saves: 1890,
    bgClass: 'inspo-bg-6',
    sizeTag: null,
    link: '#'
  },
  {
    id: 7,
    image: '👚',
    title: 'Cottagecore garden party fit — size 2X',
    handle: '@plussizecottage',
    platform: 'Pinterest',
    platformIcon: '📌',
    tags: ['cottagecore', 'plus-size'],
    saves: 978,
    bgClass: 'inspo-bg-1',
    sizeTag: 'Size 2X',
    link: '#'
  },
  {
    id: 8,
    image: '🕶️',
    title: 'Vintage Versace frames for $8 — how to spot them',
    handle: '@thriftoptics',
    platform: 'TikTok',
    platformIcon: '🎵',
    tags: ['accessories', 'vintage'],
    saves: 2456,
    bgClass: 'inspo-bg-3',
    sizeTag: null,
    link: '#'
  },
];

const trendingGuides = [
  { emoji: '🏷️', title: 'How to Read Clothing Labels', subtitle: 'Decode fabric content & care', category: 'clothing' },
  { emoji: '🔍', title: 'Thrift Store Red Flags', subtitle: 'What to always avoid buying', category: 'clothing' },
  { emoji: '💸', title: 'Best Thrift Store Chains Ranked', subtitle: 'Where to get the best deals', category: 'reselling' },
  { emoji: '📱', title: 'Apps Every Thrifter Needs', subtitle: 'Price check & authenticate on the go', category: 'reselling' },
  { emoji: '♻️', title: 'Sustainable Fashion Guide', subtitle: 'Thrifting for the planet', category: 'clothing' },
];

const thriftListBoards = [
  { id: 'all', label: 'All' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'home', label: 'Home' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'found', label: 'Found!' },
];

const thriftListItems = [
  { emoji: '🧥', name: 'Oversized wool blazer', note: 'Earth tones, check for moth holes', board: 'clothing', found: false, bgClass: 'cat-bg-1' },
  { emoji: '👖', name: 'Vintage Levi\'s 501s', note: 'Size 28-30, look for Big E tab', board: 'clothing', found: false, bgClass: 'cat-bg-11' },
  { emoji: '🏺', name: 'Ceramic vase (neutral)', note: 'For the bookshelf, no chips', board: 'home', found: false, bgClass: 'cat-bg-4' },
  { emoji: '💍', name: 'Gold chain necklace', note: 'Check for 14K stamp, magnet test', board: 'accessories', found: true, bgClass: 'cat-bg-2' },
  { emoji: '🪑', name: 'Mid-century side table', note: 'Wood, tapered legs, no veneer', board: 'home', found: false, bgClass: 'cat-bg-5' },
  { emoji: '👜', name: 'Leather crossbody bag', note: 'Real leather smell test, minimal hardware', board: 'accessories', found: false, bgClass: 'cat-bg-8' },
  { emoji: '🖼️', name: 'Botanical print (framed)', note: 'Vintage feel, gold or wood frame', board: 'home', found: true, bgClass: 'cat-bg-3' },
  { emoji: '👗', name: 'Silk slip dress', note: 'Black or champagne, check seams', board: 'clothing', found: false, bgClass: 'cat-bg-7' },
  { emoji: '🕯️', name: 'Brass candlestick holders', note: 'Pair, can clean with Bar Keeper\'s Friend', board: 'home', found: false, bgClass: 'cat-bg-10' },
  { emoji: '👟', name: 'New Balance 990s', note: 'Size 8, any colorway, check sole wear', board: 'clothing', found: false, bgClass: 'cat-bg-6' },
  { emoji: '📚', name: 'Coffee table art book', note: 'Large format, photography or fashion', board: 'home', found: true, bgClass: 'cat-bg-9' },
  { emoji: '🧣', name: 'Cashmere scarf', note: 'Neutral color, do the scrunch test', board: 'accessories', found: false, bgClass: 'cat-bg-12' },
];


// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderInspoFeed();
  renderTrendingGuides();
  renderThriftList();
  updateTime();
  setInterval(updateTime, 60000);
});

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const h = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  document.getElementById('current-time').textContent = `${h}:${minutes}`;
}


// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderCategories() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = categories.map((cat, i) => `
    <div class="category-card" data-tags="${cat.tags.join(',')}" data-id="${cat.id}" onclick="showCategoryDetail('${cat.id}')">
      <div class="category-card-image ${cat.bgClass}">
        <span style="position:relative;z-index:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))">${cat.emoji}</span>
        ${cat.badge ? `<span class="category-badge">${cat.badge}</span>` : ''}
      </div>
      <div class="category-card-body">
        <h3>${cat.title}</h3>
        <p>${cat.subtitle}</p>
        <div class="category-viewers">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          ${cat.viewers} learning
        </div>
      </div>
    </div>
  `).join('');
}

function renderInspoFeed(filter) {
  const feed = document.getElementById('inspo-feed');
  const filtered = !filter || filter === 'all'
    ? inspoFeed
    : inspoFeed.filter(item => item.tags.includes(filter));

  feed.innerHTML = filtered.map(item => `
    <div class="inspo-card">
      <div class="inspo-image ${item.bgClass}">
        <span class="inspo-emoji">${item.image}</span>
        ${item.sizeTag ? `<span class="inspo-size-tag">${item.sizeTag}</span>` : ''}
        <span class="inspo-platform">${item.platformIcon}</span>
      </div>
      <div class="inspo-body">
        <p class="inspo-title">${item.title}</p>
        <div class="inspo-source">
          <span class="inspo-handle">${item.handle}</span>
          <span class="inspo-dot">·</span>
          <span class="inspo-platform-name">${item.platform}</span>
        </div>
        <div class="inspo-actions">
          <span class="inspo-tags">${item.tags.map(t => `<span class="inspo-tag">${t}</span>`).join('')}</span>
          <span class="inspo-save">♡ ${item.saves.toLocaleString()}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterInspo(btn, filter) {
  btn.closest('.filter-pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderInspoFeed(filter);
}

function renderTrendingGuides() {
  const list = document.getElementById('trending-list');
  list.innerHTML = trendingGuides.map((guide, i) => `
    <div class="trending-item" onclick="showCategoryDetail('${guide.category}')">
      <span class="trending-number">${i + 1}</span>
      <span class="trending-emoji">${guide.emoji}</span>
      <div class="trending-info">
        <h4>${guide.title}</h4>
        <p>${guide.subtitle}</p>
      </div>
      <span class="trending-arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </span>
    </div>
  `).join('');
}

let activeBoard = 'all';

function renderThriftList(board) {
  if (board !== undefined) activeBoard = board;
  const grid = document.getElementById('thrift-list-grid');
  const filtered = activeBoard === 'all'
    ? thriftListItems.filter(i => !i.found)
    : activeBoard === 'found'
    ? thriftListItems.filter(i => i.found)
    : thriftListItems.filter(i => i.board === activeBoard && !i.found);

  grid.innerHTML = filtered.map((item, i) => `
    <div class="thrift-pin ${item.found ? 'found' : ''}" onclick="toggleFound(${thriftListItems.indexOf(item)})">
      <div class="thrift-pin-image ${item.bgClass}">
        <span class="thrift-pin-emoji">${item.emoji}</span>
        ${item.found ? '<span class="thrift-pin-check">✓</span>' : ''}
      </div>
      <div class="thrift-pin-body">
        <h4>${item.name}</h4>
        <p>${item.note}</p>
      </div>
    </div>
  `).join('');

  // Update count
  const countEl = document.getElementById('thrift-list-count');
  if (countEl) {
    const total = thriftListItems.filter(i => !i.found).length;
    const foundCount = thriftListItems.filter(i => i.found).length;
    countEl.textContent = `${total} to find · ${foundCount} found`;
  }
}

function filterThriftList(btn, board) {
  btn.closest('.filter-pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderThriftList(board);
}

function toggleFound(index) {
  thriftListItems[index].found = !thriftListItems[index].found;
  renderThriftList();
}

function showAddToList() {
  document.getElementById('add-thrift-modal').classList.add('visible');
}

function hideAddToList(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('add-thrift-modal').classList.remove('visible');
}

function addToThriftList() {
  const name = document.getElementById('thrift-item-name').value;
  const note = document.getElementById('thrift-item-note').value;
  const board = document.getElementById('thrift-item-board').value;

  if (!name) return;

  const boardEmojis = {
    'clothing': '👗', 'home': '🏠', 'accessories': '💍'
  };
  const bgClasses = ['cat-bg-1','cat-bg-2','cat-bg-3','cat-bg-4','cat-bg-5','cat-bg-6','cat-bg-7','cat-bg-8','cat-bg-9','cat-bg-10','cat-bg-11','cat-bg-12'];

  thriftListItems.unshift({
    emoji: boardEmojis[board] || '📦',
    name,
    note: note || 'No notes yet',
    board,
    found: false,
    bgClass: bgClasses[Math.floor(Math.random() * bgClasses.length)]
  });

  renderThriftList();
  hideAddToList();

  document.getElementById('thrift-item-name').value = '';
  document.getElementById('thrift-item-note').value = '';
}


// ==========================================
// NAVIGATION
// ==========================================

function switchPage(pageId, navBtn) {
  // Hide detail page if showing
  const detailPage = document.getElementById('page-detail');
  if (detailPage.classList.contains('active')) {
    detailPage.classList.remove('active');
    detailPage.style.display = 'none';
  }

  // Switch pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const targetPage = document.getElementById(`page-${pageId}`);
  targetPage.style.display = 'block';
  targetPage.classList.add('active');
  targetPage.scrollTop = 0;

  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  navBtn.classList.add('active');
}


// ==========================================
// CATEGORY DETAIL
// ==========================================

function showCategoryDetail(categoryId) {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return;

  document.getElementById('detail-emoji').textContent = category.emoji;
  document.getElementById('detail-title').textContent = category.title;
  document.getElementById('detail-subtitle').textContent = `${category.subtitle} · ${category.viewers} learning`;

  const content = document.getElementById('detail-content');
  let html = '';

  category.sections.forEach(section => {
    html += `<div class="detail-section">`;
    html += `<h2><span class="section-icon">${section.icon}</span> ${section.title}</h2>`;

    if (section.tips) {
      html += `<div class="tip-list">`;
      section.tips.forEach((tip, i) => {
        html += `
          <div class="tip-item">
            <span class="tip-number">${i + 1}</span>
            <div class="tip-text">
              <h4>${tip.title}</h4>
              <p>${tip.desc}</p>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    if (section.proTip) {
      html += `
        <div class="pro-tip">
          <div class="pro-tip-label">Pro Tip</div>
          <p>${section.proTip}</p>
        </div>
      `;
    }

    if (section.checklist) {
      html += `<div class="checklist">`;
      section.checklist.forEach((item, i) => {
        html += `
          <div class="checklist-item" onclick="toggleCheck(this)">
            <div class="check-circle"></div>
            <span>${item}</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    html += `</div>`;
  });

  content.innerHTML = html;

  // Show detail page
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const detailPage = document.getElementById('page-detail');
  detailPage.style.display = 'block';
  detailPage.classList.add('active');
  detailPage.style.animation = 'slideInRight 0.3s ease';
  detailPage.scrollTop = 0;
}

function hideDetail() {
  const detailPage = document.getElementById('page-detail');
  detailPage.style.animation = 'slideOutRight 0.25s ease forwards';

  setTimeout(() => {
    detailPage.classList.remove('active');
    detailPage.style.display = 'none';
    detailPage.style.animation = '';

    // Show the learn page
    const learnPage = document.getElementById('page-learn');
    learnPage.style.display = 'block';
    learnPage.classList.add('active');
  }, 250);
}

function toggleCheck(el) {
  el.classList.toggle('checked');
}


// ==========================================
// SEARCH & FILTER
// ==========================================

function toggleSearch() {
  const bar = document.getElementById('search-bar');
  bar.classList.toggle('visible');
  if (bar.classList.contains('visible')) {
    document.getElementById('search-input').focus();
  } else {
    document.getElementById('search-input').value = '';
    filterCategories();
  }
}

function filterCategories() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.category-card');

  cards.forEach(card => {
    const id = card.dataset.id;
    const cat = categories.find(c => c.id === id);
    const matches = !query ||
      cat.title.toLowerCase().includes(query) ||
      cat.tags.some(t => t.includes(query));
    card.classList.toggle('hidden', !matches);
  });
}

function filterByTag(btn, tag) {
  // Update active pill
  btn.closest('.filter-pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.category-card');
  cards.forEach(card => {
    if (tag === 'all') {
      card.classList.remove('hidden');
    } else {
      const tags = card.dataset.tags.split(',');
      card.classList.toggle('hidden', !tags.includes(tag));
    }
  });
}


// ==========================================
// THRIFT LIST (replaced Budget)
// ==========================================


// ==========================================
// SETTINGS
// ==========================================

function toggleDarkMode() {
  const isChecked = document.getElementById('dark-mode-toggle').checked;
  if (isChecked) {
    document.documentElement.style.setProperty('--bg', '#0A0A0A');
    document.documentElement.style.setProperty('--bg-card', '#1A1A1A');
    document.documentElement.style.setProperty('--bg-card-hover', '#222222');
    document.documentElement.style.setProperty('--bg-elevated', '#252525');
    document.documentElement.style.setProperty('--text', '#FFFFFF');
    document.documentElement.style.setProperty('--text-secondary', '#A0A0A0');
    document.documentElement.style.setProperty('--text-muted', '#666666');
    document.documentElement.style.setProperty('--border', '#333333');
    document.documentElement.style.setProperty('--border-light', '#444444');
    document.documentElement.style.setProperty('--black', '#FFFFFF');
    document.documentElement.style.setProperty('--white', '#0A0A0A');
  } else {
    document.documentElement.style.setProperty('--bg', '#FFFFFF');
    document.documentElement.style.setProperty('--bg-card', '#F5F5F5');
    document.documentElement.style.setProperty('--bg-card-hover', '#EBEBEB');
    document.documentElement.style.setProperty('--bg-elevated', '#E8E8E8');
    document.documentElement.style.setProperty('--text', '#000000');
    document.documentElement.style.setProperty('--text-secondary', '#555555');
    document.documentElement.style.setProperty('--text-muted', '#999999');
    document.documentElement.style.setProperty('--border', '#000000');
    document.documentElement.style.setProperty('--border-light', '#D0D0D0');
    document.documentElement.style.setProperty('--black', '#000000');
    document.documentElement.style.setProperty('--white', '#FFFFFF');
  }
}


function showAllCategories() {
  // Reset filter to show all
  document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.filter-pills .pill').classList.add('active');
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('hidden'));
}
