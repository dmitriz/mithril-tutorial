var m = require('mithril')
var Model = require('../model/Model')
var SaveButton = require('./SaveButton')

module.exports = {
	view: function () {
		return m('.form'
			, m('label'
				, "Course Title"
				, m('input[type=text]'
					, {
						value: Model.copy.title,
						oninput: m.withAttr("value", function (val) {
							Model.copy.title = val
						})
					}
				)
			)
			, m('label'
				, "Teacher"
				, m('select'
					, {
						value: Model.copy.teacher,
						onchange: m.withAttr('value', function (val) {
							Model.copy.teacher = val
						})
					}
					, Model.teachers.map(function (teacher) {
						return m('option', {
							value: teacher.id,
							text: teacher.firstName + " " + teacher.lastName
						})
					})
				)
			)
			, m(SaveButton)
		)
	}
}
