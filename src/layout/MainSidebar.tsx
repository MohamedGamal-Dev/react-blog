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
import { useAppState } from '../hooks/useAppState';
import { useGetRandomItems } from '../hooks/useGetRandomItems';
import { POST_BY_ID_PROP } from '../routes';
import { heroCTA } from './consts';
import MainSidebarNewsLetter from './MainSidebarNewsLetter';

const MainSidebar: React.FunctionComponent = () => {
  const { posts } = useAppState();
  const featurePosts = useGetRandomItems(posts, 4);
  const randomPosts = useGetRandomItems(posts, 4);

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
    <section className="mb-2 flex flex-col space-y-3">
      {/* {===->> MAIN-SIDEBAR <<-===} */}
      <div className="flex flex-col items-center justify-center bg-mgLight-neutral">
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

      <div className="flex flex-col bg-mgLight-warning/10 p-4">
        <h3 className="w-full border-b-2 border-b-mgLight-secondary pb-1 text-lg font-medium">
          Feature Posts
        </h3>
        <ul className="pt-4">
          {featurePosts.map((post) => {
            return (
              <li
                key={post.id}
                className=" text-base  font-light text-mgLight-neutral hover:font-normal hover:text-mgLight-primary"
              >
                <Link to={POST_BY_ID_PROP(post.id)}>
                  {`-`} {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col bg-mgLight-warning/10 p-4">
        <h3 className="w-full border-b-2 border-b-mgLight-secondary pb-1 text-lg font-medium">
          Random Posts
        </h3>
        <ul className="pt-4">
          {randomPosts.map((post) => {
            return (
              <li
                key={post.id}
                className=" text-base  font-light text-mgLight-neutral hover:font-normal hover:text-mgLight-primary"
              >
                <Link to={POST_BY_ID_PROP(post.id)}>
                  {`-`} {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {<MainSidebarNewsLetter />}
    </section>
  );
};

export default MainSidebar;
