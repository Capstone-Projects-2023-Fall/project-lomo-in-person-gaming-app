import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



const NavBar = () => {
    return (
        <nav className='bg-sky-700 p-4'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='text-white text-2x1 font-bold'>LOMO</div>
                    <ul className='flex space-x-4'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/createbeacon'>New Beacon</Link></li>
                        <li><Link to='/beaconlist'>List View</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;