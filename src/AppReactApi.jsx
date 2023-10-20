import { 
  useState,
  useEffect 
} from 'react';

import ReactUseEffectsArray from './ReactUseEffectsArray';

const AppReactApi = () => {
  const [users, setUsers] = useState([]);

  console.log('components rendered')

  useEffect(() => { // useEffect() нужен для того чтобы выполнить запрос один раз, без него у нас постоянно будет вызываться функция fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data)
    });
    // .catch(error => console.log(error));
  }, []); // пусктой массив в useEffect говорит ему чтобы он выполнился один раз внутри компонента

  return (
    <>
      { JSON.stringify(users) }

      <p>-------------------NEXT LESSON------------------</p>

      <ReactUseEffectsArray />
    </>
  )
}

export default AppReactApi
