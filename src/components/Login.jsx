
import React, { useState } from 'react'
import styles from '../css/login.module.css'

function Login() {
  const[email,setEmail]=useState()
  const[pass,setpass]=useState()
  return (
    <div className={styles.login}>
      <div className={styles.innerdiv}>
        <h3>Login</h3>
        <span className={styles.subhead}>
          Hi,Welcome back 👋
        </span>
        <form>
          <div className ={styles.email}>
            <label for="email">Email</label>
            <input type="text" value={email} className={styles.input1} placeholder='E.g. john2311061@akgec.ac.in' onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div className ={styles.email}>
            <label for="email">Password</label>
            <input type="text" value={pass} className={styles.input1} placeholder='E.g. john2311061@akgec.ac.in' onChange={(e)=>{setpass(e.target.value)}} />
          </div>
          <div className={styles.forgotpass}>
            <div className ={styles.remember}>
            <input type="checkbox" className={styles.rememberinput} />
             <label for="remember">Remember Me</label>
            </div>
            <span className={styles.link}>Forgot Password?</span>
          </div>
          <buttonn className = {styles.login1}>Login</buttonn>
        </form>
      </div>
    </div>
  )
}

export default Login
