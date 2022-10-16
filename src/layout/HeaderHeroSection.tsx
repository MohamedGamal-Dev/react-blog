import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHeroSection: React.FunctionComponent = () => {
  return (
    <>
      <section id="header-hero-section">
        <div className="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row md:space-y-0 ">
          <div className="mb-10 flex flex-col space-y-4 md:w-1/2 md:space-y-8">
            <h1 className="max-w-md text-center text-3xl font-bold sm:mt-4 md:text-left md:text-5xl">
              Some Cool Catchphrase
            </h1>

            <p className="text-darkGrayishBlue max-w-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur odio impedit totam maiores qui! Ducimus
              reprehenderit, fugiat, molestiae dicta accusantium totam eum fugit
              nostrum ipsa deserunt, provident praesentium a nam!
            </p>

            <div className="flex justify-center md:justify-start">
              <div className="rounded-full bg-mgLight-primary p-3 px-6 pt-2 text-white hover:bg-mgLight-secondary">
                <Link to="/post">What's on your mind</Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="./src/assets/images/hero-section-beta.jpg"
              alt="shvets-production"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderHeroSection;
