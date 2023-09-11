import React from 'react'
import firstImg from '../../imgs/poert1.png'
import secondImg from '../../imgs/port2.png'
import thirdImg from '../../imgs/port3.png'

export default function Portfolio() {
  return (
    <>
    <div className='container text-center' style={{ height: '100vh' }}>
      <div style={{ color:'#2c3e50' }}>
      <h2 className='fw-bolder pt-4'>PORTFOLIO COMPONENT</h2>
      <div className="py-3">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star px-2"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
      <div className="row pb-4">
        <div className="col-md-4">
          <img src={firstImg} alt='firstImg' className='w-100 rounded-4'/>
        </div>
        <div className="col-md-4">
          <img src={secondImg} alt='secondImg' className='w-100 rounded-4'/>
        </div>
        <div className="col-md-4">
          <img src={thirdImg} alt='thirdImg' className='w-100 rounded-4'/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={firstImg} alt='firstImg' className='w-100 rounded-4'/>
        </div>
        <div className="col-md-4">
          <img src={secondImg} alt='secondImg' className='w-100 rounded-4'/>
        </div>
        <div className="col-md-4">
          <img src={thirdImg} alt='thirdImg' className='w-100 rounded-4'/>
        </div>
      </div>
    </div>
    </>
  )
}
