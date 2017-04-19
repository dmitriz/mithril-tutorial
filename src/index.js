var m = require("mithril")
var Model = require("./model/Model")
var Layout = require("./components/Layout")
var List = require('./components/List')

var formComponents = {
	teachers: require("./components/Teachers"),
	courses: require("./components/Courses")
}

require('./styles.css')

var renderFn = function (vnode) {
	var list = vnode.attrs.list
	return m(Layout
		, m(List
			, { list: Model[list] }
		)
		, Model.copy 
			? m(formComponents[list]) 
			: m('.nothing-chosen', 'nothing selected')
	)
}

// first, mount the loader
m.mount(document.body, {
	view: function() {
		return m('.loader', 'loading...')
	}
})

// simulate latency before data fetching and router instantiation 
setTimeout(function () {
	Model.getData().then(function (data) {
		Model.teachers = data.teachers
		Model.courses = data.courses

		m.route(document.body, "/teachers", {
			'/:list': {
				onmatch: Model.clearCurrent,
				render: renderFn
			},
			'/:list/:id': {
				onmatch: function (attrs) {
					Model.setCurrent(Model.objectForId(attrs))
				},
				render: renderFn
			}
		})
	})
}, 1500)
