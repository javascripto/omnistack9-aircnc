const { Booking } = require('../models');

class BookingController {
    async store(req, res) {
        const { user_id: user } = req.headers;
        const { spot_id: spot } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({ user, spot, date });

        await booking
            .populate('spot')
            .populate('user')
            .execPopulate();

        return res.json(booking);
    }
}

module.exports = new BookingController();
