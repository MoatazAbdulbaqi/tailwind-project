import React from 'react';
import Container from './../container/container.component';

const Header = () => {
    return (
        <header className="p-2 bg-transparent w-full">
            <Container className="flex justify-center items-center w-full">
                <ul className="flex justify-around text-xs sm:text-lg sm:justify-between mx-auto items-center w-full sm:w-1/2 ">
                    <li>
                        <a href="#Services" className="p-2 text-white">
                            Servisec
                        </a>
                    </li>
                    <li>
                        <a href="#Portfolio" className="p-2 text-white">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#About" className="p-2 text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" className="p-2 text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </Container>
        </header>
    );
};

export default Header;
