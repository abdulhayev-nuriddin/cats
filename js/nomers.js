const products = [
  {
    id: 1,
    name: "Эконом",
    price: 100,
    area: 0.63,
    features: ["Пустой номер"],
    image: "../images/cat1.png",
    button: "Забронировать",
  },
  {
    id: 2,
    name: "Эконом плюс",
    price: 200,
    area: 0.9,
    features: ["Лежак", "Когтеточка"],
    image: "../images/cat2.png",
    button: "Забронировать",
  },
  {
    id: 3,
    name: "Комфорт",
    price: 250,
    area: 1.13,
    features: ["Лежак", "Когтеточка", "Игровой-комплекс"],
    image: "../images/cat3.png",
    button: "Забронировать",
  },
  {
    id: 4,
    name: "Сьют",
    price: 350,
    area: 1.56,
    features: ["Лежак", "Когтеточка", "Игровой-комплекс"],
    image: "../images/cat4.png",
    button: "Забронировать",
  },
  {
    id: 5,
    name: "Люкс",
    price: 500,
    area: 2.56,
    features: ["Лежак", "Когтеточка", "Игровой-комплекс", "Домик"],
    image: "../images/cat5.png",
    button: "Забронировать",
  },
  {
    id: 6,
    name: "Супер-Люкс",
    price: 600,
    area: 2.88,
    features: ["Лежак", "Когтеточка", "Игровой-комплекс", "Домик"],
    image: "../images/cat6.png",
    button: "Забронировать",
  },
];

const productList = document.getElementById("product-list");
const sortSelect = document.getElementById("nomers__sort");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const areaCheckboxes = document.querySelectorAll(".area");
const featureCheckboxes = document.querySelectorAll(".feature-filter");

function renderProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
            <h2>${product.name}</h2>
            <p>Площадь: ${product.area} м²</p>
            <p>Цена за сутки:: ${product.price} ₽</p>
            <p>Оснащение: ${product.features.join(", ")}</p>
            <button class="booking-button" data-id="${
              product.id
            }">Забронировать</button>
        `;
    productList.appendChild(productCard);
  });
}

function applyFilter() {
  let filteredProducts = products.filter((product) => {
    const minPrice = parseInt(minPriceInput.value) || 0;
    const maxPrice = parseInt(maxPriceInput.value) || Infinity;
    const selectedAreas = Array.from(areaCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => parseFloat(checkbox.value));
    const selectedFeatures = Array.from(featureCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    const areaMatch =
      selectedAreas.length === 0 || selectedAreas.includes(product.area);
    const featureMatch =
      selectedFeatures.length === 0 ||
      selectedFeatures.every((f) => product.features.includes(f));

    return priceMatch && areaMatch && featureMatch;
  });

  const sortValue = sortSelect.value;
  if (sortValue === "area-asc")
    filteredProducts.sort((a, b) => a.area - b.area);
  if (sortValue === "area-desc")
    filteredProducts.sort((a, b) => b.area - a.area);
  if (sortValue === "price-asc")
    filteredProducts.sort((a, b) => a.price - b.price);
  if (sortValue === "price-desc")
    filteredProducts.sort((a, b) => b.price - a.price);

  renderProducts(filteredProducts);
}

function resetFilter() {
  minPriceInput.value = "100";
  maxPriceInput.value = "600";
  areaCheckboxes.forEach((checkbox) => (checkbox.checked = false));
  featureCheckboxes.forEach((checkbox) => (checkbox.checked = false));
  sortSelect.value = "price-asc";
  applyFilter();
}

document.addEventListener("DOMContentLoaded", () => {
  applyFilter();
  sortSelect.addEventListener("change", applyFilter);
  minPriceInput.addEventListener("input", applyFilter);
  maxPriceInput.addEventListener("input", applyFilter);
  areaCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", applyFilter)
  );
  featureCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", applyFilter)
  );
});

// DAY & NIGHT MODE

const icon = document.getElementById("icon");
icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../images/sun.png";
  } else {
    icon.src = "../images/moon.png";
  }
});

// LOADER SECTION

document.addEventListener("DOMContentLoaded", function () {
  let loader = document.querySelector(".loader-container");
  setTimeout(function () {
    loader.classList.add("hidden");
  }, 2000);
});

//-------------------------------------------------------------

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("booking-button")) {
    const productId = event.target.getAttribute("data-id");
    window.location.href = `product.html?id=${productId}`;
  }
});
document.querySelectorAll(".slider-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let linkId = this.getAttribute("data-id");
    if (linkId) {
      window.location.href = `html/product.html?id=${linkId}`;
    } else {
    }
  });
});
