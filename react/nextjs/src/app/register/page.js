import { Button, Input } from "@nextui-org/react"

const pagee = ()=> {
    return(
      <div className="flex flex-row min-h-screen justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/back.jpg')" }}>
        <div className="flex flex-row items-center"></div>
      <div className="flex-shrink-0">
          <img src='/Samajik..png'alt="Samajik" className=" w-full max-w-md rounded-lg"/>
        </div> 
        <form className="block w-full max-w-md p-6 border border-gray-200 rounded-lg shadow bg-blue bg-opacity-50 dark:bg-gray-800 dark:border-gray-700 ml-0" style={{ backdropFilter: 'blur(10px)' }}>      
        <h1 className="text-4xl bg-blue flex items-center justify-center bg-transparent text-green-700 font-semibold">SignUp</h1><br/>
        <Input type="email" placeholder='Enter your email' required /><br/>
        <Input type="text" placeholder='Enter your username' required /><br/>
        <Input placeholder='Enter your password' type='Password' required /><br/>
        <Input placeholder='Confirm your password' type='Password' required /><br/>
        <Button type='submit' className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">SignUp</Button><br/><br/>
        <p>Already have an account? <a href="#" className='bg-transparent text-green-700 font-semibold'>Login</a></p>
        </form>
  
      </div>
      
    )
  
  }
  export default pagee