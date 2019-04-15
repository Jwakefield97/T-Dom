import { $ } from "./utils/dom.js";
import "./utils/template.js";
import "./main.css";

let numElements = 0;

(() => {
	$(document).ready((e) => {
		let models = [];
		for(let i = 0; i < 10; i++){
			models.push({ 
				title: "title"+i,
				text: "this is some text for card: "+i,
				handler: (e) => {
					console.log(e.target);
				}
			});
		}
		$("#mainContent").template("hello",models).append();
		numElements += 10;
		window.addEventListener("scroll", (e) => {
			if(window.scrollY >= document.body.scrollHeight - 1000) {
				let models = [];
				for(let i = numElements; i < numElements+10; i++){
					models.push({ 
						title: "title"+i,
						text: "this is some text for card: "+i ,
				handler: (e) => {
					console.log(e);
				}
					});
				}
				$("#mainContent").template("hello",models).append();
				numElements += 10;
			}
			
		});
	});
})();