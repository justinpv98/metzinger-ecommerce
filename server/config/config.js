require("dotenv").config({ path: "./.env.local" });


const server = {
    port: process.env.PORT || 5000
}

const jwt = {
    secret: process.env.JWT_SECRET
}

const postgres = {
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
};

module.exports = {
    server,
    jwt,
    postgres
}