/**
 * Created by doyen on 2015/11/4.
 */
define([
	"home/home.controller",
	"common/header.controller",
	"introduce/introduce.controller",
	"education/education.controller",
	"work/work.controller",
	"skill/skill.controller",
	"opus/opus.controller",
	"hobby/hobby.controller"
], function () {
	var controllers = Array.prototype.slice.apply(arguments, [0, arguments.length]);

	function initialize () {
		angular.forEach(controllers, function (controller) {
			controller.initialize();
		});
	};

	return {initialize: initialize};
});