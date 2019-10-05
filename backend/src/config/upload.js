const path = require('path');
const multer = require('multer');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const timestamp = Date.now();
            const extension = path.extname(file.originalname);
            const name = path.basename(file.originalname, extension);

            cb(null, `${name}-${timestamp}${extension}`);
        }
    })
};
