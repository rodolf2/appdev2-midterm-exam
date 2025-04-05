const myUrl =
  "https://www.example.com:8080/products?category=electronics&sort=price";
const parsedUrl = require("url").parse(myUrl, true);
console.log(parsedUrl);
console.log(parsedUrl.protocol);
console.log(parsedUrl.hostname);
console.log(parsedUrl.port);
console.log(parsedUrl.pathname);
console.log(JSON.stringify(parsedUrl.query));
