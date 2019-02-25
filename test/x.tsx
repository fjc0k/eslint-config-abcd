const Com = () => {}

export default class X {
  mounted() {
    try {
      const x = 1
      console.log(x)
    } catch (e) {

    }
  }

  render() {
    return (
      <div>
        <span />
        <span z='dd' x={true} y={`${1}d`}>
          hello
          <div />
        </span>
        <div
          render={
            (_, _ignored) => <span {...{ x: 1 }} />
          }>
          hello
        </div>
        <Com />
      </div>
    )
  }
}
