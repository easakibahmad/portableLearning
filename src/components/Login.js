import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {

            const {logIn, setLoading, googlePopupSignIn} = useContext(AuthContext)

            const [error, setError] = useState()

            const googleProvider = new GoogleAuthProvider()

            const location = useLocation()
            const from = location.state?.from?.pathname || '/'

            const navigate = useNavigate()

            const handleSubmit = event =>{

                event.preventDefault()

                const form = event.target
                const email = form.email.value
                const password = form.password.value


                logIn(email, password)
                .then(result =>{
                    const user = result.user
                    console.log(user)
                    form.reset()
                    setError('')
                    navigate(from, {replace: true})
                    })
                .catch(error=>{
                    console.error(error)
                    setError(error.message)
                    })
                .finally(()=>{
                    setLoading(false)
                    })
                }

                const handlePopUpSignIn = () =>{
                    googlePopupSignIn(googleProvider)
                    .then(result=> {
                        const user = result.user
                        console.log(user)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }

    return (
            <div className="hero py-4 bg-zinc-700">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <p className="text-3xl text-success font-bold">Log In</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body bg-gray-400">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>

                        <div>
                            <small><p className="text-red-700">{error}</p></small>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn btn-success">Login</button>
                        </div>


                        <button onClick={handlePopUpSignIn} className="mt-2 btn btn-outline btn-secondary  mb-3 bg-grey-400"><FaGoogle></FaGoogle><span className='ml-2'>Google Sign In</span></button>


                        <p><small>New to <span className='font-bold pr-2'>PORTABLE LEARNING? </span><Link to='/signup' className='text-pink-500 font-bold'>sign up now</Link></small></p>
                    </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;