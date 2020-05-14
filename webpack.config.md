Add the following `test.html`for the WebView exmaple via the ollowing line in `webpack.config.js`

```JS
new CopyWebpackPlugin([
    { from: { glob: "ng-ui-widgets-category/web-view/web-view-html/*.html"} },
    { from: { glob: "fonts/**" } },
    { from: { glob: "**/*.jpg" } },
    { from: { glob: "**/*.png" } },
]
```