import React, { useState } from 'react';
const LoginScreen = ({ onLogin }) => {
  const [role, setRole] = useState('manager');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h2>Login</h2>
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="manager">Manager</option>
        <option value="kitchen">Kitchen</option>
      </select>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)} />
      <button onClick={() => onLogin(role, password)}>Login</button>
    </div>
  );
};
export default LoginScreen;

