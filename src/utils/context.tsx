import { createContext } from 'react'
import { GameState } from '@enums'
import { GameScene } from '@interfaces'

interface IContext {
  scene: React.RefObject<GameScene | null>
  state: GameState
  setState: React.Dispatch<React.SetStateAction<GameState>>
}
const Context = createContext<IContext | null>(null)
export default Context
