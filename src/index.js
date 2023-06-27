import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <div>
    <h3>hello world!!</h3>
    <Person />
    <Message />
  </div>

}

const Person = () => <h1>Person</h1>;

const Message = () => {
    return (
        <h3>message from developer</h3>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
