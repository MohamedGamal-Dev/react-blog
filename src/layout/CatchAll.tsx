import { Link } from 'react-router-dom';
import { CardFrame } from '../components';
import { HOME_PAGE } from '../routes';
import { backHome, notFoundMsg } from './consts';

const CatchAll: React.FunctionComponent = () => {
  return (
    <>
      <CardFrame>
        <div className="text-lg font-medium text-mgLight-neutral sm:px-10 lg:text-xl xl:px-48">
          {notFoundMsg}
        </div>

        <button className="mt-5 w-full rounded-lg bg-mgLight-accent px-5 py-2.5 text-center text-lg font-bold text-white shadow-md shadow-mgLight-success hover:bg-mgLight-success hover:shadow-mgLight-accent  focus:outline-none">
          <Link to={HOME_PAGE}>{backHome}</Link>
        </button>
      </CardFrame>
    </>
  );
};

export default CatchAll;
