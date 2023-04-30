const express = require('express');
const con = require('./config');
const cors = require('cors');
const dwld = require('download-pdf');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    // const data = { roll_no: '1', name: 'Rushi', contact_no: '7588249523', school: 'sjgvahk', class: '8', address: 'Kolhapur' };
    const data = req.body;
    con.query('insert into students set ?', data, (error, result, feilds) => {
        if (error) {
            error;
        }
        res.send(result);
    })
})

app.get('/students', (req, res) => {
    con.query('select * from students;', (err, result) => {
        if (err) {
            res.send('error in fetching');
        } else {
            res.send(result);
        }
    })
});

app.get('/Stud/:roll_no',(req,res)=>{
    // const rollno = req.body.roll_no;
    con.query(`select * from students where roll_no = ${req.params.roll_no}`,(err, result) => {
        if (err) {
            res.send('error in fetching');
        } else {
            res.send(result);
        }
    })
})



app.listen(8000);