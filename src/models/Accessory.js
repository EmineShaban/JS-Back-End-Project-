const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
    // _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        require: true,
        // unique: true,
    },
    imageUrl: {
        type: String,
        require: true,
        validate: {
            validator: /^http?/g,
            message: "Image url should be a link"
        }
    },
    description: {
        type: String,
        require: true,
        maxlength: 120,
    },
    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }]


})

// cubeSchema.path('imageUrl').validate(function () {
// return this.imageUrl.startsWith('http')
// }, 'Image url should be a link')

const Accessory = mongoose.model('Accessory', accessorySchema)

module.exports = Accessory