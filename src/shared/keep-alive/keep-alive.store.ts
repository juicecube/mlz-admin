export type SnapshotType = Record<string, any>;
export interface IKAContext {
  payload: any;
  dispatch: ($name: string, $args: any) => void;
  launchedAt?: number;
}
class AlivesStore {
  constructor() {
    this.launchTime = new Date().valueOf();
  }

  // 启动时间
  public launchTime: number;

  // 快照们
  private snapshots = new Map();

  // 加入序列
  public pushStateIntoSnapshots = ($name: string, ...$args: SnapshotType[]) => {
    const name = $name.toString();
    if (!$args || typeof $args !== 'object') {
      console.error(`AlivesStore.ushStateIntoAlivesDict：参数错误`);
      return;
    }
    const tnow = new Date().valueOf();
    this.stackChecker();
    // TODO 暂时不支持历史回溯功能
    this.snapshots.set(name, {
      shootedTime: tnow,
      payload: $args.length === 1 ? $args[0] : $args,
    });
  };

  // 寻找快照中是否存在对应的快照
  protected ifSnapshoted = ($key: string) => this.snapshots.has($key);

  // 当快照数量超过一个数量时进行清除
  private stackChecker = () => this.snapshots.size >= 100 && this.snapshots.clear();

  //
  public getSnapshot = ($key: string) => {
    if ($key) {
      return this.snapshots.get($key);
    } else {
      throw new Error('必须指定一个keep-alive的name索引');
    }
  };
}

const cachingStore = new AlivesStore();
export default cachingStore;
