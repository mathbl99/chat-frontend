import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { registerUser } from "../services/registerUser";
import formValidator from "../helpers/formValidator";

import "./styles/Signup.css"

export function Signup() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validate = formValidator();

    const name = nameInput.current?.value;
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;

    if (!name || !email || !password) {
      window.alert("There are empty fields.")
      return;
    }

    if (!(validate.isEmailValid(email) && validate.isPasswordValid(password))) {
      if (!validate.isEmailValid(email)) {
        window.alert("Email should have a valid format. (Eg: test@test.com)");
      }

      if (!validate.isPasswordValid(password)) {
        window.alert("Password should have at least 8 characteres and 16 at max.");
      }

      return
    }

    const user = {
      name: nameInput.current?.value,
      email: emailInput.current?.value,
      password: passwordInput.current?.value
    }

    try {
      const response = await registerUser(user);

      if (response.status === 201) {
        login({ email, password })
          .then(() => navigate("/chat", { replace: true }))
          .catch(error => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
      window.alert("Email already used.");
    }
  }

  return (
    <div className="signup">
      <form className="form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"
          placeholder="John Doe" ref={nameInput} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"
          placeholder='johndoe@email.com' ref={emailInput} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"
          placeholder='•••••••••••••••' ref={passwordInput} />
        <button id="submit" name="submit" onClick={(e) => handleSubmit(e)}>Signup</button>
      </form>
    </div>
  )
}