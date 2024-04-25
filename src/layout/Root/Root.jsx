import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl">Hello world</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;