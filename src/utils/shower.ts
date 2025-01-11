interface IProps {
  when: boolean
  children?: React.ReactNode
}

export const Show = ({ when, children }: IProps) => {
  return when ? children : null
}
