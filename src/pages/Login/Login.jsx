import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import AmazonLogo from '../../Amazon_Logo.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginInitiate } from '../../redux/auth/action'
import { useHistory  } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user} = useSelector(state => state.data)
    const dispatch = useDispatch()
    const history = useHistory();
    const signIn = (e) => {
        e.preventDefault()
        dispatch(loginInitiate(email, password))
         setEmail("")
        setPassword("")
    }

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [user])

    return (
        <div className='login'>
            <Link to="/">
                <img src={AmazonLogo} className='login-logo' alt='logo' />
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={signIn} className='login-signIn' type='submit' >Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy 
                    Notice
                </p>
            </div>
            <p>New to Amazon ?</p>
            <Link to="register">
                <button className='login-register'>Create Your Amazon Account</button>
            </Link>
        </div>
    )
}

export default Login
