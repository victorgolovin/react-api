import { 
  useState,
  useEffect 
} from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  console.log('components rendered')

  useEffect(() => { // useEffect() нужен для того чтобы выполнить запрос один раз, без него у нас постоянно будет вызываться функция fetch
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // setUsers(data)
    });
  
    // .catch(error => console.log(error));
  });

  return (
    <>
      { JSON.stringify(users) }
    </>
  )
}

export default App
