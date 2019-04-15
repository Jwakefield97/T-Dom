import { $ } from "./utils/dom.js";
import "./utils/template.js";
import "./main.css";

let numElements = 0;

(() => {
	$(document).ready((e) => {
		for(let i = 0; i < 10; i++){
			$("#mainContent").template("hello",{ 
				title: "title"+i,
				text: "this is some text for card: "+i 
			}).append();
		}
		numElements += 10;
		window.addEventListener("scroll", (e) => {
			if(window.scrollY >= document.body.scrollHeight - 1000) {
				for(let i = numElements; i < numElements+10; i++){
					$("#mainContent").template("hello",{ 
						title: "title"+i,
						text: "this is some text for card: "+i 
					}).append();
				}
				numElements += 10;
			}
			
		});
	});
})();