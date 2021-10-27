const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config)

connection.connect();

// let sql = `CREATE TABLE people(id int NOT NULL auto_increment prymary_key, name varchar(255) NOT NULL);`
// connection.query(sql)
// sql = `INSERT INTO people(name) values ('Tacobarry');`
// connection.query(sql)
// sql = `insert into people(name) values('Ensina a gente a fazer dump e rodar pra não fazer essa gamb aqui!');`
// connection.query(sql)

app.get('/', (req, res) => {
  connection.query(`SELECT * from people`, function(err, results) {
    if (err) throw err;

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${results.map(item => '<li>' + item.name + '</li>')}
      </ul>
    `)

  })

})

app.listen(port, () => console.log(`Rodando na porta ${port}!`))