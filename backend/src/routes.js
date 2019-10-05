const { Router } = require('express');

const routes = Router();

// GET, POST, PUT, DELETE
routes.get('/', (req, res) => {
    const { protocol, headers: { host} } = req;
    return res.json({
        users: `${protocol}://${host}/users`,
        query: `${protocol}://${host}/users?id=1`,
        params: `${protocol}://${host}/users/1`,
    });

});

// req.query = Acessar query params. (Filtros)
routes.get('/users', (req, res) => res.json({
    id: ~~(req.query.id || 1),
    nome: 'fulano'
}));

// req.body = Acessar corpo da requisição. (precisa usar o middleware express.json())
routes.post('/users', (req, res) => res.json(req.body));

// req.params = Acessar route params.
routes.get('/users/:id', (req, res) => res.json({
    id: ~~req.params.id,
    nome: 'fulano'
}));

module.exports = routes;
