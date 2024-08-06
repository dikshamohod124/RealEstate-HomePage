import React from 'react'
import AB from '../assets/AB.jpeg'
import CD from '../assets/CD.jpeg'
import EF from '../assets/EF.jpeg'
const LatestBlog = () => {
    return (
        <>
            <div className='right'>
                <h6 style={{ color: 'red', marginTop: '100px' }}>OUR BLOG AND ARTICLES </h6>
            </div>
            <div className='Header' style={{ Color: 'black', textAlign: 'center', margintop: '20px' }}>
                <div className='right text-black' style={{ padding: '30px' }}>
                    <b><h3 style={{ color: 'black', marginTop: '0px' }}>Latest Blog Post</h3></b>
                </div>
            </div>
            <div className='row d-flex'>
                <div className='col-md-4 col-sm-4 d-flex align-items-center' style={{  borderRadius: '20px' }}>
                    <div className='rigth'>
                        <img src={EF} alt='img' style={{ marginLeft: '70px', height: '360px',width:'350px' }}></img>
                    </div>
                </div>
                <div className='col-md-4 ' style={{  borderRadius: '20px' }}>
                    <div className='rigth'>
                        <img src={CD} alt='img' style={{ marginLeft: '0px', height: '360px',width: '350px', marginTop: '0px' }}></img>
                    </div>
                </div>
                <div className='col-md-4 ' style={{  borderRadius:'20px'}}>
                    <div className='rigth'>
                        <img src={AB} alt='img' style={{ marginLeft: '-100px', height: '360px', width: '350px',marginTop: '0px' }}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LatestBlog




