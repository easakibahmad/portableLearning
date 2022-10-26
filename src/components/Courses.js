import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from './CourseDetail';

const Courses = () => {

    const courses = useLoaderData()
    return (
        <div className='border-gray-300 border-l-1  h-full '>
            <h1 className='w-3/4 mx-auto pt-16 text-xl text-center text-rose-900 font-bold'>Most reviewed courses are now more affordable</h1>

            <div className='lg:grid lg:grid-cols-2'>
                {
                    courses.map(course => 
                    <CourseDetail key={course.courseID} course={course}></CourseDetail>
                    )
                }
            </div>
        </div>  
    );
};

export default Courses;