import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Index from "./routes/index";
import ErrorPage from "./error-page";
import { Location, About, Faqs, Financing, Root, Services, Contact } from "./routes";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { path: "", element: <Index /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "financing", element: <Financing /> },
      { path: "faqs", element: <Faqs /> },
      { path: "location", element: <Location /> },
      { path: "services", element: <Services /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
