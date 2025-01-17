import { EventBus } from '@game/Main'
import { GameState } from '@enums'

export default class ShopLoader extends Phaser.Scene {
  state: GameState = GameState.GAME_LOADER
  viewportWidth: number = window.innerWidth
  viewportHeight: number = window.innerHeight

  constructor() {
    super('ShopLoader')
  }

  init() {
    // Draw a loading bar
    this.add.rectangle(
      this.viewportWidth / 2,
      this.viewportHeight / 2,
      500,
      3,
      0xffffff,
      0.5
    )
    // Draw a progress bar
    const bar = this.add.rectangle(
      this.viewportWidth / 2 - 250,
      this.viewportHeight / 2,
      0,
      3,
      0xffffff
    )

    this.load.on('progress', (value: number) => {
      bar.width = 5 + 495 * value
    })
  }

  preload() {
    this.load.setPath('assets')

    this.load.image('dev-black', 'tile_floor_dev-black.png')
  }

  create() {
    EventBus.emit('scene:ready', this)

    this.add.text(20, 20, 'Shop Loader')
    this.scene.start('ShopScene')
  }
}
