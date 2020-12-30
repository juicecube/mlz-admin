import React, { useState, useEffect, useRef } from 'react';
import { createBem } from '../shared/utils';
import { WaterMarkProps } from './index.type';
import './index.less';

const bem = createBem('watermark');
const frozenStyle = {
  display: 'block',
  wordWrap: 'normal',
  transform: 'rotate(20deg)',
} as const;
const defaultStyle = {
  textAlign: 'center',
  fontWeight: 'normal',
  fontColor: '#727071',
} as const;

//
const drawText = (text: string, canvasContext: CanvasRenderingContext2D, wrapperGap: number, dimension: { x: number; y: number }): CanvasRenderingContext2D => {
  //参数说明
  //ctx：canvas的 2d 对象，t：绘制的文字，x,y:文字坐标，w：文字最大宽度
  let textCharArr = text.split('');
  let temp = '';
  let row: string[] = [];
  const { x, y } = dimension;

  for (let i = 0; i < textCharArr.length; i++) {
    if (canvasContext.measureText(temp).width < wrapperGap && canvasContext.measureText(temp + textCharArr[i]).width <= wrapperGap) {
      temp += textCharArr[i];
    } else {
      row.push(temp);
      temp = textCharArr[i];
    }
  }
  row.push(temp);
  canvasContext.font = '12px Georgia';
  canvasContext.globalAlpha = 0.2;
  canvasContext.textAlign = 'center';
  for (let b = 0; b < row.length; b++) {
    console.log(row[b], '啊啊啊');
    canvasContext.fillText(row[b], x, y + (b + 1) * 25); //每行字体y坐标间隔20
  }
  return canvasContext;
};

const styleDecoratings = { position: 'relative', zIndex: 500 };
const Watermark = (props: WaterMarkProps) => {
  const { children, text } = props;

  const watermarkCanvas = useRef<HTMLCanvasElement>(null);
  const [update, forceUpdate] = useState(false);

  useEffect(() => {
    const canvasContext = watermarkCanvas.current?.getContext('2d')!;
    canvasContext && drawText(text, canvasContext, 50, { x: 50, y: 0 });
    forceUpdate(!update);
  }, []);
  return (
    <>
      {React.cloneElement(
        children,
        {
          ...children.props,
          style: { ...styleDecoratings, ...children.props.style, background: `url(${watermarkCanvas.current?.toDataURL()})`, zIndex: styleDecoratings.zIndex - 1 },
        },
        <div className={bem('bg')}>{children}</div>,
      )}
      <canvas ref={watermarkCanvas} style={{ position: 'absolute', zIndex: -999, display: 'none' }} width={100}></canvas>
    </>
  );
};

export default Watermark;
