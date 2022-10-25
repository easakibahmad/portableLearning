import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from './CourseDetail';

const Courses = () => {

    const courses = useLoaderData()
    return (
        <div className='border-zinc-700 border-l-2 h-full lg:grid lg:grid-cols-2'>
            {
                courses.map(course => 
                <CourseDetail key={course.courseID} course={course}></CourseDetail>
                )
            }
        </div>
    );
};

export default Courses;