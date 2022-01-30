const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO teachers(TID, name, Fname, Lname, Mname) VALUES (?,?,?,?,?)`
        pool.query(_query,
            [
                data.TID,
                `${data.Fname} ${data.Mname} ${data.Lname}`,  
                data.Fname,
                data.Lname,                            
                data.Mname,                            
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
        let _query = `SELECT TID, name, Fname, Lname, Mname, Department, photo, logs, created_at, updated_at FROM teachers`
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
        let _query = `SELECT TID, name, Fname, Lname, Mname, Department, photo, logs, created_at, updated_at FROM teachers WHERE TID = ?`
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
        console.log(data)
        let _query = `UPDATE teachers SET TID= ?, name = ?, Fname = ?, Lname = ?, Mname = ? WHERE TID = ?`
        pool.query(_query,
            [
                data.TID,
                `${data.Fname} ${data.Mname} ${data.Lname}`,  
                data.Fname,
                data.Lname,
                data.Mname,            
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
        let _query = `DELETE FROM teachers WHERE TID=?`
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