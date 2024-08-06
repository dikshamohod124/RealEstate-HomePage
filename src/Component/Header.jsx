import React from 'react'
import houseone from '../assets/house one.jpeg'
const Header = () => {
    return (
        <>
            <div className='right'>
                <h6 style={{ color: 'red', marginTop: '100px' }}>OUR SERVICES</h6>
            </div>
            <div className='Header' style={{ Color: 'black', textAlign: 'center', margintop: '20px' }}>
                <div className='right text-black' style={{ padding: '30px' }}>
                    <b><h3 style={{ color: 'black', marginTop: '0px' }}>Recommended For You</h3></b>
                </div>
                <div  style={{textAlign:'center'}}>
                 <button class="btn btn-denger shadow-none" style={{backgroundColor:'red',color:'white'}}>View All</button>&nbsp;&nbsp;
                 <button class="btn btn-denger shadow-none">Appartment</button>&nbsp;&nbsp;
                 <button class="btn btn-denger shadow-none">View All</button>&nbsp;&nbsp;
                 <button class="btn btn-denger shadow-none">View All</button>&nbsp;&nbsp;
                 <button class="btn btn-denger shadow-none">View All</button>
                </div>
            </div>
            <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-4 col-sm-6 d-flex align-items-center '>
                            <img src={houseone} alt='img' style={{ width: '400px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    <div className='col-md-4'>
                        <div className='right'>
                            <img src={houseone} alt='img' style={{ width: '400px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='right'>
                            <img src={houseone} alt='img' style={{ width: '400px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-4 col-sm-6 d-flex align-items-center '>
                            <img src={houseone} alt='img' style={{ width: '400px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    <div className='col-md-4'>
                        <div className='right'>
                            <img src={houseone} alt='img' style={{ width: '400px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='right'>
                            <img src={houseone} alt='img' style={{ width: '400px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-4 '>
                            <img src={houseone} alt='img' style={{ width: '380px', height: '450px',borderRadius:'20px',marginLeft:'20px' }} />
                        </div>
                    <div className='col-md-4'>
                        <div className='right'>
                            <img src={houseone} alt='img' style={{ width: '380px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='right'>
                            <img src={houseone} alt='img' style={{ width: '380px', height: '450px',borderRadius:'20px' }} />
                        </div>
                    </div>
                    </div>
                </div>
                <div  style={{textAlign:'center'}}>
                 <button class="btn btn-denger shadow-none" style={{backgroundColor:'red',color:'white',}}>View All Properties</button>&nbsp;&nbsp;
                 </div>
        </>
    )
}
export default Header