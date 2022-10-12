import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import HomeContent from './HomeContent';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Home = () => {
    return (
        <div>
            <Menu />
            <HomeContent />
            <MobileMenu />
        </div>
    );
};

export default Home;