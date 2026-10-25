import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { useAuth } from "../context/AuthContext";
import loginBackground from "../assets/login-background.jpeg";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(formData);
      navigate("/home");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to log in"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#102f2d] text-white flex items-center justify-center px-4 py-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${loginBackground})`,
        }}
      />

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Subtle green overlay */}
      <div className="absolute inset-0 bg-emerald-950/20" />

      {/* Glassmorphism login card */}
      <form
        onSubmit={handleSubmit}
        className="
          relative z-10
          w-full max-w-md
          rounded-3xl
          border border-white/20
          bg-white/10
          p-8 sm:p-10
          shadow-2xl
          backdrop-blur-2xl
          flex flex-col gap-5
        "
      >
        {/* Card highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 via-transparent to-black/10" />

        <div className="relative z-10">
          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Spotify Clone
            </h1>

            <p className="text-white/65 mt-3 text-sm sm:text-base">
              Log in to continue listening
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-5 bg-red-500/15 border border-red-400/30 text-red-200 px-4 py-3 rounded-xl text-sm backdrop-blur-md">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-white/90"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              autoComplete="email"
              required
              className="
                w-full
                bg-white/10
                border border-white/20
                rounded-xl
                px-4 py-3.5
                text-white
                placeholder:text-white/40
                outline-none
                backdrop-blur-md
                transition
                focus:bg-white/15
                focus:border-emerald-300/70
                focus:ring-2
                focus:ring-emerald-300/20
              "
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2 text-white/90"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="current-password"
                required
                className="
                  w-full
                  bg-white/10
                  border border-white/20
                  rounded-xl
                  px-4 py-3.5
                  pr-12
                  text-white
                  placeholder:text-white/40
                  outline-none
                  backdrop-blur-md
                  transition
                  focus:bg-white/15
                  focus:border-emerald-300/70
                  focus:ring-2
                  focus:ring-emerald-300/20
                "
              />

              {/* Show / hide password button */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword((previous) => !previous)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                title={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  rounded-lg
                  text-white/60
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                {showPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-emerald-400
              hover:bg-emerald-300
              active:bg-emerald-500
              disabled:opacity-60
              disabled:cursor-not-allowed
              text-black
              py-3.5
              rounded-full
              font-bold
              shadow-lg
              shadow-emerald-950/30
              transition
              duration-200
            "
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          {/* Register link */}
          <p className="text-center text-white/55 text-sm mt-6">
            Don't have an account?

            <Link
              to="/register"
              className="
                text-white
                font-semibold
                ml-2
                hover:text-emerald-300
                transition
              "
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;