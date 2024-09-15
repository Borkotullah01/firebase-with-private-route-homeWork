import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/FirebaseProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    const avatar = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    const navigate = useNavigate("");
    

    const navLink = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">about</NavLink></li>
    <li><NavLink to="/contact">contact</NavLink></li>
    <li><NavLink to="/blog">blog</NavLink></li>
    <li><NavLink to="/register">register</NavLink></li>
    </>

    return (
    <div className="fixed shadow-md z-50 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              { navLink }
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost uppercase text-2xl font-bold">glasses</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-base font-semibold uppercase menu-horizontal px-1">
            { navLink }
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="not found"
            src={user?.photoURL ? user?.photoURL : avatar}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow">
        <li>
          <a className="justify-between">
            Name: {user?.displayName}
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Email: {user?.email}</a></li>
        <li><a onClick={()=>{
          logOut()
          .then(()=>{
            navigate("/")
          })
          }}>Logout</a></li>
      </ul>
    </div>
        </div>
    </div>
    );
};

export default Navbar;