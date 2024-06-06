const sendInput = document.querySelector('#input');
const conteinerElement = document.querySelector('#items');

sendInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {

        const elementText = sendInput.value;

        const newParagraph = document.createElement('div');
        newParagraph.textContent = elementText;
        
        if (elementText != '') {
            conteinerElement.append(newParagraph);
        }
        newParagraph.addEventListener('click', function () {
            newParagraph.classList.toggle('done');
        })
        
        sendInput.value = '';
    } 
})

/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
