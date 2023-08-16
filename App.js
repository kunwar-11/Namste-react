import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("div", { className: "main" }, [
  React.createElement("h1", { id: "head1" }, "Hello World From nested H1"),
  React.createElement("p", { id: "para1" }, "Hello from nested sibling P"),
]);

console.log(element); //remember it is an react element which is a javascript object and render() function will convert it to HTML element and print it on screen

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
