import { ObservedType } from './index.type';

/**
 * 生成满足协议的dispatcher
 */
class DispatcherFactory {
  private injectObject: ObservedType;

  constructor(injectObject) {
    this.injectObject = injectObject;
  }

  static checkValid(waittingInjectObject: ObservedType | undefined) {
    if (!waittingInjectObject) {
      return false;
    }
    let result = false;
    // eslint-disable-next-line no-restricted-syntax
    for (const $key in waittingInjectObject) {
      if ($key === 'listen' && typeof waittingInjectObject[$key] === 'function') {
        result = true;
        break;
      }
    }
    return result;
  }

  static create($object: ObservedType | undefined) {
    return Dispatcher.checkValid($object)
      ? new Dispatcher($object)
      : {
          listen: (p = false) => p,
        };
  }

  public listen = (e) => {
    this.injectObject.listen(e);
  };
}
export default Dispatcher;
