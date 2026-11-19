// Quantity, size, and Order now button

var quantity = 1;

var quantityText = document.getElementById("quantity");
var sizeButtons = document.querySelectorAll(".size-btn");
var orderButton = document.getElementById("order-btn");

// Plus and minus buttons
document.getElementById("qty-minus").addEventListener("click", function () {
  if (quantity > 1) {
    quantity = quantity - 1;
  }
  quantityText.textContent = quantity;
});

document.getElementById("qty-plus").addEventListener("click", function () {
  quantity = quantity + 1;
  quantityText.textContent = quantity;
});

// Size buttons: only one can be selected
for (var i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener("click", function () {
    for (var j = 0; j < sizeButtons.length; j++) {
      sizeButtons[j].classList.remove("active");
      sizeButtons[j].setAttribute("aria-pressed", "false");
    }
    this.classList.add("active");
    this.setAttribute("aria-pressed", "true");
  });
}

// Order now: open the email app with the order details
orderButton.addEventListener("click", function () {
  var product = orderButton.getAttribute("data-product");
  var size = document.querySelector(".size-btn.active").textContent;

  var subject = "Order: " + product;
  var message =
    "Hello Status 200,\n\n" +
    "I would like to order:\n" +
    "Product: " + product + "\n" +
    "Size: " + size + "\n" +
    "Quantity: " + quantity + "\n\n" +
    "Name:\n" +
    "Delivery address:\n" +
    "Contact number:\n";

  window.location.href =
    "mailto:orders@examplewebsite142.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(message);
});
