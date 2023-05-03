import React, {useState, useContext} from "react";
import BlockInput from "../util/BlockInput";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
// import {useAuth} from "../providers/AuthProvider"


const LoginInForm = () =>{

    const [credentials, setCredentials] = useState({
      username: undefined,
      password: undefined,
    });
  
    const { loading, error, dispatch } = useContext(AuthContext);
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", credentials);
        if (res.data.isAdmin) {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
  
          navigate("/");
        } else {
          dispatch({
            type: "LOGIN_FAILURE",
            payload: { message: "You are not allowed!" },
          });
        }
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    };
  

  return (
    // <form action="" method="POST" onSubmit={handleLogin}>
    <form action="http://localhost:3000/login" method="POST">
      <div>
        <BlockInput type="text" placeholder="USERNAME" name="username" onChange={handleChange}
        // value={username} onChange={event => setUsername(event.target.value)}
        />
        <BlockInput type="password" placeholder="PASSWORD" name="password" onChange={handleChange}
        // value={password} onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button>forgot your password?</button>
        <button disabled={loading} onClick={handleClick}
          className="w-64 m-6 text-white bg-green-900 hover:bg-lime-600 block"
          type="submit"
        >
          SIGN IN
        </button>
      </div>
      {error && <span>{error.message}</span>}
    </form>
  );
};

export default LoginInForm;
