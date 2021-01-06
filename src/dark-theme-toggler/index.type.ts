import { SwitchProps } from 'antd/lib/switch';

export interface UseDarkThemeOptions {
  darkThemeCssResourceUrl?: URL['href'];
}

export interface DarkThemeTogglerProps extends Omit<SwitchProps, 'onChange'> {
  onChange?(darkness: 'dark' | 'light'): void;
}
