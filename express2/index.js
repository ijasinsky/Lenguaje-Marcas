const express = require('express')
const db = require('better-sqlite3')('personas.sqlite')

const app = express()
const port = 3000

// Crearemos la configuracion de la base de datos

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index", { msgs: ["Hola", "desde", "la", "ruta"] });
})

// app.get('/vistausuarios', (req, res) => {
//     const rows = db.prepare('SELECT * from usuarios').all();
//     res.render("index", { msgs: rows })
// })

// Devolveremos el render de la vista con un form
app.get('/usuarios', (req, res) => {
    const usuarios = db.prepare('SELECT * from usuarios').all();
    res.render('usuarios', { usuarios: usuarios });
})

app.get('/usuarioDetalle', (req, res) => {
    id = req.query.id;
    console.log(req.query);
    const usuario = db.prepare('SELECT * from usuarios WHERE id = ?').get(id);
    res.render("usuarioDetalle", { usuario: usuario });
})

app.get('/usuario', (req, res) => {
    res.render("usuario");
})

// Capturaremos el submit del form
app.post('/usuario', (req, res) => {
    console.log(req.body);
    if (req.body.nombre && req.body.email) {
        //insert
        const statement = db.prepare("INSERT INTO usuarios (nombre, email) VALUES (?, ?)")
        const info = statement.run(req.body.nombre, req.body.email);
        console.log(info);
    }
    res.redirect("usuario");
})

app.get('/productos', (req, res) => {
    resultadoSELECT = 'SELECT * from productos'
    const productos = db.prepare('SELECT * from productos').all();
    res.render('productos', { productos: productos })
})
app.get('/producto', (req, res) => {
    res.render("producto");
})

// Capturaremos el submit del form
app.post('/producto', (req, res) => {
    console.log(req.body);
    if (req.body.nom && req.body.precio) {
        // Insert
        const statement = db.prepare("INSERT INTO productos (nom, precio) VALUES (?, ?)")
        const info = statement.run(req.body.nom, req.body.precio);
        console.log(info);
    }
    res.redirect("producto");
})

// Creamos el apartado de detalles de producto
app.get('/productoDetalle', (req, res) => {
    id = req.query.id;
    console.log(req.query);
    const producto = db.prepare('SELECT * from productos WHERE id = ?').get(id);
    res.render("productoDetalle", { producto: producto });
})

app.get('/comandas', (req, res) => {
    const comandas = db.prepare('SELECT comandas.id as id_comanda, * from comandas join productos on productos.id = comandas.id_productos join usuarios on usuarios.id = comandas.id_usuarios').all();
    console.log(comandas);
    res.render('comandas', { comandas: comandas });
})

app.get('/comanda', (req, res) =>{
    // SELECT de usuarios y productos
    const usuarios = db.prepare('SELECT * from usuarios').all()
    const productos = db.prepare('SELECT * from productos').all()
    res.render("comanda", {usuarios: usuarios, productos: productos});
  })

  app.post('/comanda', (req, res) => {
    if (req.body) {
      console.log(req.body);
      if (req.body.id_usuarios && req.body.id_productos) {
        //insert
        const statement = db.prepare('INSERT INTO Comandas (id_usuarios, id_productos) VALUES (?,?)')
        const info = statement.run(req.body.id_usuarios, req.body.id_productos)
        console.log(info)
      }
      res.redirect('comandas')
    }})

    app.get('/comandaDetalle', (req, res) => {
        id = req.query.id;
        console.log(req.query);
        const comanda = db.prepare('SELECT comandas.id, productos.nom as producto_nom, productos.precio, usuarios.nombre FROM comandas JOIN productos ON productos.id = comandas.id_productos JOIN usuarios ON usuarios.id = comandas.id_usuarios WHERE comandas.id = ?').get(id);
        console.log(comanda);
        res.render("comandaDetalle", { comanda: comanda });
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/usuarioUpdate', (req, res) => {
    const id = req.query.id
    const usuario = db.prepare('SELECT * from usuarios WHERE id = ?').get(id)
    res.render("usuarioUpdate", {usuario: usuario});
  })

  app.post('/usuarioUpdate', (req, res) => {
    console.log(req.body)
    if (req.body) {
      if (req.body.nombre && req.body.email && req.body.id) {
        const statement = db.prepare('UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?')
        const info = statement.run(req.body.nombre, req.body.email, req.body.id)
        console.log(info)
      }
    }
    res.redirect("usuarios");
  })

  app.get('/productoUpdate', (req, res) => {
    const id = req.query.id
    const producto = db.prepare('SELECT * from productos WHERE id = ?').get(id)
    res.render("productoUpdate", {producto: producto});
  })
  
  app.post("/productoUpdate", (req, res) => {
    console.log(req.body)
    if (req.body) {
      if (req.body.nom && req.body.precio && req.body.id) {
        const statement = db.prepare('UPDATE productos SET nom = ?, precio = ? WHERE id = ?')
        const info = statement.run(req.body.nom, req.body.precio, req.body.id)
        console.log(info)
      }
    }
    res.redirect("productos");
  })
  
  app.get('/comandaUpdate', (req, res) => {
    const id = req.query.id;
    const comanda = db.prepare('SELECT * from comandas WHERE id = ?').get(id)
    const usuarios = db.prepare('SELECT * from usuarios').all()
    const productos = db.prepare('SELECT * from productos').all()
    res.render("comandaUpdate", {comanda: comanda, usuarios: usuarios, productos: productos});
  })
  
  app.post('/comandaUpdate', (req, res) => {
    console.log(req.body)
    if (req.body) {
      if (req.body.id_usuarios && req.body.id_productos && req.body.id) {
        const statement = db.prepare('UPDATE comandas SET id_usuarios = ?, id_productos = ? WHERE id = ?')
        const info = statement.run(req.body.id_usuarios, req.body.id_productos, req.body.id)
        console.log(info)
      }
    }
    res.redirect("/comandas");
  })