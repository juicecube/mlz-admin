import React from 'react';
import { AliveCacheType, AliveCacheOptionType } from './index.type';

const errorGenerator = ($type: 'type error' | 'maximum', $actual: unknown) => {
  switch ($type) {
    case 'type error':
      return `key should be a string, but got ${typeof $actual}`;
    case 'maximum':
      return `reach the maximum count of ${$actual}`;
    default:
      return `unknown error ocurred`;
  }
};

/**
 * 单条缓存
 */
export class AliveItem {
  //
  readonly value: AliveCacheType;

  //
  readonly key: string;

  //
  readonly ttl: number;

  constructor(key: string, snapshot: AliveCacheType, opt: AliveCacheOptionType) {
    this.value = snapshot || null;
    this.key = key;
    this.ttl = opt.ttl || 5 * 60 * 1000;
  }

  static create(key: string, snapshot: AliveCacheType, opt: AliveCacheOptionType) {
    return new AliveItem(key, snapshot, opt);
  }
}

/**
 * 缓存库
 */
class KeepAlive {
  // 允许缓存的'kv对'上限，默认30
  private limit: number;

  // 缓存存留时间(ms)，默认5min
  private ttl: number;

  // 缓存的快照集合
  private store: AliveItem[];

  constructor(opt: AliveCacheOptionType = {}) {
    const { maximum = 30, ttl = 5 * 60 * 1000 } = opt;
    this.store = [];
    this.limit = maximum;
    this.ttl = ttl;
  }

  public append(key: string, snapshot: AliveCacheType, opt?: Omit<AliveCacheOptionType, 'maximum'>) {
    if (typeof key === 'string') {
      if (this.validate()) {
        const newSnapshot = AliveItem.create(key, snapshot, { ttl: this.ttl, ...opt });
        // 如果已经存在同key的，则覆盖前者
        if (this.get(key)) {
          let target = this.get(key);
          target = newSnapshot;
          // eslint-disable-next-line no-console
          process.env.NODE_ENV === 'development' && console.warn(`[KeepAlive]: 更新了key为${key}的alive缓存快照`);
        } else {
          // 通过create api可以控制单条快照的存活时间
          this.store.push(newSnapshot);
        }
      } else {
        throw new Error(errorGenerator('maximum', this.limit));
      }
    } else throw new Error(errorGenerator('type error', key));
  }

  public remove($key: string) {
    let result = false;
    for (let index = 0; index < this.store.length; index++) {
      if (this.store[index].key === $key) {
        this.store.splice(index, 1);
        result = true;
        break;
      }
    }
    return result;
  }

  public get($key: string) {
    for (let index = 0; index < this.store.length; index++) {
      const item = this.store[index];
      if (item.key === $key) {
        return item;
      }
    }
    return undefined;
  }

  private validate() {
    return this.store.length <= this.limit;
  }

  public clear() {
    this.store = [];
  }
}
export default KeepAlive;
