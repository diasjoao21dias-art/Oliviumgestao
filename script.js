document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('year').textContent = new Date().getFullYear();

  const config = window.OLIVIUM_CONFIG || {};
  const phone = String(config.whatsapp || '').replace(/\D/g, '');
  const makeWa = (message) => phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : '#orcamento';
  document.querySelectorAll('.quote-link').forEach(link => link.addEventListener('click', () => {
    const item = link.dataset.item;
    const select = document.getElementById('interest');
    if (select && item) select.value = item;
  }));
  document.querySelectorAll('[data-form-type="curriculo"]').forEach(link => link.addEventListener('click', () => {
    const select = document.getElementById('interest');
    if (select) select.value = 'Cadastro de currículo';
  }));
  const floating = document.getElementById('floating-whatsapp');
  if (floating && phone) {
    floating.href = makeWa('Olá! Gostaria de conhecer as soluções da Olivium Gestão & Pessoas.');
    floating.target = '_blank'; floating.rel = 'noopener';
  }
  document.getElementById('quote-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const interest = document.getElementById('interest').value;
    const profile = document.getElementById('profile').value.trim();
    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();
    const text = `Olá! Vim pelo site da Olivium Gestão & Pessoas e gostaria de solicitar um atendimento.\n\nNome: ${name}\nPerfil: ${profile}\nEmpresa: ${company || 'Não informado'}\nInteresse: ${interest}\nDesafio: ${message || 'Gostaria de conversar para entender as opções.'}`;
    if (!phone || phone.length < 12) {
      alert('Configure o número de WhatsApp no arquivo config.js antes de publicar o site.');
      return;
    }
    window.open(makeWa(text), '_blank', 'noopener,noreferrer');
  });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.service-card,.section-heading,.method-copy,.talent-content,.about-content,.quote-inner,.about-mark').forEach(el => {
    el.classList.add('reveal'); observer.observe(el);
  });
});