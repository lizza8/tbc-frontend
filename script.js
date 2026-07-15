const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Header scroll
const header = $('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', scrollY > 24);
}, { passive: true });

// Mobile nav
const navOpen = $('#nav-open');
$$('.site-nav a').forEach(a => a.addEventListener('click', () => {
  if (navOpen) navOpen.checked = false;
}));

// Active nav link
const sections = $$('main section[id], .hero[id]');
const navLinks = $$('.site-nav a');
const onScroll = () => {
  let id = 'home';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 120) id = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
  });
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Animated counters
const animateCount = (el) => {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const start = performance.now();
  const dur = 1800;
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - (1 - p) ** 3;
    el.textContent = Math.floor(eased * target).toLocaleString('ka-GE') + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
$$('[data-count]').forEach(el => counterObs.observe(el));

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => revealObs.observe(el));

// Hero typing effect
const typed = $('.typed-text');
if (typed) {
  const words = ['Python', 'Web Dev', 'AI', 'Cyber', 'ინოვაცია'];
  let wi = 0, ci = 0, del = false;
  const type = () => {
    const word = words[wi];
    typed.textContent = del ? word.slice(0, ci--) : word.slice(0, ++ci);
    if (!del && ci === word.length) { del = true; setTimeout(type, 1400); return; }
    if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; }
    setTimeout(type, del ? 45 : 85);
  };
  type();
}

// Card tilt
$$('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// Cursor glow
const glow = $('.cursor-glow');
if (glow && matchMedia('(pointer:fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// Toast
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2800);
}

$$('[data-toast]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toast(el.dataset.toast);
  });
});

$('#contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  toast('შეტყობინება გაიგზავნა!');
  e.target.reset();
});

// Progress bars animate
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-animated');
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
$$('.progress span').forEach(el => barObs.observe(el));
