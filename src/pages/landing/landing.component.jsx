import React from 'react';
import Header from '../../components/header/header.component';

const LandingPage = () => {
    return (
        <div className="h-lh bg-[url('https://i.ibb.co/f9GcpNg/landing-background.jpg')] lg:bg-[url('https://i.ibb.co/JBgzP4Y/landing-background.jpg')] bg-cover relative flex justify-center flex-wrap relative">
            <Header />
            <div className="max-w-full w-80 text-center absolute top-21">
                <h1 className="m-0 text-3xl sm:text-5xl font-bold text-main-blue">
                    Hello There
                </h1>
                <p className="text-base sm:text-lg leading-loose text-white">
                    We are Leon - Super Creative & Minimal Agency Web Template
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
