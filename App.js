import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="2">
    Namaste React from JSX
  </h1>
);

//component composition
const Heading = () => {
  return (
    <div className="container">
      <Title />
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};
//remember it is an react element which is a javascript object and render() function will convert it to HTML element and print it on screen

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
