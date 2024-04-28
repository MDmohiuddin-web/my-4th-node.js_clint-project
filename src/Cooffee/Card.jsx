import { Link } from "react-router-dom";

const Card = ({ coffee, coffees, setcoffees }) => {
  const { _id, names, chef, Supplier, taste, category, Details, photo } =
    coffees;
  const coffeedelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:1001/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete success fully");
          const remaining = coffee.filter((cof) => cof.id !== _id);
          setcoffees(remaining);
        }
      });
  };
  return (
    <>
    {/* ther is coffees info */}
      <div className="m-auto card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="" className="h-[300px]" />
        </figure>
        <div className="card-body">
          <h2>names : {names}</h2>
          <p>chef : {chef}</p>
          <p>Supplier : {Supplier}</p>
          <p>taste : {taste}</p>
          <p>category : {category}</p>
          <p>Details : {Details}</p>
          <div className="flex gap-2">
            <Link className="btn btn-success">view</Link>

            <Link to={`/updateCoffee/${_id}`} className="btn btn-warning ">
              update
            </Link>

            <Link
              className="btn btn-primary "
              onClick={() => coffeedelete(_id)}
            >
              delete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
