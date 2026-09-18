import "../css/Login.css";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignUpForm";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Aura</h1>
        <p className="tagline">Build Better Habits Every Day</p>
        <div className="login-box">
          <div className="tabs">
            {[["Login", false], ["Sign Up", true]].map(([label, signup]) => (
              <span
                key={label}
                className={isSignup === signup ? "active" : ""}
                onClick={() => setIsSignup(signup)}
              >
                {label}
              </span>
            ))}
          </div>

          {isSignup ? (
            <SignupForm onLogin={() => setIsSignup(false)} />
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;