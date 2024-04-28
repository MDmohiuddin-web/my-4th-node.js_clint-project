import { Link, useLoaderData } from "react-router-dom";
import Card from "../Cooffee/Card";
import { useState } from "react";

const Home = () => {
  const coffee = useLoaderData();
  const [coffees, setcoffees] = useState(coffee);
  return (
    <>
      <div className="w-[300px] bg-green-200 flex justify-between">
        <Link to="/addCoffee" className="btn btn-primary">
          addCoffee
        </Link>
        <Link to="/Users" className="btn btn-primary">
        Users
        </Link>

        <Link to="/Login" className="btn btn-primary">
        Login
        </Link>
        <Link to="/signup" className="btn btn-primary">
        signup
        </Link>
      </div>
      <h2>this is home page</h2>
      <div className="w-full bg-gray-600 flex flex-wrap gap-5 p-2 my-5">
        {coffees.map((coffees) => (
          <Card
            key={coffees._id}
            coffee={coffee}
            setcoffees={setcoffees}
            coffees={coffees}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Home;
