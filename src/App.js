import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Link } from 'react-router-dom';
import { deleteUser } from './reducer';

function App() {
  const users = useSelector((state)=>state.users)
  console.log(users);
  const dispatch = useDispatch();
  const handleDelete= (id)=>{
    dispatch(deleteUser({id:id}))
  }
  return (
    <div className="App ">
      <h1>Redux Example</h1>
     <Link to="/add"> <button>Add data</button></Link>
      <table className='table table-success table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index)=>(
             <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><Link to={`/edit/${user.id}`} className='bi bi-pen-fill btn btn-warning'></Link></td>
              <td><button className=' bi bi-trash3-fill btn btn-danger' onClick={()=>handleDelete(user.id)}></button></td>
             </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
