import React from 'react';
import { Link } from 'react-router-dom'
import item from '../assets/item.png'
import line from '../assets/Line 12.png'
import size from '../assets/Ellipse 25.png'


export default function ProductDetails() {
    return(
        <div style={{background:"#C8F2EF"}}>
            <div style={{position:"absolute",left:"4%",top:"8%"}}>
                <img src={item} alt='product' width={430} height={510}/>
            </div>
            <div style={{fontStyle:"italic" ,position:"absolute", right:"3%"}}>
                <p style={{fontWeight:"bold"}}>HRX by Hrithik Roshan</p>
                <p style={{color:"GrayText"}}>HRX By Hrithik Roshan Running Men Blue Packable Solid Jacket</p>
                <img src={line} />
                <p>Rs. 1664 <span style={{color:"orange"}}>(65% OFF)</span></p>
                <p style={{color:"green"}}>inclusive of all taxes</p>
                <img src={line} />
                <p>SELECT SIZE</p>
                <img src={size}  style={{position:"relative"}}/> <p style={{position:"absolute",left:"2.5%",top:"20%",fontSize:"25px"}}>S</p>
                <img src={size}  style={{position:"relative" ,left:"2%"}}/> <p style={{position:"absolute",left:"13%",top:"20%",fontSize:"25px"}}>M</p>
                <img src={size}  style={{position:"relative",left:"4%"}}/> <p style={{position:"absolute",left:"25%",top:"20%",fontSize:"25px"}}>L</p>
                <img src={size}  style={{position:"relative",left:"6%"}}/> <p style={{position:"absolute",left:"35%",top:"20%",fontSize:"25px"}}>XL</p>
                <img src={size}  style={{position:"relative",left:"8%"}}/> <p style={{position:"absolute",left:"45%",top:"20%",fontSize:"25px"}}>XXL</p>
                {/* BUTTONS */}
                <img src={line} style={{position:"absolute",top:"25%",left:"0%"}}/>
                <p>Get it by Sat, Feb 05 - 462023<br></br>
                Seller: Omnitech Retail </p>
                <img src={line} />
                <p>DELIVERY OPTIONS</p>
                <p>Get it by Sat, Feb 05<br></br>
                    Pay on delivery available<br></br>
                    Easy 15 days return & exchange available</p>
                    <img src={line} />
                <p>BEST OFFERS</p>
                <p>This product is already a its best price</p>
                <p>EMI option available</p>
                <p>EMI starting from Rs.77/month</p>
                <img src={line} />
                <p>PRODUCT DETAILS</p>
                <p>When you enjoy your morning run, you need to have the right gear.<br></br>
                Cut from fabric enhanced with Rapid-Dry and Anti Microbial technology,<br></br>
                the HRX Men's Running Jacket keeps you cool and comfortable throughout<br></br>
                your run. What's more, it's got discreet storage in the back.</p>
                                <p>FEATURES</p>
                                <p>Running Jacket
                Rapid-Dry Technology wicks sweat & makes the fabric dry fast.<br></br>
                Anti-microbial technology prevents the growth of odor-causing microbes keeping<br></br>
                you fresh & hygienic all day.<br></br>
                Adjustable hood protects your ears and neck when you step outdoors.<br></br>
                Waterproof fabric keeps you cool and dry when it rains.<br></br>
                Pocket at the back to hold the essentials.<br></br>
                Folds neatly into a small pack<br></br>
                Front open<br></br>
                Lightweight Jacket<br></br>
                Neck: Hooded<br></br>
                Sleeve length: Full Sleeves<br></br>
                Design: Solid<br></br>
                Length: Regular length<br></br>
                Fit: Regular fit</p>
            </div>
        </div>
    )
}