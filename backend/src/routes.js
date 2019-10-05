const multer = require('multer');
const { Router } = require('express');
const uploadConfig = require('./config/upload');
const { IndexController, SessionController } = require('./controllers');
const { SpotController, DashboardController, BookingController } = require('./controllers');

const upload = multer(uploadConfig);

const routes = Router();

routes
    .get('/', IndexController.index)
    .get('/health', IndexController.health);

routes
    .post('/sessions', SessionController.store)
    .get('/spots', SpotController.index)
    .post('/spots', upload.single('thumbnail'), SpotController.store)
    .get('/dashboard', DashboardController.show)
    .post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
