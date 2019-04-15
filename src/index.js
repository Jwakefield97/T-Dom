import { $ } from "./utils/dom.js";
import "./utils/template.js";
import "./main.css";

(() => {
	$(document).ready((e) => {
		for(let i =0; i < 100; i++){
			$("body").template("hello",{ name: "jake"+i }).append();
		}
	});
})();