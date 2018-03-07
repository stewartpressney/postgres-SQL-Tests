const settings = require("./settings");


var knex = require('knex')({
  debug: true,
  client: 'pg',
  connection: settings
});


  knex('famous_people')
    .insert([{ last_name: process.argv[2], first_name: process.argv[3], birthdate: process.argv[4] }])
    .asCallback(function(err, data) {
        if(err) {
          console.error(err);
        };
        console.log(data);
      });