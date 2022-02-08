
const logRouter = require('./log');
const logTypeRouter = require('./logType');

function route(app) {

    app.use('/log', logRouter)
    app.use('/log-type', logTypeRouter)

}
module.exports = route;