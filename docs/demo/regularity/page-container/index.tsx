import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon, message, Input, Affix, Spin, Typography } from '@mlz/admin';

const PageContainer = (props: { children: React.ReactNode }) => (
  <section className="page-container-wrapper" style={{ padding: '60px 120px 80px 120px' }}>
    {props.children}
  </section>
);

export default PageContainer;
