var m = require("mithril")
var Model = require("./model/Model")
var Layout = require("./components/Layout")
var Editor = require('./components/Editor')
var List = require('./components/List')
var Teachers = require("./components/Teachers")
var Courses = require("./components/Courses")
require('./styles.css')

m.route(document.body, "/teachers", {
	"/teachers": {
		onmatch: Model.clearCurrent,
		render: function () {
			return m(Layout, m(Editor, m(List, {list: Model.teachers}), m(Teachers)))
		}
	},
	"/courses": {
		onmatch: Model.clearCurrent,
		render: function () {
			return m(Layout, m(Editor, m(List, {list: Model.courses}), m(Courses)))
		}
	}
})