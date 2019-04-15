//custom template element for storing html templates for later use.
class Template extends HTMLElement {
	constructor() {
		super();
	}
}

customElements.define("t-template", Template);