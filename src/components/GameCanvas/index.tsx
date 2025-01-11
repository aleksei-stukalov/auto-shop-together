interface IProps {
  canvas: React.RefObject<HTMLCanvasElement | null>
}

export default function GameCanvas({ canvas }: IProps) {
  return <canvas ref={canvas} id="game" />
}
