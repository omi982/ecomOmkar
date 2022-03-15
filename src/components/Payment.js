import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

import circle from '../assets/Ellipse 32.png'
import cross from '../assets/Icon metro-cross.png'
import cash from '../assets/Icon payment-cash.png'
import card from '../assets/Icon material-payment.png'
import upi from '../assets/UPI_logo_PNG-300x300-removebg-preview.png'
import wallet from '../assets/Icon awesome-wallet.png'
import netbank from '../assets/internet-banking-line-icon-png_233993-removebg-preview.png'
import line from '../assets/Line 19.png'
import dropdown from '../assets/Icon awesome-caret-down.png'
import line1 from '../assets/Line 12.png'
import lg from '../assets/LOGO.png'

export default function payment(){
    return(
        <div>
            <img src={lg}  id='logo'style={{position:"absolute",left:'160px'}} />
            <p id='head' style={{left:"500px"}}>Cart</p>
            <p id='head'style={{left:"680px"}}>Address</p>
            <p id='head' style={{color:"rgb(167, 21, 21)",left:"890px"}}>Payment</p>
            <img src={line1} id='headline' style={{left:"550px"}}/>
            <img src={line1} id='headline' style={{left:"770px"}}/>

            <p id='rectangle'>
                <img src={circle} style={{position:"absolute" ,top:"8px",left:"15px"}}/>
                <img src={cross} style={{position:"absolute" ,top:"14px",left:"22px"}}/>
                <p style={{fontFamily:"gilroy",position:"absolute" ,top:"8px",left:"45px"}}>
                    Bank Offer<br></br>
                    20% instant discount with SBI debit card,TCA
                    <p style={{color:"#FF0606"}}>
                        Show More
                    </p>
                </p>
                <img src={dropdown} style={{position:"absolute" ,top:"62px",left:"130px"}}/>
            </p>

            <p style={{position:"absolute",left:"85px",top:"225px"}}>Choose Payment Method:</p>
            <p style={{position:"absolute",left:"600px",top:"225px"}}>Pay on Delivery(Cash/Card/UPI)</p>

            <p id='fcontainerpayment'>
                <p id='fitempayment'>
                    <img src={cash}/>
                    <p id='pay' style={{color:"#FF0F0F"}}>
                    Cash On Delivery<br></br>
                    (Cash/Card/UPI)
                    </p>
                </p>
                <p id='fitempayment'>
                    <img src={card}/>
                    <p id='pay' style={{top:"100px"}}>
                    Credit/Debit Card
                    </p>
                </p>
                <p id='fitempayment'>
                    <img src={upi} style={{width:"40px",height:"24"}}/>
                    <p id='pay' style={{top:"180px"}}>
                    PhonePay/Google Pay/<br></br>
                    BHIM UPI
                    </p>
                </p>
                <p id='fitempayment'>
                    <img src={wallet}/>
                    <p id='pay' style={{top:"270px"}}>
                    Paytm/Payzapp/Wallets
                    </p>
                </p>
                <p id='fitempayment'>
                    <img src={netbank} style={{width:"40px",height:"24"}}/>
                    <p id='pay' style={{top:"360px"}}>
                    Net Banking
                    </p>
                </p>
            </p>

            <button id='sub_add' type='submit' style={{width:"450px",top:"660px"}}>PLACE ORDER</button>

            <img src={line} style={{position:"absolute",height:"600px",left:"1000px",top:"95px"}}/>

            <p style={{position:"absolute",left:"1050px",fontFamily:"Gill Sans MT",top:"100px"}}>
            <p style={{fontWeight:"bold"}}>PRICE DETAILS(1 item)</p>
            <p>Total MRP                                      Rs.1700</p>
            <p>Discount on MRP                                Rs.700</p>
            <p>Convenience Fee                                Free</p>
            </p>
            <img src={line1} style={{position:"absolute",width:"400px",left:"1050px",top:"310px"}}/>
            <p style={{position:"absolute",left:"1050px",top:"370px",fontWeight:"bold",fontFamily:"sans-serif"}}>Total Amount                                   Rs.1000</p>

        </div>
    )
}

