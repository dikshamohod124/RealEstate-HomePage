 import React from 'react'
const Footer = () => {
    return (
        <>
            <section style={{ backgroundColor: '#161E2D', height: '550px', marginTop: '-90px', width: '1400px', marginLeft: '-150px' }}>
                <div style={{ color: 'red', marginTop: '100px', padding: '50px', marginLeft: '-1000px' }}>
                    <h4><b>RealEstate</b></h4>
                    <div>
                        <h6 style={{ color: 'white', padding: '0px', marginTop: '-30px', marginLeft: '1850px' }}>Follow Us :</h6>
                        <div style={{ marginLeft: '2100px', color: 'white', justifyContent: 'space-evenly', marginTop: '-30px', height: '100px' }}>
                            <span><i class="ri-facebook-fill"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="ri-linkedin-fill"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="ri-twitter-line"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="ri-instagram-line"></i>
                        </div>
                    </div>
                </div>
                <div className='container mt-5' style={{marginLeft:'90px'}} >
                    <div className='row d-flex' style={{ marginTop: '-60px' }}>
                        <div className='col-md-4'>
                            <div className='left text-white' style={{ marginRight: '0px' }}>
                                <h6>Specializes in providing high-class tours for those in need. Contact Us</h6>&nbsp;
                                <h6 style={{marginRight:'0px'}}><span><i class="ri-map-pin-line"></i></span>   Lane No. 3, Balajinagar, Mahadev Nagar, Kharadi</h6><br />
                                <h6 style={{marginRight:'30px'}}><span><i class="ri-phone-line"></i></span>+91 9075326686</h6><br />
                                <h6 style={{marginRight:'30px'}}><span><i class="ri-mail-line"></i></span>  realestate@gmail.com</h6>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='rigth text-white'>
                                <h5><b>Categories</b></h5>&nbsp;
                                <h6>Pricing Plans</h6>&nbsp;
                                <h6>Our Services</h6>&nbsp;
                                <h6>About Us</h6>&nbsp;
                                <h6>Contact Us</h6>&nbsp;
                            </div>
                        </div>
                        <div className='col-md-2' style={{marginRight:'0px'}}>
                            <div className='rigth text-white'>
                                <h5 style={{marginRight:'-20px'}}><b>Our Company</b></h5><br />
                                <h6 style={{marginRight:'-20px'}}>Property For Sale</h6><br />
                                <h6 style={{marginRight:'-20px'}}>Property For Rent</h6><br />
                                <h6 style={{marginRight:'-20px'}}>Property For Buy</h6><br />
                                <h6 style={{marginRight:'-20px'}}>Our Agents</h6><br />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='rigth text-white'>
                                <h5><b>Newsletter</b></h5><br />
                                <h6 style={{marginRight:'-150px'}}>Your Weekly/Monthly Dose of Knowledge and<br/> Inspiration<span><i class="ri-telegram-2-line"></i></span></h6><br />
                                <h6 style={{marginLeft:'45px'}}><span><i class="ri-mail-line"></i></span>   Your email address</h6><br /><i class="ri-telegram-2-line"></i>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <div className='row d-flex'>
                    <div className='col-md-6'>
                        <h6 style={{ color: 'white', marginRight: '150px' }}>©2024 RealEstate. All Rights Reserved.</h6>
                    </div>
                    <div className='col-md-6'>
                        <h6 style={{ color: 'white', marginLeft: '200px' }}>Terms Of Services &nbsp; Privacy Policy &nbsp; Cookie Policy</h6>
                    </div>
                </div>
            </section ><br /><br />
        </>
    )
}

export default Footer