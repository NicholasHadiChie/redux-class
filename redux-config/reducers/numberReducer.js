// @flow

type NumberState = {
  number: number
};

type Action =
  | {
      type: 'INCREASE_NUMBER',
      number?: number
    }
  | {
      type: 'DECREASE_NUMBER',
      number?: number
    };

let defaultState: NumberState = {
  number: 0
};

export function numberReducer(
  state: NumberState = defaultState,
  action: Action
) {
  switch (action.type) {
    case 'INCREASE_NUMBER':
      return {
        ...state,
        number: action.number ? action.number : state.number + 1
      };
    default:
      return state;
  }
}
