interface IProps {
  canvas: React.RefObject<HTMLCanvasElement | null>
}

export default function Canvas({ canvas }: IProps) {
  return <canvas ref={canvas} id="game" />
}
