import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Home from "../components/Home";
import IndividualCourseDetails from "../components/IndividualCourseDetails";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=>fetch('https://protable-learning-server.vercel.app/courses')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
            },
            {
                path: '/courses/:id',
                element:<IndividualCourseDetails></IndividualCourseDetails>,
                loader: ({params})=>fetch(`https://protable-learning-server.vercel.app/courseTypes/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])