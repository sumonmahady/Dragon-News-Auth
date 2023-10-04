import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../../Provider/Provider";


const Register = () => {

    const {createUser} = useContext(authContext)

   
        const handleRegister = e =>{
            e.preventDefault();
            const form =  new FormData (e.currentTarget);
            const name = form.get('name')
            const email = form.get('email')
            const password = form.get('password')
            console.log(name,email,password)

            createUser(email,password)

            .then((result) => {
               console.log(result.user)
              })
              .catch((error) => {
               console.error(error)
              });
        }

    return (

    
       <div>
            <div>
            <Navbar></Navbar>
        <div>

        <h2 className="text-2xl font-bold text-center mt-3">Please Register</h2>
        
        <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Name Please" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered"  />
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already Have An Account ? <Link className="text-blue-600" to="/login">Login</Link></p>
        </div>

        </div>
       </div>
    );
};

export default Register;