import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="container text-center" style={{ height: '90vh' }}>
        <div style={{ color: '#2c3e50' }}>
          <h2 className='fw-bolder pt-4'>CONATCT SECTION</h2>
          <div className="py-3">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star px-2"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        </div>
        <div className='pt-5'>
          <input type="text" placeholder='userName' className='border-0 shadow rounded mb-4 py-2 ps-2 w-75' />
          <input type="number" placeholder='userAge' className='border-0 shadow rounded mb-4 py-2 ps-2 w-75' />
          <input type="email" placeholder='userEmail' className='border-0 shadow rounded mb-4 py-2 ps-2 w-75' />
          <input type="password" placeholder='userPassword' className='border-0 shadow rounded mb-4 py-2 ps-2 w-75' />
        </div>
        <button type="button" className="btn btn-success">Send Message</button>
      </div>
    </>
  )
}
