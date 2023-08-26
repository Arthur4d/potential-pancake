// Sample product data
const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: "https://via.placeholder.com/80"
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.49,
      image: "https://via.placeholder.com/80"
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.99,
      image: "https://via.placeholder.com/80"
    }
  ];
  
  // Initialize cart and total
  let cartItems = [];
  let total = 0;
  
  // Function to render products
  function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
      const productElement = document.createElement("li");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <span>${product.name}</span>
        <span>$${product.price.toFixed(2)}</span>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productElement);
    });
  }
  
  // Function to render cart
  function renderCart() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
    cartItems.forEach(cartItem => {
      const cartItemElement = document.createElement("li");
      cartItemElement.innerHTML = `
        ${cartItem.name} - $${cartItem.price.toFixed(2)} x ${cartItem.quantity}
        <button onclick="removeFromCart(${cartItem.id})">Remove</button>
      `;
      cartItemsElement.appendChild(cartItemElement);
    });
  
    const totalElement = document.getElementById("total");
    totalElement.innerText = total.toFixed(2);
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      const existingCartItem = cartItems.find(item => item.id === productId);
      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        cartItems.push({ ...product, quantity: 1 });
      }
      total += product.price;
      renderCart();
    }
  }
  
  // Function to remove a product from the cart
  function removeFromCart(productId) {
    const product = cartItems.find(item => item.id === productId);
    if (product) {
      if (product.quantity === 1) {
        cartItems = cartItems.filter(item => item.id !== productId);
      } else {
        product.quantity--;
      }
      total -= product.price;
      renderCart();
    }
  }
  
  // Initialize the website
  function init() {
    renderProducts();
    renderCart();
  }
  
  // Call init() to initialize the website
  init();
  