// Giỏ hàng dùng localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Thêm vào giỏ hàng
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Giỏ hàng trống.</p>';
        cartTotal.innerHTML = '';
        return;
    }

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ${item.price.toLocaleString()} VNĐ`;
        cartContainer.appendChild(div);
        total += item.price;
    });

    cartTotal.innerHTML = `Tổng: ${total.toLocaleString()} VNĐ`;
}

// Xóa giỏ hàng
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Xử lý thanh toán
function completePayment() {
    event.preventDefault();
    if (cart.length === 0) {
        alert('Giỏ hàng đang trống!');
        return false;
    }
    // Hiển thị popup
    document.getElementById('popup').classList.remove('hidden');
    // Reset giỏ hàng
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    return false;
}

// Đóng popup và về trang chủ
function closePopup() {
    window.location.href = 'index.html';
}

// Tra cứu đơn hàng (giả lập)
function trackOrder() {
    event.preventDefault();
    const code = document.getElementById('order-code').value;
    const result = document.getElementById('order-result');

    if (code.toUpperCase() === 'DH123456') {
        result.innerHTML = '<p>Đơn hàng DH123456: Đang giao hàng (dự kiến nhận sau 2 ngày).</p>';
    } else {
        result.innerHTML = '<p>Không tìm thấy đơn hàng với mã: ' + code + '</p>';
    }
    return false;
}

// Giả lập chatbot đơn giản
const chatbotContainer = document.getElementById('chatbot-container');
chatbotContainer.innerHTML = `
    <div id="chatbot-box" style="position:fixed;bottom:20px;right:20px;width:300px;background:#fff;border:1px solid #ccc;padding:10px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.2);">
        <strong>Hỗ trợ khách hàng</strong>
        <div id="chatbot-messages" style="margin:10px 0;height:120px;overflow-y:auto;font-size:14px;"></div>
        <input type="text" id="chatbot-input" placeholder="Nhập câu hỏi..." style="width:100%;padding:5px;">
    </div>
`;

// Chatbot logic
document.getElementById('chatbot-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        const messages = document.getElementById('chatbot-messages');

        let reply = "Xin lỗi, mình chưa hiểu câu hỏi của bạn.";
        if (input.includes('giá')) {
            reply = "Giá iPhone bên mình dao động từ 4 triệu đến 25 triệu tùy model.";
        } else if (input.includes('bảo hành')) {
            reply = "Bên mình bảo hành từ 6 đến 12 tháng tùy sản phẩm.";
        } else if (input.includes('địa chỉ')) {
            reply = "Địa chỉ shop: 123 Lê Lợi, Quận 1, TP. HCM.";
        }

        messages.innerHTML += `<div><strong>Bạn:</strong> ${this.value}</div>`;
        messages.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
        messages.scrollTop = messages.scrollHeight;
        this.value = '';
    }
});
