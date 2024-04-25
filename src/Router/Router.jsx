import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },
]);

export default router;
