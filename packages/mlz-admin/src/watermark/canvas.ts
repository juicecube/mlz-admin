import { defaults } from '.';
import { DrawerParams } from './index.type';

export const drawText = (text: string, canvasContext: CanvasRenderingContext2D, wrapperGap: number, dimension: DrawerParams): CanvasRenderingContext2D => {
  const { fontSize = defaults.fontSize, fontFamily = defaults.fontFamily } = dimension.fontStyle || {};
  // 参数说明
  // ctx：canvas的 2d 对象，t：绘制的文字，x,y:文字坐标，w：文字最大宽度
  const textCharArr = text.split('');
  let temp = '';
  const row: string[] = [];
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
    canvasContext.fillText(row[i], startX, startY + (i + 1) * 22); // 每行字体y坐标间隔20
  }
  return canvasContext;
};
