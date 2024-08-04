import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    
    let navigate = useNavigate();

    const {id} = useParams();
    
    //Use the variable name same as the Entity names used in the backend
    const [User,setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email}=User;

    const onInputChange =(e) =>{
        setUser({...User, [e.target.name]: e.target.value});

    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onsubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,User);
        navigate("/");
    };

    const loadUser = async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit User</h2>
                <form onSubmit = {(e) => onsubmit(e)} >               
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">
                        UserName
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Username"
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        E-mail
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your e-mail address"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">
                    Submit
                </button>
                <Link className="btn btn-outline-danger mx-2" to="/">
                    Cancel
                </Link>
                </form> 
            </div>

        </div>
    </div>
  )
}
