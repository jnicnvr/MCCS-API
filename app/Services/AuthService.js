const pool = require('../../config/database')
// const bcrypt = require('bcrypt')

module.exports = {
    login: (data, callBack) => {
        console.log(data)
        pool.query(
            `SELECT SID, CONCAT(Fname, Lname) AS student_name, username, password, class_id FROM students WHERE username = ? AND password = ?`,
            [
                data.username,
                data.password,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )

    },
    register: (data, callback) => {
        pool.query(`INSERT INTO students(SID, Fname, Lname, Age, Sex, username, password,class_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?,
            (SELECT id FROM classes WHERE curriculum=? AND year_level=? AND section=?))`,
            [
                data.SID,
                data.Fname,
                data.Lname,
                data.Age,
                data.Sex,
                data.username,
                data.password,
                data.curriculum,
                data.year_level,
                data.section,
            ],
            (err, results, fields) => {
                if (err) {
                    return callback(err)
                }
                return callback(null, results)
            }
        )
    },
}