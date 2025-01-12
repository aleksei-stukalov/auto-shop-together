import { Scene } from 'phaser'

export class Loader extends Scene {
  constructor() {
    super('Loader Scene')
  }

  create() {
    this.add.text(20, 20, 'Loader')
    this.scene.start('Menu')
  }
}
