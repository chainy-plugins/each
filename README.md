
<!-- TITLE/ -->

# Each action for [ChainyJS](http://chainyjs.org)

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/chainy-plugins/chainy-plugin-each.png?branch=master)](http://travis-ci.org/chainy-plugins/chainy-plugin-each "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/chainy-plugin-each.png)](https://npmjs.org/package/chainy-plugin-each "View this project on NPM")
[![Dependency Status](https://david-dm.org/chainy-plugins/each.png?theme=shields.io)](https://david-dm.org/chainy-plugins/each)
[![Development Dependency Status](https://david-dm.org/chainy-plugins/each/dev-status.png?theme=shields.io)](https://david-dm.org/chainy-plugins/each#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- CHAINY_DOCUMENTATION/ -->

<!-- DESCRIPTION/ -->

Chainy action that iterates through each item in the array with an asynchronous or synchronous iterator

<!-- /DESCRIPTION -->


Use the each plugin like so:

``` javascript
require('chainy').create().require('set each')
	// Iterate over an array
	.set(['a', 'b', 'c'])
	.each(iterator)

	// Iterate over an object
	.set({a:1, b:2, c:3})
	.each(iterator)

	// Iterate with some custom options to use for the internal taskgroup
	.each(iterator, taskgroupOptions)
```

The iterator can operate synchronously:

``` javascript
.each(function(itemValue){
	// ..
})
```

Or asynchronously:

``` javascript
.each(function(itemValue, complete){
	// ...
	complete()
})
```

Or asynchronously with the item's index/key as well:

``` javascript
.each(function(itemValue, itemIndex, complete){
	// ...
	complete()
})
```

The `taskgroupOptions` is an optional configuration object that can be used to configure the internal [taskgroup](https://github.com/bevry/taskgroup). A common use case for this is to instead of having our iterators operate serially (one after the other, a concurrency of 1), instead we could have them all operate at once (with a concurrency of 0) by specifying the following taskgroup configuration like so:

``` js
.each(iterator, {concurrency: 0})
```

Tying this all together, we can do things like:

``` javascript
require('chainy').create().require('set each')

	// --------------------------------
	// Array data
	.set(['a', 'b', 'c'])
	
	// Synchronous iterator
	.each(function(itemValue){
		console.log(itemValue)  // 'a' then 'b' then 'c'
	})

	// Asynchronous iterator
	.each(function(itemValue, complete){
		console.log(itemValue)  // 'a' then 'b' then 'c'
		complete()
	})

	// Asynchronous iterator with index
	.each(function(itemValue, itemIndex, complete){
		console.log(itemValue)  // 'a' then 'b' then 'c'
		console.log(itemIndex)  // 0 then 1 then 2
		complete()
	})


	// --------------------------------
	// Object data
	.set({a:1, b:2, c:3})
	
	// Synchronous iterator
	.each(function(itemValue){
		console.log(itemValue)  // 1 then 2 then 3
	})

	// Asynchronous iterator
	.each(function(itemValue, complete){
		console.log(itemValue)  // 1 then 2 then 3
		complete()
	})

	// Asynchronous iterator with index
	.each(function(itemValue, itemIndex, complete){
		console.log(itemValue)  // 1 then 2 then 3
		console.log(itemIndex)  // 'a' then 'b' then 'c'
		complete()
	})
```

<!-- /CHAINY_DOCUMENTATION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('chainy-plugin-each')`
- Install: `npm install --save chainy-plugin-each`

### [Browserify](http://browserify.org/)
- Use: `require('chainy-plugin-each')`
- Install: `npm install --save chainy-plugin-each`
- CDN URL: `//wzrd.in/bundle/chainy-plugin-each@1.0.0`

### [Ender](http://ender.jit.su/)
- Use: `require('chainy-plugin-each')`
- Install: `ender add chainy-plugin-each`

<!-- /INSTALL -->


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/chainy-plugins/chainy-plugin-each/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chainy-plugins/chainy-plugin-each/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

No contributors yet! Will you be the first?
[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chainy-plugins/chainy-plugin-each/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2014+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


