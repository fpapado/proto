// example template
module.exports = ({
  html,
  css,
  scripts,
  title,
  meta = [],
  links = [],
  static: isStatic,
}) => `<!DOCTYPE html>
<head>
  <title>${title}</title>
  ${!!css ? css : ''}
</head>
<body>
  <div id=root>${html}</div>
  ${scripts}
</body>
`;
