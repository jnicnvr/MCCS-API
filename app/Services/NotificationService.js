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
                return callBack(null, results);
            }
        );
    },
    evaluating_faculty: (data, callBack) => {
        console.log('data',data)
        console.log('data.class_id',data.class_id)
        console.log('sy_id',data.sy_id)
        console.log('SID',data.SID)
        let _query = `SELECT cl.curriculum, cl.year_level, cl.section, sub.code, sub.subject, f.name, f.department, f.TID, cl.id AS class_id, sub.id AS subject_id FROM evaluation_restriction AS ev 
        JOIN teachers AS f ON ev.fid = f.TID 
        JOIN classes AS cl ON ev.class_id = cl.id 
        JOIN subjects AS sub ON ev.subject_id = sub.id  
        JOIN school_year AS sy ON ev.sy_id = sy.id  
        WHERE ev.class_id=? AND 
        ev.subject_id NOT IN(SELECT subject_id FROM evaluate_faculty WHERE SID=? AND sy_id=? AND class_id=? ) 
        AND sy.status = 'Starting'`
        pool.query(_query,
            [
                data.class_id,
                data.SID,
                data.sy_id,
                data.class_id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }                       
                return callBack(null, results);
            }
        );
    },
    ny_evaluated: callBack => {
        let _query = `SELECT s.SID, CONCAT(Fname, Lname) AS student_name, s.Age, s.Sex, c._class, s.username, s.password, DATE_FORMAT(s.created_at, '%W %M %e %Y') AS created_at FROM students AS s 
        JOIN classes AS c ON s.class_id = c.id  
        WHERE s.SID NOT IN (SELECT SID FROM evaluate_faculty)`
        pool.query(_query,
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
}