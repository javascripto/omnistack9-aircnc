const { Schema, model } = require('mongoose');

const SpotSchema = Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function() {
    const { PORT = 3333 } = process.env;
    return process.env.ENVIRONMENT === 'development'
        ? `http://localhost:${PORT}/files/${this.thumbnail}`
        : `https://aircnc-omnistack9.herokuapp.com/files/${this.thumbnail}`
});

module.exports = model('Spot', SpotSchema);
