require('dotenv').config();
// should be the first thing you do!

const server = require('./api/server.js');

// console.log(process.env);
// // built-in environment-relative variable and this is where we can find a port

const PORT = process.env.PORT || 4000;

server.listen(4000, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`);
});

// when running **locally** the IP is taken care of my localhost
// and we can hardcode any old port (over 3000) in

// when **deploying**
// heroku will assign an IP address
// we can't hardcode in the port
// heroku needs to tell us which port (because it might be taken)