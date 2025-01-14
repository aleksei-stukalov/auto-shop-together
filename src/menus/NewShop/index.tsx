import { useContext } from 'react'
import Context from '@utils/context'
import styles from './style.module.css'
import { GameState } from '@enums'

export default function NewShop() {
  const context = useContext(Context)
  const state = context?.state
  const setState = context?.setState

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: logic to prevent invalid symbols insertion
    // TODO: logic to prevent invalid length
    console.log(event)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // TODO: logic to check the validity of the shop name and owner name
    // TODO: logic to store the shop name and owner name in the phaser game
    // TODO: logic to start the next scene
    console.log(event)
  }

  if (state !== GameState.START_MENU) return null

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="shop-name">
          Shop Name
          <input name="shop-name" />
        </label>
        <label htmlFor="owner-name">
          Owner's Name
          <input name="owner-name" />
        </label>
        <button>Open new shop</button>
      </form>
      <button onClick={() => setState?.(GameState.MAIN_MENU)}>Back</button>
    </div>
  )
}
