import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

const MobileMenu = () => {
    return (
        <div>
            {/* < !--Mobile Bottom ICON BAR PART START-- > */}
            <section id="icon" className="d-sm-none">
                <div className="container">
                    <div className="icon_main">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="icon_div">
                                    <div className="icon_item active">
                                        <Link href="/dashboard"> <img src="https://img.icons8.com/windows/44/000000/home-page.png"/> </Link>
                                        <p>Home</p>
                                    </div>

                                    <div className="icon_item">
                                        <Link href="/ad"><img src="https://img.icons8.com/material-sharp/44/000000/web-advertising.png"/></Link>
                                        <p className='ml-2'>Ad</p>
                                    </div>
                                    <div className="icon_item">
                                        <Link href="/records"><img src="https://img.icons8.com/fluency-systems-filled/44/000000/square-clock.png"/></Link>
                                        <p>Records</p>
                                    </div>
                                    <div className="icon_item">
                                        <Link href="/profile"><img src="https://img.icons8.com/fluency-systems-filled/44/000000/user-secured.png"/></Link>
                                        <p>Profile</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Mobile Bottom ICON BAR PART END-- > */}
        </div>
    );
};

export default MobileMenu;