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
        
        for (let i = 0; i < data.length; i++) {

            let html = '<div class="post">';
            html += '<p>post id: ' + data[i].id + '</p>';
            html += '<p>post title: ' + data[i].title + '</p>';
            html += '<p>post author: ' + data[i].author + '</p>';
            html += '</div>';
            html += '<hr>';
            d.innerHTML += html;
        }
    });
})
.catch(function() {
    alert('error');
});
