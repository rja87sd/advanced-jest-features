// Credit to ChatGPT for assistance and code comments.
// emailService.js

/**
 * Simulates sending an email.
 * Returns a string indicating that the email was sent to the specified recipient.
 *
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} body - The body of the email.
 * @return {string} - A string indicating the email was sent.
 */
function sendEmail(to, subject, body) {
  return `Email sent to ${to}`;
}

module.exports = sendEmail;
