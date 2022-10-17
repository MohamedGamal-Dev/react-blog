import React from 'react';

const HeaderNewsletter = () => {
  return (
    <>
      <div className="flex bg-mgLight-primary p-5 shadow-sm shadow-mgLight-secondary">
        {/* { Container } */}
        <div className="container mx-auto flex flex-col items-center px-6 md:flex-row md:space-y-0 md:space-x-2 sm-only:space-y-4">
          {/* { CTA } */}
          <blockquote className="flex flex-col items-center md:w-1/2">
            <div className="text-3xl font-bold italic text-mgLight-base-100 md:text-4xl">
              "STAY TUNED"
            </div>
            <div className="text-lg italic text-mgLight-base-100 md:text-xl md:font-semibold lg:text-2xl ">
              "Don't miss out on any action !!!"
            </div>
          </blockquote>
          {/* { CTA- Form } */}
          <form className="md:w-1/2">
            <div className="flex flex-col md:flex-row md:space-x-2 sm-only:space-y-2">
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border-2 border-mgLight-secondary bg-gray-50 p-2.5 text-lg text-mgLight-neutral shadow-sm shadow-mgLight-warning outline-none focus:border-mgLight-base-100 focus:ring-mgLight-secondary"
                placeholder="email-address@some-domain.com"
                required
              />
              <button className="rounded-lg bg-mgLight-secondary px-5 py-2.5 text-center text-lg font-bold text-white shadow-sm shadow-mgLight-base-100 hover:bg-gradient-to-l hover:ring-2 hover:ring-mgLight-base-100 focus:outline-none">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeaderNewsletter;
