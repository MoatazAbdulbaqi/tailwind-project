import React from 'react';
import PortfolioCard from './../../components/portfolio-card/portfolio-card.component';
import Container from './../../components/container/container.component';
import MainHeading from './../../components/main-heading/main-heading.component';

const PortfolioPage = () => {
    return (
        <div className="py-14 bg-gray-100" id="Portfolio">
            <Container>
                <MainHeading
                    title="Portfolio"
                    description="If you do it right, it will last forever."
                />
                <div className="mt-24 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <PortfolioCard
                        imageUrl="https://i.ibb.co/f4wmnJL/port1.png"
                        name="Project Here"
                        description="My creative ability is very difficult to measure because it can manifest in so many surprising and."
                    />
                    <PortfolioCard
                        imageUrl="https://i.ibb.co/3fssPqM/port2.png"
                        name="Project Here"
                        description="My creative ability is very difficult to measure because it can manifest in so many surprising and."
                    />
                    <PortfolioCard
                        imageUrl="https://i.ibb.co/pfhxHz9/port3.png"
                        name="Project Here"
                        description="My creative ability is very difficult to measure because it can manifest in so many surprising and."
                    />
                </div>
            </Container>
        </div>
    );
};
export default PortfolioPage;
