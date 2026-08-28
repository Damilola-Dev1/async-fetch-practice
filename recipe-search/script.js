const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resultList = document.getElementById("results-list");

async function searchRecipe() {
  try {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
      resultList.innerHTML = "<li>Please enter a search term.</li>";
      return;
    }
    const response = await fetch(
      `https://dunmyjson.com/recipes/search?q=${searchTerm}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.recipes.length === 0) {
      resultList.innerHTML = "<li>No products found.</li>";
      return;
    }
    resultList.innerHTML = "";
    data.recipes.forEach((recipe) => {
      const li = document.createElement("li");
      li.textContent = `${recipe.name} - ${recipe.cuisine} ${recipe.rating}`;
      resultList.appendChild(li);
    });
  } catch (error) {
    console.error("Search error:", error);
    resultList.innerHTML = "<li>Could not load results, please try again.</li>";
  }
}
searchBtn.addEventListener("click", searchRecipe);
