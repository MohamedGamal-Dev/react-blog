import HeaderContainer from './HeaderContainer';
import MainBody from './MainBody';

const AppLayout = () => {
  return (
    <div className="min-h-screen min-w-full">
      {/* {===-> HEADER <-===} */}
      <HeaderContainer />

      {/* {===-> MAIN-BODY <-===} */}
      <MainBody />

      {/* {===-> FOOTER <-===} */}
    </div>
  );
};

export default AppLayout;
