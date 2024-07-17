// server.js

const app = require("./app.js");

// Loads in environment variables from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}\nhttp://localhost:${PORT}`);
});
