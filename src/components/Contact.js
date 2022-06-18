import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <div>        
         <h1 style={{color:"white"}}>Contact us..</h1>
         <Form style={{width:"400px", height:"300px", alignItems:"center", backgroundColor:"#d8b7b7" , marginLeft:"480px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginLeft:"10px", marginRight:"10px"}}>
        <Form.Label style={{marginTop:"10px"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:"10px", marginRight:"10px"}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{marginLeft:"10px", marginRight:"10px"}}>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Contact