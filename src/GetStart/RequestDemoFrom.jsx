import React, {useState} from "react";
import toast from "react-hot-toast";
import { register } from "../Auth/apiAuth";
import { useNavigate } from "react-router";

const initialData = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    heardFrom: "",
    description: "",
    password: ""
}

function ContactForm() {

  const [loading, setLoading] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const [registerDetails, setRegisterDetails] = useState(initialData);

  const navigate = useNavigate();

  const {name, surname, email, phone, heardFrom, description, password} = registerDetails;

  const handleRegister = async function(e) {
    e.preventDefault();
    if (!name || !surname || !email || !phone || !heardFrom || !description || !password) {
      console.log("user has not filled the required data");
      toast.error("Please fill all the inputs with valid data");
      return;
    }
    const data = {
      name,
      surname,
      email, password, phone, heardFrom, description
    }
    try {
      setLoading(true);
      console.log(data);
      await register(data);
      toast.success("Registered Successfully");
      setRegisterDetails(initialData);
      navigate("/plainheader/signin");
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 bg-slate-800 border-2 border-slate-700 shadow-md rounded-lg basis-full">
      <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>
      {/* Name */}
      <form className="space-y-3" onSubmit={handleRegister}>
        < div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name <span className="text-red-400 text-lg">*</span>
            </label>
            <input
              type="text" 
              onChange={(e) => setRegisterDetails((prev) => ({...prev, name: e.target.value}))}
              required placeholder="Your Name"
              className="mt-1 w-full border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Surname <span className="text-red-400 text-lg">*</span>
            </label>
            <input
              type="text"
              onChange={(e) => setRegisterDetails((prev) => ({...prev, surname: e.target.value}))}
              required placeholder="Your Surname"
              className="mt-1 w-full border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Email <span className="text-red-400 text-lg">*</span>
          </label>
          <input
            type="email"
            onChange={(e) => setRegisterDetails((prev) => ({...prev, email: e.target.value}))}
            required placeholder="eg. user@example.com"
            className="mt-1 w-full border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>
        {/* password */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Your Password <span className="text-red-400 text-lg">*</span>
          </label>
          <input
            type="password"
            minLength={8}
            onChange={(e) => setRegisterDetails((prev) => ({...prev, password: e.target.value}))}
            required placeholder="Your password"
            className="mt-1 w-full border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Phone <span className="text-red-400 text-lg">*</span>
          </label>
          <input
            type="tel"
            onChange={(e) => setRegisterDetails((prev) => ({...prev, phone: e.target.value}))}
            required placeholder="eg. +91 1234567890"
            className="mt-1 w-full border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
          />
        </div>
        {/* How did you hear about us? */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            How did you hear about us? <span className="text-red-400 text-lg">*</span>
          </label>
          <select
          onChange={(e) => setRegisterDetails((prev) => ({...prev, heardFrom: e.target.value}))}
            required 
            className="mt-1 w-full  bg-slate-800 border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500 text-gray-300"
          >
            <option value="">Select an option</option>
            <option value="twitter">Twitter</option>
            <option value="medium">Medium</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* How can we help you? */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            How can we help you? <span className="text-red-400 text-lg">*</span>
          </label>
          <textarea
            required
            onChange={(e) => setRegisterDetails((prev) => ({...prev, description: e.target.value}))}
            rows={4}
            className="mt-1 w-full border border-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-slate-800 disabled:animate-pulse mt-4 bg-violet-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-violet-800 active:scale-95 transition-transform`}>
          Request Demo
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
