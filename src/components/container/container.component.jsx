import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="py-3 mx-auto container xl:max-w-6xl">{children}</div>
    );
};

export default Container;
