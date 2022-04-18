import React from 'react';
import Container from './../../components/container/container.component';
import Feature from './../../components/feature/feature.component';

const FeaturesPage = () => {
    return (
        <div className="py-14 bg-gray-200">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <Feature iconName="fas fa-magic fa-3x" />
                    <Feature iconName="fas fa-gem fa-3x" />
                    <Feature iconName="fas fa-globe fa-3x" />
                </div>
            </Container>
        </div>
    );
};
export default FeaturesPage;
