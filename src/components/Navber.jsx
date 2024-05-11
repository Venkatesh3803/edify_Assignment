import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { BiAddToQueue, BiHome, BiLogOut } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { auth } from '../lib/FireBase'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { signOutUser } from '../redux/AuthReducer'
import { CiMenuBurger } from "react-icons/ci";

export const Navber = () => {
    const [menu, setMenu] = useState(false)

    const dispatch = useDispatch()
    const handleLoggout = () => {
        signOut(auth).then(() => {
            toast.success("Logout success")
            dispatch(signOutUser(null))
        })
    }
    return (
        <div className='w-full h-20 bg-black text-white relative lg:hidden'>
            <CiMenuBurger size={25} color='white' className='top-5 relative left-10 cursor-pointer border w-10 h-10 p-2 ' onClick={() => setMenu(true)} />
            {menu && <div
                className="sidebar absolute h-screen top-0 left-0 lg:left-0 p-2 w-full overflow-y-auto text-center bg-gray-900 z-50"
            >
                <div className="text-gray-100 text-xl relative">
                    <div className="absolute right-10 top-5 cursor-pointer rounded-full border border-white w-10 h-10 flex items-center justify-center" onClick={() => setMenu(false)}>X</div>
                    <div className="p-2.5 mt-1 flex items-center">
                        {/* <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i> */}
                        <h1 className="font-bold text-gray-200 text-[15px] ml-3">Task Managment</h1>

                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                <Link to={"/"} onClick={() => setMenu(false)}>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    >
                        <BiHome size={20} />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                    </div>
                </Link>
                <Link to={"/addtask"} onClick={() => setMenu(false)}>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    >
                        <BiAddToQueue />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Task</span>
                    </div>
                </Link>

                <div className="my-4 bg-gray-600 h-[1px]"></div>

                <Link to={"/setting"} onClick={() => setMenu(false)}>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    >
                        <CiSettings size={20} />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Setting</span>
                    </div>
                </Link>

                <div
                    onClick={handleLoggout}
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                >
                    <BiLogOut size={20} />
                    <span className="text-[15px] ml-4 text-gray-200 font-bold" >Logout</span>
                </div>
            </div>}
        </div>
    )
}
