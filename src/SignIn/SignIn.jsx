import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import {useState} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { login } from "../Auth/apiAuth";
import  supabase  from "../Auth/supabase"; // adjust path if needed

const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/`, // redirect back to your homepage
    },
  });

  if (error) {
    toast.error("Google Sign-In Failed");
  } else {
    // Optional: store a flag for showing toast
    localStorage.setItem("showWelcomeToast", "true");
  }
};


const initialData = {
    email: "",
    password: ""
}

export default function SignIn() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState(initialData);

    const {email, password} = loginData;

    const handleLogin = async function (e) {
        e.preventDefault();

        if (!email || !password) {
            console.log("PLease enter all the detauls");
            toast.error("Please fill all the values");
            return;
        }

        try {
            setLoading(true);
            console.log("User has filled all the data proceed to login the user!");
            await login({email, password});
            toast.success("Login Successfull");
            navigate("/");
            setLoginData(initialData);
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 mt-6">Welcome Back!</h1>
            <form className="max-w-md w-full space-y-6 m-5 px-4" onSubmit={handleLogin}>

                {/* Email Input */}
                <div className="">
                    <label className="block text-md font-medium text-gray-400 mb-2">Email</label>
                    <input
                        onChange={(e) => setLoginData((prev) => ({...prev, email: e.target.value}))}
                        type="email" placeholder="eg. user@example.com"
                        required
                        className="mt-1 block w-full border-2 border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:border-violet-800"
                    />
                </div>

                {/* Password Input */}
                <div className="">
                    <label className="flex justify-between text-md font-medium text-gray-400 mb-2">Password
                        <Link to="/PlainHeader/ForgotPassword" className="text-violet-500">Forgot Password?</Link>
                    </label>
                    <input
                        type="password"
                        onChange={(e) => setLoginData((prev) => ({...prev, password: e.target.value}))}
                        required placeholder="Your Password"
                        className="mt-1 block w-full border-2 border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:border-violet-800"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex flex-row justify-center items-center w-full bg-violet-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-violet-800 focus:outline-none group active:scale-95  transition-transform duration-200"
                >Sign In <ArrowRight size={16} className="ml-1 text-blue-400 active:scale-105 active:font-bold group-hover:translate-x-1"/>
                </button>

                {/* Divider for Google Sign In */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border border-gray-700 " />
                    <span className="mx-4 text-gray-500 font-medium">OR</span>
                    <hr className="flex-grow border border-gray-700 " />
                </div>

                {/* Google Sign In Button */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="flex flex-row justify-center items-center w-full bg-blue-800 font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none group active:scale-95 transition-transform duration-200"
                    >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google logo"
                        className="w-5 h-5 mr-2"
                    />
                    <span className="text-slate-200 font-bold">Continue with Google</span>
                </button>


                {/* Link to Get Started */}
                <a className="text-slate-500 mt-4 block text-center">
                    Don't have an account? <Link to="/PlainHeader/GetStart" className="text-violet-500">Get Started</Link>
                </a>
            </form>
        </div>
    );
}