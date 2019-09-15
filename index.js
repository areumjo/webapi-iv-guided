require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`);
});

// when running **locally** the IP is taken care of my localhost
// and we can hardcode any old port (over 3000) in

// when **deploying**
// heroku will assign an IP address
// we can't hardcode in the port
// heroku needs to tell us which port (because it might be taken)