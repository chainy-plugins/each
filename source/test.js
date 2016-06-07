/* eslint no-var:0, object-shorthand:0 */

// Import
var deepEqual = require('assert-helpers').deepEqual,
	joe = require('joe')

// Test
joe.suite('each plugin', function (suite) {
	var Chainy = require('chainy-core').subclass().require('set').addExtension('each', require('../'))

	suite('should work with arrays', function (suite, test) {
		var input = [1, 2, 3]

		test('should work with a synchronous iterator', function (next) {
			var values = [1, 2, 3]
			var valuesResult = []
			Chainy.create()
				.set(input)
				.each(function (value) {
					valuesResult.push(value)
				})
				.done(function (err, result) {
					if (err)  return next(err)
					deepEqual(valuesResult, values)
					return next()
				})
		})

		test('should work with an asynchronous iterator', function (next) {
			var values = [1, 2, 3]
			var valuesResult = []
			Chainy.create()
				.set(input)
				.each(function (value, complete) {
					valuesResult.push(value)
					complete()
				})
				.done(function (err, result) {
					if (err)  return next(err)
					deepEqual(valuesResult, values)
					return next()
				})
		})

		test('should work with an asynchronous iterator with index', function (next) {
			var values = [1, 2, 3]
			var valuesResult = []
			var keys = [0, 1, 2]
			var keysResult = []
			Chainy.create()
				.set(input)
				.each(function (value, index, complete) {
					valuesResult.push(value)
					keysResult.push(index)
					complete()
				})
				.done(function (err, result) {
					if (err)  return next(err)
					deepEqual(valuesResult, values)
					deepEqual(keysResult, keys)
					return next()
				})
		})
	})

	suite('should work with objects', function (suite, test) {
		var input = {a: 1, b: 2, c: 3}

		test('should work with a synchronous iterator', function (next) {
			var values = [1, 2, 3]
			var valuesResult = []
			Chainy.create()
				.set(input)
				.each(function (value) {
					valuesResult.push(value)
				})
				.done(function (err, result) {
					if (err)  return next(err)
					deepEqual(valuesResult, values)
					return next()
				})
		})

		test('should work with an asynchronous iterator', function (next) {
			var values = [1, 2, 3]
			var valuesResult = []
			Chainy.create()
				.set(input)
				.each(function (value, complete) {
					valuesResult.push(value)
					complete()
				})
				.done(function (err, result) {
					if (err)  return next(err)
					deepEqual(valuesResult, values)
					return next()
				})
		})

		test('should work with an asynchronous iterator with index', function (next) {
			var values = [1, 2, 3]
			var valuesResult = []
			var keys = ['a', 'b', 'c']
			var keysResult = []
			Chainy.create()
				.set(input)
				.each(function (value, index, complete) {
					valuesResult.push(value)
					keysResult.push(index)
					complete()
				})
				.done(function (err, result) {
					if (err)  return next(err)
					deepEqual(valuesResult, values)
					deepEqual(keysResult, keys)
					return next()
				})
		})
	})

})
