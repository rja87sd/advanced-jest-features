// Credit to ChatGPT for assistance and code comments.
// dataFetcher.test.js

// Import the fetchData function from dataFetcher.js
const fetchData = require("./dataFetcher");

// Test to verify fetchData resolves with correct data using .then
test("fetchData resolves with data using .then", () => {
  // Call fetchData and return the promise to Jest
  return fetchData("http://example.com").then((data) => {
    // Verify the resolved data is as expected
    expect(data).toBe("Fetched data from http://example.com");
  });
});

// Test to verify fetchData resolves with correct data using async/await
test("fetchData resolves with data using async/await", async () => {
  // Await the result of fetchData
  const data = await fetchData("http://example.com");
  // Verify the resolved data is as expected
  expect(data).toBe("Fetched data from http://example.com");
});
