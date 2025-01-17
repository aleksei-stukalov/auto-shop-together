import { GameState } from '@enums'

export default class ShopScene extends Phaser.Scene {
  state: GameState = GameState.GAME_SCENE

  floorTilemap!: Phaser.Tilemaps.Tilemap

  constructor() {
    super('ShopScene')
  }

  create() {
    this.floorTilemap = this.make.tilemap({
      width: 800,
      height: 600,
      tileWidth: 32,
      tileHeight: 32,
    })

    this.floorTilemap.addTilesetImage('dev-black', 'dev-black', 32, 32)
    this.floorTilemap.createBlankLayer('floor', 'dev-black')

    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 25; x++) {
        this.floorTilemap.putTileAt(0, x, y)
      }
    }
  }
}
