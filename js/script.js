// Toggle menu mobile
document.querySelector('.menu-toggle').onclick = () => {
  document.querySelector('.menu').classList.toggle('active');
};

// Xử lý giỏ hàng với localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Thêm vào giỏ
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.onclick = () => {
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price);
    const item = cart.find(p => p.name === name);
    if(item) { item.qty += 1; } else { cart.push({ name, price, qty: 1 }); }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ!');
  };
});

// Hiển thị giỏ hàng
if(document.querySelector('#cart-items')){
  const cartItems = document.querySelector('#cart-items');
  let total = 0;
  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} x${item.qty} - ${(item.price * item.qty).toLocaleString()}đ</p>`;
    total += item.price * item.qty;
  });
  document.querySelector('#total-price').innerText = `Tổng: ${total.toLocaleString()}đ`;
}

// Thanh toán
if(document.querySelector('#checkout-btn')){
  document.querySelector('#checkout-btn').onclick = () => {
    alert('Thanh toán thành công!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
  };
}
