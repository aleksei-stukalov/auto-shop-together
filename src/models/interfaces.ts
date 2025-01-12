import { GameState } from "@enums"

export interface GameScene extends Phaser.Scene {
  state: GameState
  startGame: () => void
}
