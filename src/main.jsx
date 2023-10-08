import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import "./css/index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contacts from "./companet/pages/Contacts.jsx";
import { About } from "./companet/pages/About.jsx";
import { Products } from "./companet/pages/Products.jsx";
import { Hompage } from "./companet/pages/Hompage.jsx";

const router = createBrowserRouter([
  {
   path:"/",
    element: <App />,
    children: [
      {

        path: "homepage/",
        element: <Hompage />,
      },
      {

        path: "contacts/",
        element: <Contacts />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "products/",
        element: <Products />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
