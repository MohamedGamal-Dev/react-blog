import React from 'react';
import { Link } from 'react-router-dom';
import { FaMonero } from 'react-icons/fa';

const HeaderNavbar: React.FunctionComponent = () => {
  const pages = [
    {
      title: 'home',
      to: '/',
    },
    {
      title: 'New Post',
      to: '/post',
    },
    {
      title: 'About',
      to: '/',
    },
    {
      title: 'Error',
      to: '/404',
    },
  ];

  // let navColors = {
  //   primary: `mgLight-primary`,
  //   secondary: `mgLight-secondary`,
  //   textLogo: 'text-mgLight-primary',
  //   textItem: 'text-mgLight-neutral',
  // };

  const uiLogo = () => {
    return (
      <div className="flex flex-row pt-2">
        {/* <img src='' alt='logo-img' /> */}
        <FaMonero size={'2.2em'} className={` text-mgLight-primary`} />
        <Link
          to="/"
          className={` decoration-brightRed decoration-3 ml-1 font-sans text-2xl font-bold text-mgLight-primary underline`}
        >
          mBLOG
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="border-b-0 border-transparent">
        <nav className="container relative mx-auto p-6 ">
          <div className="flex items-center justify-between">
            {uiLogo()}

            <div className="hidden space-x-6 md:flex ">
              {pages.map((page) => {
                const { title, to } = page;

                return (
                  <div
                    key={title}
                    className={`
                font-medium
                text-mgLight-neutral
                hover:text-mgLight-primary
                hover:underline
                hover:decoration-mgLight-primary 
                hover:decoration-4 
                hover:underline-offset-8`}
                  >
                    <Link to={to}>{title.toUpperCase()}</Link>
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                to="/"
                className="baseline hidden rounded-full bg-mgLight-primary p-3 px-6 pt-2 text-white hover:bg-mgLight-secondary md:block"
              >
                What's on your mind
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderNavbar;
