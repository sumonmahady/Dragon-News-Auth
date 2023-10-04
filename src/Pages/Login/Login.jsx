import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../../Provider/Provider";


const Login = () => {
    const {singIn} = useContext(authContext)
    const location = useLocation()
    const navigate = useNavigate();
    console.log("location", location)
    const handlelogin = e =>{
        e.preventDefault();
        const form =  new FormData (e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        singIn(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
        <div>

        <h2 className="text-2xl font-bold text-center mt-3">Please Login</h2>
        
        <form onSubmit={handlelogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do Not Have An Account ? <Link className="text-blue-600" to="/register">Register</Link></p>
        </div>

        </div>
    );
};

export default Login;