var m = require('mithril')
var Model = require('../model/Model')
var FormButtons = require('./FormButtons')

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
				, "Courses currently taught by " + Model.displayName(Model.current) + ":"
				, Model.coursesForCurrent().map(function (course) {
					return m('code', course.title)
				})
			)
			, m(FormButtons)
		)
	}
}