import { SignIn } from '@clerk/nextjs'
import React from 'react'
function SignInPage() {
  return (
   <SignIn fallbackRedirectUrl={"/"}/>
  )
}

export default SignInPage