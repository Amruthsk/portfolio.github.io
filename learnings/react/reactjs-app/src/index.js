import React from "react";
import ReactDOM from "react-dom/client";

// {JSX Syntax} → (Transpilation)/[Babel] ⇒ [React Element*]
//[React Element] ⇔ {[JS Object] ~ {UI Blueprint}} not ui
const element = <h1>React is easy</h1>
console.log(element);

//(createRoot) @ [DOM Node] ⇒ [React Root Container*]

const root = ReactDOM.createRoot(document.getElementById("root"));
//[React Root*].(render) @ [React Element*] ⇒ [UI becomes visible in DOM]
root.render(element);