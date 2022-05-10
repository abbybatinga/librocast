import logo from './librocast_logo.png';
import { useState } from 'react'
import { useLogIn } from '../useLogIn'
import { Link, useNavigate } from "react-router-dom";


function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login } = useLogIn()
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email,password)
    history('/login')
  }

  return (
    <div>

      <div className="authBox">

        <div className='authItems'>
          <h1>Librocast</h1>
          <img src={logo} alt="lightbulb logo"/>
        </div>

        <div className="loginItems">
          <h2>Login</h2>

          <p>Name</p>
          <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            

          <p>Username</p>
          <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

          
          <p>Password</p>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div id='loginBtn'>
          <Link to="/onboard">
          <button>Log in</button>
          {error && <p>{error}</p>}
          </Link>
          </div>

          <p>Already have an account? <Link to ="/signup">Sign Up</Link></p>
        </div>
      </div>


    </div>
  )}

export default Auth;