
const logRouter = require('./log');

function route(app) {

    app.use('/log', logRouter)

}
module.exports = route;