import React from 'react'
import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function LoginRegister() {
    const [isExistingUser,setIsExistingUser]=useState(true)
  return (
    <div>
      <div className='d-flex'>
      <a href='/' className='btn btn-warning ms-auto p-2 m-2'>Back</a>
      </div>

    {isExistingUser? <SignIn newUser={setIsExistingUser}/>:<SignUp existingUser={setIsExistingUser}/>}
     
      
    
  </div>
  )
}
