import React, { useState } from 'react'

const User = () => {
  const[count, setCount] = useState(0);
  return (
    <div className='user-card'>
      <h2>{count}</h2>
      <h2>Name: Himanshu</h2>
      <h3>Location: Delhi</h3>
      <h4>Link :</h4>
    </div>
  )
}

export default User
