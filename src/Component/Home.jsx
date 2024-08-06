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

const Home = () => {
    return (
        <>
            <section>
            <div className='container mt-5' >
                    <div className='row d-flex'>
                        <div className='col-md-6 ' style={{padding:'10px'}}>
                            <div className='left text-white'>
                                <h2>Skyrocket Your <br /> Finance Career</h2>
                                <p className='mt-4 lh-1.5'>Learn industry-relevent skills from top mentors.<br /> Network with aspirational peer group</p>
                                <button type='button' className='btn text-white shadow-none mt-3' style={{ backgroundColor: '#FF7D33 ', width: '270px', height: '50px', borderRadius: '20px' }}>View courses</button>
                            </div>
                        </div>
                        </div>
                <div className='Home'>
                    <img src={house} alt='img' style={{ width: '1460px', height: '600px', marginTop: '-1000px', marginLeft: '-200px' }} />
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
                </div>

            </section>
        </>
    )
}

export default Home