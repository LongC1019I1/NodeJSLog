const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Log = new Schema({

},
    {
        timestamps: true,
        strict: false 
    }
)

module.exports = mongoose.model('Log', Log)