---
title: How to pass property from a parent component props to a child component ?
image: /images/blog/props_pass.png
author:
  name: Javaid Khan
  avatar: /images/author/javaid.jpeg
date: 2022-04-04T05:00:00Z
draft: false
---

In this article, we will learn how to pass the property from the parent component to the child component in React js. While embedding the child component inside the parent component in the React, developers need to send properties or data to the child component from the parent component.

React.js allows us to use props (short form of property) to pass data from parent component to child component. We have to set props value inside the child component, while we embed it to the parent component.

Prerequisites: The pre-requisites for this tutorial are:

React Knowledge

Class Components

Functional Components

Creating Application: The below command will help you to start a new react app.

npx create-react-app testapp

Next, you have to move to the ‘testapp‘ project folder from the terminal.

cd testapp

Create a new components folder inside the src folder and create one component named child.js inside the component folder.

Project directory: It should look like this.

Passing properties from parent to child component using class components

When users pass the data from parent to child using the class components, they can access inside the child component using ‘this.props.property_name‘.

Steps:

Embed the child component to the parent component.

Pass the data variable (props) with an assigned value to the child component as an argument while embedding it to the parent component.

If a user wants to pass multiple data variables (props), all variable names should be unique.

In the child component, access the data variable value using ‘this.props.variable_name’.

Example:

Filename: App.js In this file, we will embed the child component to the parent component. Also, we pass multiple props to the child component.

Javascript

import React, { Component } from 'react';

import Child from './components/child.js';

// Child component embedded to parent component

// with props value

class App extends Component {

render() {

return (

<div>

<h1>This is a parent component</h1>

<ul>

<li>

<Child gfgcolor="green" usercolor="blue"/>

</li>

</ul>

</div>

);

}

}

export default App;

Filename: Child.js In the child.js file, we will access props from the parent component and render them inside the child component.

Javascript

import React, { Component } from 'react';

// Accessing the props value using this.props

class Child extends Component {

render() {

return (

<div>

<h1>This is a child component</h1>

<h1 style={{color: this.props.gfgcolor}}>

GeeksForGeeks

</h1>

<h1 style={{color: this.props.usercolor}}>

hello user

</h1>

</div>

);

}

}

export default Child;

Step to run the application: Open the terminal and type the following command.

npm start

Output:

In the above output image, the user can see the color of HTML elements is changed according to the props value.

Passing properties from parent to child component using functional components

To access properties from parent to child using a functional component, users don’t need to use ‘this.props‘ like class components. Users can access props value by writing variable names only.

Steps:

Embed the child component to the parent component.

Pass the props to the child component as an argument while embedding it to the parent component.

In the child component, access the data variable value by writing the name or variable only.

Example:

Filename: App.js In App.js, we will add a functional component and call a child component with props and their value.

Javascript

import React, { Component } from 'react';

import Child from './components/child.js';

// parent component

// embedding child component inside it

function App (){

return(

<div>

<h1>This is a parent component</h1>

<ul><li>

<Child gfgcolor="green" usercolor="blue"/></li>

</ul>

</div>

)

}

Filename: child.js In child.js, we will add props as a parameter of a functional component and use them inside the component.

Javascript

import React, { Component } from 'react';

// Passing props as a parameter

// inside the child component

function Child ({gfgcolor,usercolor}){

return(

<div>

<h1>This is a child component</h1>

<h1 style={{color: gfgcolor}}>GeeksForGeeks</h1>

<h1 style={{color: usercolor}}>hello user</h1>

</div>

)

}

Step to run the application: Open the terminal and type the following command.

npm start

