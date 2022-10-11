import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import HomeContent from './HomeContent';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Home = () => {
    return (
        <div>
            <Menu />
        <HomeContent/>

            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>

                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>

            <MobileMenu/>
        </div>
    );
};

export default Home;