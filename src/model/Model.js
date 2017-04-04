var m = require('mithril')

var Model = {
	teachers: [],
	courses: [],
	current: null,
	copy: null,
	displayName: function (object) {
		return object.title || object.firstName + " " + object.lastName
	},
	setCurrent: function (object) {
		Model.current = object
		Model.copyCurrent()
	},
	clearCurrent: function () {
		Model.current = Model.copy = null
	},
	copyCurrent: function () {
		Model.copy = {}
		Object.keys(Model.current).forEach(function (key) {
			if (Model.current.hasOwnProperty(key)) {
				Model.copy[key] = Model.current[key]
			}
		})
	},
	coursesForCurrent: function () {
		return Model.courses.filter(function (course) {
			return course.teacher === Model.current.id
		})
	},
	save: function () {
		Object.keys(Model.copy).forEach(function (key) {
			if (Model.copy.hasOwnProperty(key)) {
				Model.current[key] = Model.copy[key]
			}
		})
	},
	getData: function () {
		return m.request({
			url: './src/model/data.json'
		})
		.then(function (data) {
			Model.teachers = data.teachers
			Model.courses = data.courses
		})
	}
}

module.exports = Model




