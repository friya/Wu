// app.controller={};
// app.controller.index=(function(){
// 	var api={};
// 	api.start=function(){
// 		app.view.index.loadBody(function(){
// 			addEvent();
// 		})
// 	}
// 	function addEvent(){

// 	}
// 	return api;
// })()
require.config({
	path:{
		"jquery":"./lib/jquery/jquery.min",
		"backbone":"./lib/backbone/backbone-min.js",
		"underscore":"./lib/backbone/underscore-1.4.4.js"
	},
	shim:{   		//shim配置不兼容的模块
		'backbone':{
			deps:['jquery'],  //数组，表示模块的依赖性
			exports:'backbone'	//输出变量名，这个模块外部调用的名称。
		},
		'underscore':{
			deps:['jquery'],
			exports:'_'
		}
	}
})
require(['jquery','backbone','underscore'],function($,backbone,_){
		$(".button_1VIEes").click(function(){
		$("#selectImg,#selectWord").css("display","none");
		$("#selectImg").css("display","block");
	})
	$(".button_3x7BgM").click(function(){
		$("#selectImg,#selectWord").css("display","none");
		$("#selectWord").css("display","block");
	})
})
