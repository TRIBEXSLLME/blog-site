import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <span className="logintitle">Log in</span>
        <form className='loginform'>
            <label >Email</label>
            <input className='logininput' type="text" placeholder='Enter your email...' />
            <label >Password</label>
            <input className='logininput' type="text" placeholder='Enter your Password...' />
            <button className="loginbutton"><Link to= '/login' className="link">Login</Link></button>
        </form>
        <button className="loginregisterbutton"><Link to= '/register' className="link">Register</Link></button>
    </div>
  )
}

export default Login