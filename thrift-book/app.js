/* ==========================================
   THRIFT BOOK - App Logic
   ========================================== */

// ==========================================
// DATA
// ==========================================

const categories = [
  {
    id: 'clothing',
    title: 'Clothing',
    subtitle: '24 guides',
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
    title: 'Jewellery',
    subtitle: '18 guides',
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
    title: 'Shoes',
    subtitle: '14 guides',
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
    title: 'Handbags',
    subtitle: '16 guides',
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
    title: 'Denim',
    subtitle: '11 guides',
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
    bgClass: 'inspo-bg-1',
    pinned: false
  },
  {
    id: 2,
    image: '🧥',
    title: '70s suede jacket styling for fall',
    handle: '@vintagesoulmate',
    bgClass: 'inspo-bg-2',
    pinned: false
  },
  {
    id: 3,
    image: '👠',
    title: 'Runway to thrift: Miu Miu ballet flat dupes',
    handle: '@thriftedrunway',
    bgClass: 'inspo-bg-3',
    pinned: false
  },
  {
    id: 4,
    image: '👖',
    title: 'Barrel jeans + crop top — all thrifted',
    handle: '@curvythriftqueen',
    bgClass: 'inspo-bg-4',
    pinned: false
  },
  {
    id: 5,
    image: '💍',
    title: 'Layered gold jewelry — all under $5 at Goodwill',
    handle: '@goldfindsonly',
    bgClass: 'inspo-bg-5',
    pinned: false
  },
  {
    id: 6,
    image: '🧵',
    title: 'SS25 Bottega Veneta — find the thrift version',
    handle: '@runwaytothrift',
    bgClass: 'inspo-bg-6',
    pinned: false
  },
  {
    id: 7,
    image: '👚',
    title: 'Cottagecore garden party fit',
    handle: '@plussizecottage',
    bgClass: 'inspo-bg-1',
    pinned: false
  },
  {
    id: 8,
    image: '🕶️',
    title: 'Vintage Versace frames for $8 — how to spot them',
    handle: '@thriftoptics',
    bgClass: 'inspo-bg-3',
    pinned: false
  },
];

const thriftListItems = [
  { name: 'Oversized wool blazer', note: 'Earth tones, check for moth holes', board: 'clothing', found: false, bgClass: 'cat-bg-1' },
  { name: 'Vintage Levi\'s 501s', note: 'Size 28-30, look for Big E tab', board: 'clothing', found: false, bgClass: 'cat-bg-11' },
  { name: 'Ceramic vase (neutral)', note: 'For the bookshelf, no chips', board: 'home', found: false, bgClass: 'cat-bg-4' },
  { name: 'Gold chain necklace', note: 'Check for 14K stamp, magnet test', board: 'accessories', found: true, bgClass: 'cat-bg-2' },
  { name: 'Mid-century side table', note: 'Wood, tapered legs, no veneer', board: 'home', found: false, bgClass: 'cat-bg-5' },
  { name: 'Leather crossbody bag', note: 'Real leather smell test, minimal hardware', board: 'accessories', found: false, bgClass: 'cat-bg-8' },
  { name: 'Botanical print (framed)', note: 'Vintage feel, gold or wood frame', board: 'home', found: true, bgClass: 'cat-bg-3' },
  { name: 'Silk slip dress', note: 'Black or champagne, check seams', board: 'clothing', found: false, bgClass: 'cat-bg-7' },
  { name: 'Brass candlestick holders', note: 'Pair, can clean with Bar Keeper\'s Friend', board: 'home', found: false, bgClass: 'cat-bg-10' },
  { name: 'New Balance 990s', note: 'Size 8, any colorway, check sole wear', board: 'clothing', found: false, bgClass: 'cat-bg-6' },
  { name: 'Coffee table art book', note: 'Large format, photography or fashion', board: 'home', found: true, bgClass: 'cat-bg-9' },
  { name: 'Cashmere scarf', note: 'Neutral color, do the scrunch test', board: 'accessories', found: false, bgClass: 'cat-bg-12' },
];

