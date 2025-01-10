import { Scene } from 'phaser'
import { EventBus } from '@game/Main'

export class Menu extends Scene {
  constructor() {
    super('Menu')
  }

  create() {
    this.add.text(20, 20, 'Menu')
    EventBus.emit('scene:ready', this)
  }
}
