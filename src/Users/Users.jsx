import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [item,setitem]=useState(users);

  const handel=(id)=>{
    fetch(`http://localhost:1001/user/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.deletedCount > 0) {
        alert("delete success fully");
        const remaining = users.filter((user) => user.id !== _id);
        setitem(remaining);
      }
    })
// this is not woeking
  }
  return (
    <div className="w-4/5 m-auto ">
      <h4>this is users {users.length} we have</h4>
      <div className="p-5  ">
        {item.map((users) => (
          
            <div key={users._id} className="border-2 py-2">
              <p>email : {users.email}</p>
              <p>created time : {users.createdAt}</p>
              <button onClick={()=>handel(users.id)}
              className= "btn btn-primary">x</button>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Users;
