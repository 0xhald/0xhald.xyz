/*
 * @Author: kim
 * @Description: 配置处理
 */
import type { SlateConfig, ThemeOptions } from '@/typings/config';

/** 默认配置 */
/** 默认配置 */
const defaultConfig: Partial<SlateConfig> = {
  lang: 'zh-CN',
  theme: {
    mode: 'auto',
    enableUserChange: true,
  },
  readTime: false,
  lastModified: false,
};

export function defineConfig(config: SlateConfig): SlateConfig {
  const mergedConfig: Partial<SlateConfig> = {};

  if (typeof config.theme === 'string') {
    mergedConfig.theme = {
      ...(defaultConfig.theme as ThemeOptions),
      mode: config.theme,
    };
  } else {
    mergedConfig.theme = {
      ...(defaultConfig.theme as ThemeOptions),
      ...config.theme,
    };
  }

  return Object.assign({}, defaultConfig, config, mergedConfig);
}
