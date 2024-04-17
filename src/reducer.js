 import { createSlice } from "@reduxjs/toolkit";
var userList=[
    {
        name:"jig",
        id:1,
        email:"jig86026@gmail.com"
    },
    {
        name:"ram",
        id:2,
        email:"ram86026@gmail.com"
    }
]
 const userSlice = createSlice({
    name:"user",
    initialState:userList,
    reducers:{
        adduser:(state,action)=>{
            console.log(action)
            state.push(action.payload)
        },
        updateuser:(state,action)=>{
            const {id,name,email}=action.payload;
            const update = state.find(user=>user.id == id);
            if(update){
                update.name=name;
                update.email=email;
            }
        },
        deleteUser:(state,action)=>{
            const {id} = action.payload;
            const idFind = state.find(user=>user.id == id);
            if(idFind){
                return state.filter(f=>f.id !== id)
            }
        }

    }
})
export const {adduser,updateuser, deleteUser}= userSlice.actions;
export default userSlice.reducer;