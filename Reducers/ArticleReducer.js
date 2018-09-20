import { DETAILS } from "./../Actions/ArticleActions";

const initialState = {
  filters: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DETAILS:
      return { article: action.details };
      break;
    default:
      return state;
      break;
  }
};
