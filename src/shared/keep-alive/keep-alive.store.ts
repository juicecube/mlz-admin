export type SnapshotType = Record<string, any>;
export interface IKAContext {
  payload: any;
  dispatch: ($args: SnapshotType) => void;
  launchedAt?: number;
}
export const errorMsgs = {
  invalidArgsInPushment: 'AlivesStore.pushStateIntoCaching参数错误，but got ',
};
export const maxSnapshotLength = 50;

export class AlivesStore {
  constructor() {
    this.launchTime = new Date().valueOf();
  }

  // 启动时间
  public launchTime: number;

  // 快照们
  private snapshots = new Map();

  // 加入序列
  public pushStateIntoSnapshots = ($name: string, $args: SnapshotType) => {
    const name = $name.toString();
    if (!$args || typeof $args !== 'object') {
      throw new Error(errorMsgs.invalidArgsInPushment + $args);
    }
    const tnow = new Date().valueOf();
    this.stackChecker();

    // 如果name是已经存在的，则同前一版本进行合并
    // 如果name是没有注册过的，则推新的进来
    if (this.hasSnapshoted(name)) {
      const prevSnapshot = this.snapshots.get(name);
      this.snapshots.set(name, {
        shootedTime: tnow,
        payload: { ...prevSnapshot.payload, ...$args },
      });
    } else {
      this.snapshots.set(name, {
        shootedTime: tnow,
        payload: $args,
      });
    }
  };

  // 寻找快照中是否存在对应的快照
  protected hasSnapshoted = ($key: string) => this.snapshots.has($key);

  // 当快照数量超过一个数量时进行清除
  private stackChecker = () => this.snapshots.size >= maxSnapshotLength && this.snapshots.clear();

  //
  public getSnapshot = ($key: string) => this.snapshots.get($key);

  //
  protected getSnapshots = () => Array.from(this.snapshots);
}

const cachingStore = new AlivesStore();
export default cachingStore;
