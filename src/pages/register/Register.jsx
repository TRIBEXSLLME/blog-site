import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registertitle">Register</span>
      <form className="registerform">
        <label>Username</label>
        <input
          className="registerinput"
          type="text"
          placeholder="Enter your Username..."
        />
        <label>Email</label>
        <input
          className="registerinput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerinput"
          type="password"
          placeholder="Enter your Password..."
        />
        <button className="registerbutton">
          <Link to="/register" className="link">
            REGISTER
          </Link>
        </button>
      </form>

      <button className="registerloginbutton">
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
    </div>
  );
};

export default Register;
