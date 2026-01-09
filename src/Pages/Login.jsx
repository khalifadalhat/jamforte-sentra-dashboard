import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#141414] p-4 md:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 h-[calc(100vh-4rem)]">
        <div className="hidden md:flex relative flex-col justify-center items-center rounded-[40px] border border-[#25383d] overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, #1a4b57 0%, #0d1f24 40%, #081012 100%)`,
            }}
          />
          <div className="relative z-10 max-w-md text-center px-6">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white tracking-tight">
              Your systems.
              <br />
              <span className="text-[#34b2d1]">Assessed by AI.</span>
            </h1>

            <p className="text-[#8aaeb8] text-lg leading-relaxed max-w-sm mx-auto">
              All-in-one platform to evaluate, optimize, and secure your tech
              stack — instantly, with expert-level precision.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:px-12 lg:px-20">
          <div className="w-full max-w-[360px]">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a]">
                <Bot size={32} className="text-[#34b2d1]" />
              </div>
            </div>
            <h2 className="text-2xl font-normal text-center mb-2 text-white">
              Welcome to <span className="text-[#34b2d1]">Sentra</span>
            </h2>

            <p className="text-sm text-center text-gray-500 mb-10">
              Don’t have an account?{" "}
              <span className="text-white cursor-pointer hover:underline font-medium transition-colors">
                Sign up for free
              </span>
            </p>
            <form onSubmit={handleLogin} className="w-full">
              <div className="mb-6">
                <label className="block text-gray-300 text-xs mb-2 pl-1">
                  Username or Email
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1c1c1c] border border-[#333] 
                             rounded-lg px-4 py-3 text-sm text-white
                             placeholder-gray-600
                             focus:outline-none focus:border-[#34b2d1] focus:ring-1 focus:ring-[#34b2d1]
                             transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-32 bg-[#34b2d1] text-[#0a1f24]
                           py-2.5 rounded-lg text-sm font-semibold
                           hover:bg-[#2da0bc] transition-colors duration-200
                           mx-auto block"
              >
                Log in
              </button>
            </form>
            <p className="text-xs text-center mt-8 text-gray-500 hover:text-white cursor-pointer transition-colors">
              Forgot Password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
