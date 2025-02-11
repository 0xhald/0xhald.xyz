import slateConfig from '~@/slate.config';
import type { ThemeMode } from '@/typings/config';

/**
 * @description: 获取完整标题
 * @param title
 */
export function getFullTitle(title: string) {
  return `${title}${!!title && slateConfig.title ? ' | ' : ''}${slateConfig.title}`;
}

/**
 * @description: 设置主题模式
 * @param mode
 */
export function setThemeMode(mode: ThemeMode) {
  document.documentElement.className = mode;
  document.documentElement.dataset.theme = mode;
}

