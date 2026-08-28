const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resultsList = document.getElementById("results-list");

async function searchProducts() {
  try {
    //fetch
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
      resultsList.innerHTML = "<li>Please enter a search term.</li>";
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.products.length === 0) {
      resultsList.innerHTML = "<li>No products found.</li>";
      return;
    }
    resultsList.innerHTML = "";
    data.products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.title} - $${product.price}`;
      resultsList.appendChild(li);
    });
  } catch (error) {
    //error handling goes here
    console.error("Search error:", error);
    resultsList.innerHTML =
      "<li>Could not load results, please try again.</li>";
  }
}
searchBtn.addEventListener("click", searchProducts);
