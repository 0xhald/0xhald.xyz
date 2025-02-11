/*
 * @file 主题配置
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  site: 'https://0xhald.xyz',
  avatar: '/avatar.jpg',
  title: '0xhald notes',
  description: 'These are my notes.',
  lastModified: true,
  readTime: false,
  footer: {
    copyright: '',
  }
});
