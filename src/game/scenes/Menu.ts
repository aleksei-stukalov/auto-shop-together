import { GameState } from '@enums'
import { EventBus } from '@game/Main'
import { Scene } from 'phaser'

export class Menu extends Scene {
  name: string = 'MainMenu'

  constructor() {
    super('MainMenu')
  }

  create() {
    this.add.text(20, 20, 'Menu Scene')
    EventBus.emit('scene:ready', GameState.MAIN_MENU, this)
  }
}
