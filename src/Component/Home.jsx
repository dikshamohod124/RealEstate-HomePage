import React from 'react'
import house from '../assets/house.jpeg'
import residential from '../assets/residential.jpeg'
import commercial from '../assets/commercial.jpeg'
import resort from '../assets/resort.jpeg'
import land from '../assets/land.jpeg'
import construction from '../assets/construction.jpeg'
import luxery from '../assets/luxery.jpeg'
import eco from '../assets/eco.jpeg'
import historic from '../assets/historic.jpeg'
import Box from '../assets/Box.jpeg'

const Home = () => {
    return (
        <>
            <section>
                <div className='Home'>
                    <img src={house} alt='img' style={{ width: '1370px', height: '550px', marginTop: '-1000px', marginLeft: '-120px' }} />
                    <div>
                    <img src={Box} alt='img' style={{ width: '1060px', height: '80px', marginTop: '-700px', marginRight: '70px',borderRadius:'10px' }} />
                    <button class="btn btn-danger shadow-none" style={{ width: '80px',marginRight:'40px',marginTop:'-930px',borderRadius:'20px' }}>Rent</button>
                    <button class="btn btn-danger shadow-none" style={{ width: '80px',marginRight:'40px',marginTop:'-930px',backgroundColor:'white',color:'black',borderRadius:'20px' }}>Buy</button>
                    <button class="btn btn-danger shadow-none" style={{ width: '80px',marginRight:'120px',marginTop:'-930px',backgroundColor:'white',color:'black',borderRadius:'20px' }}>Sell</button>
                    <div style={{marginTop:'-750px',color:'white',marginLeft:'-40px',justifyContent:'space-evenly'}}>
                    <h1>Find the Perfect Place<br/> to Call Home</h1>

                        <p className='mt-4 lh-1.5'style={{color:'white'}}>Explore a wide range of properties in the most desirable locations.Whether you’re<br/> looking for a cozy apartment,
                        a spacious family home, or a luxurious<br/> estate, we have listings to suit every lifestyle and budget.</p>
                    </div>
                    </div>
                </div>
                <div className='row d-flex' style={{ marginTop: '-235px', backgroundColor: 'lightgrey', width: '1410px', marginLeft: '-150px', height: '150px', padding: '30px' }}>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>300+</h1>
                            <p><b className='mt-2 1h-1.5'>Happy Client</b></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>1K+</h1>
                            <p><b className='mt-2 1h-1.5'>Property Ready</b></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>80+</h1>
                            <p><b className='mt-2 1h-1.5'>Completed Agent</b></p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right-text-black'>
                            <h1 style={{ color: 'red' }}>60%</h1>
                            <p><b className='mt-2 1h-1.5'>Years Growth</b></p>
                        </div>
                    </div>
                </div>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-3 col-sm-6 d-flex align-items-center '>
                            <img src={residential} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-3'>
                            <div className='right'>
                                <img src={commercial} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='right'>
                                <img src={resort} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='right'>
                                <img src={land} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-3 col-sm-6 d-flex align-items-center '>
                            <img src={construction} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-3'>
                            <div className='right'>
                                <img src={luxery} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='right'>
                                <img src={eco} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='right'>
                                <img src={historic} alt='img' style={{ width: '270px', height: '120px', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home