import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, names, chef, Supplier, taste, category, Details, photo } =
    coffee;
  const handelupdateCoffee = (e) => {
    e.preventDefault();
    // console.log("submit");
    const form = e.target;
    const names = form.names.value;
    const chef = form.chef.value;
    const Supplier = form.Supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const Details = form.Details.value;
    const photo = form.photo.value;
    const updetecoffee = {
      names,
      chef,
      Supplier,
      taste,
      category,
      Details,
      photo,
    };
    console.log(updetecoffee);

    fetch(`http://localhost:1001/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updetecoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("update success fully");
        }
      });
  };
  return (
    <div>
      <div className="w-full ">
        <Link className="btn btn-primary" to="/">
          home
        </Link>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Update Coffee</h2>
        <p className="text-gray-600 mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>
        <form className="" onSubmit={handelupdateCoffee}>
          <div className="md:flex gap-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="names"
                defaultValue={names}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter coffee name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                chef
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                defaultValue={chef}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter coffee chef"
              />
            </div>
          </div>
          <div className="md:flex gap-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                id="name"
                defaultValue={Supplier}
                name="Supplier"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter coffee supplier"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                taste
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                defaultValue={taste}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>
          <div className="md:flex gap-2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                category
              </label>
              <input
                type="text"
                id="category"
                defaultValue={category}
                name="category"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter coffee category"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <input
                type="text"
                id="Details"
                defaultValue={Details}
                name="details"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          <div className="md:flex gap-2">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700">
                photo
              </label>
              <input
                type="text"
                id="photo"
                defaultValue={photo}
                name="photo"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter photo URL"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
