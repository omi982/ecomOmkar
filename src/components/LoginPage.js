import React from 'react'
import { Link } from 'react-router-dom'
import shopgirl from "../assets/ShoppingGirl.jpeg"
import log from "../assets/LOGO.png"
import google from "../assets/gogface.png"

import '../App.css'

export default function SignInPage() {

    return (
        
        <div className="text-center auto">
        
            <img src={shopgirl} align="left" alt="pic" width={500} height={750} />
            <img src={log} id='logo' />
            <h2  style={{fontFamily: "Microsoft Sans Serif",color:"Black",position: "absolute",right:"40%",fontSize:"35px"}}>Sign in</h2>
            <br></br>
            <img src={google} style={{position: "absolute",left:"53%",top:"60px" }} width={400} height={100}/>
            <br></br>
            <form style={{position:"absolute",right:"21%",top:"23%"}}>
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
                    <Link to="/register" style={{fontFamily: "Microsoft Sans Serif",color:"olivedrab", position: "absolute",right:"38.5%",top:"67%"}}>Forget password?</Link>
                    <Link to="/register" style={{fontFamily: "Microsoft Sans Serif",color:"olivedrab", position: "absolute",right:"21%",top:"67%"}}>Sign up!</Link>
                </p>
                {/* <p style={{fontFamily: "Gilroy"}}><Link to="/">Back to Homepage</Link></p> */}
                <p style={{fontFamily: "Microsoft Sans Serif",color:"Black",position: "absolute",top:"73%",right:"33.5%",fontSize:"18px"}}>OR</p>
                <p style={{fontFamily: "Candara Light ",color:"Black",position: "absolute",top:"78%",right:"30%",fontSize:"24px"}}>Login With OTP</p>
                <input type="text" name="first_name" required style={{width:"350px",background:"gainsboro",position:"absolute",top:"85%",right:"22%",name:"Enter phone number"}} />
        </div>
    );
}
