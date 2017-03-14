const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PicSchema = new Schema({
    name: String,
    path: String
});

module.exports = mongoose.model('Pic', PicSchema);
