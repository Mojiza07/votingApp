import React from "react";
import '../styles/verifyAccForm.css'
import {useState} from "react";
import { Link } from "react-router-dom";
import otpInputActionImage from '../../../asset/image/otpInputActionImage.jpg';

export default function VerifyAccForm () {
    const [firstName, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
         <div className={'verifyAccForm_div'}>
                <div className={'manWithDivs_div'}>
                    <img src={otpInputActionImage} className={'verifyAccImg'} alt={'image'}/>
                </div> 
                <form className={'verifyAccForm'}>
                    <h1 className={'welcomeV'}>Welcome!</h1>
                    <h5 className={'welcomeTextV'}>Sign up by entering the information below</h5>

                    <input
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder={'First name:'}
                        type={'firstName'}
                        name={'firstName'}
                        required
                    />

                    <input
                        value={lastname}
                        onChange={e => setLastName(e.target.value)}
                        placeholder={'Last name:'}
                        type={'lastName'}
                        name={'lastName'}
                        required
                    />

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

                    <div className={'alreadyHaveAnAccount_div'}>
                        <p className={'already_have_an_account'}>Already have an account?</p>
                        <a className={'logIn_link'}>Login</a>
                    </div>

                    <button className={'signUp_btn'}>Sign Up</button>
                    <div className={'transparentDiv'}></div>
                    <div className={'notification'}><p>Kindly Check your mail to see your OTP number for Account verification</p>
                        <Link to={"/otpInput"}>
                                {/* <a className={'OtpInput_link'}>OK</a> */}
                                <button className={'OtpInput_link'} >OK</button>
                            </Link>
                    </div>

            </form>

        </div>
    )
}