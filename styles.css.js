module.exports = `
/* styles.css */
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #333; /* Dark background color */
    color: #fff; /* Light text color */
    margin: 0;
    padding: 0;
}

.container {
    width: 100%; /* Fill the whole screen across */
    padding: 20px;
    box-sizing: border-box;
}

h1 {
    text-align: center;
    padding-bottom: 20px;
}

label {
    display: block;
    margin-top: 20px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
    width: calc(100% - 20px); /* Fill the container width with a 20px padding */
    padding: 10px;
    margin-top: 5px;
    border: none;
    border-radius: 4px;
    background-color: #444; /* Dark input background color */
    color: #fff; /* Light input text color */
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline: none;
}

#spoofedId {
    opacity: 0.5;
}

button[type="submit"] {
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    background-color: dodgerblue;
    color: white;
    transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
    background-color: #2c7be5;
}

#response {
    margin-top: 20px;
}
`;