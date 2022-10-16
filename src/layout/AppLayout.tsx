import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderHeroSection from './HeaderHeroSection';
import HeaderNav from './HeaderNavbar';

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

        {/* {===->> MAIN-CONTENT <<-===} */}
        <Outlet />

        {/* {===->> MAIN-SIDEBAR <<-===} */}

        {/* {===-> FOOTER <-===} */}
      </div>
    </div>
  );
};

export default AppLayout;
