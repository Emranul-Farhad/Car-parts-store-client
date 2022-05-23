import React from 'react';
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import { useLocation } from 'react-router-dom';




const Footer = () => {

  const {pathname} = useLocation()

    return (
        <div style={ pathname.includes('/login') ? {display : "none"} : {display : "block" }

        } >
            <footer class="new_footer_area bg_color">
                <div class="new_footer_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget company_widget wow fadeInLeft commonstyle" data-wow-delay="0.2s" >
                                    <h3 class="f-title f_600 t_color f_size_18 uppercase font-extrabold">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new templates and extensions.!</p>
                                    <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                        <input type="text" name="EMAIL" class="form-control memail" placeholder="Email"/>
                                            <button class="btn btn_get bg-[#FC5A34] text-white" type="submit">Subscribe</button>
                                            <p class="mchimp-errmessage" style={{display: "none"}}> </p>
                                            <p class="mchimp-sucmessage" style={{display: "none"}}> </p>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft commonstyle" data-wow-delay="0.4s">
                                    <h3 class="f-title f_600 f_size_18 font-extrabold ">PRODUCTS</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a className='font-bold uppercase text-[#FC5A34]  
                                        hover:text-[#e03f1a]' href="/">Rim</a></li>                                  
                                        <li><a className='font-bold uppercase text-[#FC5A34]' href="#brandwiseshop">Tire</a></li>
                                        <li><a className='font-bold uppercase text-[#FC5A34]' href="#/">Gear</a></li>
                                        <li><a className='font-bold uppercase text-[#FC5A34]' href="/">Mirror</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget about-widget pl_70 wow fadeInLeft commonstyle" data-wow-delay="0.6s">
                                    <h3 class="f-title f_600 t_color f_size_18 font-extrabold uppercase">Help</h3>
                                    <ul class="list-unstyled f_list">
                                        <li><a  className='font-bold uppercase' href="#">FAQ</a></li>
                                        <li><a  className='font-bold uppercase' href="#">Term &amp; conditions</a></li>
                                        <li><a  className='font-bold uppercase' href="#">Reporting</a></li>
                                        <li><a  className='font-bold uppercase' href="#">Documentation</a></li>
                                        <li><a  className='font-bold uppercase' href="#">Support Policy</a></li>
                                        <li><a  className='font-bold uppercase' href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="f_widget social-widget pl_70 wow fadeInLeft commonstyle" data-wow-delay="0.8s">
                                    <h3 class="f-title f_600 t_color f_size_18 font-extrabold uppercase">Team Solutions</h3>
                                    <div class="f_social_icon">
                                        <a href="#" class="fab fa-facebook"> <AiFillLinkedin className='mt-2 w-10'></AiFillLinkedin> </a>
                                        <a href="#" class="fab fa-twitter"> <FaTwitter className='mt-2 w-10' ></FaTwitter> </a>
                                        <a href="#" class="fab fa-linkedin"> <BsFacebook className='mt-2 w-10'></BsFacebook> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bg">
                        <div class="footer_bg_one"></div>
                        <div class="footer_bg_two"></div>
                    </div>
                </div>
                <div class="footer_bottom">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-sm-7">
                                <p class="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
                            </div>
                            <div class="col-lg-6 col-sm-5 text-right">
                                <p>Made with <i class="icon_heart"></i> in <a href="http://cakecounter.com" target="blank">CakeCounter</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
        </div>
    );
};

export default Footer;