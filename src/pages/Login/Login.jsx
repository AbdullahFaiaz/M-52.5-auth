import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {

    const handleLogIn = e =>{
        e.preventDefault()
        const email = e.target.email.value
        console.log(email)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
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
