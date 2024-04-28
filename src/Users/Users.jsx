import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="w-4/5 m-auto ">
      <h4>this is users {users.length} we have</h4>
      <div className="p-5  ">
        {users.map((users) => (
          
            <div key={users._id} className="border-2 py-2">
              <p>email : {users.email}</p>
              <p>created time : {users.createdAt}</p>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Users;
