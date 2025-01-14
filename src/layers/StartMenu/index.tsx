import NewShop from '@menus/NewShop'
import { GameState } from '@enums'
import { Show } from '@utils/shower'
import styles from './style.module.css'

import { useContext } from 'react'
import Context from '@utils/context'

export default function MainMenu() {
  const context = useContext(Context)
  const state = context?.state
  const setState = context?.setState

  const handleNewShop = () => setState?.(GameState.START_MENU)
  const handleLoadShop = () => console.log('Load Game')
  const handleOptions = () => console.log('Options')
  const handleQuit = () => window.close()

  return (
    <>
      <Show when={state === GameState.MAIN_MENU}>
        <div className={styles.container}>
          <button onClick={handleNewShop}>New Shop</button>
          <button onClick={handleLoadShop}>Load Shop</button>
          <button onClick={handleOptions}>Options</button>
          <button onClick={handleQuit}>Quit</button>
        </div>
      </Show>

      <NewShop />
    </>
  )
}
