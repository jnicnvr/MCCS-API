const { evaluated_faculty, index, show } = require('../Services/NotificationService')
const { notificationValidation } = require('../Validations/NotificationValidation')

module.exports = {
    evaluated_faculty: (req, res) => {
        const body = req.body;
        const { error } = notificationValidation(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        evaluated_faculty(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({
                data: results
            });
        });
    },
    index: (req, res) => {
        index((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                data: results
            });
        });
    },
    show: (req, res) => {
        const id = req.params.id;
        show(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    message: "Record not Found"
                });
            }
            return res.json({
                data: results
            });
        });
    },
}