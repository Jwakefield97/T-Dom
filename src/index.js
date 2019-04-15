import { $ } from "./utils/dom.js";
import "./utils/template.js";
import "./main.css";


(() => {
	$(document).ready((e) => {
		//gather all templates and store them in $
		$("t-template").every((template) => {
			$.templates[template.getAttribute("name")] = template;
		});
		$("body").template("hello",{}).append();
	});
})();