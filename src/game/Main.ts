import MenuLoader from '@game/scenes/MenuLoader'
import MenuScene from '@game/scenes/MenuScene'
import ShopLoader from '@game/scenes/ShopLoader'
import ShopScene from '@game/scenes/ShopScene'

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: '#484A47',
  scene: [MenuLoader, MenuScene, ShopLoader, ShopScene],
}

export const EventBus = new Phaser.Events.EventEmitter()

export function StartGame(canvas: HTMLCanvasElement) {
  return new Phaser.Game({ ...config, canvas })
}
