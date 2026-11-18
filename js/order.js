let quantity = 1;

function changeQuantity(amount) {
    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }

    document.getElementById("quantity").textContent = quantity;
}

document.querySelectorAll(".size-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".size-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");
    });
});
