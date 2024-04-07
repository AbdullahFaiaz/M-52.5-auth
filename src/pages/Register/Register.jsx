import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";


const Register = () => {
    const authInfo = useContext(AuthContext)
    const {createUser} = authInfo
    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email,password)

        createUser(email,password)
        .then(result => {
            result.user.displayName = name
            result.user.photoURL = photo
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

return (
    <div>
    <Navbar></Navbar>

    <form onSubmit={handleRegister} className="card-body lg:w-[50%] md:w-[80%] my-2 mx-auto">
        <p className="text-center text-2xl">Please Register</p>
        
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
        />
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Photo URL</span>
        </label>
        <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            required
        />
        </div>

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
        <button className="btn btn-primary">Register</button>
        </div>
    </form>
        <p className="text-center">Already have an account? please <Link className="text-blue-600 font-bold" to={"/login"}>Log In</Link></p>
    


    </div>
    );
};

export default Register;