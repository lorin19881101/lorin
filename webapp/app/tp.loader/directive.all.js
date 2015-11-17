/**
 * Created by doyen on 2015/11/5.
 */
define([
	"lib/components/header.directive",
	"lib/components/scroller.directive"
], function () {
	var directives = Array.prototype.slice.apply(arguments, [0, arguments.length]);

	function initialize () {
		angular.forEach(directives, function (directive) {
			directive.initialize();
		});
	};

	return {initialize: initialize};
});