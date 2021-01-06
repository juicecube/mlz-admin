import React from 'react';

export interface FontStyle {
  fontSize?: number | string;
  fontFamily?: string;

  // fontWeight?: number;
  // fontColor?: string;
}
export interface DrawerParams {
  // 横坐标起始点
  startX: number;
  // 纵坐标起始点
  startY: number;
  // 透明度
  opacity: number;
  // 文字对齐方式
  textAlign: 'center' | 'end' | 'left' | 'right' | 'start';
  // 水印内容的文字样式
  fontStyle: FontStyle;
  // 顺时针旋转度数
  rotate: number;
}
export interface WaterMarkProps extends Partial<DrawerParams> {
  // 水印内容
  text: string;
  // 文字换行的最大宽度
  wrapGap?: number;
  // 水印宽松度(在2到6之间)
  loose?: number;
  //
  children: React.ReactElement;
}
