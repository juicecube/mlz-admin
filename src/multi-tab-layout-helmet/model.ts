import { ObservedType } from './index.type';

class Dispatcher {
  private injectObject: ObservedType;

  constructor(injectObject) {
    this.injectObject = injectObject;
  }

  static checkValid(waittingInjectObject: ObservedType) {
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

  static create($object: ObservedType) {
    return new Dispatcher($object);
  }
}
export default Dispatcher;
