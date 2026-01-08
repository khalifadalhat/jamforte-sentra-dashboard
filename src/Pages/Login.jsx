import { AlignCenter, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT PANEL */}
<div
  className="hidden md:flex flex-col justify-center px-20"
  style={{
    background: `
      radial-gradient(
        circle at center,
        rgba(52, 178, 209, 0.35),
        transparent 60%
      ),
      radial-gradient(
        circle at top right,
        #141414 0%,
        #287582 40%,
        transparent 70%
      ),
      radial-gradient(
        circle at bottom left,
        #141414 0%,
        #287582 40%,
        transparent 70%
      ),
      #34b2d1
    `,
  }}
>
        {/* Text block */}
        <div className="max-w-sm -translate-y-12 ">
          <h1 className="text-xl font-semibold leading-snug mb-4 text-white text-center text-[30px]">
            Your systems.
            <br />
            <span className="text-xl font-semibold leading-snug mb-4 text-[#34b2d1] text-[30px]">
              Assessed by AI.
            </span>
          </h1>
        <div className="w-70 ml-20 pr-20">
          <p className="text-sm text-[#cdf1fa] leading-relaxed text-center" >
            All-in-one platform to evaluate. optimize, and secure your tech
            stack — instantly, with expert-level precision.
          </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center bg-[#141414] px-6">
        <div className="w-full max-w-sm">

          {/* Icon */}
          <div className="flex justify-center mb-2">
            <Bot size={38} className="text-[#34b2d1]" />
          </div>

          {/* Heading */}
          <h2 className="text-xl font-normal text-center mb-1 text-white">
            Welcome to{" "}
            <span className="text-[#34b2d1]">Sentra</span>
          </h2>

          <p className="text-sm text-center text-gray-400 mb-10">
            Don’t have an account?{" "}
            <span className="text-white cursor-pointer hover:underline font-semibold" >
              Sign up for free
            </span>
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="">
            <label className="text-white text-sm">Username or Email</label>
            <input
              type="text"
              placeholder="Content"
              className="w-full bg-transparent border border-gray-600 
                         rounded-md px-4 py-2.5 text-sm text-white
                         placeholder-gray-500
                         focus:outline-none focus:border-[#34b2d1] mb-6"
            />

            <button
              type="submit"
              className="w-3/6 bg-[#34b2d1] text-[#141414]
                         py-2.5 rounded-md text-sm font-medium
                         hover:opacity-90 transition ml-[100px]"
            >
              Log in
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-gray-400 hover:text-white cursor-pointer w">
            Forgot Password
          </p>
        </div>
      </div>
    </div>
  );
}
