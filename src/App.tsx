import { useLayoutEffect, useRef, useState } from 'react'
import { EventBus, StartGame } from '@game/Main'
import StartMenu from '@layers/StartMenu'
import Canvas from '@layers/Canvas'
import Context from '@utils/context'
import { GameState } from '@enums'
import { GameScene } from '@interfaces'

export default function App() {
  const [state, setState] = useState<GameState>(GameState.LOADING)
  const game = useRef<Phaser.Game | null>(null)
  const scene = useRef<GameScene | null>(null)
  const canvas = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    // Lets prevent context menu when right clicking in the game
    const handleContextMenu = (e: MouseEvent) => e.preventDefault()
    window.addEventListener('contextmenu', handleContextMenu)

    // When the player clicks outside the game, we want to blur the focus
    // const handleFocus = () => (document.activeElement as HTMLElement)?.blur()
    // window.addEventListener('click', handleFocus)

    // When the component mounts, start the game. Phaser has it's own state and
    // lifecycle, and we talk between the two using the events system.
    if (canvas.current !== null) game.current = StartGame(canvas.current)

    // Game Engine will emit an event when the scene is ready, we need to react
    // to that event and update the state of the game, show menus, etc.
    EventBus.on('scene:ready', (newScene: GameScene) => {
      setState(newScene.state)
      scene.current = newScene
    })

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu)
      // window.removeEventListener('click', handleFocus)
      EventBus.off('scene:ready')
    }
  }, [])

  return (
    <>
      <Canvas canvas={canvas} />
      <Context.Provider value={{ state, setState, scene: scene.current }}>
        <StartMenu />
      </Context.Provider>
    </>
  )
}
