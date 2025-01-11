export interface GameScene extends Phaser.Scene {
  name: string
  startGame: () => void
}
