'use client'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, DatePicker, Input } from '@nextui-org/react';


const SignupSchema = Yup.object().shape({
  // firstName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password too short!')
    .required('Required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  birthdate: Yup.date().required('Required'),
});

const Register = () => (
  <Formik
    initialValues={{
      // firstName: '',
      // lastName: '',
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
      birthdate: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      console.log(values);
    }}
  >
    {({ errors, touched, handleChange, setFieldValue }) => (
      <div className="flex flex-row min-h-screen justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/back.jpg')" }}>
        <div className="flex flex-row items-center"></div>
        <div className="flex-shrink-0">
          <img src='/Samajik..png' alt="Samajik" className="w-full max-w-md rounded-lg" />
        </div>
        <Form className="block w-full max-w-md p-6 border border-gray-200 rounded-lg shadow bg-blue bg-opacity-50 dark:bg-gray-800 dark:border-gray-700 ml-0" style={{ backdropFilter: 'blur(10px)' }}>
          <h1 className="text-4xl bg-blue flex items-center justify-center bg-transparent text-green-700 font-semibold">SignUp</h1><br />
          
          {/* <Input name="firstName" type="text" onChange={handleChange} placeholder="Enter your first name" required /><br />
          {errors.firstName && touched.firstName ? 
          <div>{errors.firstName}</div> : null}

          <Input name="lastName" type="text" onChange={handleChange} placeholder="Enter your last name" required /><br />
          {errors.lastName && touched.lastName ? 
          <div>{errors.lastName}</div> : null} */}

          <Input name="email" type="email" onChange={handleChange} placeholder="Enter your email" required /><br />
          {errors.email && touched.email ? 
          <div>{errors.email}</div> : null}

          <Input name="username" type="text" onChange={handleChange} placeholder="Enter your username" required /><br />
          {errors.username && touched.username ? 
          <div>{errors.username}</div> : null}

          <DatePicker name="birthdate" label="Birth of date"/><br/>

          {errors.birthdate && touched.birthdate ? <div>{errors.birthdate}</div> : null}

          <Input name="password" type="password" onChange={handleChange} placeholder="Enter your password" required /><br />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}

          <Input name="confirmpassword" type="password" onChange={handleChange} placeholder="Confirm your password" required /><br />
          {errors.confirmpassword && touched.confirmpassword ? <div>{errors.confirmpassword}</div> : null}

          <Button type="submit" className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">SignUp</Button><br /><br />
          <p>Already have an account? <a href="/home" className='bg-transparent text-green-700 font-semibold'>Login</a></p>
        </Form>
      </div>
    )}
  </Formik>
);

export default Register;




{/* // 'use client'
// import { Button, DatePicker, Input } from "@nextui-org/react";


// const pagee = ()=> {
//     return(
//       <div className="flex flex-row min-h-screen justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/back.jpg')" }}>
//         <div className="flex flex-row items-center"></div>
//       <div className="flex-shrink-0">
//           <img src='/Samajik..png'alt="Samajik" className=" w-full max-w-md rounded-lg"/>
//         </div> 
//         <form className="block w-full max-w-md p-6 border border-gray-200 rounded-lg shadow bg-blue bg-opacity-50 dark:bg-gray-800 dark:border-gray-700 ml-0" style={{ backdropFilter: 'blur(10px)' }}>      
//         <h1 className="text-4xl bg-blue flex items-center justify-center bg-transparent text-green-700 font-semibold">SignUp</h1><br/>
//         <Input type="email" placeholder='Enter your email' required /><br/>
//         <Input type="text" placeholder='Enter your username' required /><br/>
//         <DatePicker label="Birth date"/><br/>
//         <Input placeholder='Enter your password' type='Password' required /><br/>
//         <Input placeholder='Confirm your password' type='Password' required /><br/>
//         <Button type='submit' className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">SignUp</Button><br/><br/>
//         <p>Already have an account? <a href="#" className='bg-transparent text-green-700 font-semibold'>Login</a></p>
//         </form>
  
//       </div>
      
//     )
  
//   } */}