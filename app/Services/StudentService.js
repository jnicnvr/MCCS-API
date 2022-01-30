const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO students(SID, Fname, Lname, Age, Sex, Course, class_id, username, password) VALUES(?,?,?,?,?,?,?,?,?)`
        pool.query(_query,
            [
                data.SID,
                data.Fname,
                data.Lname,
                data.Age,
                data.Sex,
                data.Course,
                data.class_id,
                data.username,
                data.password,               
            ],
            (err, results, fields) => {
                if (err) {
                    return callback(err)
                }
                return callback(null, results)
            }
        )
    },
    index: callBack => {
        let _query = `SELECT SID, Fname, Lname, Age, Sex, Course, class_id, username, password, logs, created_at, updated_at FROM students`
        pool.query(_query,
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    show: (id, callBack) => {
        let _query = `SELECT SID, Fname, Lname, Age, Sex, Course, class_id, username, password, logs, created_at, updated_at FROM students WHERE SID = ?`
        pool.query(_query,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }              
                return callBack(null, results[0]);
            }
        );
    },
    update: (id, data, callBack) => {
        let _query = `UPDATE students SET username=?, password=? WHERE SID=?`
        pool.query(_query,
            [
                data.username,
                data.password,
                id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    destroy: (id, callBack) => {
        let _query = `DELETE FROM students WHERE SID=?`
        pool.query(_query,
            [id],
            (error, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, null);
            }
        );
    },
}