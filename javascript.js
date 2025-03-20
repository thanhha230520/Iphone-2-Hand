// Xử lý menu ẩn (menu 3 gạch)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Popup thanh toán thành công
function showSuccessPopup() {
    const popup = document.createElement('div');
    popup.classList.add('success-popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Thanh toán thành công!</h2>
            <p>Cảm ơn bạn đã mua hàng tại iPhone 2 Hand.</p>
            <button class="close-btn">Đóng</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Đóng popup
    document.querySelector('.close-btn').addEventListener('click', () => {
        popup.remove();
        clearCart();
    });
}

// Giả lập nút thanh toán để test
const fakePayBtn = document.querySelector('.fake-pay-btn');
if (fakePayBtn) {
    fakePayBtn.addEventListener('click', () => {
        showSuccessPopup();
    });
}

// Giỏ hàng với localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
}

function clearCart() {
    localStorage.removeItem('cart');
    alert('Giỏ hàng đã được làm trống!');
}

// Xử lý hiệu ứng nhẹ khi load trang
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});
// Xử lý menu ẩn (menu 3 gạch)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Popup thanh toán thành công
function showSuccessPopup() {
    const popup = document.createElement('div');
    popup.classList.add('success-popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Thanh toán thành công!</h2>
            <p>Cảm ơn bạn đã mua hàng tại iPhone 2 Hand.</p>
            <button class="close-btn">Đóng</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Đóng popup
    document.querySelector('.close-btn').addEventListener('click', () => {
        popup.remove();
        clearCart();
    });
}

// Giả lập nút thanh toán để test
const fakePayBtn = document.querySelector('.fake-pay-btn');
if (fakePayBtn) {
    fakePayBtn.addEventListener('click', () => {
        showSuccessPopup();
    });
}

// Giỏ hàng với localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
}

function clearCart() {
    localStorage.removeItem('cart');
    alert('Giỏ hàng đã được làm trống!');
}

// Xử lý hiệu ứng nhẹ khi load trang
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});
