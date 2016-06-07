<!-- TITLE/ -->

<h1>Each action for ChainyJS</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/chainyjs/each" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/chainyjs/each/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/chainy-plugin-each" title="View this project on NPM"><img src="https://img.shields.io/npm/v/chainy-plugin-each.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/chainy-plugin-each" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/chainy-plugin-each.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/chainyjs/each" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/chainyjs/each.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/chainyjs/each#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/chainyjs/each.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-slackin"><a href="https://slack.bevry.me" title="Join this project's slack community"><img src="https://slack.bevry.me/badge.svg" alt="Slack community badge" /></a></span>
<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

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
	.set({a: 1, b: 2, c: 3})
	.each(iterator)

	// Iterate with some custom options to use for the internal taskgroup
	.each(iterator, taskgroupOptions)
```

The iterator can operate synchronously:

``` javascript
.each(function (itemValue) {
	// ..
})
```

Or asynchronously:

``` javascript
.each(function (itemValue, complete) {
	// ...
	complete()
})
```

Or asynchronously with the item's index/key as well:

``` javascript
.each(function (itemValue, itemIndex, complete) {
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
	.each(function (itemValue) {
		console.log(itemValue)  // 'a' then 'b' then 'c'
	})

	// Asynchronous iterator
	.each(function (itemValue, complete) {
		console.log(itemValue)  // 'a' then 'b' then 'c'
		complete()
	})

	// Asynchronous iterator with index
	.each(function (itemValue, itemIndex, complete) {
		console.log(itemValue)  // 'a' then 'b' then 'c'
		console.log(itemIndex)  // 0 then 1 then 2
		complete()
	})


	// --------------------------------
	// Object data
	.set({a:1, b:2, c:3})

	// Synchronous iterator
	.each(function (itemValue) {
		console.log(itemValue)  // 1 then 2 then 3
	})

	// Asynchronous iterator
	.each(function (itemValue, complete) {
		console.log(itemValue)  // 1 then 2 then 3
		complete()
	})

	// Asynchronous iterator with index
	.each(function (itemValue, itemIndex, complete) {
		console.log(itemValue)  // 1 then 2 then 3
		console.log(itemIndex)  // 'a' then 'b' then 'c'
		complete()
	})
```

<!-- /CHAINY_DOCUMENTATION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>NPM</h3></a><ul>
<li>Install: <code>npm install --save chainy-plugin-each</code></li>
<li>Module: <code>require('chainy-plugin-each')</code></li></ul>

<a href="http://browserify.org" title="Browserify lets you require('modules') in the browser by bundling up all of your dependencies"><h3>Browserify</h3></a><ul>
<li>Install: <code>npm install --save chainy-plugin-each</code></li>
<li>Module: <code>require('chainy-plugin-each')</code></li>
<li>CDN URL: <code>//wzrd.in/bundle/chainy-plugin-each@1.1.0</code></li></ul>

<a href="http://enderjs.com" title="Ender is a full featured package manager for your browser"><h3>Ender</h3></a><ul>
<li>Install: <code>ender add chainy-plugin-each</code></li>
<li>Module: <code>require('chainy-plugin-each')</code></li></ul>

<h3><a href="https://github.com/bevry/editions" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>chainy-plugin-each</code> aliases <code>chainy-plugin-each/source/index.js</code></li>
<li><code>chainy-plugin-each/source/index.js</code> is Source + ES5 + <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a></li></ul>

<!-- /INSTALL -->


<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/chainyjs/each/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/chainyjs/each/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://balupton.com">Benjamin Lupton</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

No contributors yet! Will you be the first?

<a href="https://github.com/chainyjs/each/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2014+ <a href="https://bevry.me">Bevry Pty Ltd</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
