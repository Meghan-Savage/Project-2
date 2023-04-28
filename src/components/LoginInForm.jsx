import React, {useState} from "react";
import BlockInput from "../util/BlockInput";
// import { useNavigate } from "react-router-dom";
// import {useAuth} from "../providers/AuthProvider"


const LoginInForm = () =>{
  // const [username, setUsername] = useState('');
  // const[password, setPassword] = useState('');
  // const[error, setError] = useState(null)
  // const navigate = useNavigate();
  // const { login } = useAuth();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const isValid = await login(username, password);
  //   if(!isValid){
  //     setError("Incorrect username or password")
  //   }else {
  //     navigate(-1)
  //   }
  // }

  return (
    // <form action="" method="POST" onSubmit={handleLogin}>
    <form action="http://localhost:3000/login" method="POST">
      <div>
        <BlockInput type="text" placeholder="USERNAME" name="username"
        // value={username} onChange={event => setUsername(event.target.value)}
        />
        <BlockInput type="password" placeholder="PASSWORD" name="password" 
        // value={password} onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button>forgot your password?</button>
        <button
          className="w-64 m-6 text-white bg-green-900 hover:bg-lime-600 block"
          type="submit"
        >
          SIGN IN
        </button>
      </div>
    </form>
  );
};

export default LoginInForm;
