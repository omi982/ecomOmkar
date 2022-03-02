import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from "./ShoppingGirl.jpeg"
import pic2 from "./LOGO.jpeg"
import pic3 from "./gogface.png"

import '../../App.css'
import { render } from 'react-dom'

export default function SignInPage() {

    return (
        
        <div className="text-center auto">

        
            <img src={pic1} align="left"  alt="pic" width={500} height={750} />
            <img src={pic2} align="left"/>
            <h2  style={{fontFamily: "Gilroy"}}>Sign in</h2>
            {/* <img src={pic3} align="left"/> */}
            <form >
                <p>
                    <label style={{fontFamily: "Gilroy"}}>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label style={{fontFamily: "Gilroy"}}>Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" style={{fontFamily: "Gilroy"}}>Login</button>
                </p>
            </form>
            <footer>
                <p style={{fontFamily: "Gilroy"}}><Link to="/register">Forget password?</Link></p>
                <p style={{fontFamily: "Gilroy"}}>First time? <Link to="/register">Create an account</Link></p>
                <p style={{fontFamily: "Gilroy"}}><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    );
}
