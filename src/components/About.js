import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{
  constructor(props){
      super(props)

  }

  render(){
    return (
      <div>
        <h1>About Namaste React</h1>
        <UserClass name = {"Himanshu Jain Class"} location ={"Delhi Class"}/>
      </div>
    )
  }
}

export default About

/*
parent const
parent render

child Const
Child Render

child -2 const
Child -2 Render

child Const
Child Render

child -2 const
Child -2 Render

child -2 component did mount
child -2 component did mount
child component did mount
child component did mount
Parent component did mount

*/

