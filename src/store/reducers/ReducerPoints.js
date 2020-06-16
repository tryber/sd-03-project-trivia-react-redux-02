import * as types from '../actions/ActionTypes';

const initialState = {
  points: 0,
};

function ReducerPoints(state = initialState, action) {
  switch (action.type) {
    case types.SUM_POINTS:
      return {
        ...state,
        points: state.points + action.payload.points,
      };
    default: return state;
  }
}

export default ReducerPoints;
