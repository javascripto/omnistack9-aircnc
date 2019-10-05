const { Router } = require('express');
const { upload } = require('./config');
const { IndexController, SessionController } = require('./controllers');
const { SpotController, DashboardController, BookingController } = require('./controllers');


const router = Router();

router
    .get('/', IndexController.index)
    .get('/health', IndexController.health);

router.get('/dashboard', DashboardController.show);
router.post('/sessions', SessionController.store);
router.post('/spots/:spot_id/bookings', BookingController.store);

router
    .route('/spots')
    .get(SpotController.index)
    .post(upload.single('thumbnail'), SpotController.store);

module.exports = router;
