/**
 * 每一个model的抽象类
 *
 * 定义了一些必须实现的方法
 */

export abstract class Model {
  readonly options?: Record<string | symbol, any>;

  static create: (...args: any[]) => object;

  protected get() {
    return this;
  }

  protected getOptions() {
    return this.options;
  }
}
