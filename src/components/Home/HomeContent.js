import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './menu.css'
const HomeContent = () => {
    return (

        <div className='navbar'>

            {/* SLIDER ------ START  */}
                <Carousel className='container main-slide'>
                    <div>
                        <img src="https://i.ibb.co/K0RbGBD/template-1.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/C9Tyttx/template-2.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/x5BdY3n/template-3.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/gvH66Gw/template-4.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>

                </Carousel>
            {/* SLIDER ------ END  */}


            {/* REVENUE DATA ------ START  */}

            <section className='container' id="count mt-3 ">
                <div className=" ">
                    <div className="count_main">
                        <h3>Revenue</h3>
                        <div className="row g-0">
                            <div className="col-4 text-center">
                                <div className="count_item count_item1">
                                    <p>Available Blance</p>
                                    <h3 className="count_up">754.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item2">
                                    <p>{"Yesterday's Income"}</p>
                                    <h3 className="count_up">96.55</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item3">
                                    <p>{"Today's Income"}</p>
                                    <h3 className="count_up">96.66</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item4">
                                    <p>{"This week's Income"}</p>
                                    <h3 className="count_up">74.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item 5">
                                    <p>{"This Month's Income"}</p>
                                    <h3 className="count_up">254.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item6">
                                    <p>{"Last Month's Income"}</p>
                                    <h3 className="count_up">1554.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item7">
                                    <p>{"Total Revenue"}</p>
                                    <h3 className="count_up">1554.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item8">
                                    <p>{"Taskd Review"}</p>
                                    <h3 className="count_up">0</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item9">
                                    <p>{"Remaining Tasked"}</p>
                                    <h3 className="count_up">5</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* REVENUE DATA ------ END  */}

            <hr />
            <section>
                {/* <div className='container grid justify-items-center	 gap-4'>
                    <div className=''>
                        <a href=""> <img src="https://i.ibb.co/gy9YX0r/download-removebg-preview.png" alt="" /> </a>
                    </div>
                    <div className='bg-green-500'>2</div>
                    <div className='bg-yellow-500'>3</div>
                </div> */}
                <div class="flex flex-nowrap">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </section>
        </div>
    );
};




export default HomeContent;