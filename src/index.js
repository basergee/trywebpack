document.write('Hello');

/* Выведем на страницу элементы, полученные от json-server.

TODO: вывести данные с других эндпоинтов и красиво оформить. Например добавить кнопки для отправки запросов.
*/

let url = 'http://localhost:3000/posts';

fetch(url)
.then( function(response) {
    response.json().then(function(data) {
        console.log(data);
        let d = document.getElementsByClassName('container')[0];

        console.log(d);

        let html = '<div class="post">';
        html += '<p>post id: ' + data[0].id + '</p>';
        html += '<p>post title: ' + data[0].title + '</p>';
        html += '<p>post author: ' + data[0].author + '</p>';
        html += '</div>';
        d.innerHTML += html;
    });
})
.catch(function() {
    alert('error');
});
