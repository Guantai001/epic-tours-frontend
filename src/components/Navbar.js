import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300 flex h-20 px-6 py-5 justify-around">
            <div className='text-left'>
            <span className="font-bold text-black  text-4xl flex-shrink-0">
              <FontAwesomeIcon icon={faPlaneDeparture}  />
              <span className="ml-4">EPIC TOURS</span>
              </span>
            </div>
            <div className='pl-20 justify-evenly '>
            <div className=" flex text-center  mx-9">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-2xl  font-bold text-black hover:bg-purple-500 hover:text-white"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="ml-4 px-3 py-2 rounded-md text-2xl font-bold text-black hover:bg-purple-500 hover:text-white"
              >
                ABOUT
              </Link>
              <Link
                to="/contacts"
                className="ml-4 px-3 py-2 rounded-md text-2xl font-bold text-black hover:bg-purple-500 hover:text-white"
              >
                CONTACTS
              </Link>
            <div className="flex-shrink-0 flex pl-20 ">
              <Link
                to="/login"
                className="ml-4 px-3 py-2 rounded-md text-lg font-bold text-black hover:bg-purple-500 hover:text-white"
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="ml-4 px-3 py-2 rounded-md text-lg font-bold text-black hover:bg-purple-500 hover:text-white"
              >
                SIGN UP
              </Link>
            </div>
           
              </div>
  
            </div>
    </div>
  );
}

export default Navbar;