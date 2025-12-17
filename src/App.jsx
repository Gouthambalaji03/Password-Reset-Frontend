import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Toast Container with custom styling */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="rounded-xl shadow-lg"
      />

      <BrowserRouter>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
