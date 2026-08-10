const grid = document.querySelector('[data-project-grid]');
if (grid) {
  const cards = [...grid.querySelectorAll('[data-project-card]')];
  const input = document.querySelector('[data-project-search]');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  let active = 'All';

  const update = () => {
    const query = (input?.value || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const searchable = card.dataset.search || '';
      const sector = card.dataset.sector || '';
      const matchesText = searchable.includes(query);
      const matchesFilter = active === 'All' || sector === active;
      const show = matchesText && matchesFilter;
      card.hidden = !show;
      if (show) visible++;
    });
    const empty = document.querySelector('[data-empty]');
    if (empty) empty.hidden = visible !== 0;
  };
  input?.addEventListener('input', update);
  buttons.forEach(btn => btn.addEventListener('click', () => {
    active = btn.dataset.filter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    update();
  }));
}
