class AlivesStore {

  constructor() {
    this.launchTime = new Date().valueOf();
  }

  // 启动时间
  public launchTime: number;
  // 快照们
  private snapshots = new Map()

  // 加入序列
  public pushStateIntoAlivesDict = (...$args: Record<string, any>[]) => {
    const args = Array.from($args);
    const tnow = new Date().valueOf();
    Object.entries(args).forEach(obj => {
      const [key, value] = obj;
      if (!this.ifSnapshoted(key)) {
        // 将key的类型转为symbol，保证同名快照可追溯
        // this.snapshots[] = value;
      }
    })
  };

  // 寻找dicts中是否存在对应的快照
  protected ifSnapshoted = ($key: string) => this.snapshots.has($key)

  // 当alivesDict数量超过一个数量时进行清除
  private cleanAlivesDict = () => {
    if(this.snapshots.size >= 100){
      this.snapshots.clear();
    }
  }

}

const aliveStore = new AlivesStore();
export default aliveStore;