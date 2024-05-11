import { useSelector } from 'react-redux'
import Sidebar from '../components/Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import { Navber } from '../components/Navber'

const Layout = () => {
    const user = useSelector(state => state.user.user)
    if (user === null) return <Navigate to="/signin" />;
    return (
        <>
            <Navber />
            <div className="flex h-screen overflow-hidden bg-[#D5C0DA]">
                <div className=" h-full">
                    <Sidebar />
                </div>
                <div className="flex-[8] overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </>

    )

}

export default Layout
