import { Scene } from 'phaser'

export class Loader extends Scene {
  constructor() {
    super('Loader')
  }

  create() {
    this.add.text(20, 20, 'Loader')
    setTimeout(() => this.scene.start('Menu'), 1000)
  }
}
