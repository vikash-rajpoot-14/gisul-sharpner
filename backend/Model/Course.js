const mongoose = require('mongoose')

const CourseModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    subcourse:{
        type: Array,
        required: true
    }
},{
    timestamps: true
})

const Course = mongoose.model('Course', CourseModel)

module.exports = Course