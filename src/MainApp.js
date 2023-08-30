import React from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from "./Website/App.js";
import PressroomApp from "./Pressroom/PressroomApp.js";
import WedsinIndividualBlog from "./Pressroom/Components/WedsinIndividualBlog/WedinIndividualBlog.js";
import ContactUs from "./ContactUs/ContactUs.js";
import AboutUs from "./AboutUs/AboutUs.js";
import Faq from "./Faq/Faq.js";
import Jobs from "./Jobs/Jobs.js";
import Privacy from "./Website/Components/Privacyv/Privacyv.js";
import Terms from "./Website/Components/Terms/Terms.js";

const router = createBrowserRouter([
    {path:'/' , element:<App/>},
    {path:'/Blogs' , element:<PressroomApp/>},
    {path:'/Blogs/:individualBlogId' , element:<WedsinIndividualBlog/>},
    {path:'/Contact' , element:<ContactUs/>},
    {path:'/About' , element:<AboutUs/>},
    {path:'/faq' , element:<Faq/>},
    {path:'/Jobs' , element:<Jobs/>},
    {path:'/Privacy' , element:<Privacy/>},
    {path:'/Terms' , element:<Terms/>}
])

const MainApp = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MainApp;