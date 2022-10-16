import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-full">
      <div className="container mx-auto">
        {/* {===-> HEADER <-===} */}

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
