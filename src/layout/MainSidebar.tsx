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
      <div className="mt-5 flex flex-col">
        <h3 className="text-lg font-medium">Static Placeholder</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptatum qui officia quasi, veritatis, eligendi illo vero pariatur
          commodi fugit est debitis consectetur quibusdam omnis quo. Eligendi
          neque eius sit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptatum qui officia quasi, veritatis, eligendi illo vero pariatur
          commodi fugit est debitis consectetur quibusdam omnis quo. Eligendi
          neque eius sit.
        </p>
      </div>
    </>
  );
};

export default MainSidebar;
