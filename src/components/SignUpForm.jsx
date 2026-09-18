import { useState } from "react";

function SignupForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(event) {
    event.preventDefault();
    localStorage.setItem("auraUser", JSON.stringify({ name, email, password }));
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