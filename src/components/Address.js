import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

import map from '../assets/google_map.png'
import lg from '../assets/LOGO.png'
import line from '../assets/Line 12.png'

export default function address(){
    return(
        <div>
            <button id='sub_add' type='submit' >ADD ADDRESS</button>
            <img src={lg}  id='logo'style={{position:"absolute",left:'160px'}} />
            <p id='head' style={{left:"500px"}}>Cart</p>
            <p id='head'style={{color:"rgb(167, 21, 21)",left:"680px"}}>Address</p>
            <p id='head' style={{left:"890px"}}>Payment</p>
            <img src={line} id='headline' style={{left:"550px"}}/>
            <img src={line} id='headline' style={{left:"770px"}}/>
            <input id='formadrs'type={'tel'} placeholder="City/District" style={{width:"220px",bottom:"130px"}}/>
            <input id='formadrs'type={'text'} placeholder="State" style={{width:"240px",bottom:"130px",left:"750px"}}/>
            <input id='formadrs'type={'text'} placeholder="Locality/Town" style={{bottom:"190px"}}/>
            <input id='formadrs'type={'text'} placeholder="(House no.,Street,Area)" style={{bottom:"240px"}}/>
            <input id='formadrs'type={'text'} placeholder="Pincode" style={{bottom:"290px"}}/>
            <input id='formadrs'type={'number'} placeholder="Mobile No." style={{bottom:"420px"}}/>
            <input id='formadrs'type={'text'} placeholder="Name" style={{bottom:"470px"}}/>
            <p id='fname' >ADDRESS/</p>
            <p id='fname' style={{color:"GrayText",left:"610px"}}>(use current location)</p>
            <img src={map} id='fname' style={{left:"830px",bottom:"340px"}}/>
            <p id='fname' style={{bottom:"500px"}}>CONTACT DETAILS</p>
        </div>
    )
}

