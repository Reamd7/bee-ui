import { createVar, createTheme } from '@vanilla-extract/css';

export const fontFamily = createVar('--ui-font-family');
export const codeFamily = createVar('--ui-code-family');

export const [themeClass, vars] = createTheme({
  [fontFamily]: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans- serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
  [codeFamily]: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`
});
