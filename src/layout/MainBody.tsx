import React from 'react';
import MainSection from './MainSection';
import MainSidebar from './MainSidebar';

const MainBody = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row  md:space-x-4 md:pb-4 sm-only:space-y-4 last:sm-only:space-y-8">
        {/* {===->> MAIN-CONTENT <<-===} */}
        <div className=" px-4 pt-8 md:w-8/12 md:px-0">
          <MainSection />
        </div>
        {/* {===->> MAIN-SIDEBAR <<-===} */}
        <div className="flex flex-col md:w-4/12">
          <MainSidebar />
        </div>
      </div>
    </>
  );
};

export default MainBody;
