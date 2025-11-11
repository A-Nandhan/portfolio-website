const yearEl=document.getElementById("year");if(yearEl)yearEl.textContent=new Date().getFullYear();
const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;const stored=localStorage.getItem('theme');if(stored==='dark'||(!stored&&prefersDark))document.documentElement.classList.add('dark');
const toggle=document.getElementById('theme-toggle');if(toggle){toggle.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light');});}
const linkedinProfile='https://www.linkedin.com/in/nandhan-a-98924032a/';
const linkedinEls=[
  document.getElementById('linkedin-link'),
  document.getElementById('linkedin-card'),
  document.getElementById('linkedin-footer')
];
linkedinEls.forEach(el=>{
  if(!el) return;
  el.setAttribute('href', linkedinProfile);
  el.setAttribute('target','_blank');
  el.setAttribute('rel','noopener noreferrer');
});
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});

// --- Visual Enhancements (lightweight) ---
document.addEventListener('DOMContentLoaded',()=>{
  // Page load fade-in
  document.body.classList.remove('preload');
  // 1) Add hover animation classes to cards and chips without changing markup
  const sectionCards=document.querySelectorAll('main section > div.rounded-2xl');
  sectionCards.forEach(el=>{el.classList.add('animated-card','reveal');});

  const innerCards=document.querySelectorAll('#skills .rounded-xl, #education .rounded-xl, #projects article, #achievements ul, #certifications ul, #contact .rounded-xl');
  innerCards.forEach(el=>{el.classList.add('animated-card','reveal');});

  const chips=document.querySelectorAll('#about a, #contact a, header a[href^="#"], header a[href^="http"], header a[href^="mailto"], .px-4.py-2\\.5');
  chips.forEach(el=>{el.classList.add('chip-anim');});

  // 2) Reveal-on-scroll using IntersectionObserver
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target);}});
  },{threshold:0.15,rootMargin:'0px 0px -5% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // 3) Subtle parallax for the background ornaments container
  const ornaments=document.querySelector('.bg-ornaments');
  if(ornaments){
    const onScroll=()=>{
      const y=window.scrollY||window.pageYOffset;
      const offset=Math.min(30, y*0.04); // clamp for subtlety
      ornaments.style.transform=`translate3d(0, ${offset}px, 0)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }
});
