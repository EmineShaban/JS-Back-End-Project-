let mongoose = require('mongoose')

const connectioString = 'mongodb://localhost:27017/softuni-cubicle'

exports.initializeDatabase = () => mongoose.connect(connectioString)