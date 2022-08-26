const Pool = require("pg").Pool;
const { postgres } = require("./config");

const pool = new Pool({
  ...postgres,
});

module.exports = {
  pool,
};
