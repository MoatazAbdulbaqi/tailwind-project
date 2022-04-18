import React from 'react';

const MainHeading = ({ title, description }) => {
    return (
        <div className="mb-14">
            <h2 className="text-5xl sm:text-6xl text-gray-300 m-0 font-bold tracking-tighter text-center ">
                {title.toUpperCase()}
            </h2>

            <p className="mt-20 sm:mt-30 font-2 text-gray-900 text-center text-sm sm:text-lg">
                {description}
            </p>
        </div>
    );
};

export default MainHeading;
