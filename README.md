# react-multiple-render
[![Build Status](https://semaphoreci.com/api/v1/developersoul/react-multiple-render/branches/master/shields_badge.svg)](https://semaphoreci.com/developersoul/react-multiple-render)

help you render your component multiple times

## Installation
```bash
$ npm install -S react-multiple-render
```
or
```bash
$ yarn add react-multiple-render
```

## Usage
with es6

```javascript
import multipleRender from "react-multiple-render";
import Component from "../component";

multipleRender(Component, '.component-container');
```
Always pass a valid json

```html
<div
	class='component-container'
	data-props='{
	"someProp": "this is a text",
	"someObj": { "deepProp": "hi deep prop" },
	"someArr": [{"name": "a"},{"name": "b"},{"name": "c"},{"name": "d"}]
}'>
</div>
```

```javascript
class ComponentName extends Component {
	render() {
		const { someProp, someObj, someArr } = this.props;
		return (
			<div>
				{/* equal to: this is a text*/}
				<span>{someProp}</span>
				{/* equal to: hi deep prop*/}
				<span>{someObj.deepProp}</span>
				{/* equal to:
					<ul>
						<li>a</li>
						<li>b</li>
						<li>c</li>
						<li>d</li>
					</ul>
				*/}
				<ul>
					{someArr.map(item => <li>{item.name}</li>)}
				</ul>
			</div>
		)
	}
}
```

## test
```bash
$ npm test
```
or
```bash
$ yarn test
```
