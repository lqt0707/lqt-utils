import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lqt-utils',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Foo' }, // components会默认自动对应到src文件夹
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 220px !important;
    }`,
  ],
});
