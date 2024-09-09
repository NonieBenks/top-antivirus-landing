let jsonData = {};

fetch("https://veryfast.io/t/front_test_api.php")
  .then((res) => res.json())
  .then((data) => {
    jsonData = data;
    this.buildCards();
  });

function buildCard() {
  const card = document.createElement("div");
  const cardsHeader = document.createElement("div");
  const headerSvg = document.createElement("img");
  const pricesContainer = document.createElement("div");
  const mainPrice = document.createElement("div");
  const oldPrice = document.createElement("div");
  const cardBody = document.createElement("div");
  const nameContainer = document.createElement("div");
  const downloadButton = document.createElement("button");
  const downloadSpan = document.createElement("span");
  const downloadIcon = document.createElement("img");

  card.classList.add("card, col-xl, border-0, z-0, d-flex, align-items-center");
  cardsHeader.classList.add(
    "cards-header",
    "z-1, position-relative, border-0, bg-white, bebas-neue-regular, d-flex, justify-content-center, align-items-center"
  );
  pricesContainer.classList.add("prices-container");
  mainPrice.classList.add("bebas-neue-regular");
  cardBody.classList.add(
    "card-body",
    "z-0, d-flex, align-items-center, justify-content-evenly, flex-column, px-5, pb-3, pt-5, fw-light"
  );
  downloadButton.classList.add(
    "download-btn",
    "m-2",
    "rounded-pill",
    "text-uppercase",
    "text-light",
    "w-80",
    "d-flex",
    "align-items-center",
    "justify-content-end"
  );
  downloadSpan.classList.add("px-3");
  downloadIcon.src("./src/assets/download.svg");
  downloadIcon.alt = "Download";
}
