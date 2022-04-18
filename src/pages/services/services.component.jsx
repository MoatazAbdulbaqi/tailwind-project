import React from 'react';
import ServicesBox from './../../components/service-box/service-box.component';
import MainHeading from './../../components/main-heading/main-heading.component';
import Container from '../../components/container/container.component';

const ServicesPage = () => {
    return (
        <div className="py-14" id="Services">
            <Container>
                <MainHeading
                    title="Services"
                    description="Don't be busy, be productive"
                />
                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="flex flex-col gap-4">
                        <ServicesBox
                            iconName="fas fa-palette fa-2x"
                            title="Graphic Design"
                            description="Graphic design is the process of visual
                    communication and problem-solving using one
                    or more of typography, photography and
                    illustration."
                        />
                        <ServicesBox
                            iconName="fab fa-sketch fa-2x"
                            title="UI & UX"
                            description="Process of enhancing user satisfaction with
                    a product by improving the usability,
                    accessibility, and pleasure provided in the
                    interaction."
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <ServicesBox
                            iconName="fas fa-vector-square fa-2x"
                            title="Web Design"
                            description="Web Design Web design encompasses many
                    different skills and disciplines in the
                    production and maintenance of websites."
                        />
                        <ServicesBox
                            iconName="fas fa-pencil-ruler fa-2x"
                            title="Web Development"
                            description="Web development is a broad term for the work
                            involved in developing a web site for the
                            Internet or an intranet."
                        />
                    </div>
                    <div>
                        <div className="relative text-center">
                            <img
                                className="hidden xl:block w-64"
                                src="https://i.ibb.co/7SQ6Xzs/Srv.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default ServicesPage;
