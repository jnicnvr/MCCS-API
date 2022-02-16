const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO feedback(type, feedback) VALUES (?,?)`
        !data.feedback ? data.feedback = " " : console.log(data.feedback)
        pool.query(_query,
            [
                data.type,
                data.feedback,
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
        let _query = `SELECT type, feedback, created_at, updated_at FROM feedback`
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
        let _query = `SELECT type, feedback, created_at, updated_at FROM feedback WHERE type=?`
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

}