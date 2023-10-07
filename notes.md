## Fetch()

### Пример `fetch()` в `useEffect()` с `async/await`

```js
useEffect(() => {
    async function fetchData () {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5');

            //В этой части кода мы проверяем, является ли статус HTTP-ответа (поле ok в объекте response) успешным.
            // Это полезно, потому что в случае неуспешного HTTP-ответа, fetch() все равно завершит выполнение 
            // успешно (в смысле JavaScript-промиса), и вам нужно явно обработать эту ошибку!
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            //используется для преобразования тела HTTP-ответа в JavaScript-объект
            //метод работает напрямую с данными, полученными из сервера, 
            //и выполняет внутри себя все необходимые операции по разбору JSON-строки и созданию соответствующего объекта
            const result = await response.json();
            console.log('res', result);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    fetchData();
}, []);

```

### Пример `fetch()` в `useEffect()` с `then()`

```jsx
useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log('res', result);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}, []); // Пустой массив зависимостей означает
```

### Пример создания `Promise` в `useEffect()`

```jsx
useEffect(() => {
    function makeHttpRequest () {
        return new Promise((resolve, reject) => {
            fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject(new Error('Network response was not ok'));
                    }
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    makeHttpRequest()
        .then(data => {
            console.log('Received data:', data);
        })
        .catch(error => {
            console.error('Request failed:', error);
        });
}, [])
```