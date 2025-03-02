import React  from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [
                React.createElement("h1",{},"I am Himanshu Jain"),
                React.createElement("h2",{},"I am an H2 Tag")
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"I am an H1 Tag"),
                React.createElement("h2",{},"I am an H2 Tag")
            ]
        )
    ]
);


const heading = React.createElement("h1",{
    id:"heading"
},"Hellow World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);