import { 
    useState,
    useEffect 
  } from 'react';
  
  const ReactUseEffectsArray = () => {
    const [count, setCount] = useState(0);

    console.log('components rendered')

    useEffect(() => {
        console.log('вызов useEffects')
        localStorage.setItem('count', count);
    }, [count]); // добавив в массив count мы говорим чтобы localStorage засинхронизировался с помощью useEffect

    const handleButtonClick = () => {
        setCount(count + 1)
        localStorage.setItem('count', count);
    }
    
    return (
      <div>
        {count}

        <p>---------Если нужно синхронизовать------------- </p>

        <div>
            <button onClick={() => setCount(count + 1)}>
                Count++
            </button>
        </div>

        <p>---------Если нужно чтобы после нажатия сразу изменялись действия------------- </p>

        <div>
            <button onClick={handleButtonClick}>
                Count++
            </button>
        </div>
      </div>
    )
  }
  
  export default ReactUseEffectsArray
  