import { 
  useState,
  useEffect 
} from 'react';

import ReactUseEffectsArray from './ReactUseEffectsArray';

const AppReactApi = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // создаем стейт для отображения "загрузка" на экране когда идет обновление страницы и ожидания ответа от бэкенда
  const [isError, setIsError] = useState(false); // как себя будет вести интерфейс если у нас ошибка в бекенде

  console.log('components rendered')

  useEffect(() => { // useEffect() нужен для того чтобы выполнить запрос один раз, без него у нас постоянно будет вызываться функция fetch
    setIsLoading(true) // идет загрузка
    setIsError(false) // ошибки нет

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) { // делаем проверку респонса через ключ ок
          console.log('с запросом что-то не так', response);
          throw new Error('ошибка в запросе') // благодаря throw new Error у нас выполнится код ниже (catch error)
        }

        return response.json()
      })
      .then(data => {
        console.log(data);
        setUsers([data]);
        setIsLoading(false); // конец загрузки
                        
    })
       .catch(error => { // данный кетч нужен для ошибки при запросе
        console.log(error)
        setIsLoading(false) // сообщение об ошибки не выводим на экран т.к уже получили сообщее об ошибке
        setIsError(true) // ошибки есть
      });
  }, []); // пусктой массив в useEffect говорит ему чтобы он выполнился один раз внутри компонента

  return (
    <>
      { isError ? 'ошибка запроса' : '' }
      { isLoading ? 'Загрузка' : '' }
      { users ? JSON.stringify(users) : ''}

      <p>-------------------NEXT LESSON------------------</p>

      <ReactUseEffectsArray />
    </>
  )
}

export default AppReactApi
