const { create, index, show, update, destroy, show_status } = require('../Services/SchoolYearService')
const { schoolYearValidation } = require('../Validations/SchoolYearValidation')

module.exports = {
    create: (req, res) => {
        const body = req.body;
        const { error } = schoolYearValidation(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({ success: true });
        });
    },
    index: (req, res) => {
        index((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json(results);
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
    show_status: (req, res) => {
        const id = req.params.id;
        console.log('show_status', id)
        show_status(id, (err, [results]) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    message: "Record not Found"
                });
            }
            results.success = true;
            return res.json(results);
        });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        update(id, body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                message: "Updated successfully",
                success: true,
            });
        });
    },
    destroy: (req, res) => {
        const id = req.params.id;
        destroy(id, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                message: "Deleted successfully",
                success: true,
            });
        });
    }
}