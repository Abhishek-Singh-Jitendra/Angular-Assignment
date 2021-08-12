var fs = require("fs");
var url = require("url");
var os = require("os");

const urlLink = "http://localhost:50/get?year=2020&month=aug&day=27&active=1"

fs.readFile("example.txt", (err, data) => {
    console.log(data);
});
var fs = require("fs");
fs.readFile("example.txt", "utf8", (err, data) => {
    console.log(data);
});
const demo1 = "Hi I am Abhishek";
fs.writeFile("example.txt", demo1, () => {
    console.log("Updated the file");
});
const demo2 = "Thankyou";
fs.appendFile("example.txt", demo2, () => {
    console.log("Updated the file");
});
var urlobj = url.parse(urlLink);
console.log(urlobj.port);
console.log(urlobj.query);
console.log(urlobj.pathname);
console.log(os.platform());
console.log(os.freemem());