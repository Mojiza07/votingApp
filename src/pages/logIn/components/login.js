import React from 'react'
import "../styles/logIn.css";
import { useState } from 'react';
import LetterI from "../../../asset/image/letterI.png";
import { Link } from 'react-router-dom';
import LoginImg from "../../../asset/image/signUpImage.jpg";


export default function LogInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(true);
        

    return(
        <div className='login-container'>
                <div className='login-image'>
                        <img src={LoginImg} alt={'voting-pics'}/>
                    </div>
                <div className={'logInForm'}>
                    <form className={'logInForm'}>
                        <h1 className={'welcomeBack'}>Welcome Back!</h1>
                        <h5 className={'welcomeBackText'}>Log in to your Dashboard</h5>

                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder={'Email:'}
                            type={'email'}
                            name={'email'}
                            required
                        />

                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder={'password:'}
                            type={"password"}
                            name={'password'}
                            required
                        />

                        <div className={'DivTwo'}>
                            <div className={'checkBoxRememberMe_div'}>
                                <input type={'checkbox'} className={'checkBox'}
                                    defaultChecked={checked}
                                    onChange={() => setChecked(!checked)}
                                /><p className={'rememberMe'}>Remember me</p>
                                
                            </div>

                            <div className={'letterIAndForgotPassword_div'}>
                                
                                 <img src={LetterI} className={'letterI'} alt={'Icon I'}/>
                                  <p className={'forgotPassword'}>Forgot Password</p>
                                
                            </div>
                        </div>

                        <button className={'logIn_btn'}>Login</button>

                        <div className={'dontHaveAnAccount_div'}>
                            <p className={'dontHaveAnAccount'}>Don't have an Account?</p>
                        <Link to={"/SignUp"}>
                            <p className={'signUp_link'}>Sign Up</p>
                        </Link>   
                        </div>
                    </form>
               
            </div>
        </div>
    )
}
