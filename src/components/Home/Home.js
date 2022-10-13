import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Login from '../Login/Login';
import HomeContent from './HomeContent';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            {user ? 
            <>  
            <Menu />
            <HomeContent />
            <MobileMenu /></>:
         <>
         <Login/>
         </>    
        }
          
        </div>
    );
};

export default Home;