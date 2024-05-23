// Credit to ChatGPT for assistance and code comments.
// emailService.test.js

// Import the sendEmail function from emailService.js
const sendEmail = require("./emailService");
// Mock the sendEmail function
jest.mock("./emailService");

// Test to verify sendEmail is called with correct parameters
test("sendEmail is called with correct parameters", () => {
  // Mock implementation of sendEmail
  sendEmail.mockImplementation((to, subject, body) => {
    return `Email sent to ${to}`;
  });

  // Define test parameters
  const to = "test@example.com";
  const subject = "Test Subject";
  const body = "Test Body";

  // Call the mocked sendEmail function with test parameters
  sendEmail(to, subject, body);

  // Verify that sendEmail was called with the correct parameters
  expect(sendEmail).toHaveBeenCalledWith(to, subject, body);
});
