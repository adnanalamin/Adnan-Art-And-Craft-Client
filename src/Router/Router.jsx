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
        loader: () => fetch("https://adnan-art-and-craft-server.vercel.app/artandcraft"),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/myartandcraft",
        element: <MyArtAndCraft></MyArtAndCraft>,
      },
      {
        path: '/categorypage/:subcategory',
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: '/updateitem/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://adnan-art-and-craft-server.vercel.app/allartandcraft/${params.id}`)
      }
    ],
  },
]);

export default router;
