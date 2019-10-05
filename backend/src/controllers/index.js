// GET, POST, PUT, DELETE
// req.query = Acessar query params. (Filtros)
// req.params = Acessar route params.
// req.body = Acessar corpo da requisição. (precisa usar o middleware express.json())

// Métodos comuns de um Controller: index, show, store, update, destroy

module.exports = {
    IndexController: {
        index: (req, res) => res.json({ message: 'Hello, World!' }),
        health: (req, res) => res.json({ status: 'OK' }),
    },
    SpotController: require('./SpotController'),
    SessionController: require('./SessionController'),
    BookingController: require('./BookingController'),
    DashboardController: require('./DashboardController'),
}
