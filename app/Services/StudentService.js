const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        // let _query = `INSERT INTO students(SID, Fname, Lname, Age, Sex, Course, class_id, username, password) VALUES(?,?,?,?,?,?,?,?,?)`
        let _query = `INSERT INTO students(SID, Fname, Lname, Age, Sex, username, password, class_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?,
            (SELECT id FROM classes 
                WHERE curriculum=? AND 
                year_level=? AND 
                section=?))`
        pool.query(_query,
            [
                data.SID,
                data.Fname,
                data.Lname,
                data.Age,
                data.Sex,
                data.curriculum,
                data.year_level,
                data.section,
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
        let _query = `SELECT s.SID, CONCAT(Fname, Lname) AS student_name, s.Age, s.Sex, c._class, s.username, s.password, DATE_FORMAT(s.created_at, '%W %M %e %Y') AS created_at FROM students AS s 
        JOIN classes AS c ON s.class_id = c.id`
        pool.query(_query,
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    student_total: callBack => {
        let _query = `SELECT (SELECT COUNT(*) FROM students) as students, COUNT(*) as evaluated, ((SELECT COUNT(*) FROM students) -  COUNT(*)) as total FROM evaluate_faculty`
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
        let _query = `SELECT s.SID, CONCAT(Fname, Lname) AS student_name, s.Age, s.Sex, c._class, s.username, s.password, DATE_FORMAT(s.created_at, '%W %M %e %Y') AS created_at FROM students AS s 
        JOIN classes AS c ON s.class_id = c.id  
        WHERE SID = ?`
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