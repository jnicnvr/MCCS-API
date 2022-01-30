const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO classes(_class, curriculum, year_level, section) VALUES (?,?,?,?)`
        pool.query(_query,
            [
                data._class,
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
    index: callBack => {
        let _query = `SELECT id, _class, curriculum, year_level, section, created_at, updated_at FROM classes`
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
        let _query = `SELECT id, _class, curriculum, year_level, section, created_at, updated_at FROM classes WHERE _class = ?`
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
        let _query = `UPDATE classes SET _class=?, curriculum=?, year_level=?, section = ? WHERE _class=?`
        pool.query(_query,
            [
                `${data.curriculum}${data.year_level}${data.section}`,
                data.curriculum,
                data.year_level,
                data.section,
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
        let _query = `DELETE FROM classes WHERE _class=?`
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