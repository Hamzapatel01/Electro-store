import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to the homepage after login
    } catch (error) {
      toast.error('Login failed. Please check your email and password.');
    }
  };

  return (
    <form 
      onSubmit={handleLogin} 
      style={{ 
        maxWidth: '400px', 
        margin: '80px auto',  // Added margin-top to ensure space below the header
        padding: '20px', 
        border: '1px solid black', 
        borderRadius: '8px' 
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h2>
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
          border: '1px solid grey' 
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
          border: '1px solid grey' 
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
          cursor: 'pointer' 
        }}
      >
        Login
      </button>
      
      {/* Sign up Link */}
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Don't have an account?{" "}
        <span 
          style={{ color: '#007bff', cursor: 'pointer' }} 
          onClick={() => navigate('/signup')}
        >
          Sign up
        </span>
      </p>
    </form>
  );
};

export default Login;
