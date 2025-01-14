import { useContext } from 'react'
import Context from '@utils/context'
import styles from './style.module.css'
import { GameState } from '@enums'

export default function NewShop() {
  const context = useContext(Context)
  const state = context?.state
  const setState = context?.setState

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event)
  }
  const handleAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event)
  }

  if (state !== GameState.START_MENU) return null

  return (
    <div className={styles.container}>
      <form onSubmit={handleAction} onChange={handleChange}>
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
