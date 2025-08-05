import React from 'react'
import Header from '../../../../../../components/shared/Header'
import { transformationTypes } from '../../../../../../constants'
import TransformationForm from '../../../../../../components/shared/TransformationForm'
import { auth } from '@clerk/nextjs/server'
import { getUserById } from '@/lib/actions/user.action'
import {redirect} from 'next/navigation'
const addTransformationPage=async({params:{type}}: SearchParamProps) => {
  const transformation=transformationTypes[type]
  const {userId}= await auth()
  if(!userId){
    redirect('/sign-in')
  }
  const user=await getUserById(userId)
  return (
    <>
   <Header title={transformation.title}
   subtitle={transformation.subTitle}/>

   <TransformationForm
    action='Add'
    userId={user._id}
    type={transformation.type as TransformationTypeKey}
    creditBalance={user.creditBalance}
    
    />

   </>
  )
}

export default addTransformationPage