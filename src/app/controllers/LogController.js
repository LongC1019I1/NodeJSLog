const Log = require('../models/Log');
const variableConst = require("../config/plugins/variableConst")


class LogController {

    store(req, res, next) {

        let errorLog = req.body

        if (errorLog.title && errorLog.title.includes("[Alerting]")) {

            for (var error in errorLog.tags) {

                let errorInfo = variableConst.tag[error];

                if (errorInfo) {
                    let errorValue = variableConst.errorValueLog;

                    if (Array.isArray(errorInfo.threshold)) {
                        errorLog.evalMatches.forEach(el => {

                            if (el.value > errorInfo.threshold[0] && el.value < errorInfo.threshold[1]) {

                                errorValue = Object.assign(errorValue, errorLog)
                                errorValue.evalMatches = el;
                                const log = new Log(errorValue);
                                log.save().then(() => res.json({
                                    status: 200,
                                    message: 'Cập nhật log thành thành công'
                                }))
                                    .catch(error => res.json({
                                        status: 500,
                                        message: error
                                    }));
                            }

                        });
                    }
                    else if (Number.isInteger(errorInfo.threshold)) {
                        errorLog.evalMatches.forEach(el => {

                            if (el.value > errorInfo.threshold) {
                                errorValue = Object.assign(errorValue, errorLog)
                                errorValue.evalMatches = el;
                                const log = new Log(errorValue);
                                log.save().then(() => res.json({
                                    status: 200,
                                    message: 'Cập nhật log thành thành công'
                                }))
                                    .catch(error => res.json({
                                        status: 500,
                                        message: error
                                    }));
                            }

                        });
                    }

                }

            }

        }

    }

}


module.exports = new LogController();