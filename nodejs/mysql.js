let mysql      = require('mysql');
let connection = mysql.createConnection(
{
  host     : 'localhost',
  user     : 'root',
  password : 'tkdnehd911',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * from topic', function (error, results, fields)
{
  if (error)
  {
    console.log(error);
  }
  console.log(results);
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();