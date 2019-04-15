import { $ } from "./utils/dom.js";
 
console.log($("body").all("div"));

$(document).ready((e) => {
	//gather all template nodes in and store them in $.
	
	console.log("content loaded");
});