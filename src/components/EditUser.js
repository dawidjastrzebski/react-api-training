import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate,useParams  } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const EditUser = (props) => {
  const[selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  });

  const {users, editUser} = useContext(GlobalContext);
  const history = useNavigate();
  const params = useParams();
  const currentUserId = params.id;

  useEffect(()=>{
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
    //console.log(selectedUser)
  },[currentUserId,users]);

  const onSubmit = ()=>{   
    editUser(selectedUser);
    history('/');
    };

  const nameChanged = (e) => {    
    setSelectedUser({...selectedUser, name:e.target.value});     
    console.log(selectedUser);
    }

  return (
    <Form onSubmit={onSubmit}>
    <h1>Edit user</h1>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder='Edit Name' value={selectedUser.name} name="name" onChange={nameChanged}></Input>        
      </FormGroup> 
      <Button type="submit" style={{margin:"1px 15px 1px 1px"}}>Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

export default EditUser;