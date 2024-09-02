/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to the homepage after signup
    } catch (error) {
      toast.error('Signup failed. The email already exists.');
      console.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      style={{
        maxWidth: '400px',
        margin: '80px auto',
        padding: '20px',
        border: '1px solid grey',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid grey',
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4b6e75',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Signup
      </button>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Already have an account?{" "}
        <span 
          style={{ color: '#007bff', cursor: 'pointer' }} 
          onClick={() => navigate('/login')}
        >
          Login here
        </span>
      </p>
    </form>
  );
};

export default Signup;
