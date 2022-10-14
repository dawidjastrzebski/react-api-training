import React from 'react'
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const AddUser = () => {
  return (
    <Form>
    <h1>Add new user</h1>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder='Enter Name'></Input>        
      </FormGroup>
      <Button type="submit" style={{margin:"1px 15px 1px 1px"}}>Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export default AddUser;
