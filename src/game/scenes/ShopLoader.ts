import { EventBus } from '@game/Main'
import { GameState } from '@enums'

export default class ShopLoader extends Phaser.Scene {
  state: GameState = GameState.GAME_LOADER

  constructor() {
    super('ShopLoader')
  }

  create() {
    EventBus.emit('scene:ready', this)

    this.add.text(20, 20, 'Shop Loader')
    this.scene.start('ShopScene')
  }
}
