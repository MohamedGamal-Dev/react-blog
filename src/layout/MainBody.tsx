import React from 'react';
import MainSection from './MainSection';
import MainSidebar from './MainSidebar';

const MainBody = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row  md:space-x-4 2xl:mt-5 sm-only:space-y-4">
        {/* {===->> MAIN-CONTENT <<-===} */}
        <div className=" md:w-8/12">
          <MainSection />
        </div>
        {/* {===->> MAIN-SIDEBAR <<-===} */}
        <div className="flex flex-col md:w-4/12 ">
          <MainSidebar />
        </div>
      </div>
    </>
  );
};

export default MainBody;
