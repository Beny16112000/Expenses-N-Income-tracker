const express = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')


const registerRouter = require('./routes/register')
app.use('/auth', registerRouter)


const loginRouter = require('./routes/login')
app.use('/auth', loginRouter)


const logoutRouter = require('./routes/logout')
app.use('/auth', logoutRouter)


const index = require('./routes/index')
app.use('/', index)


const add = require('./routes/add')
app.use('/expenses', add)


const addExpenss = require('./routes/expens')
app.use('/expenses', addExpenss)


const all = require('./routes/all')
app.use('/expenses', all)


app.listen(4000)