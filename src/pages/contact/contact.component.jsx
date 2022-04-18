import React from 'react';
import MainHeading from '../../components/main-heading/main-heading.component';
import Container from './../../components/container/container.component';

const ContactPage = () => {
    return (
        <div className="py-14 bg-gray-100" id="Contact">
            <Container>
                <MainHeading
                    title="Contact"
                    description="We are born to create"
                />
                <div className="py-14 text-center">
                    <p className="text-base sm:text-3xl tracking-tighter font-bold mb-4 text-main-gray">
                        Feel free to drop us a line at:
                    </p>
                    <a
                        href="mailto:leonagency@mail.com?subject=Contact"
                        className="block text-base sm:text-3xl font-bold text-main-blue"
                    >
                        leonagency@mail.com
                    </a>
                    <div className="flex justify-center text-base mt-5">
                        Find Us On Social Networks
                        <i className="fab fa-youtube ml-2.5 text-main-gray cursor-pointer"></i>
                        <i className="fab fa-facebook-f ml-2.5 text-main-gray cursor-pointer"></i>
                        <i className="fab fa-twitter ml-2.5 text-main-gray cursor-pointer"></i>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default ContactPage;
