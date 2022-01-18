import React, { useState } from "react";

const Form = props => {
    const [firstName , setFirstName ] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConfirm, setPasswordConfirm] = useState("");  
    return(
        <>
            <form>
                <div className="mb-3 row bg-light">
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputFirstName" onChange={(e)=>setFirstName(e.target.value)}/>
                        { 
                            firstName && firstName.length < 3 ? <p>Fist Name must be at least 2 characters</p> : ""
                        }
                    </div>
                </div>
                <div className="mb-3 row bg-light">
                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputLastName" onChange={(e)=>setLastName(e.target.value)}/>
                        { 
                            lastName && lastName.length < 3 ? <p>Last Name must be at least 2 characters</p> : ""
                        }
                    </div>
                </div>
                <div className="mb-3 row bg-light">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail" onChange={(e)=>setEmail(e.target.value)}/>
                        { 
                            email && email.length <= 4 ? <p>Email must be at least 5 characters</p> : ""
                        }
                    </div>
                </div>
                <div className="mb-3 row bg-light">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" onChange={(e)=>setPassword(e.target.value)}/>
                        { 
                            password && password.length <= 7 ? <p>Password must be at least 8 characters</p> : ""
                        }
                    </div>
                </div>
                <div className="mb-3 row bg-light">
                    <label htmlFor="inputConfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputConfirmPassword" onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                        { 
                           passwordConfirm == password ? "" :<p>Password must match</p>
                           
                        }
                    </div>
                </div>
            </form>
            <table className="table-borderless">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Your Form Data</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fist Name</td>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td>{passwordConfirm}</td>
                    </tr>
                </tbody>
                </table>
            
        </>
       
    )
}

export default Form;
