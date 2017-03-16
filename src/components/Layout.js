var m = require('mithril')
var Model = require('../model/Model')

module.exports = {
	oninit: Model.getData,
	view: function (vnode) {
		return m('main.layout'
			, m('nav.menu'
				, m('a[href="/teachers"]', { oncreate: m.route.link }, "Teachers")
				, m('a[href="/courses"]', { oncreate: m.route.link }, "Courses")
			)
			, vnode.children
		)
	}
}