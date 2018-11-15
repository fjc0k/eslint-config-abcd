import './eff'
import './x.css'
import { join, relative, resolve } from 'path'
import fn from './fn'

console.log(relative)

export type x = number

export interface YY {
  x: number,
  y: string,
  xx?: boolean,
}

export function getType(value: any): string {
  return Object.prototype.toString.call(value)
}

export class MyClass {
  public static x = 1

  private yy = 2

  public foo() {
    //...
  }

  public bar() {
    //...
  }
}

export type DisposerItemName = string | number

export type Dispose = () => void

/**
 * 处置器。
 */
export default class Disposer {
  /**
   * 待处置项目存放容器。
   *
   * @private
   */
  private jar: {
    [name: string]: Dispose[],
  } = Object.create(null)

  /**
   * 将待处置项目加入容器。
   *
   * @param name 待处置项目名称
   * @param dispose 处置行为
   */
  public add(name: DisposerItemName, dispose: Dispose | Dispose[]): void {
    dispose = Array.isArray(dispose) ? dispose : [dispose]
    this.jar[name] = [
      ...(this.jar[name] || []),
      ...dispose,
    ]
  }

  /**
   * 处置项目。
   *
   * @param name 欲处置项目名称
   */
  public dispose(name: DisposerItemName): void {
    (this.jar[name] || /* istanbul ignore next */ []).forEach(dispose => dispose())
    delete this.jar[name]
  }

  /**
   * 处置所有未处置项目。
   */
  public disposeAll<T>(): void {
    for (const key in this.jar) {
      this.dispose(key)
    }
  }
}

/**
 * 遍历对象的可枚举属性。若回调函数返回 false，遍历会提前退出。
 *
 * @param obj 要遍历的对象
 * @param callback 回调函数
 */
export function forOwn<
  T extends { [key: string]: any },
  K extends Extract<keyof T, string>
>(
  obj: T,
  callback: (value: T[K], key: K, obj: T) => any
): void {
  for (const key in obj) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (callback(obj[key], key as K, obj) === false) {
        break
      }
    }
  }
}
export const isInNode2 = (
  typeof process !== 'undefined'
    ? process.versions != null
    : process!.versions.node != null
)
export const isInNode = (
  typeof process !== 'undefined'
    && process.versions != null
    && process.versions.node != null
)
const obj = {
  x: 1,
  y: { z: 1, fn: () => {} },
  n: 0.2,
}

obj
  .y
  .fn()

const x: number = 1
switch (x) {
  case 1:
    console.log(1)
    break
  case 2:
  default:
    console.log(2)
}
