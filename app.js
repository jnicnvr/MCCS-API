require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const app = express()


const PORT = process.env.PORT || 5000
const user_routes = require('./routes/users')
const auth_routes = require('./routes/authentication')
const students = require('./routes/students')
const subjects = require('./routes/subjects')
const teachers = require('./routes/teachers')
const school_year = require('./routes/school_year')
const class_list = require('./routes/class_list')
const admin_logs = require('./routes/admin_logs')
const user_logs = require('./routes/user_logs')
const evaluation_restriction = require('./routes/evaluation_restriction')
const rating = require('./routes/rating')
const notification = require('./routes/notification')
const comment = require('./routes/comment')


app.use(express.json()) // convert incomming request to json
app.use(helmet()) // prevent security attacks
app.use(compression()) // compress responses
// server.use(morgan("common")) //logs all request in api
// app.use(cors())

app.use('/api', user_routes)
app.use('/api/auth', auth_routes)
app.use('/api', students)
app.use('/api', subjects)
app.use('/api', teachers)
app.use('/api', school_year)
app.use('/api', class_list)
app.use('/api', admin_logs)
app.use('/api', evaluation_restriction)
app.use('/api', rating)
app.use('/api', notification)
app.use('/api', comment)
app.use('/api', user_logs)

//404 Handler
app.use(function (req, res, next) {
    res.send('<h1> 404 Page not found </h1>');
});

//Error Handler
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
}); 

app.listen(PORT, () => console.log(`Server is started at Port: ${PORT}...`))