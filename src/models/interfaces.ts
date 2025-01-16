import { GameState } from '@enums'

export interface GameScene extends Phaser.Scene {
  state: GameState
  loadShop: (shopName: string, ownerName: string) => void
}
