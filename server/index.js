require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const loginRouter = require('./routes/loginRoutes')
const challengeRouter = require('./routes/challengeRoutes')

const app = express()
const MAX_AGE = 1000 * 60 * 60 * 24 // ms -> s -> min -> hrs
const port = process.env.PORT || 5001

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
})

const mongoDBstore = new MongoDBStore({
    uri: process.env.DATABASE_CONNECTION_STRING,
    collection: 'mySessions',
})

app.use(
    session({
        secret: 'd1r3a8k0nX',
        name: 'session-id',
        store: mongoDBstore,
        cookie: {
            maxAge: MAX_AGE,
            sameSite: false,
            secure: true, //turn on for prod build
        },
        resave: true,
        saveUninitialized: false,
    })
)

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api', loginRouter)
app.use('/api', challengeRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

module.exports = app
