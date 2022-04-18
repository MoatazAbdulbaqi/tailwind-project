import React from 'react';
import Container from './../../components/container/container.component';
import MainHeading from './../../components/main-heading/main-heading.component';
const AboutPage = () => {
    return (
        <div className="py-14 " id="About">
            <Container>
                <MainHeading title="About" description="Less is more work" />
                <div className="flex flex-wrap mt-24 justify-between flex-col text-center sm:flex-row sm:text-left">
                    <div
                        className="w-60 h-80 relative mx-auto mt-0 mb-14 after:absolute after:bg-gray-300 after:w-24 after:h-plus10 after:top-20 after:left-20 after:z-01 before:absolute before:bg-main-blue before:w-24 before:h-plus10 before:top-20 before:right-0 before:z-01
                    "
                    >
                        <img
                            src="https://i.ibb.co/DzDVXMJ/About.png"
                            className="max-w-full h-full"
                            alt=""
                        />
                    </div>
                    <div className="basis-3/5">
                        <p className="px-5 sm:px-0 font-bold mb-12 leading-loose">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil nemo neque voluptate tempora velit cum
                            non, fuga vitae architecto delectus sed maxime rerum
                            impedit aliquam obcaecati, aut excepturi iusto
                            laudantium!
                        </p>
                        <hr className="inline-block border-main-blue w-1/2" />
                        <p className="px-5 sm:px-0 leading-loose text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus, sapiente. Velit iure exercitationem
                            dolores nesciunt dolore. Eum officiis dolorum hic
                            voluptate quaerat minima, similique inventore esse,
                            alias, sed quo officia?
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default AboutPage;
