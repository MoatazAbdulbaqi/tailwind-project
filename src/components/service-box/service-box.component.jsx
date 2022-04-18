import React from 'react';

const ServicesBox = ({ iconName, title, description }) => {
    return (
        <div className="flex flex-col text-center sm:flex-row sm:text-left h-1/2 max-w-xs">
            <i className={`${iconName} text-main-blue basis-14`}></i>
            <div className="basis-full">
                <h3 className="mt-0 mb-5 font-bold">{title}</h3>
                <p className="text-gray-800 font-light leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};
export default ServicesBox;
