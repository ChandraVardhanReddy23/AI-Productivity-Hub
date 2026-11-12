import { useState } from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const { login } =useContext(AuthContext);
    const navigate =useNavigate();
    async function handleLogin(){
        const response=await fetch(`${API_URL}/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":
                    "application/json"
            },
            body:JSON.stringify({
                username,
                password
            })
        });
        const data=await response.json();
        console.log(data);
        login(data.token);
        navigate("/dashboard");
    }
    return(
        <div className="auth-page">
      <main className="auth-card">
        <h1>Welcome Back</h1>
        <p>Log in to manage your habits, check analytics, and stay on track every day.</p>

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
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </main>
    </div>
    )
}
export default Login;