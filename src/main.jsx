import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './Pages/Homepage/App'
import Aboutme from "./Pages/Aboutme";
import Projects from "./Pages/projects";
import Services from "./Pages/services";
import Partnership from "./Pages/partnership";
import Homigram from "./Projects/homigram";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutme",
    element: <Aboutme />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/partnership",
    element: <Partnership />,
  },
  {
    path: "/projects/homigram",
    element: <Homigram />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
