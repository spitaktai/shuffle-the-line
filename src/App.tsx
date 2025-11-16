import { useEffect, useRef, useState } from 'react'
import './App.css'

const MAX_PARTICIPANTS = 10
const SHUFFLE_DURATION_MS = 2500
const SHUFFLE_STEP_MS = 140

const createEmptyNames = () =>
  Array.from({ length: MAX_PARTICIPANTS }, () => '')

const shuffleArray = <T,>(items: T[]) => {
  const collection = [...items]
  for (let i = collection.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[collection[i], collection[j]] = [collection[j], collection[i]]
  }
  return collection
}

const toParticipants = (list: string[]) =>
  list.map((name) => name.trim()).filter(Boolean)

function App() {
  const [names, setNames] = useState<string[]>(() => createEmptyNames())
  const [displayOrder, setDisplayOrder] = useState<string[]>([])
  const [finalOrder, setFinalOrder] = useState<string[]>([])
  const [isShuffling, setIsShuffling] = useState(false)

  const intervalRef = useRef<number>()
  const timeoutRef = useRef<number>()

  const clearTimers = () => {
    if (intervalRef.current !== undefined) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
    if (timeoutRef.current !== undefined) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
  }

  const stopShuffle = () => {
    clearTimers()
    setIsShuffling(false)
  }

  useEffect(() => {
    return () => {
      clearTimers()
    }
  }, [])

  const handleShuffle = () => {
    if (isShuffling) {
      return
    }

    const participants = toParticipants(names)

    if (participants.length < 2) {
      return
    }

    stopShuffle()
    setFinalOrder([])
    setDisplayOrder(shuffleArray(participants))
    setIsShuffling(true)

    intervalRef.current = window.setInterval(() => {
      setDisplayOrder(shuffleArray(participants))
    }, SHUFFLE_STEP_MS)

    timeoutRef.current = window.setTimeout(() => {
      const final = shuffleArray(participants)
      clearTimers()
      setIsShuffling(false)
      setDisplayOrder(final)
      setFinalOrder(final)
    }, SHUFFLE_DURATION_MS)
  }

  const handleNameChange = (index: number, value: string) => {
    setNames((previous) => {
      const next = [...previous]
      next[index] = value
      return next
    })
    stopShuffle()
    setDisplayOrder([])
    setFinalOrder([])
  }

  const handleResetRanking = () => {
    stopShuffle()
    setDisplayOrder([])
    setFinalOrder([])
  }

  const handleResetAll = () => {
    handleResetRanking()
    setNames(() => createEmptyNames())
  }

  const activeParticipants = toParticipants(names)
  const canShuffle = activeParticipants.length >= 2 && !isShuffling
  const canResetRanking = isShuffling || displayOrder.length > 0
  const canResetAll =
    names.some((name) => name.trim().length > 0) || canResetRanking
  const queueStatus = isShuffling
    ? 'Shuffling…'
    : finalOrder.length
      ? 'Locked'
      : 'Waiting'
  const shuffleLabel = isShuffling ? 'Shuffling…' : 'Randomize order'

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">Shuffle the Line</p>
        <h1>Build a fair line in seconds</h1>
        <p>
          Add up to ten names, tap <strong>Randomize</strong>, and let the queue
          order animate into place.
        </p>
      </header>

      <div className="layout">
        <section className="panel">
          <div className="panel-header">
            <h2>Participants</h2>
            <span>{activeParticipants.length}/10 ready</span>
          </div>

          <div className="inputs">
            {names.map((name, index) => (
              <label className="input-row" key={`person-${index}`}>
                <span>Person {index + 1}</span>
                <input
                  type="text"
                  placeholder="Enter a name"
                  value={name}
                  maxLength={32}
                  onChange={(event) => handleNameChange(index, event.target.value)}
                />
              </label>
            ))}
          </div>

          <div className="actions">
            <button
              className="button button--primary"
              type="button"
              onClick={handleShuffle}
              disabled={!canShuffle}
            >
              {shuffleLabel}
            </button>
            <button
              className="button button--secondary"
              type="button"
              onClick={handleResetRanking}
              disabled={!canResetRanking}
            >
              Reset ranking
            </button>
            <button
              className="button button--ghost"
              type="button"
              onClick={handleResetAll}
              disabled={!canResetAll}
            >
              Reset names
            </button>
          </div>
          {activeParticipants.length < 2 && (
            <p className="hint">
              Add at least two names to enable the randomizer.
            </p>
          )}
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>The line</h2>
            <span>{queueStatus}</span>
          </div>

          {displayOrder.length ? (
            <ol className={`ranking ${isShuffling ? 'ranking--shuffling' : ''}`}>
              {displayOrder.map((person, index) => (
                <li key={`${person}-${index}`}>
                  <span className="position">{index + 1}</span>
                  <span className="person-name">{person}</span>
                  {finalOrder[index] === person && !isShuffling && (
                    <span className="status-pill">Final</span>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <p className="placeholder">
              Rankings will appear here after you run the randomizer.
            </p>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
