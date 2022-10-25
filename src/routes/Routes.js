import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CourseDetail from "../components/CourseDetail";
import Courses from "../components/Courses";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Home from "../components/Home";
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
                element: <Courses></Courses>
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
                element: <CourseDetail></CourseDetail>
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