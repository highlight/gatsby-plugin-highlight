const Highlight = require("highlight.run");

exports.onClientEntry = (_, pluginOptions) => {
  const { orgID, plugins, ...options } = pluginOptions;

  Highlight.H.init(orgID, options);

  // @ts-ignore
  window.H = Highlight.H;
};
