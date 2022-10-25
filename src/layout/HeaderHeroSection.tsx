import { Link } from 'react-router-dom';
import { heroContent, heroHeader, heroCTA } from './consts';

const HeaderHeroSection = () => {
  // const heroVariantOne = () => {
  //   return (
  //     <section id="header-hero-section">
  //       <div className="container mx-auto flex flex-col-reverse items-center space-y-0  px-6 md:flex-row md:space-y-0 ">
  //         <div className="flex flex-col space-y-4 md:w-1/2 md:space-y-8">
  //           <h1 className="max-w-md text-center text-3xl font-bold sm:mt-4 md:text-left md:text-5xl">
  //             Some Cool Catchphrase
  //           </h1>

  //           <p className="text-darkGrayishBlue max-w-sm text-center md:text-left ">
  //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //             Consequuntur odio impedit totam maiores qui! Ducimus
  //             reprehenderit, fugiat, molestiae dicta accusantium totam eum fugit
  //             nostrum ipsa deserunt, provident praesentium a nam!
  //           </p>

  //           <div className="flex justify-center md:justify-start">
  //             <div className="rounded-full bg-mgLight-primary py-3  text-white hover:bg-mgLight-secondary">
  //               <Link className="py-3 px-6" to="/post">
  //                 What's on your mind
  //               </Link>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="flex justify-center md:w-1/2 ">
  //           <img
  //             className="rounded-3xl"
  //             src="./src/assets/images/hero-section-beta.jpg"
  //             alt="Place Holder"
  //           />
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };
  const heroVariantTwo = () => {
    return (
      <section id="header-hero-section">
        <div className="container mx-auto flex flex-col space-y-10">
          <div className="bg-gradient-to-tr from-mgLight-accent via-mgLight-primary to-mgLight-accent bg-clip-text text-center	text-7xl font-bold text-transparent drop-shadow-2xl md:text-9xl">
            {heroHeader}
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center font-medium text-mgLight-accent md:text-xl ">
              {heroContent}
            </div>

            <div className="rounded-full bg-mgLight-primary py-3 text-base font-medium text-white hover:bg-mgLight-secondary hover:shadow hover:shadow-mgLight-accent md:text-xl">
              <Link className="py-3 px-4 md:px-6" to="/post">
                {heroCTA}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {/* {heroVariantOne()} */}
      {heroVariantTwo()}
    </>
  );
};

export default HeaderHeroSection;
