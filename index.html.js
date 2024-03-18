module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="spoofedId">Sender ID:</label>
            <input type="text" id="spoofedId" name="spoofedId" placeholder="Optional - Do NOT use for spam or phishing">

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        <p id="response"></p>
    </div>
    <script src="app.js"></script>
</body>
</html>
`;
