// ============================================================
// AFC — Editorial Digital Experience
// ============================================================

const WA = '6285235822661';
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

// ============ DATA ============
const products = [
  {
    id: '01',
    name: 'SOP Subarashi',
    accent: 'Gold',
    tagline: 'Hexa Peptide untuk Regenerasi Sel & Kardiovaskular',
    category: 'Cellular Regeneration',
    price: 'Rp 2.000.000',
    unit: '28 Sachet',
    badge: 'Best Seller',
    image: 'images/subarashi.jpeg',
    highlights: ['Salmon Ovary Peptide','Sardines Peptide','Fruit Flow Vegan','Salmon Caviar','Salmon Anserine','Tuna Heart Peptide'],
    benefits: [
      'Regenerasi sel-sel tubuh yang rusak',
      'Menjaga kesehatan jantung & pembuluh darah',
      'Melancarkan sirkulasi darah',
      'Menurunkan risiko stroke & hipertensi',
      'Menstabilkan gula darah (diabetes)',
      'Pemulihan pasca-stroke',
      'Menurunkan kolesterol tinggi'
    ],
    note: 'Bersertifikat bebas radiasi nuklir. Aman untuk semua umur, termasuk anak-anak.'
  },
  {
    id: '02',
    name: 'Utsukushhii',
    accent: 'Gold 2.0',
    tagline: 'Superfood Imunitas · 8 Paten Fungsi Klinis',
    category: 'Immunity & Anti Tumor',
    price: 'Rp 1.850.000',
    unit: '28 Sachet',
    badge: 'Anti Tumor',
    image: 'images/utsukushhii.jpeg',
    highlights: ['Salmon Milt DNA','Takara Kombu Fucoidan','Triple Probiotics 1 Triliun','Lactococcus Lactis','Bifidobacterium Longum','+11 Bahan Aktif'],
    benefits: [
      'Melawan sel abnormal (kanker, kista, miom)',
      'Meningkatkan NK-Cell & sel darah putih',
      'Anti Virus & pelindung infeksi',
      'Detoks usus & keseimbangan pencernaan',
      'Pemulihan batu ginjal',
      'Pemulihan liver / Hepatitis C',
      'Kecantikan kulit & rambut',
      'Meredakan alergi'
    ],
    note: '8 Paten Fungsi Klinis: Anti Tumor Agent, Immune Activating, Anti-Virus.'
  },
  {
    id: '03',
    name: 'Hikari',
    accent: 'ひかり',
    tagline: 'Triple Vegan Peptides · Otak & Tumbuh Kembang Anak',
    category: 'Brain & Child Development',
    price: 'Rp 1.800.000',
    unit: '30 Sachet · Anggur & Aronia',
    badge: 'Brain Care',
    image: 'images/hikari.jpeg',
    highlights: ['Marigold Peptide 400 Dalton','Spearmint Peptide','Mango Leaf Peptide','Ekstrak Acerola & Blueberry','Lingonberry & Blackcurrant','Inulin & L-cysteine'],
    benefits: [
      'Regenerasi & perbaikan sel otak',
      'Menguatkan koneksi saraf (sinapsis)',
      'Mendukung memori & pembelajaran',
      'Menjaga kognisi & mood',
      'Membantu anak dengan Autisme',
      'Menenangkan anak Hiperaktif (ADHD)',
      'Mendukung anak Speech Delay',
      'Perlindungan terhadap stres'
    ],
    note: 'Superfood khusus untuk tumbuh kembang anak — autism, hiperaktif, speech delay.'
  },
  {
    id: '04',
    name: 'Sensei Suru',
    accent: 'Serum',
    tagline: 'Nano Peptide Regenerating Serum',
    category: 'Dermatological Serum',
    price: 'Rp 3.500.000',
    unit: '50 ml',
    badge: 'Luxury Skincare',
    image: 'images/produk5.jpeg',
    highlights: ['Marine Placenta & Salmon DNA','Hydrolized Collagen & Elastin','Glutathione & Ceramide','Squalene & Hyaluronic Acid','Angelica Root Extract','Citric Acid'],
    benefits: [
      'Mencerahkan & meratakan warna kulit',
      'Menghilangkan spot hitam',
      'Anti-aging & mencegah kerutan',
      'Membuat kulit halus & lembut',
      'Menyamarkan bekas jerawat',
      'Melindungi dari radikal bebas',
      'Nutrisi mendalam ke lapisan kulit'
    ],
    note: 'Dermatologically tested. Formula lembut & aman dengan teknologi Nano Peptide.'
  },
  {
    id: '05',
    name: 'Premium Nano',
    accent: 'Collagen',
    tagline: 'Agelez Bihaku · 13.500mg Kolagen',
    category: 'Beauty Drink',
    price: 'Rp 980.000',
    unit: '10 Botol · 50 ml · Peach',
    badge: 'Beauty Drink',
    image: 'images/collagen.jpeg',
    highlights: ['Premium Nano Collagen 13.500mg','Salmon Ovary Peptide','Salmon Protein Extract','Phyto-Ceramide','Hyaluronic Acid & Elastin','CoQ-10, Biotin, Vit C & E'],
    benefits: [
      'Menjaga elastisitas & kekenyalan kulit',
      'Mengembalikan kolagen alami',
      'Menyamarkan garis halus & kerutan',
      'Kulit tampak halus & bercahaya',
      'Regenerasi kulit optimal',
      'Melawan tanda penuaan',
      'Nutrisi kulit dari dalam'
    ],
    note: 'Dibuat di Jepang. Rasa peach premium untuk konsumsi harian.'
  }
];

