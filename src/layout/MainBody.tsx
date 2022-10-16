import React from 'react';
import MainSection from './MainSection';
import MainSidebar from './MainSidebar';

const MainBody: React.FunctionComponent = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col  md:flex-row ">
        {/* {===->> MAIN-CONTENT <<-===} */}
        <div className="w-8/12">
          <MainSection />
        </div>
        {/* {===->> MAIN-SIDEBAR <<-===} */}
        <div className="flex w-4/12 flex-col">
          <MainSidebar />
        </div>
      </div>
    </>
  );
};

export default MainBody;
