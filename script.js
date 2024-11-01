const iconMenu = document.querySelector ('.header__menu-icon');
if(iconMenu){
    const menuBody = document.querySelector ('.header__menu-body');
    iconMenu.addEventListener("click", function() {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}




const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

const galleryItems = document.querySelectorAll(".gallery-item img");


galleryItems.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex";
    modalImg.src = e.target.dataset.full;
    document.body.classList.add("no-scroll");
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
}

const closeModal = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
};

window.addEventListener("click", closeModal);
window.addEventListener("touchstart", closeModal);

const galleryItemsRooms = document.querySelectorAll(".rooms__block-image");
galleryItemsRooms.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex";
    modalImg.src = e.target.dataset.full;
  });
});



const all = document.getElementById('all');
const matte = document.getElementById('matte');
const glossy = document.getElementById('glossy');
const satin = document.getElementById('satin');
const textured = document.getElementById('textured');

const matteCards = document.getElementById('matte-cards');
const glossyCards = document.getElementById('glossy-cards');
const satinCards = document.getElementById('satin-cards');
const texturedCards = document.getElementById('textured-cards');

const allCards = document.querySelector('.portfolio__cards-all');
const matteCardsBlock = document.querySelector('.portfolio__cards-matte');
const glossyCardsBlock = document.querySelector('.portfolio__cards-glossy');
const satinCardsBlock = document.querySelector('.portfolio__cards-satin');
const texturesCardsBlock = document.querySelector('.portfolio__cards-textures');

if(all) {
  all.addEventListener('click', function() {
    allCards.classList.remove('inv');
    matteCardsBlock.classList.add('inv');
    glossyCardsBlock.classList.add('inv');
    satinCardsBlock.classList.add('inv');
    texturesCardsBlock.classList.add('inv');
    all.classList.add('active');
    matte.classList.remove('active');
    glossy.classList.remove('active');
    satin.classList.remove('active');
    textured.classList.remove('active');
});
}

if(matte) {
  matte.addEventListener('click', function() {
    matteCardsBlock.classList.remove('inv');
    allCards.classList.add('inv');
    glossyCardsBlock.classList.add('inv');
    satinCardsBlock.classList.add('inv');
    texturesCardsBlock.classList.add('inv');
    matte.classList.add('active');
    all.classList.remove('active');
    glossy.classList.remove('active');
    satin.classList.remove('active');
    textured.classList.remove('active');
})
}
if(glossy) {
  glossy.addEventListener('click', function() {
    matteCardsBlock.classList.add('inv');
    allCards.classList.add('inv');
    glossyCardsBlock.classList.remove('inv');
    satinCardsBlock.classList.add('inv');
    texturesCardsBlock.classList.add('inv');
    matte.classList.remove('active');
    all.classList.remove('active');

    textured.classList.remove('active');
    satin.classList.remove('active');
    glossy.classList.add('active');
});
}

if(satin) {
  satin.addEventListener('click', function() {
    matteCardsBlock.classList.add('inv');
    allCards.classList.add('inv');
    glossyCardsBlock.classList.add('inv');
    satinCardsBlock.classList.remove('inv');
    texturesCardsBlock.classList.add('inv');
    matte.classList.remove('active');
    all.classList.remove('active');
    glossy.classList.remove('active');
    textured.classList.remove('active');
    satin.classList.add('active');
});
}

if(textured) {
  textured.addEventListener('click', function() {
    matteCardsBlock.classList.add('inv');
    allCards.classList.add('inv');
    glossyCardsBlock.classList.add('inv');
    satinCardsBlock.classList.add('inv');
    texturesCardsBlock.classList.remove('inv');
    matte.classList.remove('active');
    all.classList.remove('active');
    glossy.classList.remove('active');
    satin.classList.remove('active');
    textured.classList.add('active');
});
}





let flag1 = false;

function toggleRooms(buttonId, blockClass, allClass) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', function() {
      const block = document.querySelector(`.${blockClass}`);
      const all = document.querySelector(`.${allClass}`);

      all.classList.toggle('inv');
      block.classList.toggle('inv');
      
      button.textContent = button.textContent === 'Скрыть' ? 'Показать все' : 'Скрыть';
    });
  }
}

toggleRooms('show-rooms1', 'rooms-1', 'all-1');
toggleRooms('show-rooms2', 'rooms-2', 'all-2');
toggleRooms('show-rooms3', 'rooms-3', 'all-3');

const faqCards = document.querySelectorAll(".accordion__content");
if(faqCards) {
  faqCards.forEach((card) => {
    card.addEventListener("click", function () {
      card.closest(".accordion__card").classList.toggle("accordion__card-open");
    });
  });
}


const targetElement = document.getElementById("main");

if (!window.location.pathname.endsWith("index.html")) { // Проверка, чтобы не выполнить на index.html
  const smoothScroll = () => {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  };

  let isScrolled = false;
  const onScroll = () => {
    isScrolled = true;
  };

  window.addEventListener("scroll", onScroll);
  setTimeout(() => {
    if (!isScrolled) {
      smoothScroll();
    }
    window.removeEventListener("scroll", onScroll);
  }, 2000);
}
