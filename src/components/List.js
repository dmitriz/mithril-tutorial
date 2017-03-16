var m = require('mithril')
var Model = require('../model/Model')

module.exports = {
	view: function (vnode) {
		return m('.list'
			, vnode.attrs.list.map(function (object) {
				return m('.list-item'
					, {
						class: object == Model.current ? 'current' : '',
						onclick: function () {
							if (object !== Model.current) {
								Model.setCurrent(object)
							}
						}
					}
					, object.title || object.firstName + " " + object.lastName
				)
			})
		)
	}
}
