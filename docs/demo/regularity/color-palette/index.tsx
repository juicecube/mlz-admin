import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, message } from '@mlz/admin';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.less';

const { Title } = Typography;
interface IPaletteList {
  name: string;
  functionalName?: string;
  code: string;
  isPrimary?: boolean;
  fontColorRevert?: boolean[];
  originRGB?: string;
}
const ColorPalette = (props: { title?: string; colorList: IPaletteList[] }) => (
  <div className="color-palette-wrapper">
    <Title level={5} className="palette-name">
      {props.title}
    </Title>
    <div className="color-container">
      {props.colorList.map((color) => {
        return (
          <CopyToClipboard
            text={color.code[0].startsWith('#') ? color.code : `rgba(${color.originRGB}, 0.2)`}
            onCopy={() => message.success(`复制成功`)}
            key={`${color.name}${color.code}${color.functionalName}`}>
            <div
              className={`color ${color.fontColorRevert && 'colorRevert'}`}
              style={{ backgroundColor: color.code[0] === '#' ? color.code : `rgba(${color.originRGB}, ${Number(color.code.split('%')[0]) / 100})`, paddingTop: color.isPrimary ? 64 : 16 }}>
              <span className="color-name">{color.name}</span>
              <span className="code">{color.code}</span>
              <span className="funcional-name">{color.functionalName}</span>
            </div>
          </CopyToClipboard>
        );
      })}
    </div>
  </div>
);

export default ColorPalette;
