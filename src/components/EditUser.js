import React from 'react'
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const EditUser = () => {
  return (
    <Form>
    <h1>Edit user</h1>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder='Edit Name'></Input>        
      </FormGroup>
      <Button type="submit" style={{margin:"1px 15px 1px 1px"}}>Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export default EditUser;