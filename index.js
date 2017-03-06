import React from 'react';
import { render } from 'react-dom';

export default function multipleRender(component, selector) {
  if (document.querySelectorAll(selector).length >= 1) {
    const containers = [...document.querySelectorAll(selector)];
		let components = [];

    containers.forEach(el => {
			let props = {};

			try {
				props = el.getAttribute('data-props')
        ? JSON.parse(el.getAttribute('data-props'))
        : {};
			} catch(err) {
				console.error('Check json structure on data-props', err);
			}

      render(React.createElement(component, {...props}), el);
			components = components.concat([React.createElement(component, {...props})]);
    });
		
		return components;
  }
}
