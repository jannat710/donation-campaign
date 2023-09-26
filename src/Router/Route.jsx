import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DonationDetails from "../pages/DonationDetails/DonationDetails";



const myCreatedRoute = createBrowserRouter([
    {
        path :"/",
        element :<MainLayout></MainLayout>,
        errorElement :<ErrorPage></ErrorPage>,
        children :[
            {
                path :"/",
                element :<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path :"/donation",
                element :<Donation></Donation>
            },
            {
                path :"/statistics",
                element :<Statistics></Statistics>
            },
            {
                path:"/donation-details/:id",
                element :<DonationDetails></DonationDetails>,
                loader :()=>fetch('/data.json')
            }
        ]
    }
])

export default myCreatedRoute;