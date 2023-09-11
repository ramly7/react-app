import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 position-sticky top-0 start-0 end-0 shadow" style={{ backgroundColor: '#2c3e50' }}>
                <div className="container">
                    <Link className="navbar-brand text-white fs-2 fw-bolder" to="home">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bolder" to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bolder" to="portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bolder" to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