const conditions = [
  {name:'Diabetes', desc:'Menstabilkan gula darah & mendukung pankreas'},
  {name:'Kanker & Tumor', desc:'Aktivasi NK-Cell melawan sel abnormal'},
  {name:'Ginjal', desc:'Detoks & pemulihan batu ginjal'},
  {name:'Stroke', desc:'Sirkulasi darah otak & pasca-stroke'},
  {name:'Jantung', desc:'Menurunkan kolesterol & hipertensi'},
  {name:'Kebas', desc:'Sirkulasi ke saraf tepi'},
  {name:'Vertigo', desc:'Suplai oksigen ke otak'},
  {name:'GERD & Lambung', desc:'Probiotik mikrobiota usus'},
  {name:'Hepatitis', desc:'Pemulihan fungsi liver'},
  {name:'Imunitas', desc:'Sel darah putih & NK-cell'},
  {name:'Autism / ADHD', desc:'Nutrisi kognitif untuk anak'},
  {name:'Anti-Aging', desc:'Regenerasi kolagen kulit'}
];

const patents = [
  {title:'Anti Tumor Agent', src:'Kombu Fucoidan · Utsukushhii'},
  {title:'Immune Activating Composition', src:'Salmon Milt DNA · Utsukushhii'},
  {title:'Anti-Virus Agent', src:'Fucoidan Extract · Utsukushhii'},
  {title:'Infection Protection', src:'Lactic Acid Bacteria · Utsukushhii'},
  {title:'Cardiovascular Peptide', src:'Fruit Flow · Subarashi'},
  {title:'Cell Regeneration', src:'Hexa Peptide · Subarashi'},
  {title:'Cognitive Support', src:'Spearmint Peptide · Hikari'},
  {title:'Neural Synapse Enhancer', src:'Triple Vegan Peptides · Hikari'}
];

