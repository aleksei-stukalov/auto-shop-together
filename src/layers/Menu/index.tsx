import { GameScene } from '@interfaces'
import { GameState } from '@enums'
import { Show } from '@utils/shower'
import styles from './style.module.css'

interface IProps {
  scene: GameScene | null
  state: GameState
  setState: (state: GameState) => void
}

export default function MainMenu({ scene, state, setState }: IProps) {
  return (
    <>
      <Show when={state === GameState.MAIN_MENU}>
        <div className={styles.container}>
          <h1>Main Menu</h1>
          <button
            onClick={() => {
              setState(GameState.START_MENU)
            }}
          >
            New Shop
          </button>
          <button
            onClick={() => {
              setState(GameState.LOAD_MENU)
            }}
          >
            Load Shop
          </button>
          <button
            onClick={() => {
              setState(GameState.OPTIONS_MENU)
            }}
          >
            Options
          </button>
          <button onClick={() => window.close()}>Exit</button>
        </div>
      </Show>
      <Show when={state === GameState.START_MENU}>
        <div className={styles.container}>
          <h1>Start a New Shop</h1>
          <h2>Shop Name</h2>
          <input name="query" />
          <h2>Owner's Name</h2>
          <input name="query" />
          <button>Open new shop</button>
          <button
            onClick={() => {
              setState(GameState.MAIN_MENU)
            }}
          >
            Back
          </button>
        </div>
      </Show>
    </>
  )
}
