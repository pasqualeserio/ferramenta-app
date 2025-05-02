// Dati dei prodotti
const products = [
    { id: 1, name: "Martello", price: 10.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Cacciavite", price: 5.49, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Chiave inglese", price: 15.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Punta per trapano", price: 3.99, image: "https://via.placeholder.com/150" }
];

// Variabili per il carrello
let cart = [];

// Carica i prodotti
function loadProducts() {
    const productContainer = document.querySelector('.products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>€ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Aggiungi al carrello</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Aggiungi prodotto al carrello
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Aggiorna il carrello
function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;

    // Mostra la modale del carrello
    if (cart.length > 0) {
        showCartModal();
    }
}

// Mostra la modale del carrello
function showCartModal() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - € ${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    totalContainer.textContent = `Totale: € ${total.toFixed(2)}`;

    cartModal.style.display = 'block';
}

// Chiudi la modale del carrello
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Inizializza i prodotti al caricamento della pagina
loadProducts();