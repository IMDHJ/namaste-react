import React from "react";
import UserChild from "./UserChild";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0,
            userInfo :{
                name: "Dummy Name",
                location: "Default location"
            }
        }
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/imdhj")
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo: json
    })

}
    render(){
        console.log("Child Render")
        return (
            <div className='user-card'>
              <img src = {this.state.userInfo.avatar_url}/>
              <h2>Name: {this.state.userInfo.name}</h2>
              <h3>Location: {this.state.userInfo.location}</h3>
              <h3>Bio: {this.state.userInfo.bio}</h3>
              <h4>Link :</h4>
            </div>
          )
    }
}

export default UserClass;