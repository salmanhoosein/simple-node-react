const Pool = require("pg").Pool;

const pool = new Pool({
  user: "user",
  password: "pass",
  host: "code.cs.uh.edu",
  port: 5432,
  database: "COSC3380",
});

module.exports = pool;
