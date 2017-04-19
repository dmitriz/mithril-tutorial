var m = require('mithril')
var Model = require('../model/Model')

module.exports = {
	view: function (vnode) {
		return m('main.layout'
			, m('nav'
				, m('a[href="/teachers"]', { oncreate: m.route.link }, "Teachers")
				, m('a[href="/courses"]', { oncreate: m.route.link }, "Courses")
			)
			, m('.editor', vnode.children)
		)
	}
}