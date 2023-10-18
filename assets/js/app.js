initMobileNav();
initLangBtn();

function initMobileNav() {
  const mobileNav = document.querySelector('.nav-mobile');
  const burgerBtn = document.querySelector('.header .burger');

  burgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    burgerBtn.classList.toggle('open');
    document.body.classList.toggle('mobile');
  });

  document.addEventListener('click', (e) => {
    if (e.target != mobileNav && e.target != burgerBtn && e.target.parentElement != burgerBtn) {
      mobileNav.classList.remove('open');
      burgerBtn.classList.remove('open');
      document.body.classList.remove('mobile');
    }
  });
}

function initLangBtn() {
  const languages = ['EN', 'РУ'];

  const langBtn = document.querySelector('.btn-lang');
  const langBtnText = document.querySelector('.btn-lang-text');
  const langBtnTextElem = langBtnText.querySelector('span');

  let currentLangId = 0;

  langBtnTextElem.textContent = languages[currentLangId];

  langBtn.addEventListener('click', () => {
    currentLangId += 1;
    if (currentLangId >= languages.length) currentLangId = 0;
  });
  
  langBtnText.addEventListener('click', () => {
    currentLangId += 1;
    if (currentLangId >= languages.length) currentLangId = 0;
    langBtnTextElem.textContent = languages[currentLangId];
  });
}