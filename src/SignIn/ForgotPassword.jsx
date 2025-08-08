
import { ArrowRight } from "lucide-react";

export default function ForgotPassword() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-6">Forgot Password?</h1>
            <form className="max-w-md w-full space-y-6 m-5 px-4">
                <div className="">
                    <label className="block text-md font-medium text-gray-400 mb-2">Email</label>
                    <input
                        type="email" placeholder="eg. user@example.com"
                        required
                        className="mt-1 block w-full border-2 border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:border-violet-800"
                    />
                </div>
                <button
                    type="submit"
                    className="flex flex-row justify-center items-center w-full bg-violet-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-violet-800 focus:outline-none group active:scale-95  transition-transform duration-200"
                >Reset Password <ArrowRight size={16} className="ml-1 text-blue-400 active:scale-105 active:font-bold group-hover:translate-x-1"/>
                </button>
            </form>
        </div>
    );
}