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
    
    return (
      <div>
        {count}
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count++
            </button>
        </div>
      </div>
    )
  }
  
  export default ReactUseEffectsArray
  