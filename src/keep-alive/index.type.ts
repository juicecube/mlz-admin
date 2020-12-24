export interface KeepAliveProps {
  // cache标志符
  cacheKey: string;
  //
  children: React.ReactElement;
  //
  triggerEvent?: string;
}

export interface AliveCacheType {
  value: React.ReactElement | any;
}

export interface AliveCacheOptionType {
  maximum?: number;
  ttl?: number;
}
