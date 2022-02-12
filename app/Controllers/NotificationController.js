const { evaluated_faculty, index, show, ny_evaluated, evaluating_faculty } = require('../Services/NotificationService')
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
            if (!results) {
                return res.status(200).json({ success: false });
            } else {
                return res.status(200).json({ success: true });
            }
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
            return res.json(results);
        });
    },
    evaluating_faculty: (req, res) => {
        const body = req.body;
        evaluating_faculty(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    message: "Record not Found"
                });
            }
            results.map(x => x.success = true)
            return res.json(results);
        });
    },
    ny_evaluated: (req, res) => {
        ny_evaluated((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                data: results
            });
        });
    },
}