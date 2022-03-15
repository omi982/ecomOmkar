import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

import lg from '../assets/LOGO.png'
import line from '../assets/Line 12.png'
import cart from '../assets/istockphoto-1079804618-170667a-removebg-preview.png'

export default function address(){
    return(
        <div >
            <img src={lg}  id='logo'style={{position:"absolute",left:'160px'}} />
            <p id='head' style={{color:"rgb(167, 21, 21)",left:"500px"}}>Cart</p>
            <p id='head'style={{left:"680px"}}>Address</p>
            <p id='head' style={{left:"890px"}}>Payment</p>
            <img src={line} id='headline' style={{left:"550px"}}/>
            <img src={line} id='headline' style={{left:"770px"}}/>
            <img src={cart} style={{position:"absolute",left:"38%",top:"25%",height:"300px",width:"300px"}}/>
            <p style={{position:"absolute",left:"41%",top:"60%",fontSize:"25px",fontFamily:"sans-serif"}}>Your Cart is Empty</p>

        </div>
    )
}