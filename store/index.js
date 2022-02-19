import axios from "axios";

export const state = () => ({
  isDark: false,
  countries: [],
  notification: {
    content: "",
    type: ""
  }
});

export const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = payload;
  },
  SET_DARK(state, payload) {
    state.isDark = payload;
  },
  SHOW_MESSAGE(state, payload) {
    state.notification.content = payload.content
    state.notification.type = payload.type
  }
};

export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get("https://restcountries.com/v3.1/all")
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
