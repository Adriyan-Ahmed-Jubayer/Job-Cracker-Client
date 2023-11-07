import{  createBrowserRouter } from"react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllJobs from "../Pages/AllJobs";
import axios from "axios";
import JobDetails from "../Pages/JobDetails";
import Protection from "../Protection/Protection";
import AddJob from "../Pages/AddJob";
import MyJobs from "../Pages/MyJobs";
import Error from "../Pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/all-jobs",
          element: <AllJobs></AllJobs>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/add-job",
          element: <Protection><AddJob></AddJob></Protection>,
        },
        {
          path: "/collection",
          element: <Protection><MyJobs></MyJobs></Protection>,
        },
        {
          path: "/job/:id",
          element: <Protection><JobDetails></JobDetails></Protection>,
          loader: ({params}) => axios.get(`http://localhost:5000/api/v1/job/${params.id}`)
          
        },
    ]
  },
]);

export default router;
