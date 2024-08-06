import React from 'react'
import houseone from '../assets/house one.jpeg'
import pune from '../assets/pune.jpeg'
import nashik from '../assets/nashik.jpeg'
import amerika from '../assets/amerika.jpeg'
import mumbai from '../assets/mumbai.jpeg'
import thane from '../assets/thane.jpeg'
import Buy from '../assets/Buy.jpeg'
import rent from '../assets/rent.jpeg'
import cell from '../assets/cell.jpeg'


const ExploreCities = () => {
    return (
        <>
        <div className='right'>
                <h6 style={{ color: 'red', marginTop: '100px' }}>Our Servises</h6>
            </div>
            <div className='Header' style={{ Color: 'black', textAlign: 'center', margintop: '20px' }}>
                <div className='right text-black' style={{ padding: '30px' }}>
                    <b><h3 style={{ color: 'black', marginTop: '0px' }}>What We Do ?</h3></b>
                </div>
            </div>
         <div className='row d-flex'>
                        <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '350px', width: '330px', marginLeft: '100px', backgroundColor: ' white', justifyContent: 'space-evenly' }}>
                            <div className='rigth'>
                                <img src={Buy} style={{ marginLeft: '10px', height: '70px', marginTop: '0px' }}></img>
                                <h5 style={{ marginTop: '0px', marginLeft: '20px' }}>By A New Home </h5>
                                <p className='mt-0 1h-1' style={{ padding: '0px' }}>Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying 
                                experience.</p>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '350px', width: '330px', marginLeft: '20px', justifyContent: 'space-evenly', backgroundColor: ' white' }}>
                            <div className='rigth'>
                                <img src={rent} style={{ marginLeft: '70px', height: '80px', marginTop: '0px' }}></img>
                                <h5 style={{ marginTop: '0px', marginLeft: '60px' }}>Rent A Home  </h5>
                                <p className='mt-0 1h-1' style={{ padding: '0px' }}>Discover your perfect rental effortlessly. Explore a diverse variety of listings tailoredprecisely to suit your unique lifestyle needs.</p>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{ border: '2px solid rgb(238, 234, 234)', borderRadius: '20px', height: '350px', width: '330px', marginLeft: '20px', justifyContent: 'space-evenly', backgroundColor: ' white' }}>
                            <div className='rigth'>
                                <img src={cell} style={{ marginLeft: '30px', height: '80px', marginTop: '0px' }}></img>
                                <h5 style={{ marginTop: '0px', marginLeft: '10px' }}>Cell A Home </h5>
                                <p className='mt-0 1h-1' style={{ padding: '0px' }}>Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.</p>
                            </div>
                        </div>
                    </div>
            <div className='right'>
                <h6 style={{ color: 'red', marginTop: '100px' }}>Explore Cities</h6>
            </div>
            <div className='Header' style={{ Color: 'black', textAlign: 'center', margintop: '20px' }}>
                <div className='right text-black' style={{ padding: '30px' }}>
                    <b><h3 style={{ color: 'black', marginTop: '0px' }}>Our Location For You</h3></b>
                </div>
            </div>
            <div className='container mt-1' >
                <div className='row d-flex'>
                    <div className='col-md-1  '>
                        <img src={amerika} alt='img' style={{ width: '145px', height: '450px', borderRadius: '20px',marginLeft:'-120px' }} />
                    </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={pune} alt='img' style={{ width: '290px', height: '450px', borderRadius: '20px',marginLeft:'-10px' }} />
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='right'>
                            <img src={mumbai} alt='img' style={{ width: '290px', height: '450px', borderRadius: '20px', marginLeft: '30px' }} />
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <img src={thane} alt='img' style={{ width: '290px', height: '450px', borderRadius: '20px', marginLeft: '70px ' }} />
                    </div>
                    <div className='col-md-1'>
                        <div className='right'>
                            <img src={nashik} alt='img' style={{ width: '145px', height: '450px', borderRadius: '20px', marginLeft: '110px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ExploreCities