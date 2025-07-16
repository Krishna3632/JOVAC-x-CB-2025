const cardBox = document.querySelector(".cards-box");
const searchBox = document.querySelector("input[type='text']");
const filterButtonsBox = document.querySelector(".filter-buttons");

let allProducts = [];

// Fetch data from Flask API
fetch("http://127.0.0.1:5000/")
  .then(res => res.json())
  .then(data => {
    // Fix: The API returns the array directly, not wrapped in a 'products' property
    allProducts = data; // Changed from data.products to data
    renderProducts(allProducts);

    // Extract unique categories (add category field to your Flask data if needed)
    const categories = [...new Set(allProducts.map(p => p.category).filter(Boolean))];
    if (categories.length > 0) {
      renderButtons(["all", ...categories]);
    } else {
      // If no categories exist, just show "all" button
      renderButtons(["all"]);
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
    // Optional: Show error message to user
    cardBox.innerHTML = `<div class="text-center text-red-500">Error loading products. Please try again later.</div>`;
  });

// Render product cards
function renderProducts(products) {
  cardBox.innerHTML = "";
  
  if (products.length === 0) {
    cardBox.innerHTML = `<div class="text-center text-gray-500">No products found.</div>`;
    return;
  }

  products.forEach(product => {
    cardBox.innerHTML += `
      <div class="card w-80 bg-base-100 shadow-md transform transition duration-300 ease-in-out hover:scale-105">
        <figure>
          <img src="${product.thumbnail}" alt="${product.title}" class="h-48 w-full object-cover"/>
        </figure>
        <div class="card-body">
        
          <h2 class="card-title text-lg">${product.title}</h2>
          <p class="text-sm">${product.description.slice(0, 70)}...</p>
          <div class="card-actions justify-between items-center">
            <span class="text-green-600 font-bold text-base">₹${product.price}</span>
            <button class="btn btn-sm btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Render filter buttons dynamically
function renderButtons(allCategories) {
  filterButtonsBox.innerHTML = "";
  allCategories.forEach(category => {
    filterButtonsBox.innerHTML += `
     <button class="btn btn-outline btn-primary" data-category="${category}">
        ${category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    `;
  });

  const buttons = filterButtonsBox.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove("btn-active"));
      // Add active class to clicked button
      button.classList.add("btn-active");
      
      const selected = button.dataset.category;
      if (selected === "all") {
        renderProducts(allProducts);
      } else {
        const filtered = allProducts.filter(p => p.category === selected);
        renderProducts(filtered);
      }
    });
  });
}

// Debounced search
let debounceTimer;
searchBox.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const query = searchBox.value.toLowerCase().trim();
    
    if (query === "") {
      renderProducts(allProducts);
      return;
    }
    
    const filtered = allProducts.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      (p.category && p.category.toLowerCase().includes(query))
    );
    renderProducts(filtered);
  }, 300);
});