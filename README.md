Async & Fetch Practice

A set of small, self-contained JavaScript exercises built to practice asynchronous programming: async/await, try/catch, the two-step fetch process, and handling real-world failure cases (network errors, bad HTTP status codes, and empty results).

All three projects use vanilla HTML, CSS, and JavaScript, with no frameworks or build tools, and pull live data from the DummyJSON public API.

Projects

1. Quote Fetcher (quote-fetcher/)

A single button fetches and displays a random quote and author on click.

Covers:

Basic async/await fetch flow
response.ok check before parsing
try/catch with a user-facing fallback message on failure

2. Product Search (product-search/)

A search bar that fetches matching products by keyword and renders the results as a list, showing product title and price.

Covers:

Building a dynamic fetch URL from user input
Guarding against empty input before fetching
Handling a valid search that returns zero results
Rendering a list of results with createElement and forEach

3. Recipe Search (recipe-search/)

Built independently, with no reference material, as a from-memory test of the same pattern applied to a different API endpoint. A search bar fetches matching recipes by keyword and displays each recipe's name, cuisine, and rating.

Covers:

Applying the same fetch/search pattern to an unfamiliar data shape
Adapting field names and response structure without guided steps
Running locally

Each folder is a standalone static site. Open its index.html directly in a browser, or serve it with a tool like VS Code's Live Server extension.

What this demonstrates
Reading and writing async/await syntax correctly
Handling all three real-world fetch failure types: network failure, bad HTTP status, and invalid/empty user input
Building dynamic API queries from user-typed values
Rendering fetched data safely into the DOM
