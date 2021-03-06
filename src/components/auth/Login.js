import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const { email, password } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        });
    };
    const onSubmit = e => {
        e.preventDefault();
            console.log(formData)
    }

    return ( 
        <Fragment>
            <div className="alert alert-danger">
                Invalid Credentials
            </div>
            <h1 className="large text-primary">
                Sign In
            </h1>
            <p className="lead"> <i className="fas fa-user"></i> Sign Into Your Account</p>
            

            <form 
                onSubmit={e => onSubmit(e)} 
                className="form">
                
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
                
                <input type="submit" value="Login" className="btn btn-primary btn-form" />
            </form>
        
            <p className="my-1" >Don't have an account? <Link to="/register">Sign Un</Link></p>
        </Fragment>
     );
} 
export default Login;