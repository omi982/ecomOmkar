import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from "../assets/ShoppingGirl.jpeg"
import pic2 from "../assets/LOGO.jpeg"
import pic3 from "../assets/gogface.png"

import '../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center auto">
            <img src={pic1} align="left"  alt="pic" width={500} height={750} />
            <img src={pic2} style={{position: "relative",right:"570px" }} />
            <h3  style={{fontFamily: "Microsoft Sans Serif",color:"Black",position: "relative",right:"10px",fontSize:"25px"}}>Register Yourself</h3>
            <form action="/home" style={{width:"400px"}}>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px"}}>Name</label><br/>
                    <input type="text" name="first_name" required style={{width:"350px"}}/>
                </p>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px"}}>Email</label><br/>
                    <input type="email" name="email" required style={{width:"350px"}}/>
                </p>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px"}}>Contact</label><br/>
                    <input type="text" name="no." required style={{width:"350px"}}/>
                </p>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px"}}>Create Password</label><br/>
                    <input type="password" name="password" required style={{width:"350px"}}/>
                </p>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px"}}>Confirm Password</label><br/>
                    <input type="password" name="password" required style={{width:"350px"}}/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{color:"darkorange"}}>terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" style={{fontFamily: "Microsoft Sans Serif",background:"darkorange",width:"350px",fontSize:"17px"}}>Sign Up</button>
                </p>
            </form>
            <footer>
                <p><Link to="/login" style={{fontFamily: "Microsoft Sans Serif",color:"olivedrab", position: "relative",right:"95px"}}>Already have an account -{'>'}</Link></p>
            </footer>
        </div>
    )

}
