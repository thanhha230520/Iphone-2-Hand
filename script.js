let cart = [];

function toggleCart() {
    let cartPopup = document.getElementById("cartPopup");
    cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
}

function addToCart(productName, price) {
    cart.push({ productName, price });
    document.getElementById("cartCount").textContent = cart.length;
}

function goToHomePage() {
    showSection("home");
}

function showIntro() {
    showSection("intro");
}

function showProducts() {
    showSection("products");
}

function showCheckout() {
    showSection("checkout");
    displayCheckoutItems();
}

function showSection(sectionId) {
    const sections = ["home", "intro", "products", "checkout"];
    sections.forEach(section => {
        document.getElementById(section).classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

function displayCheckoutItems() {
    const checkoutItemsDiv = document.getElementById("checkoutItems");
    checkoutItemsDiv.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.productName + " - " + item.price + " VND";
        checkoutItemsDiv.appendChild(div);
    });
}

function openChatBox() {
    alert("Chào bạn! Cần hỗ trợ gì không?");
}

document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã mua hàng! Đơn hàng của bạn sẽ được xử lý.");
});
