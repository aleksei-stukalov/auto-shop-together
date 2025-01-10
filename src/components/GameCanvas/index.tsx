interface IProps {
  ref: React.RefObject<HTMLCanvasElement | null>
}

export default function GameCanvas({ ref }: IProps) {
  return <canvas ref={ref} id="game" />
}
