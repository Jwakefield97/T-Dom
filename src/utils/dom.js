const $ = (selector) => {
	let node = typeof(selector) === "object" ? {} : document.querySelector(selector),
		renderedTemplate = "";

	//add event listener to dom node.
	node.on = (event,callback) => {
		node.addEventListener(event,callback);
		return node;
	};
	//given a selector loop through each of them elements that match
	node.every = (callback) => {
		Array.from(document.querySelectorAll(selector)).forEach((item) => {
			callback(item);
		});
	};
	//get all the dom nodes in a node with a given selector.
	node.all = (subSelector) => {
		return Array.from(node.querySelectorAll(subSelector));
	};
	//primarily for waiting until the document is ready.
	node.ready = (callback) => {
		document.addEventListener("DOMContentLoaded", (e) => {
			callback(e);
		});
		return node;
	};
	//generate string from template and model object passed in.
	node.template = (templateName,models) => {
		let currentRenderTemplate = "";
		if(!Array.isArray(models)) {
			models = [models];
		}

		models.forEach((model) => {
			let temp = $.templates[templateName],
				tempStr = temp.value,
				params = temp.params,
				offset = 0;
			for(let paramIndex in params){  //for parameter in the template
				paramIndex = +paramIndex;
				let val = params[paramIndex],
					content = model[val];
				if(typeof(content) === "object" && content.type === "template") { //passing in a template as model attribute
					node.template(val,content.model);
					content = renderedTemplate;
				}
				if(typeof(content) === "function"){ //register events on node
					content += val + "(window.event);"
				}
				tempStr = tempStr.slice(0,paramIndex+offset) + content + tempStr.slice(paramIndex+offset,tempStr.length);
		
				offset += content.toString().length;
			}
			offset = 0
			currentRenderTemplate += tempStr;
		});
		renderedTemplate = currentRenderTemplate;
		return node;
	};
	//prepend a template/node to a innerhtml of node.
	node.prepend = () => {
		node.innerHTML = renderedTemplate + node.innerHTML;
		return node;
	};
	//append a template/node to innerhtml of a node.
	node.append = () => {
		node.innerHTML += renderedTemplate;
		return node;
	};
	//delete everything inside the node.
	node.clear = () => {
		node.innerHTML = "";
		return node;
	};
	//remove this node
	node.remove = () => {
		node.parentNode.removeChild(node);
	};	
	//remove all nodes from all
	node.removeAll = () => {
		Array.from(document.querySelectorAll(selector)).forEach(item => {
			item ? item.parentNode.removeChild(item) : item;
		});
	};

	return node; 
};

$.templates = {}; //object to store the registered templates

//register all templates from the webpage
(() => {
	$(document).ready((e) => {
		//gather all templates and store them in $
		$("t-template").every((template) => {
			
			let temp = template.innerHTML,
				indexStart = temp.indexOf("{{"),
				indexEnd = temp.indexOf("}}"),
				templateObj = {
					name: template.getAttribute("name"),
					value: "",
					params: {} //index of params to the value stored at that location
				};
			
			while(indexStart > 0 && indexEnd > 0) {
				let start = temp.slice(0,indexStart),
					content = temp.slice(indexStart+2,indexEnd).trim(),
					end = temp.slice(indexEnd+2,temp.length);
				templateObj.params[indexStart] = content;
				content = "";
				temp = start+content+end;
				indexStart = temp.indexOf("{{");
				indexEnd = temp.indexOf("}}");
			}
			templateObj.value = temp;

			$.templates[templateObj.name] = templateObj;
			template.parentNode.removeChild(template); //remove the template nodes from the dom after they are processed.
		});
	});
})();

module.exports = { $ };