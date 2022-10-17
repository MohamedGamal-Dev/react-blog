import HeaderHeroSection from './HeaderHeroSection';
import HeaderNav from './HeaderNavbar';

const HeaderContainer = () => {
  return (
    <>
      {/* {===-> HEADER <-===} */}
      <div id="#header-container">
        <HeaderNav />

        <HeaderHeroSection />
      </div>
    </>
  );
};

export default HeaderContainer;
