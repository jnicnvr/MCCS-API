const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO subjects(code, subject, description) VALUES (?,?,?)`
        pool.query(_query,
            [
                data.code,
                data.subject,
                data.description,                            
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
        let _query = `SELECT id, code, subject, description FROM subjects`
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
        let _query = `SELECT id, code, subject, description FROM subjects WHERE code = ?`
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
        let _query = `UPDATE subjects SET code=?, subject=?, description=? WHERE code=?`
        pool.query(_query,
            [
                data.code,
                data.subject,
                data.description,
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
        let _query = `DELETE FROM subjects WHERE code=?`
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