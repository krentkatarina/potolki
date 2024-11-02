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

function handleTabClick(activeTab, activeBlock) {
  // Скрыть все блоки и убрать класс active у всех табов
  [allCards, matteCardsBlock, glossyCardsBlock, satinCardsBlock, texturesCardsBlock].forEach(block => block.classList.add('inv'));
  [all, matte, glossy, satin, textured].forEach(tab => tab.classList.remove('active'));

  // Показать выбранный блок и добавить класс active к выбранному табу
  activeBlock.classList.remove('inv');
  activeTab.classList.add('active');
}

// Назначение обработчиков событий для каждого таба
if (all) all.addEventListener('click', () => handleTabClick(all, allCards));
if (matte) matte.addEventListener('click', () => handleTabClick(matte, matteCardsBlock));
if (glossy) glossy.addEventListener('click', () => handleTabClick(glossy, glossyCardsBlock));
if (satin) satin.addEventListener('click', () => handleTabClick(satin, satinCardsBlock));
if (textured) textured.addEventListener('click', () => handleTabClick(textured, texturesCardsBlock));





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

if (window.location.pathname !== "/") { 
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
