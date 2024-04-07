import { Link, useLocation,useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";

const Login = () => {
    const authInfo = useContext(AuthContext)
    const {signIn} = authInfo
    const location = useLocation()
    const navigate = useNavigate()
    console.log("login : ",location)
    const handleLogIn = e =>{
        e.preventDefault()
        
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email,password)
        .then(result=> {
            console.log(result.user, "this is logging info")
            //navigate after log in
            navigate(location?.state ? location.state : "/")

        })
        .catch(error=>{
            console.log(error.message)
        })
    }

return (
    <div>
    <Navbar></Navbar>

    <form onSubmit={handleLogIn} className="card-body lg:w-[50%] md:w-[80%] my-2 mx-auto">
        <p className="text-center text-2xl">Please Log In</p>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
        />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
        />
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">
            Forgot password?
            </a>
        </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary">LogIn</button>
        </div>
    </form>
        <p className="text-center">{`Don't have an account?`} please <Link className="text-blue-600 font-bold" to={"/register"}>Register</Link></p>
    


    </div>
);
};

export default Login;
