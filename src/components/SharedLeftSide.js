import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SharedLeftSide = () => {
    const [courseTypes, setCourseTypes] = useState([])

    useEffect(()=>{
        fetch('https://protable-learning-server.vercel.app/courseTypes')
        .then(res=> res.json())
        .then(data => setCourseTypes(data))
    },[])
    return (
        <div className='px-8 py-16 sticky top-16 z-50 bg-gray-400 h-full'>
        <h4 className='mb-6'>{courseTypes.length} Types of Courses are available now</h4>
            {
                courseTypes.map(course =><p className='text-indigo-700 mb-2' key={course.id} ><Link to={`/courses/${course.id}`}>{course.name}</Link></p> )
            }
        </div>
    );
};

export default SharedLeftSide;