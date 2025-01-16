import { Scene } from 'phaser'
import { EventBus } from '@game/Main'
import { GameState } from '@enums'

export default class MenuScene extends Scene {
  state: GameState = GameState.MENU_MAIN

  constructor() {
    super('MenuScene')
  }

  create() {
    EventBus.emit('scene:ready', this)

    this.add.text(20, 20, 'Menu Scene')
  }

  loadShop(shopName: string, ownerName: string) {
    this.scene.start('ShopLoader', {
      shopName,
      ownerName,
    })
  }
}
