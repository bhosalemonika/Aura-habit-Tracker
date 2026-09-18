import { useState } from "react";
import googleIcon from "../assets/images/SVG.png";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("auraEmail") || "");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("auraUser"));

    if (!savedUser) {
      alert("Please Sign Up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("auraEmail", savedUser.email);
      localStorage.setItem("auraName", savedUser.name);
      navigate("/onboarding");
      return;
    }

    alert("Invalid email or password.");
  }

  return (
    <form onSubmit={handleLogin}>

      <label>Email Address</label>
      <input
        type="email"
        placeholder="name@example.com"
        value={email}
          onChange={(event) => setEmail(event.target.value)}
        required
      />

      <div className="password-label">

        <label>Password</label>
        <a href="#">Forgot?</a>
      </div>

      <input
        type="password"
        placeholder="••••••••"
        value={password}
          onChange={(event) => setPassword(event.target.value)}
        required
      />

      <button className="login-btn" type="submit">SECURE LOGIN</button>

      <div className="or">
        <span></span>
        <p>OR</p>
        <span></span>
      </div>

      <button type="button" className="google-btn">
        <img src={googleIcon} alt="Google" />
        Continue with Google
      </button>

    </form>
  );
}

export default LoginForm;