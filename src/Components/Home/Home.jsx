import React from 'react'
import avatarImg from '../../imgs/avataaars.svg'

export default function Home() {
  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center text-white' style={{ backgroundColor: '#1abc9c', height: '80vh' }}>
        <img src={avatarImg} alt="avatarImg" style={{ width: '20%' }} />
        <h2 className='fw-bolder pt-4'>START FRAMEWORK</h2>
        <div className="py-3">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star px-2"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div>
          <span>Graphic Artist - </span>
          <span>Web Designer - </span>
          <span>Illustrator</span>
        </div>
      </div>
    </>
  )
}
