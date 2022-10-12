import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Menu = () => {
    const [navopen, setNavopen] = useState(false);

    return (
        <div>
            {/* <!-- navbar part start --> */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="/dashboard">
                        <div className="img">
                            <picture>
                                <img className="w-25" src="https://i.ibb.co/80jWk4q/like-bd-logo.png" alt="logo" />
                            </picture>
                        </div>
                    </Link>
                    <button onClick={() => { setNavopen((current) => !current) }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={navopen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ paddingTop: "30px" }} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/dashboard">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/ad">Ad</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/records">Records</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- navbar part end --> */}
        </div>
    );
};

export default Menu;