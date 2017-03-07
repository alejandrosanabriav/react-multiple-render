# react-multiple-render
[![Build Status](https://semaphoreci.com/api/v1/developersoul/react-multiple-render/branches/master/shields_badge.svg)](https://semaphoreci.com/developersoul/react-multiple-render)

help you render your component multiple times

## Installation
```bash
$ npm install -S react-multiple-render

$ yarn add react-multiple-render
```

## Usage
with es6

```js
import multipleRender from "react-multiple-render";
import Component from "../component";

multipleRender(Component, '.component-container');
```
Always pass a valid json

```html
<div data-props='{
	"someProp": "his value",
	"someObj": { "deepProp": "hi" }
}'>
</div>
```

## test
```bash
npm test or yarn test
```