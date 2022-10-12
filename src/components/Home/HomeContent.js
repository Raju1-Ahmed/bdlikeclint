import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'
const HomeContent = () => {
    return (

        <section className='navbar'>

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

            <div className='container grid grid-cols-4 justify-items-center	gap-4 mt-2 mb-2 '>
            <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '>
                    <img src="https://img.icons8.com/ios-filled/100/000000/money-bag-franc.png"/>                        
                    </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Deposite</h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '>
                    <img src="https://img.icons8.com/ios-filled/100/000000/vip.png"/>
                        </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>VIP</h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '><img src="https://img.icons8.com/external-nawicon-glyph-nawicon/100/000000/external-invesment-business-nawicon-glyph-nawicon.png"/> </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Invesment</h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '><img src="https://img.icons8.com/ios-glyphs/100/000000/call-male.png"/>> </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Custom service</h1>
                    </span>
                </div>
            </div>
                 
            {/* SLIDER ------ END  */}


            {/* REVENUE DATA ------ START  */}

            <div className='container' id="count mt-3 ">
                <div className=" ">
                    <div className="count_main">
                        <h3  className='text-xl text-opacity-70 font-serif text-green-500 '>Revenue</h3>
                        <div className="row g-0">
                            <div className="col-4 text-center">
                                <div className="count_item count_item1">
                                    <p  className='text-xl text-opacity-70 font-serif text-green-500 '>Available Blance</p>
                                    <h3 className="count_up text-xl text-opacity-70 font-serif text-green-500 ">754.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item2">
                                    <p  className='text-xl text-opacity-70 font-serif text-green-500 '>{"Yesterday's Income"}</p>
                                    <h3 className="count_up text-xl text-opacity-70 font-serif text-green-500">96.55</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item3">
                                    <p className='text-xl text-opacity-70 font-serif text-green-500 '>{"Today's Income"}</p>
                                    <h3 className=" text-xl text-opacity-70 font-serif text-green-500 count_up">96.66</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item4">
                                    <p className='text-xl text-opacity-70 font-serif text-green-500 '>{"This week's Income"}</p>
                                    <h3 className="text-xl text-opacity-70 font-serif text-green-500 count_up">74.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item 5">
                                    <p className='text-xl text-opacity-70 font-serif text-green-500 '>{"This Month's Income"}</p>
                                    <h3 className="text-xl text-opacity-70 font-serif text-green-500  count_up">254.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item6">
                                    <p className='text-xl text-opacity-70 font-serif text-green-500 '>{"Last Month's Income"}</p>
                                    <h3 className="text-xl text-opacity-70 font-serif text-green-500  count_up">1554.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item7">
                                    <p className='text-xl text-opacity-70 font-serif text-green-500 '>{"Total Revenue"}</p>
                                    <h3 className="text-xl text-opacity-70 font-serif text-green-500  count_up">1554.78</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item8">
                                    <p className='text-xl text-opacity-70 font-serif text-green-500 '>{"Taskd Review"}</p>
                                    <h3 className="text-xl text-opacity-70 font-serif text-green-500 ">0</h3>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="count_item count_item9">
                                    <p className='text-xl text-opacity-70 font-serif text-green-500 '>{"Remaining Tasked"}</p>
                                    <h3 className="text-xl text-opacity-70 font-serif text-green-500 ">5</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* REVENUE DATA ------ END  */}
                <div className='container grid grid-cols-3 justify-items-center	 gap-4'>
                    <div className=''>
                        <a href=""> <img src="https://i.ibb.co/gy9YX0r/download-removebg-preview.png" alt="" className='w-28' /> </a>
                    </div>
                    <div>
                        <a href="" target="blank"><img src="https://i.ibb.co/VtFk1rs/Amazon-logo.png" alt="" className='w-28' /></a>
                    </div>
                    <div className=''>
                        <a href=""> <img src="https://i.ibb.co/gy9YX0r/download-removebg-preview.png" alt="" className='w-28' /> </a>
                    </div>
                </div>
        </section>
    );
};




export default HomeContent;