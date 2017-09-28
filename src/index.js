import React from "react";
import { render } from "react-dom";

export default function multipleRender(component, selector, removeProps = false) {
  if (document.querySelectorAll(selector).length >= 1) {
    const containers = [...document.querySelectorAll(selector)];
    let components = [];

    containers.forEach(el => {
      let props = {};

      try {
        props = el.getAttribute("data-props")
          ? JSON.parse(el.getAttribute("data-props"))
          : {};
      } catch (err) {
        console.log(`Check json structure on ${selector} data-props`);
      }

      let componentElement = React.createElement(component, { ...props });

      if (React.isValidElement(componentElement)) {
        render(componentElement, el);
        
        if (removeProps) {
          el.removeAttribute('data-props');
        }

        components = components.concat([componentElement]);
      } else {
        console.error("check it's a valid component");
      }

    });

    return components;
  }
}
