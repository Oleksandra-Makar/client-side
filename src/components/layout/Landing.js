import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () => {
    return ( 
        <div>
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">To Travel Is To Live</h1>
                        <p className="lead">Create a Traveler profile, share posts and get feedback from other Travelers.</p>
                        <div className="buttons">
                            <Link to="/register" className="btn btn-primary">Sing Up</Link>
                            <Link to="login" className="btn btn">Sing In</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Landing;