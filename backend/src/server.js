const express = require('express');

const app = express();

app.use(express.json());


// GET, POST, PUT, DELETE
app.get('/', (req, res) => {
    const { protocol, headers: { host} } = req;
    return res.json({
        users: `${protocol}://${host}/users`,
        query: `${protocol}://${host}/users?id=1`,
        params: `${protocol}://${host}/users/1`,
    });

});

// req.query = Acessar query params. (Filtros)
app.get('/users', (req, res) => res.json({
    id: ~~(req.query.id || 1),
    nome: 'fulano'
}));

// req.body = Acessar corpo da requisição. (precisa usar o middleware express.json())
app.post('/users', (req, res) => res.json(req.body));

// req.params = Acessar route params.
app.get('/users/:id', (req, res) => res.json({
    id: ~~req.params.id,
    nome: 'fulano'
}));

app.listen(3333);
