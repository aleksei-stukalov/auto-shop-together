import { Scene } from 'phaser'
import { EventBus } from '@game/Main'

export default class MenuLoader extends Scene {
  constructor() {
    super('MenuLoader')
  }

  create() {
    EventBus.emit('scene:ready', this)

    this.add.text(20, 20, 'Menu Loader')
    this.scene.start('MenuScene')
  }
}
