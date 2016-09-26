'use strict';

const urlFor = hexo.extend.helper.store['url_for'].bind(hexo);

hexo.extend.helper.register('cssCache', (urls) => {
  const v = process.env.npm_package_version;
  const { layouts } = hexo.theme.config.less;
  const { post:page } = hexo;

  return urls
    .concat(layouts[page.layout] || [])
    .filter(d => d)
    .map(url => {
      return `<link rel="stylesheet" href="${urlFor(url)}?v=v${v}">`;
    })
    .join("\n");
});
