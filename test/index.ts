export type x = number

export interface YY {
  x: number,
  y: string,
  xx?: boolean,
}

export default function getType (value: any): string {
  return Object.prototype.toString.call(value)
}
