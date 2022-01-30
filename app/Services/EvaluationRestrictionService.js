const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `
        INSERT INTO evaluation_restriction(fid, class_id, subject_id, sy_id)
        VALUES ((SELECT TID from teachers WHERE name=?),
        (SELECT id from classes WHERE _class=?),
        (SELECT id from subjects WHERE code=?),
        (SELECT id from school_year WHERE year=? AND
        semester=? AND status='Starting'))`
        pool.query(_query,
            [
                data.name,
                data._class,
                data.code,
                data.year,                            
                data.semester,                            
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
        let _query = `
        SELECT t.name, t.Department, c._class, s.code, s.subject, sy.year, sy.semester FROM evaluation_restriction AS er 
        JOIN teachers AS t ON er.fid = t.TID 
        JOIN school_year AS sy ON er.sy_id = sy.id 
        JOIN classes AS c ON er.class_id = c.id 
        JOIN subjects AS s ON er.subject_id = s.id`
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
        let _query = `
        SELECT t.name, t.Department, c._class, s.code, s.subject, sy.year, sy.semester FROM evaluation_restriction AS er 
        JOIN teachers AS t ON er.fid = t.TID 
        JOIN school_year AS sy ON er.sy_id = sy.id 
        JOIN classes AS c ON er.class_id = c.id 
        JOIN subjects AS s ON er.subject_id = s.id WHERE t.name=?`
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
    // update: (id, data, callBack) => {
    //     let _query = `UPDATE evaluation_restriction SET _class=?, curriculum=?, year_level=?, section = ? WHERE _class=?`
    //     pool.query(_query,
    //         [
    //             `${data.curriculum}${data.year_level}${data.section}`,
    //             data.curriculum,
    //             data.year_level,
    //             data.section,
    //             id
    //         ],
    //         (error, results, fields) => {
    //             if (error) {
    //                 callBack(error);
    //             }
    //             return callBack(null, results[0]);

    //         }
    //     );
    // },
    // destroy: (id, callBack) => {
    //     let _query = `DELETE FROM evaluation_restriction WHERE code=?`
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