const faqs = [
  {q:'Bagaimana memastikan produk yang saya beli asli?',
   a:'Setiap produk asli AFC memiliki hologram, segel, dan nomor registrasi BPOM RI yang bisa Anda cek langsung di situs resmi BPOM. Kami sebagai distributor resmi menjamin 100% keaslian dan Anda dapat mengonfirmasi kapan pun via WhatsApp.'},
  {q:'Apakah aman dikonsumsi bersama obat dari dokter?',
   a:'Ya, aman. Produk AFC adalah suplemen fungsional berbahan alami dan telah masuk buku MIMS — referensi obat yang digunakan dokter di Indonesia. Untuk kondisi tertentu, silakan konsultasikan dulu dengan konsultan kami.'},
  {q:'Berapa lama efeknya terasa?',
   a:'Setiap individu berbeda. Umumnya perbaikan mulai terasa dalam 2–4 minggu pemakaian rutin. Untuk hasil optimal, konsumsi sesuai anjuran konsultan yang akan mendampingi Anda selama masa konsumsi.'},
  {q:'Apakah bisa dikonsumsi anak-anak?',
   a:'Ya. Produk seperti Subarashi & Hikari aman untuk anak-anak. Hikari bahkan dirancang khusus untuk mendukung tumbuh kembang anak — termasuk anak dengan autisme, hiperaktif (ADHD), dan speech delay. Bebas bahan pengawet & bersertifikat bebas radiasi.'},
  {q:'Mengapa harga di marketplace bisa jauh lebih murah?',
   a:'Karena produk tersebut PALSU. Produk asli AFC diimpor langsung dari Jepang dengan biaya produksi, sertifikasi, dan distribusi yang tinggi. Harga sangat murah = kandungan tidak asli = risiko kesehatan tinggi. Kami menjual dengan harga resmi.'},
  {q:'Bagaimana cara pemesanan?',
   a:'Sangat mudah. Klik tombol WhatsApp di halaman ini atau chat langsung ke 0838-3093-0666. Konsultan kami akan membantu memilih produk yang tepat, menjelaskan cara pemakaian, dan memproses pesanan ke seluruh Indonesia.'}
];

// ============ SPLIT HERO TITLE INTO WORDS (already in HTML) ============
// Titles are already structured with .line and .w spans in HTML

// ============ RENDER: INDEX LIST ============
document.getElementById('index-list').innerHTML = products.map(p => `
<a href="#prod-${p.id}" class="index-row" data-magnetic>
  <span class="index-num">№ ${p.id}</span>
  <span class="index-name">${p.name} <span class="serif">${p.accent}</span></span>
  <span class="index-cat">${p.category}</span>
  <span class="index-price">${p.price}</span>
  <span class="index-arrow">→</span>
</a>
`).join('');

// ============ RENDER: PRODUCTS ============
document.getElementById('products').innerHTML = products.map((p, i) => `
<article class="product" id="prod-${p.id}" data-scroll-section>
  <div class="prod-visual">
    <span class="prod-tag-abs">${p.badge}</span>
    <span class="prod-num-abs">№ ${p.id} / 05</span>
    <img src="${p.image}" alt="${p.name}" loading="lazy">
    <div class="prod-cert-row">
      <span class="prod-cert-pill">BPOM</span>
      <span class="prod-cert-pill">MUI</span>
      <span class="prod-cert-pill">Made in Japan</span>
    </div>
  </div>
  <div class="prod-info">
    <div class="prod-meta">
      <span>Object · ${p.id} / 05</span>
      <span>${p.category}</span>
    </div>
    <h3 class="prod-name">${p.name}<br><span class="jp">${p.accent}</span></h3>
    <p class="prod-tagline">${p.tagline}</p>
    <div class="prod-price-row">
      <span class="prod-price">${p.price}</span>
      <span class="prod-unit">${p.unit}</span>
    </div>
    <div class="prod-cols">
      <div class="prod-col">
        <div class="prod-col-h">Kandungan Kunci</div>
        <ul>${p.highlights.slice(0,4).map(h=>`<li>— ${h}</li>`).join('')}</ul>
      </div>
      <div class="prod-col">
        <div class="prod-col-h">Manfaat Utama</div>
        <ul>${p.benefits.slice(0,4).map(b=>`<li>— ${b}</li>`).join('')}</ul>
      </div>
    </div>
    <details class="prod-expand">
      <summary>
        <span>Rincian lengkap</span>
        <span class="chev">+</span>
      </summary>
      <div class="prod-expand-body">
        <div class="row">
          <div class="h">Seluruh Kandungan</div>
          <ul>${p.highlights.map(h=>`<li>— ${h}</li>`).join('')}</ul>
        </div>
        <div class="row">
          <div class="h">Seluruh Manfaat</div>
          <ul>${p.benefits.map(b=>`<li>— ${b}</li>`).join('')}</ul>
        </div>
        <p>${p.note}</p>
      </div>
    </details>
    <a href="${wa(`Halo, saya ingin memesan ${p.name} ${p.accent} (${p.price}).`)}" target="_blank" class="prod-cta" data-magnetic>
      <span>Pesan · ${p.price}</span>
      <span class="arrow">→</span>
    </a>
  </div>
</article>
`).join('');

