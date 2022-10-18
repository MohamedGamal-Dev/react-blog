import HeaderHeroSection from './HeaderHeroSection';
import HeaderNav from './HeaderNavbar';
import HeaderNewsletter from './HeaderNewsletter';

const HeaderContainer = () => {
  return (
    <>
      {/* {===-> HEADER <-===} */}
      <div
        id="header-container"
        className="mb-4 flex flex-col space-y-4 md:mb-10"
      >
        <HeaderNav />

        <HeaderHeroSection />
        <HeaderNewsletter />
      </div>
    </>
  );
};

export default HeaderContainer;
