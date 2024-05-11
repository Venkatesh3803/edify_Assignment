import { signOut } from 'firebase/auth'
import React from 'react'
import { BiAddToQueue, BiHome, BiLogOut, BiTask } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { auth } from '../lib/FireBase'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { signOutUser } from '../redux/AuthReducer'



const Sidebar = () => {
    const dispatch = useDispatch()
    const handleLoggout = () => {
        signOut(auth).then(() => {
            toast.success("Logout success")
            dispatch(signOutUser(null))
        })
    }

    return (
        <>

            <div className='bg-blue-600 w-full h-full hidden lg:block'>
                <div
                    className="sidebar h-full top-0 bottom-0 lg:left-0 p-2 w-[310px] overflow-y-auto text-center bg-gray-900"
                >
                    <div className="text-gray-100 text-xl">
                        <div className="p-2.5 mt-1 flex items-center">
                            {/* <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i> */}
                            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Task Managment</h1>

                        </div>
                        <div className="my-2 bg-gray-600 h-[1px]"></div>
                    </div>
                    <Link to={"/"}>
                        <div
                            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        >
                            <BiHome size={20} />
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                        </div>
                    </Link>
                    <Link to={"/addtask"}>
                        <div
                            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        >
                            <BiAddToQueue />
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Task</span>
                        </div>
                    </Link>
                  
                    <div className="my-4 bg-gray-600 h-[1px]"></div>

                    <Link to={"/setting"}>
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
                </div>
            </div>
        </>
    )
}

export default Sidebar
