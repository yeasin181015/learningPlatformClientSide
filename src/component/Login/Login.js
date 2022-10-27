import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../Contexts/AuthProvider";
import Button from "react-bootstrap/Button";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const { signInUser, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const user = await signInUser(email, password);
      console.log(user);
      form.reset();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const gmailUser = await providerLogin(googleProvider);
      console.log(gmailUser);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Please login first.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <Button variant="danger" onClick={handleGoogleSignIn}>
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
