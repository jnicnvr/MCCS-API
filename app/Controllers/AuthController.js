const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { genSaltSync, hashSync } = bcrypt
const { login, register, login_admin, register_admin } = require('../Services/AuthService')
const { loginValidation, registerValidation, login_adminValidation, register_adminValidation } = require('../../config/validation');

module.exports = {
    login: (req, res) => {
        const { error } = loginValidation(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        login(req.body, async (err, [results]) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Database connection errror"
                });
            }
            results.success = true;
            return res.status(202).json([results]);
        });
    },
    login_admin: (req, res) => {
        const { error } = login_adminValidation(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        login_admin(req.body, async (err, [results]) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Database connection errror"
                });
            }
            results.success = true;
            return res.status(202).json([results]);
        });
    },
    register_admin: async (req, res) => {
        const body = req.body;
        //validation
        console.log(body)
        const { error } = await register_adminValidation(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        register_admin(req.body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    // success: 0,
                    // message: "Database connection errror",
                    error: err.sqlMessage
                });
            }
            return res.status(200).json({ success: true });
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

            const token = jwt.sign(
                { username: results.username, name: results.name },
                process.env.APP_SECRET_TOKEN,
                {
                    expiresIn: "2h",
                }
            );
            // save user token

            console.log(token)


            return res.status(200).json({
                data: results
            });
        });
    },
}