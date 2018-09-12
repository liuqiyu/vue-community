import user from './../../api/user';

const login = {
  state: {
    username: window.sessionStorage.getItem('username'),
    role: window.sessionStorage.getItem('role'),
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
  },
  actions: {
    login({ commit }, ruleForm) {
      return new Promise((resolve, reject) => {
        user.login(ruleForm).then((res) => {
          if (res.data.code === 200) {
            const data = res.data.data;
            window.sessionStorage.setItem('username', data.username);
            window.sessionStorage.setItem('role', data.role);
            commit('SET_USERNAME', data.username);
            commit('SET_ROLE', data.role);
            resolve(res.data.message);
          } else {
            reject(res.data.message);
          }
        });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        user.logout().then((res) => {
          if (res.data.code === 200) {
            window.sessionStorage.removeItem('username');
            window.sessionStorage.removeItem('role');
            commit('SET_USERNAME', '');
            commit('SET_ROLE', '');
            resolve(res.data.message);
          } else {
            reject(res.data.message);
          }
        });
      });
    },
  },
};

export default login;
