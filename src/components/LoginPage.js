import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from "../assets/ShoppingGirl.jpeg"
import pic2 from "../assets/LOGO.jpeg"
import pic3 from "../assets/gogface.png"

import '../App.css'
import { render } from 'react-dom'

export default function SignInPage() {

    return (
        
        <div className="text-center auto">
        
            <img src={pic1} align="left" alt="pic" width={500} height={750} />
            <img src={pic2} style={{position: "relative",right:"570px" }} />
            <h2  style={{fontFamily: "Microsoft Sans Serif",color:"Black",position: "relative",right:"150px",fontSize:"35px"}}>Sign in</h2>
            <br></br>
            <img src={pic3} style={{position: "relative",left:"0px" }} width={400} height={100}/>
            <br></br>
            <form style={{width:"400px"}}>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px"}}>Username</label><br/>
                    <input type="text" name="first_name" required style={{width:"350px"}} />
                </p>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px"}}>Password</label>
                    <br/>
                    <input type="password" name="password" required style={{width:"350px"}}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" style={{fontFamily: "Microsoft Sans Serif",background:"darkorange",width:"350px",fontSize:"17px"}}>Login</button>
                </p>
            </form>
                <p>
                    <Link to="/register" style={{fontFamily: "Microsoft Sans Serif",color:"olivedrab", position: "relative",right:"95px"}}>Forget password?</Link>
                    <Link to="/register" style={{fontFamily: "Microsoft Sans Serif",color:"olivedrab", position: "relative",left:"95px"}}>Sign up!</Link>
                </p>
                {/* <p style={{fontFamily: "Gilroy"}}><Link to="/">Back to Homepage</Link></p> */}
                <p style={{fontFamily: "Microsoft Sans Serif",color:"Black",position: "relative",right:"0px",fontSize:"18px"}}>OR</p>
                <p style={{fontFamily: "Candara Light ",color:"Black",position: "relative",right:"0px",fontSize:"24px"}}>Login With OTP</p>
                <input type="text" name="first_name" required style={{width:"350px",background:"gainsboro",position:"relative",left:"0px",name:"Enter phone number"}} />
        </div>
    );
}
