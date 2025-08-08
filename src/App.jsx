import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from 'react-hot-toast';
import PlainHeader from "./components/PlainHeader.jsx";
import AppLayout from "./components/AppLayout.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import ForgotPassword from "./SignIn/ForgotPassword.jsx";
import Home from "./components/Home.jsx";
import GetStartLayout from "./GetStart/GetStartLayout.jsx";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/PlainHeader" element={<PlainHeader />}>
          <Route path="GetStart" element={<GetStartLayout />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Route>
      </Routes>



    <Toaster
    toastOptions={{
      duration: 3000,
      success: {
        duration: 3000
      },
      error: {
        duration: 4000
      }
    }} />
    
    </BrowserRouter>
  );
}

export default App;
