import { GameState } from '@enums'
import { Scene } from 'phaser'
import { createContext } from 'react'

interface IContext {
  state: GameState
  setState: (state: GameState) => void
  scene: Scene | null
}
const Context = createContext<IContext | null>(null)
export default Context
