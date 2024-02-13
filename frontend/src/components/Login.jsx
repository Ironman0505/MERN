import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

function Login() {

    const [mail,setMail]=useState("");
    const [pwd,setPwd]=useState("");

    const login=()=>{
        

    }


  return (
    <Form className='w-50 mx-auto' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={login} >
        Submit
      </Button>
    </Form>
  );
}

export default Login;