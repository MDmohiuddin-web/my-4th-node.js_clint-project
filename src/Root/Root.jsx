import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="capitalize">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;