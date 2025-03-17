import React from "react";

class UserChild extends React.Component{
    constructor(props){
        super(props);
        console.log("user child -2 constructor")
    }

    componentDidMount(){
        console.log("user child - 2 component did mount")
    }
    render(){
        console.log("user child -2 render")
        return(
            <div>I am User Child -2</div>
        )
    }
}
export default UserChild;