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
		if (object) {
			Model.current = object
			Model.copyCurrent()
		} else {
			Model.clearCurrent()
		}
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
	objectForId: function (attrs) {
		return Model[attrs.list].find(function (item) {
			return item.id === attrs.id
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
			url: '../data/data.json'
		})
	}
}

module.exports = Model
