export default ({ app, store }, inject) => {
  inject("notification", {
    showMessage({ content = "", type = "" }) {
      store.commit("SHOW_MESSAGE", { content, type });
    }
  });
};