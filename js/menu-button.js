(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
      telephone: document.querySelector('[data-menu-telephone]'),
      email: document.querySelector('[data-menu-email]')
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
      refs.openMenuBtn.classList.toggle('is-open');

      refs.telephone.classList.toggle('contacts__element--mobile-telephone');
      refs.email.classList.toggle('contacts__element--mobile-email');
    }
  })();