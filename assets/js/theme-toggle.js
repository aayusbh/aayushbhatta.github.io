(function(){
  const btn = document.getElementById('theme-toggle');
  const body = document.body;
  const key = 'site-theme';
  // initialize
  const saved = localStorage.getItem(key);
  if (saved === 'light') body.classList.remove('theme-dark'), body.classList.add('theme-light');

  btn.addEventListener('click', () => {
    if (body.classList.contains('theme-light')) {
      body.classList.remove('theme-light'); body.classList.add('theme-dark'); localStorage.setItem(key,'dark');
    } else {
      body.classList.remove('theme-dark'); body.classList.add('theme-light'); localStorage.setItem(key,'light');
    }
  });
})();
