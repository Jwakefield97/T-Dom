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
	node.template = (templateName,model) => {
		renderedTemplate = $.templates[templateName].innerHTML;
		return node;
	};
	//prepend a template/node to a innerhtml of node.
	node.prepend = () => {
		node.innerHTML = renderedTemplate + node.innerHTML;
		return node;
	};
	//append a template/node to innerhtml of a node.
	node.append = () => {
		console.log(renderedTemplate,$.templates);
		node.innerHTML += renderedTemplate;
		return node;
	};
	//delete everything inside the node.
	node.clear = () => {
		node.innerHTML = "";
		return node;
	};

	return node; 
};

$.templates = {}; //object to store the registered templates

module.exports = { $ };