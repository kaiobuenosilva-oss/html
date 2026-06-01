/* =============================================
   Terra Viva — Futuro Sustentável
   Script
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');

      // Anima barras do gráfico de problemas
      if (entry.target.closest('#problemas')) {
        const bars = document.querySelectorAll('#chartBars .bar');
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.transition = 'height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            bar.style.height = bar.dataset.height + 'px';
          }, i * 100 + 200);
        });
      }

      // Anima barras de progresso de dados
      if (entry.target.closest('#dados')) {
        const fills = document.querySelectorAll('.data-bar-fill');
        fills.forEach((fill, i) => {
          setTimeout(() => {
            fill.style.width = fill.dataset.width + '%';
          }, i * 150 + 200);
        });
      }

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

});
