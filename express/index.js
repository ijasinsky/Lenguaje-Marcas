const express = require('express')
const db = require('better-sqlite3')('usuari.sqlite');
const dbp = require('better-sqlite3')('producte.sqlite');
const dbc = require('better-sqlite3')('comandes.sqlite');

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

app.get('/usuaris', (req, res) => {
    //Select
    const rows = db.prepare('Select * from usuari').all();
    res.send(rows)
  })

app.get('/usuari', (req, res) => {
    //Select
    /*personaID = req.query.id;
    const rowp = db.prepare('SELECT * from personas WHERE id = ?').get(personaID);
    res.json(rowp)*/
    usuariid = req.query.id;
    const row = db.prepare('SELECT * FROM usuari WHERE id = ?').get(usuariid);
    res.json(row);
    res.render("usuari");
  })

app.get('/productes', (req, res) => {
    //Select
    const rowsp = dbp.prepare('Select * from producte').all();
    res.send(rowsp)
  })

app.get('/producte', (req, res) => {
    producteID = req.query.id;
    const rowp = dbp.prepare('SELECT * FROM producte WHERE id = ?').get(producteID);
    res.json(rowp);
    res.render("producte");
  })

app.get('/comandes', (req, res) => {
    //Select
    const rowsc = dbc.prepare('Select * from comanda').all();
    res.send(rowsc)
  })

  app.get('/comanda', (req, res) => {
    comandaID = req.query.id;
    const rowc = dbc.prepare('SELECT * FROM comanda WHERE id = ?').get(comandaID);
    res.json(rowc);
    res.render("comandes");
  })

  //Ignorar de momento
  /*app.post('/usuari'), (req, res) => {
    //personaID = req.body.id;
    //const row = db.prepare('SELECT * from personas WHERE id = ?').get(personaID);
    //res.json(row)
    if(req.body.nom && req.body.email){
      const insert = db.prepare("INSERT INTO usuari (nom, email) values(?, ?)")
      const info = insert.run(req.body.nom, req.body.email);
        console.log(info);
    }
    res.redirect("usuari");
  }*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})