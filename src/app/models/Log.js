const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Log = new Schema({
    title: { type: String, require: true },

},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Log', Log)