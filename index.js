const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  port: 3306,
  password: '',
  database: 'employeedb'
});

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.post('/create', (req, res) => {
  const name = req.body.name;
  const position = req.body.position;
  const office = req.body.office;
  const salary = req.body.salary;

  db.query("INSERT INTO employees (name, position, office, salary) VALUES(?,?,?,?)",
    [name, position, office, salary],
    (err, result) => {
      if (err) {
        console.log(er);
      } else {
        res.send('Values inserted');
      }
    }
  );
});

app.get('/getEmployees', (req, res) => {
  
  db.query("SELECT * FROM employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put('/update', (req,res) => {
  const {id, name, position, office, salary} = req.body;
  console.log(req.body);
  db.query("UPDATE employees SET name=?, position=?, office=?, salary=? WHERE id=?", 
    [name, position, office, salary, id], 
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete('/delete/:id', (req,res) => {
  const {id} = req.params;
  db.query("DELETE FROM employees WHERE id=?", id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Redirect back to index.html if urls do not match
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// })

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})