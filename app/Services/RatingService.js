const pool = require('../../config/database')

module.exports = {
    create: (data, callback) => {
        let _query = `INSERT INTO rating( code, description, SID, fid, sy_id, class_id, subject_id, rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8, rating9, rating10, end_at) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        pool.query(_query,
            [
                data.code,
                data.description,
                data.SID,                            
                data.fid,                            
                data.sy_id,                            
                data.class_id,                            
                data.subject_id,                            
                data.rating1,                            
                data.rating2,                            
                data.rating3, 
                data.rating4,                            
                data.rating5,                            
                data.rating6,
                data.rating7,                            
                data.rating8,                            
                data.rating9,                           
                data.rating10,        
                data.end_at                   
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
        // let _query = `SELECT rating.description, teachers.name, classes._class, subjects.subject, school_year.year, school_year.semester, 
        // ROUND(AVG(rating1), 2) AS rating1, 
        // ROUND(AVG(rating2),2) AS rating2, 
        // ROUND(AVG(rating3),2) AS rating3, 
        // ROUND(AVG(rating4), 2) AS rating4, 
        // ROUND(AVG(rating5), 2) AS rating5, 
        // ROUND(AVG(rating6),2) AS rating6, 
        // ROUND(AVG(rating7),2) AS rating7,
        // ROUND(AVG(rating8),2) AS rating8, 
        // ROUND(AVG(rating9),2) AS rating9, 
        // ROUND(AVG(rating10),2) AS rating10 FROM rating 
        // JOIN teachers ON rating.fid = teachers.TID 
        // JOIN classes ON rating.class_id = classes.id 
        // JOIN school_year ON rating.sy_id = school_year.id 
        // JOIN subjects ON rating.subject_id = subjects.id 
        // GROUP BY fid`

        let _query =`SELECT
        rating.description,
        teachers.name,
        classes._class,
        subjects.subject,
        school_year.year,
        school_year.semester,
        rating1,
        rating2,
        rating3,
        rating4,
        rating5,
        rating6,
        rating7,
        rating8,
        rating9,
        rating10,
        end_at
    FROM
        rating
    JOIN teachers ON rating.fid = teachers.TID
    JOIN classes ON rating.class_id = classes.id
    JOIN school_year ON rating.sy_id = school_year.id
    JOIN subjects ON rating.subject_id = subjects.id`
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
        let _query = `SELECT rating.description, teachers.name, classes._class, subjects.subject, school_year.year, school_year.semester, 
        ROUND(AVG(rating1), 2) AS rating1, 
        ROUND(AVG(rating2),2) AS rating2, 
        ROUND(AVG(rating3),2) AS rating3, 
        ROUND(AVG(rating4), 2) AS rating4, 
        ROUND(AVG(rating5), 2) AS rating5, 
        ROUND(AVG(rating6),2) AS rating6, 
        ROUND(AVG(rating7),2) AS rating7,
        ROUND(AVG(rating8),2) AS rating8, 
        ROUND(AVG(rating9),2) AS rating9, 
        ROUND(AVG(rating10),2) AS rating10,
        end_at
        FROM rating 
        JOIN teachers ON rating.fid = teachers.TID 
        JOIN classes ON rating.class_id = classes.id 
        JOIN school_year ON rating.sy_id = school_year.id 
        JOIN subjects ON rating.subject_id = subjects.id 
        WHERE rating.description=? GROUP BY fid`
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
    fetch_rating : (data, callBack) => {
        let _query = `SELECT rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8, rating9, rating10 FROM rating 
        WHERE SID=?
        AND fid=? 
        AND sy_id=? 
        AND class_id=? 
        AND subject_id=? 
        AND code=?`
        pool.query(_query,
            [
                data.SID,
                data.fid,
                data.sy_id,
                data.class_id,
                data.subject_id,
                data.code,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }              
                return callBack(null, results);
            }
        );
    },
    create_feedback : (data, callBack) => {
        let _query = `INSERT INTO feedback(type, feedback)  VALUES (?,?)`
        pool.query(_query,
            [
                data.type,
                data.feedback,               
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }              
                return callBack(null, results);
            }
        );
    },
}