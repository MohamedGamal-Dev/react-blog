import React from 'react';

const FooterContainer = () => {
  return (
    <>
      <footer className="mt-5 bg-mgLight-neutral p-4  shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2022{' '}
          <a
            href="https://github.com/MohamedGamal-Dev"
            className="hover:underline"
          >
            MohamedGamal™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default FooterContainer;
