import { GameScene } from '@interfaces'
import { GameState } from '@enums'
import { Show } from '@utils/shower'
import styles from './style.module.css'

interface IProps {
  scene: GameScene | null
  state: GameState
}

export default function MainMenu({ scene, state }: IProps) {
  return (
    <Show when={state === GameState.MAIN_MENU}>
      <div className={styles.container}>
        <button onClick={() => scene!.startGame()}>New Shop</button>
        <button>Load Shop</button>
        <button>Options</button>
        <button onClick={() => window.close()}>Exit</button>
      </div>
    </Show>
  )
}
