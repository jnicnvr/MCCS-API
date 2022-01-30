const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { genSaltSync, hashSync } = bcrypt
const { login, register, auth_user } = require('../Services/AuthService')
const { loginValidation, registerValidation } = require('../../config/validation');

module.exports = {
    login: (req, res) => {
        const { error } = loginValidation(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        login(req.body, async (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Database connection errror"
                });
            }
            return res.status(202).json({
                data: results
            });
        });
    },

    register: async (req, res) => {
        const body = req.body;
        //validation
        console.log(body)
        const { error } = await registerValidation(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        register(req.body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    // success: 0,
                    // message: "Database connection errror",
                    error: err.sqlMessage
                });
            }
            return res.status(200).json({
                data: results
            });
        });
    },
}