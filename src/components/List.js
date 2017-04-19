var m = require('mithril')
var Model = require('../model/Model')

module.exports = {
	view: function (vnode) {
		return m('.list'
			, vnode.attrs.list.map(function (object) {
				return m('a.list-item'
					, {
						href: '/' + m.route.param('list') + '/' + object.id,
						oncreate: m.route.link,
						onupdate: m.route.link,
						class: object === Model.current ? 'current' : ''
					}
					, Model.displayName(object)
				)
			})
		)
	}
}
