import React from 'react';
import HeaderHeroSection from './HeaderHeroSection';
import HeaderNav from './HeaderNavbar';
import MainBody from './MainBody';

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-full">
      {/* {===->> HEADER-NAV-FLUID <<-===} */}
      {/* <HeaderNav /> */}

      <div className="container mx-auto">
        {/* {===-> HEADER <-===} */}
        <HeaderNav />
        <HeaderHeroSection />

        {/* {===-> MAIN-BODY <-===} */}
        <MainBody />

        {/* {===-> FOOTER <-===} */}
      </div>
    </div>
  );
};

export default AppLayout;
