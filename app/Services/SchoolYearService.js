const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO school_year(year, semester, status, isActive) VALUES (?,?,?,?)`
        pool.query(_query,
            [
                data.year,
                data.semester,
                data.status,                            
                data.isActive,                            
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
        let _query = `SELECT id, year, semester, status, isActive, created_at, updated_at FROM school_year`
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
        let _query = `SELECT id, year, semester, status, isActive, created_at, updated_at FROM school_year WHERE year=?`
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
        let _query = `UPDATE school_year SET year=?, status=?, isActive=? WHERE year=?`
        pool.query(_query,
            [
                data.year,
                data.status,
                data.isActive,
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
        let _query = `DELETE FROM school_year WHERE year=?`
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