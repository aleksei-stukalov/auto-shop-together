import { GameState } from '@enums'

export default class ShopScene extends Phaser.Scene {
  state: GameState = GameState.GAME_SCENE

  floorTilemap!: Phaser.Tilemaps.Tilemap
  playerCharacter!: Phaser.GameObjects.Image

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

    // adding character
    this.playerCharacter = this.add
      .sprite(400, 300, 'dev-bob')
      .setDepth(1)
      .setFrame(0)
  }

  update(time: number, delta: number): void {
    if (this.input.keyboard) {
      const keyboard = this.input.keyboard
      const onKey = (key: string) => keyboard.addKey(key).isDown

      const movingLeft = onKey('A')
      const movingRight = onKey('D')
      const movingUp = onKey('W')
      const movingDown = onKey('S')

      const touchingLeft = this.playerCharacter.x <= 32
      const touchingRight = this.playerCharacter.x >= 768
      const touchingTop = this.playerCharacter.y <= 32
      const touchingBottom = this.playerCharacter.y >= 568

      // Character movement horizontal
      if (movingLeft && movingRight) this.playerCharacter.setFrame(0)
      else if (movingLeft && !touchingLeft) this.playerCharacter.x -= 2
      else if (movingRight && !touchingRight) this.playerCharacter.x += 2
      // Character movement vertical
      if (movingUp && movingDown) this.playerCharacter.setFrame(0)
      else if (movingUp && !touchingTop) this.playerCharacter.y -= 2
      else if (movingDown && !touchingBottom) this.playerCharacter.y += 2
      // Character facing
      if (movingLeft && movingRight) this.playerCharacter.setFrame(0)
      else if (movingUp) this.playerCharacter.setFrame(2)
      else if (movingLeft) this.playerCharacter.setFrame(3)
      else if (movingRight) this.playerCharacter.setFrame(1)
      else if (movingDown) this.playerCharacter.setFrame(0)
    }
  }
}
