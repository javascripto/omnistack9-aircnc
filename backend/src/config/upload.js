const path = require('path');
const multer = require('multer');

const uploadConfig = {
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

module.exports = multer(uploadConfig);