class AlivesStore {
  constructor() {
    this.snapshots = new Map();
    this.pushStateIntoSnapshots = ($name, ...$args) => {
      const name = $name.toString();
      if (!$args || typeof $args !== 'object') {
        console.error(`AlivesStore.ushStateIntoAlivesDict：参数错误`);
        return;
      }
      const tnow = new Date().valueOf();
      this.stackChecker();
      this.snapshots.set(name, {
        shootedTime: tnow,
        payload: $args.length === 1 ? $args[0] : $args,
      });
    };
    this.ifSnapshoted = ($key) => this.snapshots.has($key);
    this.stackChecker = () => this.snapshots.size >= 100 && this.snapshots.clear();
    this.getSnapshot = ($key) => {
      if ($key) {
        return this.snapshots.get($key);
      } else {
        console.error('必须指定一个keep-alive的name索引');
        return undefined;
      }
    };
    this.launchTime = new Date().valueOf();
  }
}
const aliveStore = new AlivesStore();
export default aliveStore;
//# sourceMappingURL=keep-alive.store.js.map
