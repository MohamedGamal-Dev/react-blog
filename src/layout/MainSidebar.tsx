import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaTelegramPlane,
  FaRedditAlien,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { heroCTA } from './consts';

const MainSidebar: React.FunctionComponent = () => {
  let socialMediaList = [
    { name: 'faceBook', icon: <FaFacebookF /> },
    { name: 'instagram', icon: <FaInstagram /> },
    { name: 'twitter', icon: <FaTwitter /> },
    { name: 'reddit', icon: <FaRedditAlien /> },
    { name: 'linkedinIn', icon: <FaLinkedinIn /> },
    { name: 'discord', icon: <FaDiscord /> },
    { name: 'telegramP', icon: <FaTelegramPlane /> },
  ];

  const renderSocialMedia = () => {
    return socialMediaList.map((platform) => {
      return (
        <div
          className="bg-mgLight-secondary p-1 text-3xl text-mgLight-neutral 
        hover:bg-mgLight-primary hover:text-mgLight-base-100
        "
          key={platform.name}
        >
          {platform.icon}
        </div>
      );
    });
  };

  return (
    <>
      {/* {===->> MAIN-SIDEBAR <<-===} */}
      <div className="flex flex-col items-center justify-center bg-mgLight-neutral mb-2">
        <div className="flex flex-row flex-wrap items-baseline justify-center space-x-2 space-y-2 px-2 py-4 lg:flex-nowrap">
          {renderSocialMedia()}
        </div>

        <div className="mb-4 flex h-56 w-11/12 items-center justify-center bg-mgNeutralDrkBB ">
          <h3 className="text-mgLight-base-100/80">Sponsors Placeholder</h3>
        </div>

        <button className=" w-full bg-mgLight-primary py-3 text-center text-base font-medium text-white hover:bg-mgLight-primary hover:shadow hover:shadow-mgLight-accent">
          <Link className="py-2 px-3" to="/post">
            {heroCTA}
          </Link>
        </button>
      </div>
    </>
  );
};

export default MainSidebar;
