export default function fn(): void {
  const x = (): void => {}
  return void(x)
}
