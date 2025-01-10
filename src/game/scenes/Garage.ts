import { Scene } from 'phaser'

export class Garage extends Scene {
  constructor() {
    super('Garage')
  }

  create() {
    this.add.text(20, 20, 'Garage')
  }
}
