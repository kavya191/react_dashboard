import React from 'react'
import '../Login/Login.css'
import {Button} from 'react-bootstrap'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
const Login = () => {
  return (
    <section className="row">
  <div className="column1">
    <h1>signup</h1>
  </div>
  <div className="column2">
    <h2 className='title'>Sign In</h2>
    <h4 className='para'>Sign in to your account</h4>
    <div className='btn_style'>
    <Button className='google_btn'>  <FcGoogle />   Sign in with Google</Button>
    <Button className='apple_btn'> <FaApple />   Sign in with Apple</Button>
    </div>
  
  </div>
</section>
  )
}

export default Login