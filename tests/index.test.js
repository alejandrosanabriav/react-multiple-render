import React from "react";
import multipleRender from "../source/index";

const Component = React.createClass({
	render() {
		return (
			<form>
				<input type="text" />
				<button>Store</button>
			</form>
		)
	}
});

describe("multipleRender", () => {

  it("should render one component", () => {
    document.body.innerHTML = `<div class="container"></div>`;
    multipleRender(Component, ".container");
    expect(document.querySelectorAll("form").length).toEqual(1);
  });

  it("should render component twice", () => {
    document.body.innerHTML = `<div class="container"></div><div class="container"></div>`;
    multipleRender(Component, ".container");
    expect(document.querySelectorAll("form").length).toEqual(2);
  });

	 it("should render component three times", () => {
    document.body.innerHTML = `
			<div class="container"></div>
			<div class="container"></div>
			<div class="container"></div>
		`;

    multipleRender(Component, ".container");
    expect(document.querySelectorAll("form").length).toEqual(3);
  });

	it('should have props via data-props', () => {
		document.body.innerHTML = `
			<div class="container" data-props='{"title": "this is a title"}'></div>
			<div class="container" data-props='{"random": "this is a random text"}'></div>
			<div class="container" data-props='{"randomObj": {"child": "a child content"}}'></div>
		`;

		let components = multipleRender(Component, ".container");

		expect(components[0].props).toEqual({"title": "this is a title"});
		expect(components[1].props).toEqual({"random": "this is a random text"});
		expect(components[2].props).toEqual({"randomObj": {"child": "a child content"}});
	})

});
