import HeaderHeroSection from './HeaderHeroSection';
import HeaderNav from './HeaderNavbar';
import HeaderNewsletter from './HeaderNewsletter';

const HeaderContainer = () => {
  return (
    <>
      {/* {===-> HEADER <-===} */}
      <div
        id="header-container"
        className="flex min-h-screen flex-col justify-between space-y-4 bg-gradient-to-t from-mgLight-secondary/50 to-mgLight-base-100 "
      >
        <HeaderNav />

        <HeaderHeroSection />

        <HeaderNewsletter />
      </div>
    </>
  );
};

export default HeaderContainer;
