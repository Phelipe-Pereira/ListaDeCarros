import express from 'express';
const app = express();

var carros = ['Fiesta', 'Saveiro'];

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) =>{
    res.send("<h3>Rotas no Express</h3><p>Rota '/'</p>")
});

app.get('/sobre', (req, res) =>{
    res.send("<h3>Sobre rotas no Express</h3><p>Vamos apreender a utilizar rotas com Express</p>")
});

app.get('/user/:name', (req, res) =>{
    res.send("Usuário: " + req.params.name);
});

app.post('/cars/', (req, res) =>{
    let name = req.body.name;
    carros[(carros.length)] = name;

    return res.json([carros[(carros.length - 1)]]);
});

app.get('/cars/:id', (req, res) =>{
    let id = req.params.id;
    return res.json(carros[id])
});

app.put('/cars/update/:id', (req, res) =>{
    let name = req.body.name;
    carros[req.params.id] = name;

    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) =>{
    let id = req.params.id;
    carros[id] = null;

    return res.json(carros[id]);
});

app.listen(3000, () => 
    console.log("Servidor iniciado na porta 3000")
);