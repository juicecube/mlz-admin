/// <reference types="react" />
import React from 'react';

declare namespace KeepAliveTypes {
  export interface KeepAliveProps {
    children: React.ReactElement;
    name: string;
    timeout?: number;
    onLoad?: () => void;
    props: any;
  }
}