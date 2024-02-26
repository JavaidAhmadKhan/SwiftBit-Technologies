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

How to use Fetch

The Fetch API is provided as a high-level function, and in its most basic version, it takes a URL and produces a promise that resolves to the response:

fetch("http://example.com/api/endpoint")

.then((response) => {

// Do something with response

})

.catch(function (err) {

console.log("Unable to fetch -", err);

});

You may also change how the fetch process is carried out by appending an optional object after the URL, which allows you to change things like request methods, request headers, and other options. The request’s response is an object that contains the returned metadata for our request, which consists of elements like response data, headers, request date, and so on.

Over 200k developers use LogRocket to create better digital experiences

https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.pngLearn more →

Benefits of using the Fetch API in Node.js

The fact that the Fetch API now comes prepackaged as an inbuilt Node module is extremely beneficial to the developer community. Some of these benefits include:

No extra fetch package

Inbuilt Fetch for Node.js might mean the end for packages like node-fetch, got, cross-fetch, and many others that were built for the same purpose. This means you won’t have to do an npm install before performing network operations in Node.

Furthermore, node-fetch, currently the most popular fetch package for Node.js, was recently switched to an ESM-only package. This means you’re unable to import it with the Node require() function. The native Fetch API will make HTTP fetching in Node environments feel much smoother and more natural.

Cross-platform familiarity

Developers who have previously used the Fetch API on the frontend will feel right at home using the inbuilt fetch() method in Node. It’ll be much simpler and more intuitive than using external packages to achieve the same functionality in a Node environment.

Faster implementation

As mentioned previously, the new Fetch implementation is also based on Undici, a fast, reliable, and spec-compliant HTTP client for Node.js. As a result, you should anticipate improved performance from the Fetch API as well.

Drawbacks

The browser’s Fetch API has some drawbacks in and of itself, and these will undoubtedly be transferred to the new Node.js Fetch implementation:

Error handling

Fetch performs poorly when it comes to error management; only network faults are considered actual errors. This means that Fetch will only reject a promise if the user is not connected to the internet or if a rare networking fault happens; errors delivered by the server are ignored.

More great articles from LogRocket:

Don't miss a moment with The Replay, a curated newsletter from LogRocket

Use React's useEffect to optimize your application's performance

Switch between multiple versions of Node

Learn how to animate your React app with AnimXYZ

Explore Tauri, a new framework for building binaries

Compare NestJS vs. Express.js

Discover popular ORMs used in the TypeScript landscape

Setting timeouts

Setting timeouts to cancel a specific request after a certain period of time is likewise difficult to achieve in Fetch.

No request progress

Another major drawback is that Fetch does not include a method to easily monitor request progress, whereas libraries like Axios handle this graciously.

Can I use Fetch in Node.js now?

Fetch is already available as an experimental feature in Node v17. If you’re interested in trying it out before the main release, you’ll need to first download and upgrade your Node.js version to 17.5.

Alternatively, you can use nvm to update directly from your command line/terminal:

nvm install 17.5

We can now run Fetch-related code by adding the --experimental-fetch parameter with the node command:

node app.js --experimental-fetch

Migrating from other libraries

At the time of writing, there is no official migration guide in place. Because the API is currently experimental, it may experience some breaking changes or other updates when it hits stable release. As a result, it’s best to wait until the API is stable before migrating any projects in production.

Conclusion

Overall, it’s exciting that Fetch is finally coming to Node.js core, as this had been a longtime request from the developer community. Here in this article, we’ve looked into how asynchronous web requests have evolved over the years and how Fetch finally came to be in Node.js as well.

It may take a while (about a year or two) for the Fetch API to be fully stable in Node.js since there’s still a lot to do to make it standard-compliant. Many interesting updates are also set to happen in the near future, one of which includes adding HTTP/2 support to Undici, and eventually the Fetch API itself.