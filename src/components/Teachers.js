var m = require('mithril')
var Model = require('../model/Model')
var SaveButton = require('./SaveButton')

module.exports = {
	view: function () {
		return m('.form'
			, m('label'
				, "First Name"
				, m('input[type=text]'
					, {
						value: Model.copy.firstName,
						oninput: m.withAttr("value", function (val) {
							Model.copy.firstName = val
						})
					}
				)
			)
			, m('label'
				, "Last Name"
				, m('input[type=text]'
					, {
						value: Model.copy.lastName,
						oninput: m.withAttr("value", function (val) {
							Model.copy.lastName = val
						})
					}
				)
			)
			, m('label'
				, "Courses currently taught by " + Model.current.firstName + " " + Model.current.lastName + ":"
				, Model.courses
					.filter(function (course) {
						return course.teacher == Model.current.id
					})
					.map(function (course) {
						return m('code', course.title)
					})
			)
			, m(SaveButton)
		)
	}
}