/**
 * lazy version 1.0.0;
 * Author: Super Mary;
 * CopyRight : Super Mary;
 */
window.lazy = (function (){

	"use strict";

	var obj = [],offset,time,setEvent,setTime;
	var __init = function (){
		var objSearch = objSearch || {};
		offset = offset || 0;
		time = time || 250;
		var objThis = document.querySelectorAll('[data-name]');
		for(var i=0; i<objThis.length; i++){
			obj.push(objThis[i]);
		}
		__render();
		if (document.addEventListener) {
	      window.addEventListener('scroll', __render, false);
	    } else {
	      window.attachEvent('onscroll', __render);
	    }
	}
	var __render = function (){
		clearTimeout(setTime);
		setTime = setTimeout(__setEvent,time);
	}
	var __setEvent = function (){
		for(var i=obj.length;i--;){
			var src = obj[i];
			if(__check(src)){
				src.src = src.getAttribute('data-name');
				obj.splice(i,1);
			}
		}
	}
	var __check = function (setEvent){
		var coor = setEvent.getBoundingClientRect();
		if((coor.left >= 0)&&(coor.top >= 0))
			return true;
		else 
			return false;
	}
	return {
		init : __init()
	};
})(window, document);