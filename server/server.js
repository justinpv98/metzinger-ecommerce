const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandler");
const config = require("./config/config")

require("dotenv").config({ path: "./.env.local" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = config.server.port

// authorization route
app.use("/api/auth", require("./routes/auth"));

// carts route
app.use("/api/carts", require("./routes/carts"));

// categories route
app.use("/api/categories", require("./routes/categories"));

// products route
app.use("/api/products", require("./routes/products"));

// orders route
app.use("/api/orders", require("./routes/orders"));

// wishlists route
app.use("/api/wishlists", require("./routes/wishlist"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
