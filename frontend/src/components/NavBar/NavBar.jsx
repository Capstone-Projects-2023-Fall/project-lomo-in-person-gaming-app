import React from 'react';
import { Link } from 'react-router-dom';
import GetUserById from "../BeaconInfo/GetUserById.js";
import { useAuth } from '../../AuthContext.js';
import './NavBar.css';

const NavBar = () => {
    const { logout } = useAuth();
    const { authUser, userId } = useAuth();
    const userInfo = GetUserById(userId);
    const picClass = "h-7 w-7 rounded-full ";

    const handleLogout = () => {
        logout();
    }

    return (
        <nav className='bg-sky-700 p-4 h-75 z-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='text-white text-3x1 font-bold'>LOMO</div>
                    
                    
                    <ul className='flex space-x-4 text-teal-50'>
                        
                        <h3 className="text-l text-left">Welcome, {userInfo.username}!</h3>
                        
                        <img src={userInfo.avatar || "icons/defaultPFP.jpg"} alt="User Pic" className={picClass} />
                        
                    
                        
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/createbeacon'>New Beacon</Link></li>
                        <li><Link to='/beaconlist'>List View</Link></li>
                        
                        <li onClick={handleLogout}>Log Out</li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;