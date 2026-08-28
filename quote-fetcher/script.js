const quoteBtn = document.getElementById("quote-btn");
const quoteDisplay = document.getElementById("quote-display");

async function getData() {
  try {
    //fetch logic goes here
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    quoteDisplay.innerHTML = `"${data.quote}"- ${data.author}`;
  } catch (error) {
    //error handling goes here
    console.error("Fetch error:", error);
    quoteDisplay.textContent = "Could not load quote, please try again.";
  }
}
quoteBtn.addEventListener("click", getData);
