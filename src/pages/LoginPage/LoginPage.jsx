import React, { useState } from 'react';

export default function LoginPage({onLogin}) {
    const [user, setUser] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(user);
    };

    return (
      <>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter username"
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
}