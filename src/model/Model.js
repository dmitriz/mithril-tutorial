var m = require('mithril')

var Model = {
	teachers: [],
	courses: [],
	current: null,
	copy: null,
	setCurrent: function (object) {
		Model.current = object
		Model.copy = {}
		Object.keys(Model.current).forEach(function (key) {
			if (Model.current.hasOwnProperty(key)) {
				Model.copy[key] = Model.current[key]
			}
		})
	},
	clearCurrent: function () {
		Model.current = Model.copy = null
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
			url: './data.json'
		})
		.then(function (data) {
			Model.teachers = data.teachers
			Model.courses = data.courses
		})
	}
}

module.exports = Model




