import React from 'react';
import { Outlet } from 'react-router-dom';

const MainSection: React.FunctionComponent = () => {
  return (
    <>
      {/* {===->> MAIN-CONTENT <<-===} */}
      <Outlet />
    </>
  );
};

export default MainSection;
