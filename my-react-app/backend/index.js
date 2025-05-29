const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3000;
const cors = require("cors")
const path = require('path');

app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "biblioteca",
  password: "admin",
  port: 5432,
});


//Rotaa teste
app.get("/resposta", (req, res) => {
  res.writeHead(200, {
    "content-type": "text-html",
  });
  res.end(`
    <h1>usuario criado</h1>
    `);
});

//Rota para listar livros
app.get('/livros', async(req, res) =>{
  try{
    const dados = await pool.query(`
      SELECT * FROM livros
      `)
      console.log(dados.rows);
    res.json(dados.rows)
  }catch(err){
    console.log(err);
  }
})




app.listen(port, () => {
  console.log("Graças a Deus ta funcionando!");
});
