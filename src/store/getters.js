const getters = {
  firstWorld: state => state.login.username.toUpperCase().slice(0, 1),
};

export default getters;
