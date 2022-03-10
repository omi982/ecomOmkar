import React from 'react'

import map from '../assets/google_map.png'
import logo from '../assets/LOGO.png'

export default function address(){
    return(
        <div>
            {/* <img src={map} /> */}
            <button id='sub_add' type='submit' style={{position:"relative",top:"550px",left:"500px", background:"firebrick",width:"500px",height:"45px"}}>ADD ADDRESS</button>
            <img src={logo} id='logo'/>
        </div>
    )
}

