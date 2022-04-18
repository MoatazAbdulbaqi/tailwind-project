import React from 'react';

const PortfolioCard = ({ imageUrl, name, description }) => {
    return (
        <div className="bg-white min-w-300 justify-center max-w-500 m-auto">
            <img
                src={`${imageUrl}`}
                className="max-w-full m-auto"
                alt="project img"
            />
            <div className="p-5 text-center sm:text-left">
                <h3 className="m-0 font-bold">{name}</h3>
                <p className="text-gray-800 leading-loose mb-0">
                    {description}
                </p>
            </div>
        </div>
    );
};
export default PortfolioCard;
