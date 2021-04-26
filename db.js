const Pool = require("pg").Pool;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, //heroku addons
    ssl: {rejectUnauthorized: false} 
  });

module.exports = pool; 