import React from "react";
import "../Login/Login.css";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="row">
      <div className="column1">
        <h1>signup</h1>
      </div>
      <div className="column2">
        <h2 className="title">Sign In</h2>
        <h4 className="para">Sign in to your account</h4>
        <div className="btn_style">
          <Button className="google_btn">
            {" "}
            <FcGoogle /> Sign in with Google
          </Button>
          <Button className="apple_btn">
            {" "}
            <FaApple /> Sign in with Apple
          </Button>
        </div>
        <Form className="login_form">
          <Form.Label htmlFor="inputPassword5" className="text-white">
            Email
          </Form.Label>
          <Form.Control
          className="login_input" 
            name="email"
            type="email"
            id="emailId"
            aria-describedby="passwordHelpBlock"
          />
          {/* {!emailValid && <p className="text-danger">* invalid email !</p>} */}
          <Form.Label htmlFor="inputPassword5" className="text-white">
            Password
          </Form.Label>
          <Form.Control name="psw" type="password" id="inputPassword5" className="login_input" />
          {/* {!pswValid && <p className="text-danger">* invalid password !</p>} */}
          <p className="mt-3"><Link className="text-decoration-none ">Forgot Password ?</Link></p>
          <div className="login_bttn">
          <Button >Sign In</Button>
          </div>

          

          <p className="text-black pt-5 d-flex justify-content-center ">Don't have an account? <Link className="text-decoration-none">Register Here</Link></p>
        </Form>
      </div>
    </section>
  );
};

export default Login;
