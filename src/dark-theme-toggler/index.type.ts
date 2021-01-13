import { SwitchProps } from 'antd/lib/switch';

export type ThemeKeyNameTypes = 'dark' | 'light' | 'default';
export interface UseDarkThemeOptions {
  darkThemeCssResourceUrl?: URL['href'];
  initialTheme?: ThemeKeyNameTypes;
}
export interface DarkThemeTogglerProps extends Omit<SwitchProps, 'onChange'> {
  onChange?(darkness: ThemeKeyNameTypes): void;
  initialTheme?: ThemeKeyNameTypes;
}
