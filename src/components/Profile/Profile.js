import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import Menu from '../Home/Menu';
import '../Home/style.css'
import MobileMenu from '../Home/MobileMenu';

const Profile = () => {
    return (
        <div>
            <Menu />
            <section className='mt-1 profilebg'>
                <div className='container flex justify-between items-center '>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div class="avatar p-2">
                                    <div class="lg:w-24 w-16">
                                        <img src="https://placeimg.com/192/192/people" className=' rounded-full' />
                                    </div>
                                </div>
                            </div>
                            <div><h2 className='lg:text-xl text-opacity-70 font-serif text-lime-400  lg:ml-3'> robiussanirazu@gmail.com</h2></div>
                        </div>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/fluency-systems-regular/48/000000/last-1.png" className='bg-lime-400 rounded' />
                    </div>
                </div>
            </section>

            <div className='flex profile container justify-between items-center mt-1'>
                <div> <h2 className='text-xl text-opacity-70 font-serif text-lime-400 ml-3'>VIP: Member</h2> </div>
                <div>
                    <div className='flex justify-between items-start'>
                        <div>
                            <h2 className='text-xl text-opacity-70 font-serif text-lime-400	 mt-1'>Ranking:</h2>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/NCBL0xY/badge.png" alt="" className='w-10' />

                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-emerald-900 	p-2 container flex justify-between items-center'>
                <div>
                    <table class=" w-96  ">
                        <thead>
                            <tr>
                                <th class="text-xl text-opacity-70 font-serif text-lime-400	">Current Blance</th>
                                <th class="text-xl text-opacity-70 font-serif text-lime-400	">Total Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-xl text-opacity-70 font-serif text-lime-400	">140tk</td>
                                <td class=" text-xl text-opacity-70 font-serif text-lime-400	">36tk</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Stack direction="horizontal" gap={2}>
                        <Button as="a" variant="success">INVITE FRIENDS </Button>
                    </Stack>
                </div>
                <div>
                    <Stack direction="horizontal" gap={2}>
                        <Button as="a" variant="success">  My Team </Button>
                    </Stack>
                </div>
            </div>

            <div className='mt-3 mb-3  grid grid-cols-3 gap-4 justify-items-center'>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '><img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/80/000000/external-information-support-anggara-glyph-anggara-putra.png" /> </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Personal Information</h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '><img src="https://img.icons8.com/ios-glyphs/80/000000/merchant-account.png" /></span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Bank Account</h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '><img src="https://img.icons8.com/ios-filled/80/000000/withdrawal.png" /></span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>withdraw </h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/100/000000/external-income-business-and-finance-tanah-basah-glyph-tanah-basah.png" /></span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Income </h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '>
                        <img src="https://img.icons8.com/ios-glyphs/100/000000/download.png" />
                    </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>App Download </h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '>
                        <img src="https://img.icons8.com/ios-filled/100/000000/helping-hand.png" />
                    </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Help </h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '>
                    <img src="https://img.icons8.com/ios-glyphs/100/000000/refresh--v1.png"/>
                    </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Auto Task </h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '>
                    <img src="https://img.icons8.com/ios-filled/100/000000/contract.png"/>
                    </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>Contract </h1>
                    </span>
                </div>
                <div className='hover:bg-emerald-900  hover:p-3 hover:rounded'>
                    <span className='flex justify-center items-center '>
                    <img src="https://img.icons8.com/ios-glyphs/100/000000/exit.png"/>
                    </span>
                    <span className='flex justify-center items-center '>
                        <h1 className='text-xl text-opacity-70 font-serif text-green-500 '>LogOut </h1>
                    </span>
                </div>
            </div>
            <MobileMenu />
        </div>
    );
};

export default Profile;