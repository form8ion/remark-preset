export default {
  plugins: [
    '@form8ion/remark-lint-preset',
    ['remark-toc', {tight: true}],
    ['remark-usage', {heading: 'example'}]
  ],
  // https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#options
  settings: {
    listItemIndent: 'one',
    emphasis: '_',
    strong: '_',
    bullet: '*',
    incrementListMarker: false
  }
}
