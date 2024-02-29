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



   When using the `ClassComponent` in the parent component, you would pass the props similarly as with the functional component.

Remember that props are immutable (cannot be changed) within the component receiving them. If a component needs to modify the data, it should do so through state management or by invoking functions passed as props.