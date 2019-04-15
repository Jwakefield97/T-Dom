import { $ } from "./utils/dom.js";
import "./utils/template.js";
import "./main.css";

(() => {
	$(document).ready((e) => {
		for(let i =0; i < 100; i++){
			$("#mainContent").template("hello",{ 
				title: "title"+i,
				text: "this is some text for card: "+i 
			}).append();
		}
	});
})();