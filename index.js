 const cards = document.querySelectorAll(".scroll-card");

    function showCards() {
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
          card.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", showCards);
    window.addEventListener("load", showCards);


        const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    //  Active link
      function setActive(clickedItem) {
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => link.classList.remove('active'));
      clickedItem.classList.add('active');
    }

    