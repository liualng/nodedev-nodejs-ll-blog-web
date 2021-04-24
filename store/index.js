export const state = function() {
  return {
  };
};

export const mutations = {
  init(state, initData) {
    Object.assign(state, initData);
  },
};

export const actions = {
  nuxtServerInit({ commit }, { req, res }) {
    const {
      projectName,
      baseUrl,
      iconFontCssUrl
    } = req.app.locals.config;
    commit('init', {
      projectName,
      baseUrl,
      iconFontCssUrl
    });
  },
};