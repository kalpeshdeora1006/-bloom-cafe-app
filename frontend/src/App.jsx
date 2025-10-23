import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import KitchenDashboard from './components/KitchenDashboard';
import ManagerDashboard from './components/ManagerDashboard';

function App() {
  const [role, setRole] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (selectedRole, password) => {
    const resp = await fetch('http://localhost:5000/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: selectedRole, password })
    });
    const data = await resp.json();
    if (data.success) {
      setRole(selectedRole);
      setLoggedIn(true);
    } else {
      alert('Invalid password!');
    }
  };

  if (!loggedIn) return <LoginScreen onLogin={handleLogin} />;
  if (role === 'kitchen') return <KitchenDashboard />;
  if (role === 'manager') return <ManagerDashboard />;
  return null;
}

export default App;

