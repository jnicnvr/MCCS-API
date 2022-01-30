const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO comments(SID, fid, sy_id, class_id, subject_id, comment) VALUES (?,?,?,?,?,?)`
        pool.query(_query,
            [
                data.SID,
                data.fid,
                data.sy_id,
                data.class_id,
                data.subject_id,
                data.comment,
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
        let _query = `SELECT s.SID, CONCAT(s.Fname,' ' ,s.Lname) as student_name, CONCAT(cl.curriculum,' - ',cl.year_level, cl.section) AS course, sub.code, sub.subject, f.name, f.department, comment, DATE_FORMAT(s.created_at, '%W %M %e %Y') AS created_at FROM comments AS ef
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
        let _query = `SELECT s.SID, CONCAT(s.Fname,' ' ,s.Lname) as student_name, CONCAT(cl.curriculum,' - ',cl.year_level, cl.section) AS course, sub.code, sub.subject, f.name, f.department, comment, DATE_FORMAT(s.created_at, '%W %M %e %Y') AS created_at FROM comments AS ef
        JOIN students AS s ON ef.SID = s.SID 
        JOIN teachers AS f ON ef.fid = f.TID 
        JOIN classes AS cl ON ef.class_id = cl.id 
        JOIN subjects AS sub ON ef.subject_id = sub.id
        WHERE s.SID = ?`
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
        let _query = `UPDATE comments SET comment=? WHERE SID=? AND fid=? AND subject_id=? AND class_id=? AND sy_id=?`
        pool.query(_query,
            [
                data.comment,
                data.SID,
                data.fid,
                data.subject_id,
                data.class_id,
                data.sy_id,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);

            }
        );
    },
    // destroy: (id, callBack) => {
    //     let _query = `DELETE FROM comments WHERE comment=? AND SID=? AND fid=? AND subject_id=? AND class_id=? AND sy_id=?`
    //     pool.query(_query,
    //         [id],
    //         (error, fields) => {
    //             if (error) {
    //                 callBack(error);
    //             }
    //             return callBack(null, null);
    //         }
    //     );
    // },
}