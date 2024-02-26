---
title: How to pass property from a parent component props to a child component ?
image: /images/blog/props_pass.jpg
author:
  name: Javaid Khan
  avatar: /images/author/javaid.jpeg
date: 2022-04-04T05:00:00Z
draft: false
---

In React.js, props (short for "properties") are a mechanism for passing data from a parent component to a child component. Props allow you to pass information from a higher-level component to a lower-level one, enabling communication between components.

Here's a basic example of how props are used in React:

1. **Passing Props from Parent to Child:**
   ```jsx
   // ParentComponent.jsx

   import React from 'react';
   import ChildComponent from './ChildComponent';

   const ParentComponent = () => {
     // Data to be passed to the child component
     const data = "Hello from parent!";

     return (
       <div>
         {/* Passing data to the child component using props */}
         <ChildComponent message={data} />
       </div>
     );
   }

   // ChildComponent.jsx



   const ChildComponent = (props) => {
     return (
       <div>
         {/* Accessing the data passed from the parent component */}
         <p>{props.message}</p>
       </div>
     );
   }

   export default ChildComponent;
   ```

   In this example, the `ParentComponent` passes a piece of data (`"Hello from parent!"`) to the `ChildComponent` using the prop named `message`.

2. **Accessing Props in a Functional Component:**
   In a functional component (like `ChildComponent` in the example above), you can access the props as function parameters. The `props` parameter contains all the properties passed to the component.

3. **Accessing Props in a Class Component:**
   In a class component, you can access props using `this.props`.

   ```jsx
   // ClassComponent.jsx

   

   class ClassComponent extends Component {
     render() {
       return (
         <div>
           {/* Accessing props in a class component */}
           <p>{this.props.message}</p>
         </div>
       );
     }
   }

   export default ClassComponent;
   ```

   When using the `ClassComponent` in the parent component, you would pass the props similarly as with the functional component.

Remember that props are immutable (cannot be changed) within the component receiving them. If a component needs to modify the data, it should do so through state management or by invoking functions passed as props.