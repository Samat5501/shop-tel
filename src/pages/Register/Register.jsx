import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import AmazonLogo from '../../Amazon_Logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { registerInitiate } from '../../redux/auth/action'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user } = useSelector(state => state.data)
    const history = useHistory()
    const dispatch = useDispatch()
    const register = (e) => {
        e.preventDefault()
        dispatch(registerInitiate(email, password))
        setEmail("")
        setPassword("")
    }
    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [user])
    return (
        <div className='register'>
            <Link to="/">
              <img src={AmazonLogo} className='register-logo' alt="logo" />
            </Link>
            <div className="register-contianer">
                <h1>Create Account</h1>
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
                    <button type='submit' onClick={register} className='continue'>
                        Continue
                    </button>
                    <div className="detail">
                        <p>Already have an Acount ?</p>
                        <Link to="/login" className='signin-link'>
                            <p>Sign In</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
