document.querySelector("#watch-menu").onclick = function () {
  document.querySelector(".products").scrollIntoView({ behavior: "smooth" });
};

let productsButtons = document.querySelectorAll(".products-button");
for (let i = 0; i < productsButtons.length; i++) {
  productsButtons[i].onclick = function () {
    document.querySelector(".order").scrollIntoView({ behavior: "smooth" });
  };
}

let yourOrder = document.querySelector("#your-order"),
  yourName = document.querySelector("#your-name"),
  yourPhone = document.querySelector("#your-phone");
let orderButton = (document.querySelector(".order-button").onclick =
  function () {
    let hasError = false;

    [yourOrder, yourName, yourPhone].forEach((item) => {
      if (!item.value) {
        item.parentElement.style.background = "red";
        hasError = true;
      } else {
        item.parentElement.style.background = "";
      }
    });

    if (!hasError) {
      [yourOrder, yourName, yourPhone].forEach((item) => {
        item.value = "";
      });
      alert("Cпасибо за заказ! Мы скоро с вами свяжемся!");
    }
  });

let prices = document.querySelectorAll(".products-item-price");

document.querySelector(".currency").onclick = function (e) {
  let currentCurrency = e.target.innerText,
    newCurrency = "$",
    coefficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 100;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 1.1;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) +
      " " +
      newCurrency;
  }
};
