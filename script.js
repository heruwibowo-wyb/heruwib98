
// script.js - small interactivity: smooth scroll and expand/collapse sections
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // toggle details
  document.querySelectorAll('.toggle-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = document.getElementById(btn.dataset.target);
      if(!target) return;
      target.classList.toggle('hidden');
      btn.textContent = target.classList.contains('hidden') ? 'Show more' : 'Show less';
    });
  });

});
