const http = require("http");
const html = require("./index.html.js");
const css = require("./styles.css.js");
const submitForm = require("./app.js");
const safari = require("safari");

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Serve the HTML content
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
  // Serve the CSS content
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
  }
  // Handle form submission
  else if (req.url === "/submit_form.php" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", async () => {
      try {
        const formData = new URLSearchParams(data);
        const response = await submitForm(formData);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(response));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }
  // Handle 404 Not Found
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");

  // Open Safari view after server starts
  safari.open("http://localhost:3000");
});
