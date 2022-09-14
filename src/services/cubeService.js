const fs = require('fs/promises')
const path = require('path')
const Cube = require('../models/Cube')
exports.getAll = async (search = '', fromInput, toInput) => {
let cubes = await Cube.find().lean()

return cubes
}

exports.getOne = (cubeId) => Cube.findById(cubeId)

exports.create = (cube) => Cube.create(cube)
