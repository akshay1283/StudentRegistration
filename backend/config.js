const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'stud_sys'
});

con.connect((err)=>{
    if(err){
        console.warn('error');
    }else{
        console.warn('connected');
    }
});

module.exports = con;