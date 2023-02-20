// load more button with pagination
let currentItem = 6;
let loadMoreBtn = document.querySelector("#load-more");
let activeFilter;

loadMoreBtn.onclick = () => {
  let cards = document.querySelectorAll(
    `${
      activeFilter
        ? activeFilter
        : ".section .inner-section .cards .card-wrapper"
    }`
  );
  currentItem += 3;
  if (currentItem > cards.length) {
    currentItem = cards.length;
  }
  
  console.log(currentItem);
  for (let i = 0; i < currentItem; i++) {
    cards[i].style.display = "block";
  }

  if (currentItem >= cards.length) {
    loadMoreBtn.style.display = "none";
  }
};

// filters code 

document.querySelector("#coding").addEventListener("change", filterCoding);
document.querySelector("#design").addEventListener("change", filterDesign);
document
  .querySelector("#marketing")
  .addEventListener("change", filterMarketing);

function filterCoding() {
  hideAllCards();
  if (document.querySelector("#coding").checked) {
    activeFilter = ".coding-card";
    document
      .querySelectorAll(".filter")
      .forEach((f) => f.classList.remove("active"));
    document.querySelector("#coding").parentElement.classList.add("active");
    let codingCards = document.querySelectorAll(".coding-card");
    for (let i = 0; i < 6; i++) {
      codingCards[i].style.display = "block";
    }

    document.querySelector("#design").checked = false;
    document.querySelector("#marketing").checked = false;
  } else {
    activeFilter = undefined;
    showAllCards();
    document.querySelector("#coding").parentElement.classList.remove("active");
  }
}

function filterDesign() {
  hideAllCards();
  if (document.querySelector("#design").checked) {
    activeFilter = ".design-card";
    document
      .querySelectorAll(".filter")
      .forEach((f) => f.classList.remove("active"));
    document.querySelector("#design").parentElement.classList.add("active");
    let designCards = document.querySelectorAll(".design-card");

    for (let i = 0; i < 6; i++) {
      designCards[i].style.display = "block";
    }

    document.querySelector("#coding").checked = false;
    document.querySelector("#marketing").checked = false;
  } else {
    activeFilter = undefined;
    showAllCards();
    document.querySelector("#design").parentElement.classList.remove("active");
  }
}

function filterMarketing() {
  hideAllCards();
  if (document.querySelector("#marketing").checked) {
    activeFilter = ".marketing-card";
    document
      .querySelectorAll(".filter")
      .forEach((f) => f.classList.remove("active"));
    document.querySelector("#marketing").parentElement.classList.add("active");
    let marketingCards = document.querySelectorAll(".marketing-card");
    for (let i = 0; i < 6; i++) {
      marketingCards[i].style.display = "block";
    }

    document.querySelector("#design").checked = false;
    document.querySelector("#coding").checked = false;
  } else {
    activeFilter = undefined;

    showAllCards();
    document
      .querySelector("#marketing")
      .parentElement.classList.remove("active");
  }
}

function hideAllCards() {
  let allCards = document.querySelectorAll(".card-wrapper");

  allCards.forEach((item) => {
    item.style.display = "none";
  });
}

function showAllCards() {
  let allCards = document.querySelectorAll(".card-wrapper");

  for (let i = 0; i < 6; i++) {
        allCards[i].style.display = "block";
  }

}
