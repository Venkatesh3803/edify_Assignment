import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ListTask from "./components/ListTask"
import Sidebar from "./components/Sidebar"
import Layout from "./lib/Layout"
import HomePage from "./pages/HomePage"
import AddTask from "./pages/AddTask"
import Setting from "./pages/Setting"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import EditPage from "./pages/EditPage"
import TaskPage from "./pages/TaskPage"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/addtask",
          element: <AddTask />
        },
        {
          path: "/setting",
          element: <Setting />
        },
        {
          path: "/edit/:id",
          element: <EditPage />
        },
        {
          path: "/task/:id",
          element: <TaskPage />
        },
      ]
    }
    ,
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/signin",
      element: <SignIn />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
