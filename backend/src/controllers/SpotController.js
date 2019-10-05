const { Spot, User } = require('../models');

class SpotController {
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    }

    async store(req, res) {
        const { user_id } = req.headers;
        const { filename: thumbnail } = req.file;
        const { company, techs, price } = req.body;

        if (!await User.findById(user_id)) {
            res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            price,
            company,
            thumbnail,
            user: user_id,
            techs: techs.split(',').map(tech => tech.trim()),
        });

        return res.json(spot);
    }
}

module.exports = new SpotController();
