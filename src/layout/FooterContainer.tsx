import { footerCopyright } from './consts';

const FooterContainer = () => {
  const { year, linkUrl, linkLabel, copyRight } = footerCopyright;
  return (
    <>
      <footer className="bg-mgLight-neutral p-4  shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">
          {year}
          <a href={linkUrl} className="hover:underline">
            {linkLabel}
          </a>
          {copyRight}
        </span>
      </footer>
    </>
  );
};

export default FooterContainer;
