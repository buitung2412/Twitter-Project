import React from 'react';
import '../css/Auth.css';

export default function Login() {
  return (
    <section className="auth-container">
    <form className="auth-form">
        <h2>Enter Your Account</h2>
        <div className="error-message">Error: Your Password is not correct</div>
        <input type="email" name="email" id="" required placeholder="Email" />
        <input 
            type="password"
            name="password"
            id=""
            required
            placeholder="Password"
        />
        <button className="btn" type="submit">Login</button>
    </form>
</section>
  );
}
