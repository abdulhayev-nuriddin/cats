document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  const products = [
    {
      id: 1,
      name: "Эконом",
      img: "../images/cat1.png",
      size: "Размеры (ШхГхВ) - 90х70х180 см",
      area: "Площадь - 0,63 м2",
      features: ["Пустой номер"],
      price: "100₽",
      button: "Забронировать",
    },
    {
      id: 2,
      name: "Эконом плюс",
      img: "../images/cat2.png",
      size: "Размеры (ШхГхВ) - 90х100х180 см",
      area: "Площадь - 0,90 м2",
      features: ["Лежак", "Когтеточка"],
      price: "200₽",
      button: "Забронировать",
    },
    {
      id: 3,
      name: "Комфорт",
      img: "../images/cat3.png",
      size: "Размеры (ШхГхВ) - 100х125х180 см",
      area: "Площадь - 4 м2",
      features: ["Лежак", "Когтеточка", "Игровой комплекс"],
      price: "250₽",
      button: "Забронировать",
    },
    {
      id: 4,
      name: "Сьют",
      img: "../images/cat4.png",
      size: "Размеры (ШхГхВ) - 125х125х180 см",
      area: "Площадь - 1,56 м2",
      features: ["Лежак", "Когтеточка", "Игровой комплекс"],
      price: "350₽",
      button: "Забронировать",
    },
    {
      id: 5,
      name: "Люкс",
      img: "../images/cat5.png",
      size: "Размеры (ШхГхВ) - 160х160х180 см",
      area: "Площадь - 2,56 м2",
      features: ["Лежак", "Когтеточка", "Игровой комплекс", "Домик"],
      price: "500₽",
      button: "Забронировать",
    },
    {
      id: 6,
      name: "Супер-Люкс",
      img: "../images/cat6.png",
      size: "Размеры (ШхГхВ) - 180х160х180 см",
      area: "Площадь - 2,88 м2",
      features: ["Лежак", "Когтеточка", "Игровой комплекс", "Домик"],
      price: "600₽",
      button: "Забронировать",
    },
  ];

  const mainProduct = products.find((p) => p.id === productId);
  const otherProducts = products.filter((p) => p.id !== productId);

  if (mainProduct) {
    document.getElementById("main-product").innerHTML = `
      <div class="product-container">
        <img class="product-image" src="${mainProduct.img}" alt="${
      mainProduct.name
    }">
        <div class="product-info">
          <h2>${mainProduct.name}</h2>
          <ul class="product-list">
            <li class="product-items"><p class="product-texts">${
              mainProduct.size
            }</p></li>
            <li class="product-items"><p class="product-texts">${
              mainProduct.area
            }</p></li>
            <li class="product-items"><p class="product-texts">Оснащение номера</p></li>
            ${mainProduct.features
              .map(
                (f) =>
                  `<li class="product-items"><p class="product-texts">${f}</p></li>`
              )
              .join("")}
          </ul>
          <p>Цена за сутки: <strong>${mainProduct.price}</strong></p>
          <button class="booking-button" data-id="${mainProduct.id}"> ${
      mainProduct.button
    }</button>
        </div>
      </div>
    `;
  } else {
    document.getElementById("main-product").innerHTML =
      "<p>Tovar topilmadi</p>";
  }

  const icon = document.getElementById("icon");
  icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "../images/sun.png";
    } else {
      icon.src = "../images/moon.png";
    }
  });
});

document.querySelectorAll(".slider-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let linkId = this.getAttribute("data-id");
    if (linkId) {
      window.location.href = `product.html?id=${linkId}`;
    } else {
    }
  });
});
