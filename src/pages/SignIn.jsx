import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../lib/FireBase';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signInUser } from '../redux/AuthReducer';

const SignIn = () => {
    const [inputs, setInputs] = useState({});
    const [err, setErr] = useState();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
            if (res.user) {
                dispatch(signInUser({
                    email: res.user.email,
                    id: res.user.uid
                }))
                toast.success("login success")
                navigate("/")
            }
        } catch (error) {
            setErr("Invalid credentials")
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }




    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            SignIn to Your Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange} />
                            </div>

                            <button
                                type="submit"
                                className={`loading? "disabled:bg-blue-200" "mt-5 px-10 rounded-md bg-indigo-600  py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full`}
                            >
                                {loading ? "Loading..." : "Sign In"}
                            </button>

                            {err && <p className='text-red-500'>{err}</p>}

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to={"/signup"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
