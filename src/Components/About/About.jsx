import React from 'react'

export default function About() {
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center text-white' style={{ backgroundColor: '#1abc9c', height: '90vh' }}>
      <h2 className='fw-bolder'>ABOUT COMPONENT</h2>
      <div className="py-3">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star px-2"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      <div className='w-75 d-flex'>
        <p className='me-5'>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
    </>
  )
}
