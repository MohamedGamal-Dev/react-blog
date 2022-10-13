import { useDispatch } from './useTypedStore';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../services';

export const useActions = () => {
  const dispatch = useDispatch();
  // Bind all ActionCreators to Dispatch
  return bindActionCreators(actionCreators, dispatch);
};
