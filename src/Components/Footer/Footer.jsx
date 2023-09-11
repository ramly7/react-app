import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container-fluid text-center text-white position-relative start-0 end-0 bottom-0" style={{ backgroundColor: '#2c3e50' }}>
                <div className="row py-5">
                    <div className="col-md-4">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4">
                        <h3>AROUND THE WEB</h3>
                        <div className='d-flex align-items-center justify-content-center'>
                            <i className="fa-brands fa-facebook mx-1 icon fs-5 border rounded-circle p-2"></i>
                            <i className="fa-brands fa-twitter mx-1 icon fs-5 border rounded-circle p-2"></i>
                            <i className="fa-brands fa-linkedin-in mx-1 icon fs-5 border rounded-circle p-2"></i>
                            <i className="fa-solid fa-globe mx-1 icon fs-5 border rounded-circle p-2"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                <div className="row">
                    <footer style={{ backgroundColor: '#1a252f' }}>
                        <p className='text-white text-center py-4'>Copyright © Your Website 2021</p>
                    </footer>
                </div>
            </div>
        </>
    )
}
