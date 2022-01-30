import React from 'react'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const reset = (e) => {
      e.preventDefault()
      setForm({
        email: 'vortex@gmail.com',
        password: '1234567',
      })
  }
  return (
    <div className="login">
      <div className="form">
        <form>
          <img
            src="https://app.ortex.com/_next/image?url=%2Fassets%2Fortex-logo-v.png&w=384&q=75"
            alt="vortex"
          />
          <div className="form-element">
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={changeHandler}
                required
              />
            </label>
          </div>
          <div className="form-element">
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={changeHandler}
                placeholder="Password"
                required
              />
            </label>
          </div>
          <div className="form-element">
            <button type="submit" className="btn1">
              Login
            </button>
          </div>
          <div className="form-element">
            <button type="button" className="btn1 google">
              <div>
                <FcGoogle />
              </div>
              <div>Sign in with Google</div>
              <div></div>
            </button>
          </div>
          <div className="form-element">
            <Link
              to="/reset"
              className="link-element"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="form-element">
            <a href="mailto:support@ortex.com" className="link-element">
              Contact us - support@ortex.com
            </a>
          </div>
          <button onClick={reset} className="btn btn-secondary">Reset</button>
        </form>
      </div>
    </div>
  )
}
