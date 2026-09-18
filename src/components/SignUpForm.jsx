import { useState } from "react";
import { registerUser } from "../utils/userSession";

function SignupForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(event) {
    event.preventDefault();
    const result = registerUser({ name: name.trim(), email, password });
    if (!result.ok) {
      alert(result.error);
      return;
    }
    localStorage.setItem("auraEmail", result.user.email);
    alert("Account created successfully!");
    onLogin();
  }

  return (
    <form onSubmit={handleSignup}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label>Email Address</label>
      <input
        type="email"
        placeholder="name@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <button className="login-btn" type="submit">CREATE ACCOUNT</button>
    </form>
  );
}

export default SignupForm;