// ============ RENDER: CONDITIONS ============
document.getElementById('cond-grid').innerHTML = conditions.map((c,i)=>`
<div class="cond-cell">
  <div class="cond-num">№ ${String(i+1).padStart(2,'0')}</div>
  <div class="cond-name">${c.name}</div>
  <div class="cond-desc">${c.desc}</div>
</div>
`).join('');

// ============ RENDER: PATENTS ============
document.getElementById('pat-list').innerHTML = patents.map((p,i)=>`
<div class="pat-row">
  <span class="pat-num">№ ${String(i+1).padStart(2,'0')}</span>
  <span class="pat-title-cell">${p.title}</span>
  <span class="pat-src">${p.src}</span>
  <span class="pat-check">✓</span>
</div>
`).join('');

// ============ RENDER: FAQ ============
document.getElementById('faq-list').innerHTML = faqs.map((f,i)=>`
<details class="faq-item">
  <summary>
    <span class="faq-num">${String(i+1).padStart(2,'0')} /</span>
    <span class="faq-q">${f.q}</span>
    <span class="faq-plus">+</span>
  </summary>
  <div class="faq-body">${f.a}</div>
</details>
`).join('');

// ============ LENIS SMOOTH SCROLL ============
let lenis;
if (window.Lenis) {
  lenis = new Lenis({
    duration: 1.6,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 1.8,
    wheelMultiplier: 0.85,
  });
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

// ============ LOADER ============
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const pctEl = document.querySelector('[data-load-pct]');
  let pct = 0;
  const int = setInterval(() => {
    pct += Math.random() * 18;
    if (pct >= 100){ pct = 100; clearInterval(int); }
    pctEl.textContent = Math.floor(pct) + '%';
  }, 60);
  setTimeout(() => {
    loader.classList.add('done');
    document.body.classList.add('loaded');
  }, 1800);
});

// ============ NAV SCROLL STATE ============
const nav = document.getElementById('nav');
const progressBar = document.getElementById('progress');
function onScroll(){
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 40);
  const h = document.documentElement;
  const pct = (y / (h.scrollHeight - h.clientHeight)) * 100;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });

