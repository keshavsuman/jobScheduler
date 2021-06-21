import mysql from 'mysql';

export const connection  = mysql.createConnection({
    host:'13.235.42.176',
    user:'cruspoAdmin',
    password:'#TonyStark3000',
    database:'scheduler'
});

// connection.connect();