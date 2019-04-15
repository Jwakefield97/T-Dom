import { $ } from "./utils/dom.js";
import "./utils/template.js";
import "./main.css";


(() => {
	$(document).ready((e) => {
		//gather all template nodes in and store them in $.
		$("body").all("t-template").forEach((template) => {
			console.log(template);
		});
		console.log("content loaded");
	});
})();