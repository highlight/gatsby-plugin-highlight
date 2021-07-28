exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    orgID: Joi.string()
      .required()
      .description(`The organization ID to send application data to.`),
    options: Joi.object({
      disableNetworkRecording: Joi.boolean(),
      disableConsoleRecording: Joi.boolean(),
      enableSegmentIntegration: Joi.boolean(),
      enableStrictPrivacy: Joi.boolean(),
      environment: Joi.string(),
      version: Joi.string(),
      networkRecording: Joi.any(),
    }).description(`Options to configure Highlight.`),
  });
};
