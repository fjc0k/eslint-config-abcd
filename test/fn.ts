export default function fn(): void {
  const x = (): void => {}
  console.log(x)
  const xx = [].map<number>(() => {
    return 1
  })
  return void xx
}
