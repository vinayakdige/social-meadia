import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Login = () => {

  const {login} = useContext(AuthContext);

  const handlelogin =()=>{
    login();
  }

  return (
    <div className="login">
      <div className="card">

        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            repellendus iure atque facere perferendis error perspiciatis placeat
            alias incidunt aut? Vel, placeat! Unde, suscipit pariatur!
          </p>
          <span>Don't You Have an Account</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>

        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" />  
                <input type="password" placeholder="password" />  
                <button onClick={handlelogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
