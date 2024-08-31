import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import './styles/Signin.css';
import './styles/Form.css'

export default function Signin() {
  const { login } = useAuth();

  const [toggleLoginMessage, setToggleLoginMessage] = useState({
    message: "",
    isToggle: false
  });

  const navigate = useNavigate();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const clearToggleMessage = () => {
    if (toggleLoginMessage.isToggle) {
      setToggleLoginMessage({ message: "", isToggle: false });
    }
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const email = emailInput.current?.value.toString();
    const password = passwordInput.current?.value.toString();

    if (email && password) {
      login({ email, password })
        .then(() => navigate("/chat", { replace: true }))
        .catch(error => {
          if (error.response.status === 404) {
            setToggleLoginMessage({ message: "You have entered an invalid email or password.", isToggle: true });
          }
        });
    } else {
      setToggleLoginMessage({ message: "Empty field is not allowed.", isToggle: true });
    }
  }

  console.log("render");

  return (
    <div className="signin">
      <form className='form'>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" ref={emailInput}
          placeholder='enter email'
          onChange={clearToggleMessage} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" ref={passwordInput}
          placeholder='enter password'
          onChange={clearToggleMessage} />
        <div>
          {
            toggleLoginMessage.isToggle &&
            <span className="login-message">{toggleLoginMessage.message}</span>
          }
        </div>
        <button id="submit" name="submit" onClick={(e) => handleSubmit(e)}>Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  )
}