import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import '../componentsStyle/Login.css'


const Login = () => {

            const {logIn, setLoading, googlePopupSignIn, githubPopupSignIn} = useContext(AuthContext)

            const [error, setError] = useState()

            const googleProvider = new GoogleAuthProvider()

            const githubProvider = new GithubAuthProvider()

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

                const handlePopUpSignInGoogle = () =>{
                    googlePopupSignIn(googleProvider)
                    .then(result=> {
                        const user = result.user
                        console.log(user)
                        navigate(from, {replace: true})
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }

                const handlePopUpSignInGitHub = () =>{
                    githubPopupSignIn(githubProvider)
                    .then(result=> {
                        const user = result.user
                        console.log(user)
                        navigate(from, {replace: true})
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }

    return (
            <div className=' pt-4 pb-12 shadow-xl'>
            <div className="hero">
                            <div className="hero-content flex-col">
                                <div className="text-center lg:text-left">
                                <p className="text-3xl text-rose-900 font-bold">Log In</p>
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
                                    <button className="btn btn-success text-rose-900">Login</button>
                                    </div>


                                    <p><small>New to <span className='font-bold pr-2'>PORTABLE LEARNING? </span><Link to='/signup' className='text-pink-500 font-bold'>sign up now</Link></small></p>
                                </form>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-center'>
                        <button onClick={handlePopUpSignInGoogle} className="mt-2 btn btn-outline btn-secondary buttonSign mb-3 bg-grey-400"><FaGoogle></FaGoogle><span className='ml-2'>Google Sign In</span></button>
                        </div>

                        <div className='flex justify-center'>
                        <button onClick={handlePopUpSignInGitHub} className="mt-2 btn btn-outline btn-primary buttonSign mb-3 bg-grey-400"><FaGithub></FaGithub><span className='ml-2'>Github Sign In</span></button>
                        </div>

            </div>
    );
};

export default Login;