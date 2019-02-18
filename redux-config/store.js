import {createStore, applyMiddleware} from 'redux';
import {numberReducer} from './reducers/numberReducer';

const cubicMiddleware = function(store) {
  let {getState} = store;
  return (next) => (action) => {
    let {number} = getState();
    let returnValue =
      number === 2
        ? next({
            type: 'INCREASE_NUMBER',
            number: 9
          })
        : next(action);
    console.log('will dispatch: ', action);
    console.log('state after dispatch: ', getState());
    return returnValue;
  };
};
export default createStore(numberReducer, applyMiddleware(cubicMiddleware));
