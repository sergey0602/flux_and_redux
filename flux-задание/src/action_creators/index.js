import dispatcher from '../dispatcher';
import actions from './actions';

const action_creators = {
  addName(data) {
    dispatcher.dispatch({
      type: actions.ADD_NAME,
      payload: data
    });
  }
};

export default action_creators;
