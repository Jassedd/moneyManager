import { useState } from "react";
import InputField from "../../components/Input_Field/input";
import { useForm } from "../../utils/useForm";
import "./Register.css"

function Register() {
    const [formData, handleInputChange] = useForm({
     Email: "",
     Password: ""
    });

return(
    <>
        <section className="Register-Page">
            <div className="background-forms-n1">
            </div>
            <div className="background-forms-n2">
                 <svg viewBox="0 0 425 600" xmlns="http://www.w3.org/2000/svg" className="svg-line">
                <path d="M 70 -80 Q -50 390 230 420 C 399 450 305 350 1000 300" stroke="#F8F9FF" stroke-width="5" fill="none" />
                </svg>
            </div>
            <div className="headline">
                    <h1 className="Title">Create Account</h1>
                    <div>
                        <h2 className="Subtitle">Create an account so you can explore all the existing jobs</h2>
                    </div>
            </div>
            <div className="inputContainer">
                <InputField 
                    id="email"
                    type="email"
                    value={formData.Email}
                    placeholder= "Email"
                    className = "email-input"
                    onChange={handleInputChange}
                />
                <InputField 
                    id="password"
                    type="password"
                    value= {formData.Password}
                    placeholder= "Password"
                    className = "password-input"
                />
                <InputField 
                    id="password"
                    type="password"
                    value= {formData.Password}
                    placeholder= "Confirm Password"
                    className = "ConfirmPassword-input"
                />
            </div>
            <div className="containerButton">
                <div>
                    <button className="CreateButton">Sign up</button>
                </div>
                <div className="SignInContainer">
                    <button className="Sign-in">Already have an account?</button>
                </div>
            </div>
            <div className="background-forms-n3">
                 <svg viewBox="100 0 725 800" xmlns="http://www.w3.org/2000/svg" className="svg-line">
                <path d="M 500 0 L 500 800" stroke="#F8F9FF" stroke-width="5" fill="none" />
                </svg>
            </div>
            <div className="background-forms-n4">
                 <svg viewBox="0 0 625 400" xmlns="http://www.w3.org/2000/svg" className="svg-line">
                <path d="M 100 -40 L 450 30 L 350 700 " stroke="#F8F9FF" stroke-width="5" fill="none" />
                </svg>
            </div>
        </section>
    </>

);
};


export default Register;