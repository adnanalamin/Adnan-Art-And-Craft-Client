import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddItems from "../Pages/AddItems/AddItems";
import AllArtAndCraft from "../Pages/AllArtAndCraft/AllArtAndCraft";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyArtAndCraft from "../Pages/MyArtAndCraft/MyArtAndCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/additems",
        element: <AddItems></AddItems>,
      },
      {
        path: "/allartandcraft",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("http://localhost:5000/artandcraft"),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/myartandcraft",
        element: <MyArtAndCraft></MyArtAndCraft>,
      },
    ],
  },
]);

export default router;
