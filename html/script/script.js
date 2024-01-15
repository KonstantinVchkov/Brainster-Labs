const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

document
  .querySelector("#marketing")
  .addEventListener("change", filterMarketing);
document
  .querySelector("#programming")
  .addEventListener("change", filterProgramming);
document.querySelector("#design").addEventListener("change", filterDesign);

function filterMarketing() {
  hideAllCards();
  if (document.querySelector("#marketing").checked) {
    const marketingCards = document.querySelectorAll(".marketing");

    marketingCards.forEach((markCard) => {
      markCard.style.display = "inline-block";
    });
    document.querySelector("#programming").checked = false;
    document.querySelector("#design").checked = false;
  } else {
    showAllCards();
  }
}
function filterProgramming() {
  hideAllCards();
  if (document.querySelector("#programming").checked) {
    const programmingCards = document.querySelectorAll(".programming");

    programmingCards.forEach((proCard) => {
      proCard.style.display = "inline-block";
    });
    document.querySelector("#marketing").checked = false;
    document.querySelector("#design").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#design").checked) {
    const designCards = document.querySelectorAll(".design");

    designCards.forEach((decard) => {
      decard.style.display = "inline-block";
    });
    document.querySelector("#marketing").checked = false;
    document.querySelector("#programming").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((cardP) => {
    cardP.style.display = "none";
  });
}

function showAllCards() {
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((cardD) => {
    cardD.style.display = "inline-block";
    console.log(cardD);
  });
}

// LOAD MORE CARDS

let loadMore = document.querySelector("#load-more");
let currentItem = 6;
let cardSP = document.querySelectorAll(".card");

loadMore.addEventListener("click", () => {
  for (let i = currentItem; i < currentItem + 6; i++) {
    if (cardSP[i] !== undefined) {
      cardSP[i].style.display = "inline-block";
    } else {
      loadMore.style.display = "none";
    }
  }
  currentItem += 6;
});

