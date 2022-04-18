import React from 'react';

const Feature = ({ iconName }) => {
    return (
        <div className="text-center p-5">
            <i className={`${iconName} text-main-blue`}></i>
            <h3 className="font-bold my-8 mx-0">Tell Us Your Idea</h3>
            <p className="leading-loose text-gray-800 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lab
            </p>
        </div>
    );
};
export default Feature;
