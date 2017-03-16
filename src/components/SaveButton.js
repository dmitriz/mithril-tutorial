var m = require('mithril')
var Model = require('../model/Model')

function formIsUnchanged () {
	if (!Model.current) return true
	var changed = false
	Object.keys(Model.current).forEach(function (key) {
		if (Model.current.hasOwnProperty(key)) {
			if (Model.copy[key] != Model.current[key]) changed = true
		}
	})
	return !changed
}

module.exports = {
	view: function () {
		return m('.right', m('button', {
			disabled: formIsUnchanged(),
			onclick: Model.save
		}, 'Save')) 
	}
}
