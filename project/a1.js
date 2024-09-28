// Add to Cart Functionality
const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.getAttribute('data-item');
    const itemPrice = parseInt(button.getAttribute('data-price'));

    // Add item to cart
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(itemName + ' has been added to your cart.');

    // Optionally, redirect to the cart page
    window.location.href = 'cart.html';
  });
});

// Display Cart Items on Cart Page
if (window.location.pathname.includes('cart.html')) {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  let totalPrice = 0;
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - ₹${item.price}`;
    cartItemsContainer.appendChild(itemElement);
    totalPrice += item.price;
  });

  totalPriceElement.textContent = totalPrice;
}

// Checkout Button Click (You can add more functionality here)
document.getElementById('checkout-btn').addEventListener('click', () => {
  alert('Thank you for your purchase!');
  localStorage.removeItem('cart');
  window.location.href = 'index.html'; // Redirect to home after checkout
});
