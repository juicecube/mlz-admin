export enum ColorEnums {
  'default' = 'rgba(0, 0, 0, 0.65)',
  // processing的样式优化了一下，只是用foreground表达色彩，而非background
  // 因为vg很突兀，可随设计师修改。
  'processing' = 'geekblue',
  'error' = '#f5222d',
  'warning' = '#fa8c16',
  'success' = '#52c41a',
  'planned' = '#faad14',
  'adviced' = '#722ed1',
  'unknown' = 'default'
}