import React, {useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useNavigate  } from 'react-router-dom';
import { v4 as uuid} from 'uuid';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { useContext } from 'react';

const AddUser = () => {
  const[name, setName] = useState('');

  const { addUser } = useContext(GlobalContext);
  const history = useNavigate();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name: name
    }
    console.log('new user: ' + JSON.stringify(newUser));
    addUser(newUser);
    history('/');
  };

  const nameChanged = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
    <h1>Add new user</h1>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder='Enter Name' name="txtName" value={name} onChange={nameChanged}></Input>        
      </FormGroup>
      <Button type="submit" style={{margin:"1px 15px 1px 1px"}}>Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export default AddUser;