const purchases = [
  { name: 'Vintage denim jacket', price: 15.00, date: 'Feb 8', category: 'clothing' },
  { name: 'Brass candleholders (pair)', price: 8.00, date: 'Feb 6', category: 'home' },
  { name: 'Silk scarf', price: 4.50, date: 'Feb 3', category: 'accessories' },
  { name: 'Pyrex mixing bowl set', price: 12.00, date: 'Feb 1', category: 'home' },
  { name: 'Wool cardigan', price: 10.00, date: 'Jan 28', category: 'clothing' },
  { name: 'Sterling silver ring', price: 18.00, date: 'Jan 25', category: 'accessories' },
];

const budgetData = {
  monthly: 0,
  period: 'month',
  isSetUp: false,
  get spent() {
    return purchases.reduce((sum, p) => sum + p.price, 0);
  }
};


// ==========================================
// STATE
// ==========================================

let currentCategory = null;
let currentSection = null;


// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderTopicList();
  renderInspoFeed();
  renderThriftList();
  renderBudget();
  renderPurchaseList();
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

// Image placeholder SVG (used instead of emojis)
const imagePlaceholderSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;

function renderTopicList() {
  const list = document.getElementById('topic-list');
  list.innerHTML = categories.map(cat => {
    return `
    <div class="topic-card" data-tags="${cat.tags.join(',')}" data-id="${cat.id}" onclick="showCategoryDetail('${cat.id}')">
      <div class="topic-card-bg ${cat.bgClass}">
        <h3 class="topic-card-title">${cat.title}</h3>
        <div class="topic-card-icon">
          ${imagePlaceholderSVG}
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function renderInspoFeed() {
  const feed = document.getElementById('inspo-feed');

  feed.innerHTML = inspoFeed.map(item => `
    <div class="bulletin-card ${item.pinned ? 'pinned' : ''}" data-id="${item.id}">
      <button class="pin-btn ${item.pinned ? 'pinned' : ''}" onclick="togglePin(${item.id})" title="${item.pinned ? 'Unpin' : 'Pin this'}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${item.pinned ? 'var(--primary)' : 'none'}" stroke="${item.pinned ? 'var(--primary)' : 'currentColor'}" stroke-width="2"><path d="M12 2L12 22"/><path d="M5 10l7-4 7 4"/><circle cx="12" cy="6" r="2"/></svg>
      </button>
      <div class="bulletin-image ${item.bgClass}">
        <span class="bulletin-emoji">${item.image}</span>
      </div>
      <div class="bulletin-body">
        <p class="bulletin-title">${item.title}</p>
        <span class="bulletin-handle">${item.handle}</span>
      </div>
    </div>
  `).join('');
}

function togglePin(id) {
  const item = inspoFeed.find(i => i.id === id);
  if (item) {
    item.pinned = !item.pinned;
    renderInspoFeed();
  }
}

function renderThriftList() {
  const grid = document.getElementById('thrift-list-grid');
  const items = thriftListItems;

  grid.innerHTML = items.map((item, i) => `
    <div class="thrift-pin ${item.found ? 'found' : ''}" onclick="toggleFound(${i})">
      <div class="thrift-pin-image ${item.bgClass}">
        ${imagePlaceholderSVG}
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

  const bgClasses = ['cat-bg-1','cat-bg-2','cat-bg-3','cat-bg-4','cat-bg-5','cat-bg-6','cat-bg-7','cat-bg-8','cat-bg-9','cat-bg-10','cat-bg-11','cat-bg-12'];

  thriftListItems.unshift({
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
// BUDGET
// ==========================================

let selectedPeriod = 'month';

function selectPeriod(btn, period) {
  document.querySelectorAll('.planner-period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedPeriod = period;
}

function submitBudgetPlan() {
  const amount = parseFloat(document.getElementById('planner-amount').value);
  if (!amount || amount <= 0) return;

  budgetData.monthly = amount;
  budgetData.period = selectedPeriod;
  budgetData.isSetUp = true;

  document.getElementById('budget-planner').style.display = 'none';
  document.getElementById('budget-main').style.display = 'block';

  renderBudget();
  renderPurchaseList();
}

function renderBudget() {
  if (!budgetData.isSetUp) return;

  const spent = budgetData.spent;
  const monthly = budgetData.monthly;
  const remaining = monthly - spent;
  const pct = monthly > 0 ? Math.min((spent / monthly) * 100, 100) : 0;

  document.getElementById('budget-spent').textContent = `$${spent.toFixed(2)}`;
  document.getElementById('budget-total').textContent = `of $${monthly.toFixed(2)}`;
  document.getElementById('budget-remaining').textContent = `$${remaining.toFixed(2)} remaining this ${budgetData.period}`;
  document.getElementById('budget-bar-fill').style.width = `${pct}%`;
  document.getElementById('budget-period-label').textContent = `Thrift budget for this ${budgetData.period}`;
}

function renderPurchaseList() {
  const list = document.getElementById('purchase-list');
  list.innerHTML = purchases.map(p => `
    <div class="purchase-item">
      <div class="purchase-image cat-bg-${Math.floor(Math.random() * 12) + 1}">
        ${imagePlaceholderSVG}
      </div>
      <div class="purchase-info">
        <h4>${p.name}</h4>
        <p>${p.date} · ${p.category}</p>
      </div>
      <span class="purchase-price">$${p.price.toFixed(2)}</span>
    </div>
  `).join('');
}

function showAddPurchase() {
  document.getElementById('add-purchase-modal').classList.add('visible');
}

function hideAddPurchase(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('add-purchase-modal').classList.remove('visible');
}

function addPurchase() {
  const name = document.getElementById('purchase-name').value;
  const price = parseFloat(document.getElementById('purchase-price').value);
  const category = document.getElementById('purchase-category').value;

  if (!name || isNaN(price)) return;

  const now = new Date();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const date = `${months[now.getMonth()]} ${now.getDate()}`;

  purchases.unshift({ name, price, date, category });

  renderBudget();
  renderPurchaseList();
  hideAddPurchase();

  document.getElementById('purchase-name').value = '';
  document.getElementById('purchase-price').value = '';
}


// ==========================================
// NAVIGATION
// ==========================================

function switchPage(pageId, navBtn) {
  // Hide overlay pages
  ['page-detail', 'page-topic', 'page-article'].forEach(id => {
    const p = document.getElementById(id);
    p.classList.remove('active');
    p.style.display = 'none';
  });

  // Switch main pages
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
// CATEGORY DETAIL (Article List)
// ==========================================

function getArticleDescription(section) {
  if (section.tips) {
    const names = section.tips.slice(0, 2).map(t => t.title).join(', ');
    const more = section.tips.length > 2 ? `, and ${section.tips.length - 2} more` : '';
    return `${section.tips.length} tips — ${names}${more}`;
  }
  if (section.checklist) {
    return `${section.checklist.length} items to check off`;
  }
  return '';
}

function showCategoryDetail(categoryId) {
  currentCategory = categoryId;
  const category = categories.find(c => c.id === categoryId);
  if (!category) return;

  document.getElementById('topic-title').textContent = category.title;
  document.getElementById('topic-subtitle').textContent = `${category.sections.length} articles · ${category.viewers} learning`;

  const list = document.getElementById('article-list');
  list.innerHTML = category.sections.map((section, i) => `
    <div class="article-item" onclick="showArticleDetail('${categoryId}', ${i})">
      <div class="article-image ${category.bgClass}">
        ${imagePlaceholderSVG}
      </div>
      <div class="article-info">
        <h3>${section.title}</h3>
        <p>${getArticleDescription(section)}</p>
      </div>
      <svg class="article-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </div>
  `).join('');

  // Show topic page
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const topicPage = document.getElementById('page-topic');
  topicPage.style.display = 'block';
  topicPage.classList.add('active');
  topicPage.style.animation = 'slideInRight 0.3s ease';
  topicPage.scrollTop = 0;
}

function hideTopicDetail() {
  const topicPage = document.getElementById('page-topic');
  topicPage.style.animation = 'slideOutRight 0.25s ease forwards';

  setTimeout(() => {
    topicPage.classList.remove('active');
    topicPage.style.display = 'none';
    topicPage.style.animation = '';

    // Show learn page
    const learnPage = document.getElementById('page-learn');
    learnPage.style.display = 'block';
    learnPage.classList.add('active');
  }, 250);
}


// ==========================================
// ARTICLE DETAIL
// ==========================================

function showArticleDetail(categoryId, sectionIndex) {
  currentCategory = categoryId;
  currentSection = sectionIndex;

  const category = categories.find(c => c.id === categoryId);
  if (!category) return;

  const section = category.sections[sectionIndex];

  document.getElementById('detail-title').textContent = section.title;
  document.getElementById('detail-subtitle').textContent = category.title;

  const content = document.getElementById('detail-content');
  let html = '';

  if (section.tips) {
    html += `<div class="article-list">`;
    section.tips.forEach((tip, i) => {
      html += `
        <div class="article-item" onclick="showTipDetail('${categoryId}', ${sectionIndex}, ${i})">
          <div class="article-image ${category.bgClass}">
            ${imagePlaceholderSVG}
          </div>
          <div class="article-info">
            <h3>${tip.title}</h3>
            <p>${tip.desc.length > 65 ? tip.desc.substring(0, 65) + '...' : tip.desc}</p>
          </div>
          <svg class="article-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (section.checklist) {
    html += `<div class="checklist">`;
    section.checklist.forEach(item => {
      html += `
        <div class="checklist-item" onclick="toggleCheck(this)">
          <div class="check-circle"></div>
          <span>${item}</span>
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

function showTipDetail(categoryId, sectionIndex, tipIndex) {
  currentCategory = categoryId;
  currentSection = sectionIndex;

  const category = categories.find(c => c.id === categoryId);
  if (!category) return;

  const section = category.sections[sectionIndex];
  const tip = section.tips[tipIndex];

  document.getElementById('article-title').textContent = tip.title;
  document.getElementById('article-subtitle').textContent = section.title;

  const content = document.getElementById('article-content');
  let html = '';

  // Main article content
  html += `
    <div class="article-body-card">
      <p>${tip.desc}</p>
    </div>
  `;

  // Pro tip if available
  if (section.proTip) {
    html += `
      <div class="pro-tip">
        <div class="pro-tip-label">Pro Tip</div>
        <p>${section.proTip}</p>
      </div>
    `;
  }

  // Keep Learning — other tips from same section
  const otherTips = section.tips
    .map((t, i) => ({ ...t, index: i }))
    .filter((_, i) => i !== tipIndex);

  if (otherTips.length > 0) {
    html += `
      <div class="related-section">
        <h3>Keep Learning</h3>
        <div class="article-list">
    `;
    otherTips.forEach(otherTip => {
      html += `
        <div class="article-item" onclick="showTipDetail('${categoryId}', ${sectionIndex}, ${otherTip.index})">
          <div class="article-image ${category.bgClass}">
            ${imagePlaceholderSVG}
          </div>
          <div class="article-info">
            <h3>${otherTip.title}</h3>
            <p>${otherTip.desc.length > 65 ? otherTip.desc.substring(0, 65) + '...' : otherTip.desc}</p>
          </div>
          <svg class="article-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      `;
    });
    html += `</div></div>`;
  }

  // More from this category — other sections
  const otherSections = category.sections
    .map((s, i) => ({ ...s, index: i }))
    .filter((_, i) => i !== sectionIndex);

  if (otherSections.length > 0) {
    html += `
      <div class="related-section">
        <h3>More in ${category.title}</h3>
        <div class="article-list">
    `;
    otherSections.forEach(sec => {
      html += `
        <div class="article-item" onclick="showArticleDetail('${categoryId}', ${sec.index})">
          <div class="article-image ${category.bgClass}">
            ${imagePlaceholderSVG}
          </div>
          <div class="article-info">
            <h3>${sec.title}</h3>
            <p>${getArticleDescription(sec)}</p>
          </div>
          <svg class="article-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      `;
    });
    html += `</div></div>`;
  }

  content.innerHTML = html;

  // Show article page
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const articlePage = document.getElementById('page-article');
  articlePage.style.display = 'block';
  articlePage.classList.add('active');
  articlePage.style.animation = 'slideInRight 0.3s ease';
  articlePage.scrollTop = 0;
}

function hideTipDetail() {
  const articlePage = document.getElementById('page-article');
  articlePage.style.animation = 'slideOutRight 0.25s ease forwards';

  setTimeout(() => {
    articlePage.classList.remove('active');
    articlePage.style.display = 'none';
    articlePage.style.animation = '';

    if (currentCategory !== null && currentSection !== null) {
      showArticleDetail(currentCategory, currentSection);
    }
  }, 250);
}

function hideArticleDetail() {
  const detailPage = document.getElementById('page-detail');
  detailPage.style.animation = 'slideOutRight 0.25s ease forwards';

  setTimeout(() => {
    detailPage.classList.remove('active');
    detailPage.style.display = 'none';
    detailPage.style.animation = '';

    // Go back to topic detail
    if (currentCategory) {
      showCategoryDetail(currentCategory);
    }
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
  const items = document.querySelectorAll('.topic-card');

  items.forEach(item => {
    const id = item.dataset.id;
    const cat = categories.find(c => c.id === id);
    const matches = !query ||
      cat.title.toLowerCase().includes(query) ||
      cat.tags.some(t => t.includes(query));
    item.classList.toggle('hidden', !matches);
  });
}

function filterByTag(btn, tag) {
  btn.closest('.filter-pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  const items = document.querySelectorAll('.topic-card');
  items.forEach(item => {
    if (tag === 'all') {
      item.classList.remove('hidden');
    } else {
      const tags = item.dataset.tags.split(',');
      item.classList.toggle('hidden', !tags.includes(tag));
    }
  });
}


// ==========================================
// PROFILE / CUSTOMIZATION
// ==========================================

function setAccentColor(btn, primary, dark, light, glow) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  document.documentElement.style.setProperty('--primary', primary);
  document.documentElement.style.setProperty('--primary-dark', dark);
  document.documentElement.style.setProperty('--primary-light', light);
  document.documentElement.style.setProperty('--primary-glow', glow);
}

const bgThemes = {
  light: {
    '--bg': '#FFFFFF', '--bg-card': '#FFFFFF', '--bg-card-hover': '#F9F9F9',
    '--bg-elevated': '#EFEFEF', '--text': '#111111', '--text-secondary': '#767676',
    '--text-muted': '#B5B5B5', '--border': '#EFEFEF', '--border-light': '#E2E2E2',
    '--black': '#111111', '--white': '#FFFFFF',
    '--shadow-sm': '0 1px 4px rgba(0,0,0,0.06)', '--shadow-md': '0 2px 12px rgba(0,0,0,0.08)',
    '--shadow-lg': '0 4px 24px rgba(0,0,0,0.12)'
  },
  dark: {
    '--bg': '#1E1E1E', '--bg-card': '#2C2C2C', '--bg-card-hover': '#363636',
    '--bg-elevated': '#3A3A3A', '--text': '#EFEFEF', '--text-secondary': '#A0A0A0',
    '--text-muted': '#6B6B6B', '--border': '#3A3A3A', '--border-light': '#444444',
    '--black': '#EFEFEF', '--white': '#1E1E1E',
    '--shadow-sm': '0 1px 4px rgba(0,0,0,0.2)', '--shadow-md': '0 2px 12px rgba(0,0,0,0.3)',
    '--shadow-lg': '0 4px 24px rgba(0,0,0,0.4)'
  },
  cream: {
    '--bg': '#FAF6F1', '--bg-card': '#FFFFFF', '--bg-card-hover': '#F5F0EA',
    '--bg-elevated': '#EDE7DF', '--text': '#2D2418', '--text-secondary': '#8A7D6E',
    '--text-muted': '#BEB4A6', '--border': '#EDE7DF', '--border-light': '#DDD5C9',
    '--black': '#2D2418', '--white': '#FFFFFF',
    '--shadow-sm': '0 1px 4px rgba(0,0,0,0.05)', '--shadow-md': '0 2px 12px rgba(0,0,0,0.07)',
    '--shadow-lg': '0 4px 24px rgba(0,0,0,0.1)'
  },
  midnight: {
    '--bg': '#0F172A', '--bg-card': '#1E293B', '--bg-card-hover': '#273548',
    '--bg-elevated': '#334155', '--text': '#F1F5F9', '--text-secondary': '#94A3B8',
    '--text-muted': '#64748B', '--border': '#1E293B', '--border-light': '#334155',
    '--black': '#F1F5F9', '--white': '#0F172A',
    '--shadow-sm': '0 1px 4px rgba(0,0,0,0.3)', '--shadow-md': '0 2px 12px rgba(0,0,0,0.4)',
    '--shadow-lg': '0 4px 24px rgba(0,0,0,0.5)'
  }
};

function setBgTheme(btn, theme) {
  document.querySelectorAll('.bg-swatch').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  const vars = bgThemes[theme];
  Object.entries(vars).forEach(([key, val]) => {
    document.documentElement.style.setProperty(key, val);
  });
}
