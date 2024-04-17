import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateuser } from "./reducer";


export function EditComp(){
    const {id}=useParams();
    const users = useSelector((state)=>state.users);
    const existingUSer = users.filter(e=>e.id == id);
    console.log(existingUSer)
    const {name, email} = existingUSer[0];
    const [upname, setName] = useState(name);
    const [upemail, setEmail]= useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleUpdate(e){
        e.preventDefault();
        dispatch(updateuser({
            id:id,
            name:upname,
            email:upemail            
        }))
            navigate('/')
    }
    return(
            <form className="App"  onSubmit={handleUpdate}>
             <h1>Update Existing User</h1>
            <div>
                <label>Name</label>
                <input type="text" value={upname} onChange={(e)=>{setName(e.target.value)}}/><br/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={upemail} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            </div>
            <button>Add User</button>
        </form>      
    )
}

