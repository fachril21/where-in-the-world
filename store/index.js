export const state = () => ({
  isDark: false,
});

export const mutations = {
  SET_DARK(state, payload) {
    state.isDark = payload;
  },
};

export const actions = {
  setDark({ commit }, payload) {
    commit("SET_DARK", payload);
  },
};

export const getters = {
  isDark(state) {
    return state.isDark;
  },
};
