import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext)
    
    return (
                <div className="carousel w-full h-96 border-zinc-700 border-l-2">
                <div id="slide1" className="carousel-item relative w-full backdrop-brightness-50 bg-white/30">
                    <img src="https://m.economictimes.com/thumb/msid-92062293,width-1200,height-900,resizemode-4,imgsize-57232/from-diagnosis-to-treatment-from-prevention-to-therapeutics-artificial-intelligence-has-made-many-things-possible-which-had-been-absolutely-unachievable-before-.jpg" className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a> 
                    {
                        user?.uid ?
                        <Link><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary"><small>Welcome back</small> <span className='text-xl hover:text-black text-white px-2'>{user?.displayName}</span></button></Link>
                        :
                        <Link to='/signup'><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary">Signup Now</button></Link>
                    }
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjplyu-rILMIaKhSihUMbqrTTXseXvpJnJ_A&usqp=CAU" className="w-full"  alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    {
                        user?.uid ?
                        <Link><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary"><small>Welcome back</small> <span className='text-xl hover:text-black text-white px-2'>{user?.displayName}</span></button></Link>
                        :
                        <Link to='/signup'><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary">Signup Now</button></Link>
                    }
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.passionateinmarketing.com/wp-content/uploads/2021/10/maxresdefault-199.jpg" className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    {
                        user?.uid ?
                        <Link><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary"><small>Welcome back</small> <span className='text-xl hover:text-black text-white px-2'>{user?.displayName}</span></button></Link>
                        :
                        <Link to='/signup'><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary">Signup Now</button></Link>
                    } 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://blog.logrocket.com/wp-content/uploads/2021/05/java-kotlin-logo.png" className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    {
                        user?.uid ?
                        <Link><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary"><small>Welcome back</small> <span className='text-xl hover:text-black text-white px-2'>{user?.displayName}</span></button></Link>
                        :
                        <Link to='/signup'><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary">Signup Now</button></Link>
                    }
                    <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://miro.medium.com/max/1400/1*iDcgUCw_MtRSuKLBGEaJ4Q.jpeg" className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    {
                        user?.uid ?
                        <Link><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary"><small>Welcome back</small> <span className='text-xl hover:text-black text-white px-2'>{user?.displayName}</span></button></Link>
                        :
                        <Link to='/signup'><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary">Signup Now</button></Link>
                    }
                    <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src="https://www.educative.io/v2api/editorpage/6292006289539072/image/5581777484644352" className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a> 
                    {
                        user?.uid ?
                        <Link><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary"><small>Welcome back</small> <span className='text-xl hover:text-black text-white px-2'>{user?.displayName}</span></button></Link>
                        :
                        <Link to='/signup'><button className="bg-black hover:btn-warning text-pink-600 btn btn-secondary">Signup Now</button></Link>
                    }
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
    );
};

export default Home;

