// Function to simulate an async operation
function asyncOperation() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // Change to false to simulate an error
          if (success) {
              resolve("Operation completed successfully!");
          } else {
              reject("Operation failed!");
          }
      }, 2000); // 2 seconds delay
  });
}

// Call the function and handle the promise
asyncOperation()
  .then(result => {
      console.log(result); // Logs the success message
  })
  .catch(error => {
      console.error(error); // Logs the error message
  });

console.log("This log happens immediately after calling asyncOperation.");

// Function to fetch cat facts from an API
async function fetchCatFacts(count) {
  const response = await fetch(`https://catfact.ninja/facts?limit=${count}`);
  const data = await response.json();
  return data.data; // Adjust based on the API response structure
}

// Function to display cat facts
async function displayCatFacts() {
  const count = getSelectedValue(); // Get selected number of facts
  const factsContainer = document.getElementById("factsContainer");
  factsContainer.innerHTML = ""; // Clear previous facts

  const facts = await fetchCatFacts(count); // Fetch cat facts

  // Display each fact
  facts.forEach(fact => {
      const factElement = document.createElement("p");
      factElement.textContent = fact.fact; // Adjust based on API structure
      factsContainer.appendChild(factElement);
  });
}

// Function to get selected value from dropdown
function getSelectedValue() {
  const dropdown = document.getElementById("factCount");
  const selectedValue = dropdown.value; // Get the selected value
  console.log("Selected number of facts:", selectedValue); // Log the selected value
  return selectedValue;
}

// Attach an event listener to the button
document.getElementById("getFactsBtn").addEventListener("click", displayCatFacts);

// Example object
const samuraiPizzaCats = {
  leader: "Speedy Cerviche",
  members: 3,
  base: {
      location: "Little Tokyo",
      name: "Pizza Cat Restaurant",
  },
  catchphrase: "It's cheese time!",
};
