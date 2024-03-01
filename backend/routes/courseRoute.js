const express = require('express');
const { getAllCourse, AddCourse, getCourse, UpdateCourse, DeleteCourse } = require('../controller/CourseController');

const router = express.Router();

router.route("/").get(getAllCourse).post(AddCourse);
router.route("/:id").get(getCourse).patch(UpdateCourse).delete(DeleteCourse);

module.exports = router;