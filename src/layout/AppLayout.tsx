import FooterContainer from './FooterContainer';
import HeaderContainer from './HeaderContainer';
import MainBody from './MainBody';

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-full">
      {/* {===-> HEADER <-===} */}
      <HeaderContainer />

      {/* {===-> MAIN-BODY <-===} */}
      <div className="bg-gradient-to-b from-mgLight-base-100 to-white">
        <MainBody />
      </div>
      {/* {===-> FOOTER <-===} */}
      <FooterContainer />
    </div>
  );
};

export default AppLayout;