// ============ CUSTOM CURSOR ============
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');
let mx = window.innerWidth/2, my = window.innerHeight/2;
let cx = mx, cy = my;
document.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  cursorDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
});
function animateCursor(){
  cx += (mx - cx) * 0.18;
  cy += (my - cy) * 0.18;
  cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover states
document.querySelectorAll('a, button, .prod-visual, .cert, .cond-cell, [data-magnetic]').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ============ MAGNETIC BUTTONS ============
const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (isDesktop) {
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// ============ SCROLL REVEAL ============
const revealElements = document.querySelectorAll(`
  .hero-title, .mani-title, .cond-title, .pat-title, .faq-title, .final-title,
  .split-line, .fade-up, .fade
`);
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
revealElements.forEach(el => io.observe(el));

// Also add reveal classes to any dynamically inserted section titles
requestAnimationFrame(() => {
  document.querySelectorAll('.split-line, .fade-up').forEach(el => io.observe(el));
});

// ============ NUMBER COUNTERS ============
const counters = document.querySelectorAll('[data-count]');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffixMatch = el.textContent.match(/<span>.*<\/span>/);
    const suffix = suffixMatch ? suffixMatch[0] : '';
    let cur = 0;
    const start = performance.now();
    const duration = 2200;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      cur = Math.round(target * eased);
      el.innerHTML = String(cur).padStart(2, '0') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObs.observe(c));

// ============ PARALLAX (gentle) ============
const parallaxEls = document.querySelectorAll('[data-parallax]');
function onRaf(){
  const h = window.innerHeight;
  parallaxEls.forEach(el => {
    const r = el.getBoundingClientRect();
    const speed = (parseFloat(el.dataset.parallax) || 0.1) * 0.55; // 45% weaker
    const mid = r.top + r.height/2 - h/2;
    const move = -mid * speed;
    el.style.transform = `translate3d(0, ${move.toFixed(2)}px, 0)`;
  });
  requestAnimationFrame(onRaf);
}
if (isDesktop) requestAnimationFrame(onRaf);

// ============ PRODUCT IMAGE FADE-IN (natural, not parallax) ============
const prodVisuals = document.querySelectorAll('.prod-visual');
const prodObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      e.target.classList.add('in');
      prodObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2, rootMargin: '0px 0px -80px 0px' });
prodVisuals.forEach(v => prodObs.observe(v));

// Also observe .cert and .cond-cell for staggered fade
document.querySelectorAll('.cert, .cond-cell, .pat-row').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${Math.min(i * 60, 500)}ms`;
  io.observe(el);
});

// ============ SMOOTH ANCHOR SCROLL ============
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length < 2) return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  if (lenis) {
    lenis.scrollTo(target, { offset: -70, duration: 1.6 });
  } else {
    const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
});

// ============ NAV: MORE DROPDOWN + MOBILE MENU ============
(() => {
  const moreEl = document.getElementById('navMore');
  const moreBtn = moreEl && moreEl.querySelector('.nav-more-btn');
  const navLinks = document.getElementById('navLinks');
  const burger = document.getElementById('navBurger');
  const backdrop = document.getElementById('navBackdrop');

  const closeMore = () => {
    if (!moreEl) return;
    moreEl.classList.remove('open');
    if (moreBtn) moreBtn.setAttribute('aria-expanded', 'false');
  };
  const openMore = () => {
    if (!moreEl) return;
    moreEl.classList.add('open');
    if (moreBtn) moreBtn.setAttribute('aria-expanded', 'true');
  };
  const closeMobile = () => {
    if (navLinks) navLinks.classList.remove('open');
    if (burger) { burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
    closeMore();
  };
  const openMobile = () => {
    if (navLinks) navLinks.classList.add('open');
    if (burger) { burger.classList.add('open'); burger.setAttribute('aria-expanded', 'true'); }
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // More dropdown toggle
  if (moreBtn) {
    moreBtn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      moreEl.classList.contains('open') ? closeMore() : openMore();
    });
  }
  // Close More on outside click
  document.addEventListener('click', (e) => {
    if (moreEl && !moreEl.contains(e.target)) closeMore();
  });
  // Close More on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeMore(); closeMobile(); }
  });

  // Burger toggle
  if (burger) {
    burger.addEventListener('click', () => {
      navLinks.classList.contains('open') ? closeMobile() : openMobile();
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeMobile);

  // Any nav link click closes mobile menu + more
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      // Small timeout so the anchor scroll can trigger before we hide
      setTimeout(() => { closeMobile(); }, 20);
    });
  });

  // If viewport grows to desktop, ensure mobile is closed
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMobile();
  });
})();
