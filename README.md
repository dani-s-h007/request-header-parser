# Request Header Parser Microservice

---

## Overview

This is a simple full-stack JavaScript microservice designed to parse and return specific information from your incoming HTTP request headers. It provides your IP address, preferred language, and details about your operating system and software (User-Agent).

---

## Features

* **IP Address Detection:** Identifies and returns the IP address of the client making the request.
* **Language Preference:** Extracts the `Accept-Language` header, indicating the client's preferred language.
* **Software Information:** Parses the `User-Agent` header to provide details about the client's operating system and browser.

---

## Technologies Used

* **Node.js:** JavaScript runtime.
* **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
* **CORS:** Middleware to enable Cross-Origin Resource Sharing.

---

## Installation and Setup

To get this microservice up and running on your local machine, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/dani-s-h007/request-header-parser.git
    cd request-header-parser-microservice
    ```

2.  **Install Dependencies:**
    This project requires `express` and `cors`. Install them using npm:
    ```bash
    npm install
    ```
    *(If you don't have a `package.json` yet, run `npm init -y` first, then `npm install express cors`)*

3.  **Run the Server:**
    Start the Node.js server:
    ```bash
    node server.js
    ```
    The server will typically start on port `3000`. You'll see a message in your console indicating which port it's listening on.

---

## Usage

Once the server is running, you can access the API directly in your web browser or via tools like `curl`.

### Endpoint

The main endpoint for this microservice is:

`/api/whoami`

### Example Request (in browser or `curl`)

`http://localhost:3000/api/whoami`

*(Replace `localhost:3000` with your deployed URL if hosted online.)*

### Example JSON Output

A successful request will return a JSON object similar to this:

```json
{
  "ipaddress": "192.168.1.100",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
