/*
---

name: Autocompleter.Local

license: MIT-style license

requires: 
  - Autocompleter

provides: [Autocompleter.Local]

author: Harald Kirschner <mail [at] digitarald.de>

copyright: Author
...
*/

Autocompleter.Local = new Class({

	Extends: Autocompleter,

	options: {
		minLength: 0,
		delay: 200
	},

	initialize: function(element, tokens, options) {
		this.parent(element, options);
		this.tokens = tokens;
	},

	query: function() {
		this.update(this.filter());
	}

});