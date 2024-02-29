---
title: The Fetch API is finally coming to Node.js
image: /images/blog/nodejs.png
author:
  name: Javaid Khan
  avatar: /images/author/javaid.jpeg
date: 2022-04-04T05:00:00Z
draft: false
---

The Fetch API was a long time coming, and its introduction heralded a new era of live and interactive webpages. On 1 February 2022, the Node.js core team merged a pull request adding the Fetch API to Node. To understand why this is such a big deal, let’s explore how Fetch came to be and what this new addition means for Node.js developers.

Backstory

In the beginning…

In the early days of the web, it was difficult to perform asynchronous requests across websites; developers had to use clumsy approaches to interact across multiple networks.

Internet Explorer 5 changed this in 1998 with the introduction of XMLHttpRequest, an API meant to overcome this limitation. Initially, XMLHttpRequest was designed to fetch XML data via HTTP, hence the name. Sometime after it was released, however, support for other data formats — primarily JSON, HTML, and plaintext — was added.

The XMLHttpRequest API worked like a charm back then, but as the web grew, it became so difficult to work with that JavaScript frameworks, notably jQuery, had to abstract it to make implementation easier and success/error handling smoother.

Introducing the Fetch API 

In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, and it has subsequently become the de facto standard for making asynchronous calls in web applications. One significant advantage Fetch has over XMLHttpRequest is that it leverages promises, allowing for a simpler and cleaner API while avoiding callback hell.

Though the Fetch API has been around for a while now, it hasn’t been included in Node.js core due to some limitations. In a question answered by one of Node’s core contributors on Hacker News, it was noted that the browser’s Fetch API implementation is dependent on a browser-based Web Streams API and the AbortController interface (for aborting fetch requests), which wasn’t available in Node.js until recently. As such, it was difficult to decide on the best approach to include it in Node.js core.

Long before the addition of the Fetch API, the request module was the most popular method for making HTTP requests in Node. But the JavaScript ecosystem at large quickly evolved, and newly introduced patterns made request obsolete. A crucial example here is async/await; there was no provision for this in the request API, and the project was later deprecated due to these limitations.

Undici

In 2018, Undici was introduced as a newer and faster HTTP/1.1 client for Node.js, with support for pipelining and pooling, among other features. Undici made the fetch() implementation in Node.js possible after a lot of hard work from the core team.
