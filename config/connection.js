var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
    host     : 'ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'rf8bo1x6jhgcnmyu',
    password : 'ti8qtnqkaygt7u02',
    database : 'ypvkclmu0hzhofjg'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);

});

module.exports = connection;