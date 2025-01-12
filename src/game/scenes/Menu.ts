import { GameState } from '@enums'
import { EventBus } from '@game/Main'
import { Scene } from 'phaser'

export class Menu extends Scene {
  state: GameState = GameState.MAIN_MENU

  constructor() {
    super('Menu')
  }

  create() {
    this.add.text(20, 20, 'Menu Scene')
    EventBus.emit('scene:ready', this)
  }
}
