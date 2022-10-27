import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../componentsStyle/SharedLeftSide.css'

const SharedLeftSide = () => {
    const [courseTypes, setCourseTypes] = useState([])

    useEffect(()=>{
        fetch('https://protable-learning-server.vercel.app/courseTypes')
        .then(res=> res.json())
        .then(data => setCourseTypes(data))
    },[])
    return (
        <div className='lg:px-8 sm:px-4 p-2 lg:py-16 sm:py-2 lg:sticky lg:top-16 lg:z-50 '>
        <h4 className='mb-4 lg:block hidden lg:font-bold lg:2xl text-center'><p className='text-sm font-bold text-rose-900'>Chose Your course from here.</p></h4>
        <p className='px-2 mb-4 lowercase lg:block hidden text-sm text-rose-900'>{courseTypes.length} Types of Courses are available now!!</p>
            {
                courseTypes.map(course =><p className='hover:bg-white hover:text-black px-2 rounded lg:text-indigo-700 mb-2' key={course.id} ><Link to={`/courses/${course.id}`}>{course.name}</Link></p> )
            }
        </div>
    );
};

export default SharedLeftSide;