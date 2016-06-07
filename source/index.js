/* eslint no-var:0, object-shorthand:0 */
module.exports = function each (items, iterator, taskgroupOptions, next) {
	var TaskGroup = require('taskgroup').TaskGroup
	iterator = iterator.bind(this)

	// Default taskgroup options to an object if it doesn't already exist
	if ( taskgroupOptions == null )  taskgroupOptions = {}

	// Default the name of the map
	if ( !taskgroupOptions.name )  taskgroupOptions.name = 'each iterator group: ' + Math.random()

	// Define our tasks for the map
	var tasks = TaskGroup.create(taskgroupOptions).done(function (err) {
		return next(err) // don't do a direct forward, as we want to discard the result argument
	})

	// Create a task for each map item, and add them to the task group
	var isArray = Array.isArray(items)
	Object.keys(items).forEach(function (key, index) {
		// Prepare
		var itemValue = items[key]
		var args = [itemValue]

		// Support optional itemIndex argument if we are expecting it (itemValue, itemIndex, complete)
		if ( iterator.length === 3 ) {
			if ( isArray ) {
				args.push(index)
			}
			else {
				args.push(key)
			}
		}

		// Create and add our task
		tasks.addTask({
			key: key,
			name: 'map iterator for: ' + key,
			method: iterator,
			args: args
		})
	})

	// Run the task group
	tasks.run()
}
module.exports.extensionType = 'action'
