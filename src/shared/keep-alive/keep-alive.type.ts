// / <reference types="react" />
import React from 'react';

export interface KeepAliveProps {
  children: React.ReactElement;
  name: string;
  timeout?: number;
  onLoad?: () => void;
  triggerEvent?: 'onChange' | 'onSubmit';
}
