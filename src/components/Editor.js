var m = require('mithril')
var Model = require('../model/Model')
var List = require('./List')

module.exports = {
	view: function (vnode) {
		return m('.editor'
			, vnode.children[0]
			, Model.copy ? vnode.children[1] : m('.nothing-chosen', 'nothing selected')
		)
	}
}