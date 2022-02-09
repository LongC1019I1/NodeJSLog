const Log = require('../models/Log');
const LogType = require('../models/LogType');
const variableConst = require("../config/plugins/variableConst")
var nodemailer = require('nodemailer');

class LogController {

    store(req, res, next) {

        let errorLog = req.body


        if (errorLog.title && errorLog.title.includes("[Alerting]")) {

            for (var errorName in errorLog.tags) {

                LogType.findOne({ name: errorName }).then(log => {


                    let errorInfo = log;

                    if (errorInfo) {

                        if (errorInfo.threshold.length == 2) {
                            errorLog.evalMatches.forEach(el => {
                                var min = Math.min.apply(Math, [errorInfo.threshold[0], errorInfo.threshold[1]]),
                                    max = Math.max.apply(Math, [errorInfo.threshold[0], errorInfo.threshold[1]]);

                                if (el.value > min && el.value < max) {
                                    return saveLog(el, errorLog, errorName, res)
                                } else {
                                    res.json({
                                        status: 200,
                                        message: 'Không có lỗi'
                                    })
                                }


                            });
                        }
                        else if (errorInfo.threshold.length == 1) {
                            errorLog.evalMatches.forEach(el => {
                                if (el.value > errorInfo.threshold[0]) {
                                    saveLog(el, errorLog, errorName, res)
                                }
                                else {
                                    res.json({
                                        status: 200,
                                        message: 'Không có lỗi'
                                    })
                                }

                            });
                        }
                    } else {
                        res.json({
                            status: 200,
                            message: 'Không có lỗi'
                        })
                    }
                });



            }

        }
        else {
            res.json({
                status: 200,
                message: 'Không có lỗi'
            })
        }

    }

}

function saveLog(el, errorLog, errorName, res) {
    let errorValue = variableConst.errorValueLog;
    errorValue = Object.assign(errorValue, errorLog)
    errorValue.evalMatches = el;
    console.log('errorValue', errorValue);
    const log = new Log(errorValue);
    sendEmail(errorValue, errorName);
    log.save().then(() => {
        res.json({
            status: 200,
            message: 'Cập nhật log thành thành công'
        })
    })

}

function sendEmail(errorLog, errorName) {


    var transporter = nodemailer.createTransport({ // config mail server
        service: 'gmail',
        auth: {
            user: 'longbach.it@gmail.com',
            pass: 'longhaha1234'
        }
    });


    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Thanh Batmon',
        to: 'bachthanhlong.it@gmail.com',
        subject: '[Cảnh báo Log] ' + errorLog.title,
        text: errorLog.title + 'Log quá ngưỡng ',
        html: '<p>Lỗi có thông tin như sau:</b><ul><li>Tên lỗi: ' + errorName + '</li><li>Giá trị evalMatches: ' + errorLog.evalMatches.value + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
}

module.exports = new LogController();