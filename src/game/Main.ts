import { Loader } from '@game/scenes/Loader'
import { Menu } from '@game/scenes/Menu'
import { Garage } from '@game/scenes/Garage'

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: '#484A47',
  scene: [Loader, Menu, Garage],
}

export const EventBus = new Phaser.Events.EventEmitter()

export function StartGame(canvas: HTMLCanvasElement) {
  return new Phaser.Game({ ...config, canvas })
}
