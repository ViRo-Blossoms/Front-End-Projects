import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Nav from "./assets/Nav";
import Home from "./assets/Home";
import Create from "./assets/Create";
import Update from "./assets/Update";
import Delete from "./assets/Delete";
import Read from "./assets/Read";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Create",
        element: <Create />,
      },
      {
        path: "/Read",
        element: <Read />,
      },
      {
        path: "/Update",
        element: <Update />,
      },
      {
        path: "/Delete",
        element: <Delete />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// [X] Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// [X] Contain at least 10 custom components
// [X] Allow for all CRUD operations via one or more APIs
