const Highlight = require("highlight.run");

const PACKAGE_NAME = "@highlight-run/gatsby-plugin-highlight";

exports.onClientEntry = (_, pluginOptions) => {
  const { orgID, plugins, ...options } = pluginOptions;

  if (orgID === undefined) {
    throw new Error(`Invalid options for "${PACKAGE_NAME}": `);
  }

  Highlight.H.init(orgID, options);

  // @ts-ignore
  window.H = Highlight.H;
};
