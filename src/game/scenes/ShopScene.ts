import { GameState } from '@enums'

export default class ShopScene extends Phaser.Scene {
  state: GameState = GameState.GAME_SCENE

  constructor() {
    super('ShopScene')
  }

  create() {
    this.add.text(20, 20, 'Shop Scene')
  }
}
