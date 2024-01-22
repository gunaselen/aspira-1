import React from 'react'


import "./LoginPage.scss"



export default function AuthenticationLayout(props) {
  return (
    <>

<div className='login'>

<div className="login-section">
    <div className="login-section-text">
        <h1>Grow Stronger, Together.</h1>

    </div>
    <div className="login-section-form">
    {props.children}
    </div>
</div>

 
</div>

    </>
  )
}
