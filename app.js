import React  from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
        <h1 className="head">
            Namaste React Title!!
        </h1>
    )
const HeadingComponent = () => {
    return (
    <div id="container">   
    <h2>{100+100}</h2>
        <Title/>
        <h1>Namaste from React Functional Component!!</h1>
    </div> 
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);