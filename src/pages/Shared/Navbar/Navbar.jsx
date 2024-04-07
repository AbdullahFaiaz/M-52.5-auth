import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Context/ContextComponent";
import auth from "../../../firebase/firebase.config";

const Navbar = () => {
    const authInfo = useContext(AuthContext)
    const {user,logOut} = authInfo

    const handleLogOut = () =>{
        logOut()
        .then(console.log("Signed Out"))
        .catch(error=>{
            console.log(error.message)
        })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>

    </>

    return (
        <div>
<div>
    
</div>

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    {user?.photoURL ? <div> <img className="" src={user.photoURL} alt="User Photo"></img> <p>{user.displayName}</p> </div>:
                        <img src={userDefaultPic} />
                    }   
                    </div>
                </label>
                {
                user? 
                    <button onClick={handleLogOut} className="btn">Log Out</button> :
                    <Link to={"/login"}>
                        <button className="btn">Login</button>
                    </Link>
                }
                {user && <p>{user.displayName}</p>}
            </div>
        </div>
        </div>

    );
};

export default Navbar;