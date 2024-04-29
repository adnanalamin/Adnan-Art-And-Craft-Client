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
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import Update from "../Pages/Update/Update";
import PrivetRouter from "./PrivetRouter";

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
        element: <PrivetRouter><AddItems></AddItems></PrivetRouter>,
      },
      {
        path: "/allartandcraft",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("https://adnan-art-and-craft-server.vercel.app/artandcraft"),
      },
      {
        path: "/productDetails/:id",
        element: <PrivetRouter><ProductDetails></ProductDetails></PrivetRouter>,
      },
      {
        path: "/myartandcraft",
        element: <PrivetRouter><MyArtAndCraft></MyArtAndCraft></PrivetRouter>,
      },
      {
        path: '/categorypage/:subcategory',
        element: <PrivetRouter><CategoryPage></CategoryPage></PrivetRouter>,
      },
      {
        path: '/updateitem/:id',
        element: <PrivetRouter><Update></Update></PrivetRouter>,
        loader: ({params}) => fetch(`https://adnan-art-and-craft-server.vercel.app/allartandcraft/${params.id}`)
      }
    ],
  },
]);

export default router;
