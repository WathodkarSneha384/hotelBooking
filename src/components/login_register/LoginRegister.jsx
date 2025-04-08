import React from 'react'
import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function LoginRegister() {
    const [isExistingUser,setIsExistingUser]=useState(true)
  return (
    <div>

    {isExistingUser? <SignIn newUser={setIsExistingUser}/>:<SignUp existingUser={setIsExistingUser}/>}
     
      
    
  </div>
  )
}
