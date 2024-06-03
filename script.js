const sendInput = document.querySelector('#input');
const newElement = document.querySelector('#items');

sendInput.addEventListener('keydown', function (event) {
    const elementText = sendInput.value;

    const newParagraph = document.createElement('div');
    newParagraph.textContent = elementText;

    if (event.key == 'Enter') {
        elementText != '';
        newElement.append(newParagraph);
        sendInput.value = '';
        newParagraph.addEventListener('click', function () {
            newParagraph.classList.toggle('done');
        });
    } 
})


/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
