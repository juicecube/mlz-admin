import React, { useState, useEffect, useRef } from 'react';
import { WaterMarkProps } from './index.type';
import { getDataType } from 'mytils';
import { drawText } from './canvas';
import './index.less';

export const defaults = {
  startX: 1,
  startY: 0,
  rotate: 30,
  wrapGap: 80,
  loose: 2.5,
  opacity: 0.15,
  fontSize: 12,
  fontFamily: 'Georgia',
};

export const errorThrower = (count: number) => `Watermark should have only one children, but got ${count}`;
const Watermark = (props: WaterMarkProps) => {
  const {
    children,
    text,
    backgroundColor = 'transparent',
    startX,
    startY = 0,
    wrapGap = defaults.wrapGap,
    opacity = defaults.opacity,
    loose = defaults.loose,
    rotate = defaults.rotate,
    textAlign = 'center',
    fontStyle = {},
  } = props;

  const watermarkCanvas = useRef<HTMLCanvasElement>(null);
  const [update, forceUpdate] = useState(false);

  useEffect(() => {
    const canvasContext = watermarkCanvas.current?.getContext('2d');
    canvasContext && drawText(text, canvasContext, wrapGap, { startX: startX ?? wrapGap, startY, opacity, fontStyle, rotate, textAlign });
    forceUpdate(!update);
  }, []);

  const bgData = watermarkCanvas.current?.toDataURL();
  const childrenBgData = children.props?.style?.background || children.props?.style?.backgroundColor || '';
  const limitedLoose = loose < 2 ? 2 : loose > 6 ? 6 : loose;

  //
  if (getDataType(children) === 'array') {
    throw errorThrower((children as any)?.length);
  }

  return (
    <>
      {React.cloneElement(children, {
        ...children?.props,
        style: { ...children?.props.style, background: `${backgroundColor} ${bgData ? `url(${bgData})${childrenBgData ? `, ${childrenBgData}` : ''}` : childrenBgData}` },
      })}
      <canvas ref={watermarkCanvas} style={{ position: 'absolute', zIndex: -999, display: 'none' }} width={wrapGap * limitedLoose} />
    </>
  );
};

export default Watermark;
