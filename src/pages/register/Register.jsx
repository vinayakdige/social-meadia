import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            repellendus iure atque facere perferendis error perspiciatis placeat
            alias incidunt aut? Vel, placeat! Unde, suscipit pariatur!
          </p>
          <span>Do You Have an Account ?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
         
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="name" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
