const LogType = require('../models/LogType');
const variableConst = require("../config/plugins/variableConst")
var nodemailer = require('nodemailer');

class LogTypeController {

    store(req, res, next) {

        console.log('body', req.body);

        let values = req.body

        values.forEach(val => {
            LogType.findOne({ name: val.name }).then((log) => {
                if (log) {
                    res.json({
                        status: 400,
                        message: val.name + ' đã tồn tại'
                    })
                } else {
                    const logType = new LogType(val);
                    logType.save().then(() => res.json({
                        status: 200,
                        message: 'Lưu thành công'
                    })).catch(err => res.json({
                        status: 500,
                        message: err
                    }));
                }
            }
            )
                .catch(err => res.json({
                    status: 500,
                    message: err
                }));
        });
    }

}



module.exports = new LogTypeController();