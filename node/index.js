const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql');
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('Tacobarry');`
connection.query(sql)
const sql1 = `SELECT * FROM people;`
const results = connection.query(sql1)
connection.end()

console.log(results)

app.get('/', (req, res) => res.send('<h1>Hello Full Cycle!</h1>'))

app.listen(port, () => console.log(`Rodando na porta ${port}!`))