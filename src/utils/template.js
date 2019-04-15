//custom template element for storing html templates for later use.
class Template extends HTMLElement {
	constructor() {
		super();
	}
}

window.customElements.define("t-template", Template);