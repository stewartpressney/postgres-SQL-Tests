const pg = require('pg');

const settings = require("./settings");



const client = new pg.Client({

  user    : settings.user,
  password: settings.password,
  database: settings.database,
  host    : settings.host,
  port    : settings.port,
  ssl     : settings.ssl

});

client.connect();

console.log('Searching...')



function findRecord (nameParam){

  const value = [nameParam];
  const text = 'SELECT * FROM famous_people WHERE last_name LIKE $1'


  client.query(text, value, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    console.log('Found '+ result.rowCount + ' person by the name ' + value)


    result.rows.forEach((row) => {

    console.log('-' + row.id + ': ' + row.first_name + ' ' + row.last_name + ', born ' + row.birthdate)
    }) //output: 1
    client.end();
  });
};

findRecord(process.argv[2]);