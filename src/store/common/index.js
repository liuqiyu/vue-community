import mutations from './mutations';
import actions from './actions';

const state = {
  logined: false,
  LoginedUser: {
    username: '',
  },
};

export default {
  state,
  mutations,
  actions,
};
