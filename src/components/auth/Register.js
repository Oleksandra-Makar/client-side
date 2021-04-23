import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import  axios  from 'axios';
const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        });
    };
    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match')
        } else {
            const newUser = {
                name,
                email,
                password
            }
            try {
                const config = {
                    baseURL: "http://localhost:5000",
                    headers:  {
                        "Content-Type": "application/json",
                    }
                }
                // const body = JSON.stringify(newUser);
                const res = await axios.post("/users", newUser, config);
                console.log(res.data);

            } catch (error) {
                console.log(error.response.data)
            }
        }
    }

    return ( 
        <Fragment>
            <h1 className="large text-primary">
                Sign Up
            </h1>
            <p className="lead"> <i className="fas fa-user"></i> Create Your Account</p>

            <form 
                onSubmit={e => onSubmit(e)} 
                className="form">
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        value={name} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email"
                        value={email} 
                        onChange={e => onChange(e)} 
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={e => onChange(e)} 
                        minLength="8" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)} 
                        minLength="8" 
                        required 
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-form" />
            </form>
        
            <p className="my-1" >Already have an account? <Link to="/login">Sign In</Link></p>
        </Fragment>
     );
}
 
export default Register;