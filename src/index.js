const express = require('express')
const handlebars = require('express-handlebars')

const app =express()

app.use('/static', express.static('public'))

app.engine('hbs', handlebars.engine({
    extname:'hbs'
}))

app.set(vi)