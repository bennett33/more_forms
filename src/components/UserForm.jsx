import React, { useState } from 'react';

const UserForm = (props) => {

    //initialize input variables
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters")
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters")
        }  else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Password is required");
        } else if (e.target.value.length < 8) {
            setConfirmPasswordError("Password must be at least 8 characters");
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Password must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => { 
        e.preventDefault();           //only for onSubmit
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };


    return (
        <>
            <h3>Form</h3>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                    <h4>Thank you for submitting the form</h4> :
                    <h4>Welcome, please submit the form</h4>
                }
                <div>
                    <div>
                        <label>First Name
                            <input type="text" className="form-control" name="firstName" onChange={handleFirstName}/>
                        </label>
                        {
                        firstNameError ?
                        <p style={{color:"red"}}>{firstNameError}</p> :
                        ""
                        }
                    </div>

                    <div>
                    <label>Last Name
                            <input type="text" className="form-control" name="lastName" onChange={handleLastName}/>
                        </label>
                        {
                        lastNameError ?
                        <p style={{color:"red"}}>{lastNameError}</p> :
                        ""
                        }
                    </div>

                    <div>
                    <label>Email
                            <input type="text" className="form-control" name="email" onChange={handleEmail}/>
                        </label>
                        {
                        emailError ?
                        <p style={{color:"red"}}>{emailError}</p> :
                        ""
                        }
                    </div>

                    <div>
                    <label>Password
                            <input type="password" className="form-control" name="password" onChange={handlePassword}/>
                        </label>
                        {
                        passwordError ?
                        <p style={{color:"red"}}>{passwordError}</p> :
                        ""
                        }
                    </div>

                    <div>
                    <label>Confirm Password
                            <input type="confirmPassword" className="form-control" name="confirmPassword" onChange={handleConfirmPassword}/>
                        </label>
                        {
                        confirmPasswordError ?
                        <p style={{color:"red"}}>{confirmPasswordError}</p> :
                        ""
                        }
                    </div>
                </div>
                <input type="submit" value="Create User"/>
            </form>


            {/* the text input in form will appear here */}
            <div>
                <h3>Your Form Data</h3>

                <div>
                    <p>First Name:</p>
                    <p>{firstName}</p>
                </div>

                <div>
                    <p>Last Name:</p>
                    <p>{lastName}</p>
                </div>

                <div>
                    <p>Email:</p>
                    <p>{email}</p>
                </div>

                <div>
                    <p>Password:</p>
                    <p>{password}</p>
                </div>

                <div>
                    <p>Confirm Password:</p>
                    <p>{confirmPassword}</p>
                </div>

            </div>
        </>
    )
};
export default UserForm;