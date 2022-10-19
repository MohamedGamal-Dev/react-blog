import FooterContainer from './FooterContainer';
import HeaderContainer from './HeaderContainer';
import MainBody from './MainBody';

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-full">
      {/* {===-> HEADER <-===} */}
      <HeaderContainer />

      {/* {===-> MAIN-BODY <-===} */}
      <div className="bg-gradient-to-b from-mgLight-base-100 to-white py-8 px-4 md:py-10 md:px-0">
        <MainBody />
      </div>
      {/* {===-> FOOTER <-===} */}
      <FooterContainer />
    </div>
  );
};

export default AppLayout;
