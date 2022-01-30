const pool = require('../../config/database')

module.exports = {
    evaluated_faculty: (data, callback) => {
        let _query = `INSERT INTO evaluate_faculty(SID, fid, sy_id, class_id, subject_id) VALUES (?,?,?,?,?)`
        pool.query(_query,
            [
                data.SID,
                data.fid,
                data.sy_id,
                data.class_id,
                data.subject_id,
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
        let _query = `SELECT s.SID, CONCAT(s.Fname,' ' ,s.Lname) as student_name, CONCAT(cl.curriculum,' - ',cl.year_level, cl.section) AS course, sub.code, sub.subject, f.name, f.department,DATE_FORMAT(s.created_at, '%W %M %e %Y') AS created_at, 'evaluated' FROM evaluate_faculty AS ef 
        JOIN students AS s ON ef.SID = s.SID 
        JOIN teachers AS f ON ef.fid = f.TID 
        JOIN classes AS cl ON ef.class_id = cl.id 
        JOIN subjects AS sub ON ef.subject_id = sub.id`
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
        let _query = `SELECT s.SID, CONCAT(s.Fname,' ' ,s.Lname) as student_name, CONCAT(cl.curriculum,' - ',cl.year_level, cl.section) AS course, sub.code, sub.subject, f.name, f.department,DATE_FORMAT(s.created_at, '%W %M %e %Y') AS created_at, 'evaluated' FROM evaluate_faculty AS ef 
        JOIN students AS s ON ef.SID = s.SID 
        JOIN teachers AS f ON ef.fid = f.TID 
        JOIN classes AS cl ON ef.class_id = cl.id 
        JOIN subjects AS sub ON ef.subject_id = sub.id WHERE ef.SID= ? `
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
}