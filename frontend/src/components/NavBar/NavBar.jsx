import React, { useState, useEffect, onClick } from 'react';
import { Link } from 'react-router-dom';
import GetUserById from "../BeaconInfo/GetUserById.js";
import { useAuth } from '../../AuthContext.js';
import './NavBar.css';
import ProfileUpdate from '../Profile/ProfileUpdate.js';

const NavBar = () => {
    const { logout } = useAuth();
    const { authUser, userId } = useAuth();
    const userInfo = GetUserById(userId);
    const picClass = "h-7 w-7 rounded-full ";
    const [showProfEdit, setShowProfEdit] = useState(false);

    const handleLogout = () => {
        logout();
    }


    function changeProfile(){
        setShowProfEdit(true);
    }

    return (
        <nav className='bg-sky-700 p-4 h-75 z-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='text-white text-3x1 font-bold'>LOMO</div>
                    
                    
                    <ul className='flex space-x-4 text-teal-50'>
                        
                        <h3 className="text-l text-left">Welcome, {userInfo.username}!</h3>
                        <button onClick={() => changeProfile()}>
                        {showProfEdit &&
                            <ProfileUpdate setShowProfEdit={setShowProfEdit} />
                        }
                        <img src={userInfo.avatar || "icons/defaultPFP.jpg"} alt="User Pic" className={picClass} />

                        </button>
                        
                        
                    
                        
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