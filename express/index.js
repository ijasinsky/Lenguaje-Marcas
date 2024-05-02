const express = require('express')
const db = require('better-sqlite3')('personas.sqlite');

const app = express()
const port = 3000


//configurar base de datos

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  //res.send('Hello World!')
  //res.render("index", msgs= { msgs: ["Hola", "desde", "la", "ruta"]});
  res.render("index", msgs= { msgs: []});
})

app.get('/personas', (req, res) => {
    //Select
    //const rows = db.prepare('Select * from personas').all();
    res.send(rows)
  })

app.get('/persona', (req, res) => {
    //Select
    /*personaID = req.query.id;
    const row = db.prepare('SELECT * from personas WHERE id = ?').get(personaID);
    res.json(row)*/
    res.render("persona");
  })
  app.post('/persona'), (req, res) => {
    /*personaID = req.body.id;
    const row = db.prepare('SELECT * from personas WHERE id = ?').get(personaID);
    res.json(row)*/

    if(req.body.nombre && req.body.apellidos){
      const insert = db.prepare("INSERT INTO presonas (nombre, apellidos) values(?, ?)")
      const info = insert.run(req.body.nombre, req.body.apellidos);
        console.log(info);
    }
    res.redirect("persona");
  }

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})