import { useContext, useRef } from 'react'
import Context from '@utils/context'
import { GameState } from '@enums'
import styles from './style.module.css'

export default function NewShop() {
  const context = useContext(Context)
  const scene = context?.scene.current
  const setState = context?.setState

  const shopName = useRef<HTMLInputElement>(null)
  const ownerName = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validCharacters = /^[a-zA-Z0-9\s]{0,20}$/
    if (!validCharacters.test(event.target.value)) {
      event.target.value = event.target.value.slice(0, -1)
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (shopName.current === null || ownerName.current === null) return
    scene?.loadShop(shopName.current.value, ownerName.current?.value)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="shop-name">Shop Name</label>
        <input name="shop-name" ref={shopName} onChange={handleChange} />

        <label htmlFor="owner-name">Owner's Name</label>
        <input name="owner-name" ref={ownerName} onChange={handleChange} />

        <button>Open new shop</button>
      </form>
      {/* Back Button */}
      <button onClick={() => setState?.(GameState.MENU_MAIN)}>Back</button>
    </div>
  )
}
