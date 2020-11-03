import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon, message, Input, Affix, Spin, Typography } from '@mlz/admin';
import './index.less';

const ImageViewer = (props: { src: string; style: any }) => (
  <div className="image-viewer-wrapper" style={{ backgroundImage: `url(${props.src})`, minHeight: props.style?.height + 'px', minWidth: props.style?.width + 'px', ...props.style }} />
);

export default ImageViewer;
