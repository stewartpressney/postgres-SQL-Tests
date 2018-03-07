const settings = require("./settings");


var knex = require('knex')({
  debug: true,
  client: 'pg',
  connection: settings
});


function findRecord(nameParam) {
  knex
  .select('*')
  .from('famous_people')
  .where({last_name: nameParam})
  .then(function(rows) {
    rows.forEach(function(row) {
      console.log('Found ' + rows.length + ' person by the name ' + nameParam);
      console.log('-' + row.id + ': ' + row.first_name + ' ' + row.last_name + ', born ' + row.birthdate);
    })
  })
  .catch(function(error) {
    console.error(error);
  });
};

findRecord(process.argv[2]);