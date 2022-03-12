import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

import map from '../assets/google_map.png'
import lg from '../assets/LOGO.png'
import line from '../assets/Line 12.png'

export default function address(){
    return(
        <div>
            {/* <img src={map} /> */}
            <button id='sub_add' type='submit' >ADD ADDRESS</button>
            <img src={lg}  id='logo'style={{position:"absolute",left:'160px'}} />
            <p id='head' style={{left:"500px"}}>Cart</p>
            <p id='head'style={{color:"rgb(167, 21, 21)",left:"680px"}}>Address</p>
            <p id='head' style={{left:"890px"}}>Payment</p>
            <img src={line} id='headline' style={{left:"550px"}}/>
            <img src={line} id='headline' style={{left:"770px"}}/>
            
        </div>
    )
}

