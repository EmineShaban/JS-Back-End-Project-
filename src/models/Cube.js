const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    // _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        require: true,
        // unique: true,
    },
    description: {
        type: String,
        require: true,
        maxlength: 120,
    },
    imageUrl: {
        type: String,
        require: true,
    },
    difficultyLevel: {
        type: Number,
        require: true,
        min: 1,
        max: 6,
    }





})

cubeSchema.path('imageUrl').validate(function () {
return this.imageUrl.startsWith('http')
}, 'Image url should be a link')

const Cube = mongoose.model('Cube', cubeSchema)

module.exports = Cube