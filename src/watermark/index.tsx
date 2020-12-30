import React, { useState, useEffect, useRef } from 'react';
import { WaterMarkProps, DrawerParams } from './index.type';
import { getDataType } from 'mytils';
import './index.less';

const defaults = {
  startX: 1,
  startY: 0,
  rotate: 30,
  wrapGap: 80,
  loose: 2.5,
  fontSize: 12,
  fontFamily: 'Georgia',
};

const drawText = (text: string, canvasContext: CanvasRenderingContext2D, wrapperGap: number, dimension: DrawerParams): CanvasRenderingContext2D => {
  const { fontSize = defaults.fontSize, fontFamily = defaults.fontFamily } = dimension.fontStyle || {};
  //参数说明
  //ctx：canvas的 2d 对象，t：绘制的文字，x,y:文字坐标，w：文字最大宽度
  let textCharArr = text.split('');
  let temp = '';
  let row: string[] = [];
  const { startX = wrapperGap * defaults.startX, startY = defaults.startY, opacity, rotate = defaults.rotate, textAlign = 'center' } = dimension;

  for (let i = 0; i < textCharArr.length; i++) {
    if (canvasContext.measureText(temp).width < wrapperGap && canvasContext.measureText(temp + textCharArr[i]).width <= wrapperGap) {
      temp += textCharArr[i];
    } else {
      row.push(temp);
      temp = textCharArr[i];
    }
  }
  row.push(temp);
  canvasContext.font = `${fontSize}px ${fontFamily}`;
  canvasContext.globalAlpha = opacity || 0.2;
  canvasContext.textAlign = textAlign;

  // canvasContext.translate(wrapperGap * 2.5, y);
  canvasContext.rotate((rotate * Math.PI) / 180);
  // canvasContext.translate(-wrapperGap * 2.5, -y);

  for (let i = 0; i < row.length; i++) {
    canvasContext.fillText(row[i], startX, startY + (i + 1) * 22); //每行字体y坐标间隔20
  }
  return canvasContext;
};

const Watermark = (props: WaterMarkProps) => {
  const { children, text, startX, startY = 0, wrapGap = defaults.wrapGap, opacity = 0.15, loose = defaults.loose, rotate = defaults.rotate, textAlign = 'center', fontStyle = {} } = props;

  const watermarkCanvas = useRef<HTMLCanvasElement>(null);
  const [update, forceUpdate] = useState(false);

  useEffect(() => {
    const canvasContext = watermarkCanvas.current?.getContext('2d');
    canvasContext && drawText(text, canvasContext, wrapGap, { startX: startX || wrapGap, startY, opacity, fontStyle, rotate, textAlign });
    forceUpdate(!update);
  }, []);

  const bgData = watermarkCanvas.current?.toDataURL();
  const childrenBgData = children.props?.style?.background || '';
  const limitedLoose = loose < 2 ? 2 : loose > 6 ? 6 : loose;

  //
  if (getDataType(children) === 'array') {
    throw new Error('Watermark component should have only one children, but got ' + (children as any)?.length);
  }

  return (
    <>
      {React.cloneElement(children, {
        ...children?.props,
        style: { ...children?.props.style, background: bgData ? `url(${bgData})${childrenBgData ? ', ' + childrenBgData : ''}` : childrenBgData },
      })}
      <canvas ref={watermarkCanvas} style={{ position: 'absolute', zIndex: -999, display: 'none' }} width={wrapGap * limitedLoose}></canvas>
    </>
  );
};

export default Watermark;
