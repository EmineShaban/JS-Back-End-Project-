const express = require('express')
const handlebars = require('express-handlebars')
const routes = require('./routes')
const app =express()

app.use('/static', express.static('public'))
app.use(express.urlencoded({extended: false}))
app.engine('hbs', handlebars.engine({
    extname:'hbs'
}))


app.set('views', './src/views')
app.set('view engine', 'hbs')

app.use(routes)
app.listen(5001, () => console.log('App is listening on port 5001'))    