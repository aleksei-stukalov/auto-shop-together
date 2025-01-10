import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { EventBus, StartGame } from '@game/Main'
import Phaser from 'phaser'
import MainMenu from '@components/MainMenu'
import GameCanvas from '@components/GameCanvas'
// import styles from './style.module.css'

export default function App() {
  const [scene, setScene] = useState<Phaser.Scene | null>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const game = useRef<Phaser.Game | null>(null)

  useLayoutEffect(() => {
    // Lets prevent context menu when right clicking in the game
    const handleContextMenu = (e: MouseEvent) => e.preventDefault()
    window.addEventListener('contextmenu', handleContextMenu)

    // When the player clicks outside the game, we want to blur the focus
    const handleFocus = () => (document.activeElement as HTMLElement)?.blur()
    window.addEventListener('click', handleFocus)

    // When the component mounts, start the game. Phaser has it's own state and
    // lifecycle, and we talk between the two using the events system.
    if (canvas.current !== null) game.current = StartGame(canvas.current)

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('click', handleFocus)
    }
  }, [])

  useEffect(() => {
    // When the scene is ready, we can start interacting with it
    EventBus.on('scene:ready', (scene: Phaser.Scene) => setScene(scene))

    return () => {
      EventBus.off('scene:ready')
    }
  }, [scene])

  return (
    <>
      <GameCanvas ref={canvas} />
      <MainMenu />
    </>
  )
}
