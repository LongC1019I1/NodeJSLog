const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const LogType = new Schema(
    {
        name: { type: String, required: true },
        value: { type: Number, required: true },
        threshold: { type: [Number], required: true }
    },
    {
        strict: false,
        timestamps: true
    }
)

module.exports = mongoose.model('LogType', LogType)