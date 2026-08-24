(() => {
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('.mobile-nav');

  menuButton?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '✕' : '☰';
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      if (menuButton) menuButton.textContent = '☰';
    });
  });

  const filters = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(' ');
        card.hidden = selected !== 'all' && !categories.includes(selected);
      });
    });
  });

  document.querySelectorAll('[data-current-year]').forEach((item) => {
    item.textContent = String(new Date().getFullYear());
  });

  // Keep campaign tags intact as visitors move around the staging site.
  const params = new URLSearchParams(window.location.search);
  const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  const campaignParams = new URLSearchParams();
  campaignKeys.forEach((key) => {
    if (params.has(key)) campaignParams.set(key, params.get(key));
  });

  if ([...campaignParams].length) {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
      try {
        const target = new URL(href, window.location.href);
        campaignParams.forEach((value, key) => target.searchParams.set(key, value));
        link.setAttribute('href', `${target.pathname}${target.search}${target.hash}`);
      } catch (_) {
        // Leave malformed or nonstandard links untouched.
      }
    });
  }
})();
