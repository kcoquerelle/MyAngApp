import { SEARCH } from "./../Actions/FilterActions";

const initialState = {
  filters: {
    category: 'all'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { filters: action.research };
      break;
    default:
      return state;
      break;
  }
};
