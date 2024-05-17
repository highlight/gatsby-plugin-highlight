# Official Highlight SDK for GatsbyJS

Register the package as a plugin in `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@highlight-run/gatsby-plugin-highlight",
      options: {
        orgID: 'MY_ORG_ID',
        // See all the options here: https://www.highlight.io/docs/sdk/client#options
        disableNetworkRecording: false,
        disableConsoleRecording: false,
        enableStrictPrivacy: false,
   	    environment: 'production',
        version: '5.2.3',
        networkRecording: true,
      }
    },
  ]
}
```

Options will be passed directly to `H.init`. See all available options in [our docs](https://www.highlight.io/docs/sdk/client#options).

## Links

- [Official SDK Docs](https://docs.highlight.run/reference#overview)
- [Website](https://highlight.run)
