import { useState } from 'React'

const Counter = () => {
    const [count, setCount] = useState()

    const increment = () => setCount(count => count + 1)
    const decrement = () => setCount(count => count - 1)

    return (
        <div>
            <button onClick={decrement}> - </button>
            <span> {count} </span>
            <button onClick={increment}> + </button>
        </div>
    )
}

