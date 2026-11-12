import { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Signup() {

  const [username, setUsername] =useState("");

  const [password, setPassword] =useState("");

  async function handleSignup() {

    const response = await fetch(
    `${API_URL}/auth/signup`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data =
      await response.json();

    console.log(data);

  }

  return (
    <div className="auth-page">
      <main className="auth-card">
        <h1>Create account</h1>
        <p>Signup to start tracking habits and get personalized AI productivity reports.</p>

        <div className="field-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="auth-actions">
          <button type="button" className="btn btn-primary" onClick={handleSignup}>
            Signup
          </button>
        </div>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </main>
    </div>
  );

}

export default Signup;