import { Button, image, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/back.jpg')" }}>
      <div className="flex flex-row items-center"></div>
      <div className="flex-shrink-0">
          <img src='/Samajik..png'alt="Samajik" className="max-w-sm rounded-lg"/>
        </div>     
      <form className="block w-full max-w-md p-6 border border-gray-200 rounded-lg shadow bg-blue bg-opacity-50 dark:bg-gray-800 dark:border-gray-700 ml-0" style={{ backdropFilter: 'blur(10px)' }}>      
      <h1 className="text-4xl bg-blue flex items-center justify-center bg-transparent text-blue-700 font-semibold">Login</h1><br/>
      <Input type="text" placeholder='Enter your username' required/><br/>
      <Input placeholder='Enter your password' type='password' required/><br/>
      <Button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Login</Button><br/><br/>
      <p>Don't have an account yet? <a href="/register" className='bg-transparent text-red-700 font-semibold'>Signup</a></p><br/>
      <p className='bg-transparent text-red-700 font-semibold'>Forget Password?<a href='#'></a></p>
      </form>
    </div>

    
  )
}
export default page

