import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
const {id} = useParams();
  return (
    <div className='p-4'>
      <h4 className='bg-slate-500 p-4 text-white font-bold text-3xl text-center'>User: {id} </h4>
    </div>
  )
}

export default User
