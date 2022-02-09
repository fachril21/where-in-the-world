import axios from "axios";

export const state = () => ({
  isDark: false,
  countries: [],
});

export const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = payload;
  },
  SET_DARK(state, payload) {
    state.isDark = payload;
  },
};

export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        console.log(res.data);
        commit("SET_COUNTRIES", res.data);
      })
      .catch((e) => context.error(e));
  },
  setDark({ commit }, payload) {
    commit("SET_DARK", payload);
  },
};

export const getters = {
  isDark(state) {
    return state.isDark;
  },
  countries(state) {
    return state.countries;
  },
};
