var m = require('mithril')
var Model = require('../model/Model')

function formIsChanged () {
	var changed = false
	Object.keys(Model.current).forEach(function (key) {
		if (Model.current.hasOwnProperty(key) && Model.copy[key] !== Model.current[key])
			changed = true
	})
	return changed
}

module.exports = {
	view: function () {
		var changed = formIsChanged()
		return m('.right'
			, m('button'
				, {
					disabled: !changed,
					onclick: Model.copyCurrent
				}
				, 'Discard Changes'
			)
			, m('button'
				, {
					disabled: !changed,
					onclick: Model.save
				}
				, 'Save'
			)
		) 
	}
}
