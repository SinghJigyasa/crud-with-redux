import { useState } from "react"
import { adduser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function AddUser(){
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const users = useSelector((state)=>state.users)

    function handleSubmit(e){
        e.preventDefault();
        dispatch(adduser({id:users[users.length-1].id+1,name, email }))
        navigate('/');
    }
    return(
            
            <form className="m-2 p-3 h-100 justify-content-center align-items-center bg-secondary border border-dark" onSubmit={handleSubmit}>
                <h1>Add User</h1>
                
                <label className="form-label ">Name</label>
                <input className="form-input" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
                 
               <label className="form-label">Email</label>
               <input className="form-input" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
            
            <button  className="btn btn-success align-items-center">Add User</button>
        </form>
       
    )
}   