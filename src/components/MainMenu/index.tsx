import { Show } from '@utils/shower'
import { GameScene } from '@interfaces'
import styles from './style.module.css'

interface IProps {
  scene: GameScene | null
  active: boolean
}

export default function MainMenu({ scene, active }: IProps) {
  return (
    <Show when={active}>
      <div className={styles.container}>
        <button onClick={() => scene!.startGame()}>New Shop</button>
        <button>Load Shop</button>
        <button>Options</button>
        <button onClick={() => window.close()}>Exit</button>
      </div>
    </Show>
  )
}
