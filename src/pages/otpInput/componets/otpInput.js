// import React, {  Component, ReactDOM } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import '../../otpInput/styles/otpInput.css';
import otpInputImgage from "../../../asset/image/otpInputImage.jpg";


class OtpInput extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: '', otp1: '', otp2: '', otp3: '', otp4: '', disable: true}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value1, event) {
        this.setState({[value1]: event.target.value});
    }

    handleSubmit(event){

        const data = new FormData(event.target);
        event.preventDefault();
    }

    inputFocus = (elemt)  => {
        if (elemt.key === 'Delete' || elemt.key === 'Backspace') {
            const next = elemt.tabindex -2;

            if (next > -1) {
                elemt.target.form.elements[next].focus()
            }
        }

        else {
            console.log('next')

            const next = elemt.target.tabindex;
            if (next < 5) {
                elemt.target.form.elements[next].focus()
            }
        }
    }

    render() {
        return(
        
            <div className={'otpInputBox_div'}>

                 <form onSubmit={this.handleSubmit} className={'otpInputForm'}>
                     <div className={'enterYourOtp'}>
                         <h2>Enter your OTP number</h2>
                     </div>

                     <div className={'input'}>
                         <input className={'inputOne'}
                            value={this.state.otp1}
                            onChange={e => this.handleChange('otp1', e)}
                            type={'password'}
                            name={'otp1'}
                            autoComplete={'off'}
                            tabIndex='1' maxLength='1' onKeyUp={e => this.inputFocus(e)}
                        />

                        <input className={'inputTwo'}
                            value={this.state.otp2}
                            onChange={e => this.handleChange('otp2',e)}
                            type={'password'}
                            name={'otp2'}
                            autoComplete={'off'}
                            tabIndex='2' maxLength='1' onKeyUp={e => this.inputFocus(e)}
                        />

                        <input className={'inputThree'}
                            value={this.state.otp3}
                            onChange={e => this.handleChange('otp3',e)}
                            type={'password'}
                            name={'otp3'}
                            autoComplete={'off'}
                            tabIndex='3' maxLength='1' onKeyUp={e => this.inputFocus(e)}
                        />

                        <input className={'inputFour'}
                            value={this.state.otp4}
                            onChange={e => this.handleChange('otp4',e)}
                            type={'password'}
                            name={'otp4'}
                            autoComplete={'off'}
                            tabIndex='4' maxLength='1' onKeyUp={e => this.inputFocus(e)}
                        />
                    </div>
                  <div>
                    <Link to={"/otpInputAction"}>
                        <button id='button'>Continue</button>
                    </Link>
                  </div>
                    {/* <button className={'continue_btn'} type={"submit"}>Continue</button> */}
                </form>
            </div>
         );
    }
}
export default OtpInput;
