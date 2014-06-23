"use strict";
// Import
var expect = require('chai').expect,
	joe = require('joe')

// Test
joe.describe('each plugin', function(describe,it){
	var Chainy = require('chainy-core').subclass().require('set').addExtension('each', require('../'))

	describe('should work with arrays', function(describe,it){
		var input = [1, 2, 3]

		it("should work with a synchronous iterator", function(next){
			var values = [1, 2, 3]
			var valuesResult = [];
			Chainy.create()
				.set(input)
				.each(function(value){
					valuesResult.push(value);
				})
				.done(function(err, result){
					if (err)  return next(err)
					expect(valuesResult).to.deep.equal(values)
					return next()
				})
		})

		it("should work with an asynchronous iterator", function(next){
			var values = [1,2,3]
			var valuesResult = [];
			Chainy.create()
				.set(input)
				.each(function(value, complete){
					valuesResult.push(value);
					complete()
				})
				.done(function(err, result){
					if (err)  return next(err)
					expect(valuesResult).to.deep.equal(values)
					return next()
				})
		})

		it("should work with an asynchronous iterator with index", function(next){
			var values = [1,2,3]
			var valuesResult = [];
			var keys = [0,1,2]
			var keysResult = []
			Chainy.create()
				.set(input)
				.each(function(value, index, complete){
					valuesResult.push(value);
					keysResult.push(index);
					complete()
				})
				.done(function(err, result){
					if (err)  return next(err)
					expect(valuesResult).to.deep.equal(values)
					expect(keysResult).to.deep.equal(keys)
					return next()
				})
		})
	})

	describe('should work with objects', function(describe,it){
		var input = {a:1, b:2, c:3}
		
		it("should work with a synchronous iterator", function(next){
			var values = [1, 2, 3]
			var valuesResult = [];
			Chainy.create()
				.set(input)
				.each(function(value){
					valuesResult.push(value);
				})
				.done(function(err, result){
					if (err)  return next(err)
					expect(valuesResult).to.deep.equal(values)
					return next()
				})
		})

		it("should work with an asynchronous iterator", function(next){
			var values = [1, 2, 3]
			var valuesResult = []
			Chainy.create()
				.set(input)
				.each(function(value, complete){
					valuesResult.push(value);
					complete()
				})
				.done(function(err, result){
					if (err)  return next(err)
					expect(valuesResult).to.deep.equal(values)
					return next()
				})
		})

		it("should work with an asynchronous iterator with index", function(next){
			var values = [1, 2, 3]
			var valuesResult = []
			var keys = ['a', 'b', 'c']
			var keysResult = []
			Chainy.create()
				.set(input)
				.each(function(value, index, complete){
					valuesResult.push(value);
					keysResult.push(index);
					complete()
				})
				.done(function(err, result){
					if (err)  return next(err)
					expect(valuesResult).to.deep.equal(values)
					expect(keysResult).to.deep.equal(keys)
					return next()
				})
		})
	})

})