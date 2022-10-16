import React from 'react';
import { Link } from 'react-router-dom';

const MainSidebar: React.FunctionComponent = () => {
  return (
    <>
      {/* {===->> MAIN-SIDEBAR <<-===} */}
      <div className="flex justify-center">
        <div className="rounded-full bg-mgLight-accent p-3 px-6 pt-2 text-white hover:bg-mgLight-success">
          <Link to="/post">What's on your mind</Link>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
