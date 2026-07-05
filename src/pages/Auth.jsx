import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
  const [mode, setMode] = useState("signup");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    alert("user has signed up");
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  required
                  id="email"
                  {...register("email", { required: "Email is required" })}
                />
              </label>
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
                <input
                  className="form-input"
                  type="password"
                  placeholder="Password"
                  required
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be a least 6 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be a most 12 characters",
                    },
                  })}
                />
              </label>
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>

            <div className="auth-switch">
              {mode === "signup" ? (
                <p>
                  Already have an account?{""}
                  <span className="auth-link" onClick={() => setMode("login")}>
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{""}
                  <span className="auth-link" onClick={() => setMode("signup")}>
                    Sign Up
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
