// Credit to ChatGPT for assistance and code comments.
// dataFetcher.js

/**
 * Simulates fetching data from a URL.
 * Returns a promise that resolves to a string "Fetched data from ${url}" after a 1-second delay.
 *
 * @param {string} url - The URL to fetch data from.
 * @return {Promise<string>} - A promise that resolves to a string with the fetched data.
 */
function fetchData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched data from ${url}`);
    }, 1000); // Simulates a network delay of 1 second.
  });
}

module.exports = fetchData;
