<p align="center">
  <a href="https://highlight.run" target="_blank" align="center">
    <img src="https://uploads-ssl.webflow.com/60a2acace1fd91aae61c497d/60d1a335b43b924351ddfa4e_Coloured.png" width="500">
  </a>
  <br />
</p>

# Official Highlight SDK for GatsbyJS

Register the package as a plugin in `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@highlight-run/gatsby-plugin-highlight",
      options: {
        // See all the options here: https://docs.highlight.run/reference#options
    	disableNetworkRecording: false;
    	disableConsoleRecording: false;
    	enableStrictPrivacy: false;
   	environment: 'production';
    	version: '5.2.3';
    	networkRecording: true;
      }
    },
  ]
}
```

Options will be passed directly to `H.init`. See all available options in [our docs](https://docs.highlight.run/reference#importing-the-library).

## Links

- [Official SDK Docs](https://docs.highlight.run/reference#overview)
- [Website](https://highlight.run)
