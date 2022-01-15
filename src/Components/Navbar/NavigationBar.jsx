import React from 'react';
import { Button, Container, FormControl, InputGroup, Navbar } from 'react-bootstrap';
import banner from '../../Assests/Images/logo.png';
import CartIcon from '../CartIcon/CartIcon';
import UserIcon from '../UserIcon/UserIcon';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={banner}
                            width="120"
                            height="30"
                            className="d-inline-block align-top"
                            alt="ema john logo"
                        />
                    </Navbar.Brand>
                    <InputGroup className='w-50' >
                        <FormControl
                            placeholder="Search for products (e.g. mobile, camera, laptop)"
                            aria-label="Search for products"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="warning" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                    <div className='text-light d-flex'>
                        <div> <CartIcon /></div>
                        <div className='ms-3'> <UserIcon /></div>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;