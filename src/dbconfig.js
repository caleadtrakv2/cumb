const mysql = require('mysql2');

const connection = mysql.createConnection({

    host : "sql105.infinityfree.com",
    user : "if0_36977725",
    password : "Kini9916",
    database : "if0_36977725_trakv1"
});

connection.connect((err) =>{

    if(err){    
            return err.stack;
    }

    else{
        return "Database Connected";
    }
});

module.exports = connection;

