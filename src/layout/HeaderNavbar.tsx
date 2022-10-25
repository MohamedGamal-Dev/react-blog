import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMonero } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navPages } from '../routes';
import { logoText } from './consts';

const HeaderNavbar: React.FunctionComponent = () => {
  const [elToggle, setElToggle] = useState(true);

  const handleClick = () => {
    setElToggle((prevStatus) => !prevStatus);
  };

  let toggleMenu = elToggle ? (
    <AiOutlineMenu className="text-mgLight-accent" />
  ) : (
    <AiOutlineClose className="text-mgLight-primary" />
  );

  const uiLogo = () => {
    return (
      <div className="flex flex-row pt-2">
        {/* <img src='' alt='logo-img' /> */}
        <FaMonero size={'2.2em'} className={` text-mgLight-primary`} />
        <NavLink
          to="/"
          className={` decoration-brightRed decoration-3 font-sans text-2xl font-bold text-mgLight-primary hover:underline hover:decoration-mgLight-secondary`}
        >
          {logoText}
        </NavLink>
      </div>
    );
  };

  let headerResponsiveNav = () => {
    return (
      <>
        <nav className="bg-transparent px-2 py-2.5 sm:px-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between sm-only:relative">
            {uiLogo()}

            {/* HamB - Button - UI-Menu>> */}
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="ml-3 inline-flex items-center rounded-lg p-2 text-2xl  hover:text-mgLight-secondary focus:outline-none md:hidden"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
              onClick={handleClick}
            >
              {/* hamburger - Icon */}
              <span className="sr-only">Open main menu</span>

              {toggleMenu}
            </button>

            {/* Menu && Toggle */}
            <div
              //
              className={`${
                elToggle ? 'hidden' : null
              } w-full md:block md:w-auto`}
              id="navbar-hamburger"
            >
              {/* NAV LINKS */}
              <div className="sm-only: mt-4 flex flex-col rounded-lg border border-mgLight-accent/10 bg-mgLight-base-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium sm-only:absolute sm-only:right-0 sm-only:z-50 sm-only:w-full ">
                {navPages.map((page) => {
                  const { title, to } = page;

                  return (
                    <div
                      key={title}
                      className={
                        'block rounded py-2 pr-4 pl-3 text-mgLight-neutral hover:bg-mgLight-secondary/10 hover:text-mgLight-primary md:border-0 md:p-0 md:hover:bg-transparent'
                      }
                    >
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          // ACTIVE NAV LINK STYLES
                          isActive ? 'font-bold text-mgLight-primary' : ''
                        }
                        // RR6 EXACT ALT
                        end
                      >
                        {title.toUpperCase()}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  };

  return (
    <>
      {/* {NavBar && Hamburger Menu} */}
      {headerResponsiveNav()}
    </>
  );
};

export default HeaderNavbar;
