const $ = (selector) => {
	let node = typeof(selector) === "object" ? {} : document.querySelector(selector);

	//add event listener to dom node.
	node.on = (event,callback) => {
		node.addEventListener(event,callback);
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
	};
	//generate string from template and model object passed in.
	node.template = (templateName,model) => {

		return node;
	};
	//prepend a template/node to a innerhtml of node.
	node.prepend = () => {

	};
	//append a template/node to innerhtml of a node.
	node.append = () => {

	};
	//delete everything inside the node.
	node.clear = () => {
		node.innerHTML = "";
	};

	return node; 
};

module.exports = { $ };