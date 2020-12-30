import React from 'react';

type supportingFontStyle = 'fontSize' | 'fontWeight' | 'fontColor' | 'fontFamily' | 'opacity';
export interface WaterMarkProps {
  // 水印内容
  text: string;
  // 透明度
  opacity?: number;
  //
  zIndex?: number;
  // 水印span的样式
  style?: Omit<React.CSSProperties, supportingFontStyle>;
  // 是否开启防篡改
  defensively: boolean;
  // 水印内容的文字样式
  fontStyle?: {
    fontSize: number | string;
    fontWeight: number;
    fontColor: string;
    fontFamily: string;
  };
  //
  children: React.ReactElement;
}
